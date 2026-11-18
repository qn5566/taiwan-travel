#!/usr/bin/env python3
"""Import PM Markdown into draft report JSON.

Install scripts/requirements-editorial-reports.txt first.

python3 scripts/build_editorial_reports.py --output ../ActivityEvent/content
python3 scripts/build_editorial_reports.py --output ../ActivityEvent/content --translate

Translation uses Google's public translation endpoint; cached results are reusable.
No credentials, paid API, publication, or changes to other content files are needed.
"""
import argparse
import concurrent.futures
import copy
import hashlib
import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

from markdown_it import MarkdownIt

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / '台灣吃喝玩樂採訪報導範例資料'
LANGUAGES = {'zh': 'zh-TW', 'ja': 'ja', 'ko': 'ko', 'es': 'es', 'th': 'th',
             'vi': 'vi', 'ms': 'ms', 'fil': 'tl', 'hi': 'hi', 'id': 'id', 'de': 'de'}
MARKDOWN = MarkdownIt('commonmark').enable('table')


def write_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    temp = path.with_suffix('.tmp')
    temp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    temp.replace(path)


def tree(tokens):
    """Allowlisted structured content; raw HTML is retained as literal text."""
    root = []
    stack = [root]
    for token in tokens:
        if token.type == 'inline':
            stack[-1].extend(tree(token.children or []))
        elif token.nesting == 1:
            item = {'tag': token.tag, 'children': []}
            if token.type == 'link_open':
                item['href'] = token.attrGet('href') or ''
            if token.tag == 'ol' and token.attrGet('start'):
                item['start'] = int(token.attrGet('start'))
            stack[-1].append(item)
            stack.append(item['children'])
        elif token.nesting == -1:
            stack.pop()
        elif token.type in ('softbreak', 'hardbreak'):
            stack[-1].append({'tag': 'br', 'children': []})
        elif token.type == 'hr':
            stack[-1].append({'tag': 'hr', 'children': []})
        elif token.content:
            stack[-1].append({'text': token.content})
    return root


def plain(nodes):
    result = ''
    for item in nodes:
        if 'text' in item:
            result += item['text']
        else:
            result += plain(item.get('children', []))
            if item['tag'] in ('p', 'h3', 'h4', 'li', 'tr', 'blockquote', 'br', 'hr'):
                result += '\n'
            elif item['tag'] in ('th', 'td'):
                result += ' | '
    return result


def parse_source(path):
    raw = path.read_text(encoding='utf-8')
    title = re.search(r'^# (.+)$', raw, re.M).group(1)
    slug = re.search(r'\*\*Slug:\*\* `([^`]+)`', raw).group(1).split('/')[-1]
    audience = re.search(r'\*\*Audience:\*\* (.+)', raw).group(1).strip()
    minutes = int(re.search(r'\*\*Reading time:\*\* (\d+)', raw).group(1))
    status_note = re.search(r'\*\*Status:\*\* (.+)', raw).group(1).strip()
    seo = {}
    for key in ('Title', 'Description', 'Keywords'):
        seo[key.lower()] = re.search(r'- \*\*' + key + r':\*\* (.+)', raw).group(1).strip()
    body_start = re.search(r'^## (?!SEO\b)', raw, re.M).start()
    body = raw[body_start:]
    # Keep the original attribution as provenance and an English reader disclosure.
    note_match = re.search(r'^>.*豆包.*$', body, re.M)
    attribution = note_match.group(0) if note_match else ''
    if note_match:
        body = body[:note_match.start()] + '> Some content was generated with Doubao AI.\n'
    chunks = re.split(r'^## (.+)\n', body, flags=re.M)
    sections = []
    for i in range(1, len(chunks), 2):
        blocks = tree(MARKDOWN.parse(chunks[i + 1]))
        sections.append({'heading': chunks[i].strip(), 'blocks': blocks, 'content': plain(blocks).strip()})
    return {
        'id': 'report_' + slug.replace('-', '_'), 'slug': slug,
        'title': title, 'summary': seo['description'], 'language': 'en',
        'status': 'draft', 'published': False, 'contentType': 'travel-guide',
        'isSample': True, 'reviewStatus': 'needs-fact-check',
        'audience': audience, 'readingTimeMinutes': minutes, 'editorialNote': status_note,
        'seo': seo, 'sections': sections, 'photos': [], 'nearby': [],
        'source': {'file': path.name, 'language': 'en',
                   'sha256': hashlib.sha256(raw.encode()).hexdigest(),
                   'originalStatus': 'draft', 'attribution': attribution},
        'translation': {'status': 'source', 'sourceLanguage': 'en'},
    }


def text_slots(reports):
    """Only editorial text is translated; IDs, URLs and provenance never change."""
    def nodes(items):
        for item in items:
            if 'text' in item and item['text'].strip():
                yield item, 'text'
            yield from nodes(item.get('children', []))
    for report in reports:
        for key in ('title', 'summary', 'audience', 'editorialNote'):
            yield report, key
        for key in ('title', 'description', 'keywords'):
            yield report['seo'], key
        for section in report['sections']:
            yield section, 'heading'
            yield from nodes(section['blocks'])


def batches(texts, limit=3000):
    batch, size = [], 0
    for text in texts:
        if batch and size + len(text) > limit:
            yield batch
            batch, size = [], 0
        batch.append(text)
        size += len(text) + 25
    if batch:
        yield batch


def translate_batch(texts, target, source_language='en'):
    # Numbered separators survive translation and let us verify every item is present.
    payload = ''.join(f'\nZXQ{i:04d}QXZ\n{text}\n' for i, text in enumerate(texts))
    query = urllib.parse.urlencode({'client': 'gtx', 'sl': source_language, 'tl': target, 'dt': 't', 'q': payload})
    request = urllib.request.Request('https://translate.googleapis.com/translate_a/single?' + query,
                                     headers={'User-Agent': 'Mozilla/5.0'})
    error = None
    for attempt in range(5):
        try:
            with urllib.request.urlopen(request, timeout=45) as response:
                data = json.load(response)
            output = ''.join(part[0] for part in data[0] if part[0])
            parts = re.split(r'ZXQ\s*(\d{4})\s*QXZ', output, flags=re.I)
            if len(parts) != len(texts) * 2 + 1:
                raise ValueError('Translation separator count mismatch')
            result = {}
            for i, source in enumerate(texts):
                if int(parts[i * 2 + 1]) != i or not parts[i * 2 + 2].strip():
                    raise ValueError('Missing or reordered translation')
                result[source] = parts[i * 2 + 2].strip()
            return result
        except Exception as exc:
            error = exc
            time.sleep(min(2 ** attempt, 12))
    if len(texts) > 1:
        middle = len(texts) // 2
        return {**translate_batch(texts[:middle], target, source_language), **translate_batch(texts[middle:], target, source_language)}
    raise RuntimeError(f'Translation failed for {target}: {error}')


def generate_language(language, target, reports, output):
    cache_path = output / '_translations' / 'editorial_reports' / f'{language}.json'
    cache = json.loads(cache_path.read_text()) if cache_path.exists() else {}
    unique = list(dict.fromkeys(owner[key] for owner, key in text_slots(reports)))
    pending = [text for text in unique if not cache.get(text)]
    groups = list(batches(pending))
    print(f'{language}: {len(pending)} text fragments, {len(groups)} batches', flush=True)
    for index, batch in enumerate(groups):
        cache.update(translate_batch(batch, target))
        write_json(cache_path, cache)
        if (index + 1) % 10 == 0:
            print(f'{language}: {index + 1}/{len(groups)} batches', flush=True)
    converter = None
    replacements = {}
    glossary = {}
    if language == 'zh':
        from opencc import OpenCC
        converter = OpenCC('s2tw').convert
        glossary = json.loads((ROOT / 'scripts/editorial-reports-zh-glossary.json').read_text())
        for source, preferred in glossary.items():
            if source in cache:
                existing = converter(cache[source])
                if len(existing) >= 3 and existing != preferred:
                    replacements[existing] = preferred
        replacements.update({'大米埕': '大稻埕', '下海城隍廟': '霞海城隍廟', '米線糕': '米苔目'})
    translated = copy.deepcopy(reports)
    for owner, key in text_slots(translated):
        original = owner[key]
        value = cache[original]
        if converter:
            value = converter(value)
            for old in sorted(replacements, key=len, reverse=True):
                value = value.replace(old, replacements[old])
            value = glossary.get(original.strip(), value)
        # Inline emphasis/link boundaries need their source whitespace preserved.
        prefix = re.match(r'^\s*', original).group(0)
        suffix = re.search(r'\s*$', original).group(0)
        owner[key] = prefix + value.strip() + suffix
    for report in translated:
        report['language'] = language
        report['translation'] = {'status': 'machine-translated-needs-review',
                                 'sourceLanguage': 'en', 'provider': 'Google Translate',
                                 'sourceSha256': report['source']['sha256']}
        for section in report['sections']:
            section['content'] = plain(section['blocks']).strip()
    write_json(output / language / 'editorial_reports.json', translated)
    print(f'{language}: wrote {len(translated)} reports', flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--translate', action='store_true')
    parser.add_argument('--published', action='store_true', help='Explicitly publish imported sample reports')
    parser.add_argument('--languages', nargs='+', choices=LANGUAGES, default=list(LANGUAGES))
    args = parser.parse_args()
    reports = [parse_source(path) for path in sorted(SOURCE.glob('*.md'))]
    if args.published:
        for report in reports:
            report.update(status='published', published=True)
    if len(reports) != 10 or len({report['id'] for report in reports}) != 10:
        raise ValueError('Expected exactly ten distinct source reports')
    write_json(args.output / 'en' / 'editorial_reports.json', reports)
    print('en: imported 10 complete source reports', flush=True)
    if args.translate:
        with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
            futures = [pool.submit(generate_language, lang, LANGUAGES[lang], reports, args.output)
                       for lang in args.languages]
            for future in concurrent.futures.as_completed(futures):
                future.result()


if __name__ == '__main__':
    main()
