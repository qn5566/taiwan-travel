#!/usr/bin/env python3
"""Check every sample/translation against the PM source without network access."""
import argparse
import json
from collections import Counter
from pathlib import Path

from build_editorial_reports import LANGUAGES, SOURCE, parse_source, plain


def structure(nodes):
    result = []
    for item in nodes:
        if 'text' in item:
            assert isinstance(item['text'], str) and item['text'], 'Missing content text'
            result.append(('text',))
        else:
            result.append((item['tag'], item.get('href'), item.get('start'), structure(item.get('children', []))))
    return result


def count_tags(sections):
    counts = Counter()
    def walk(nodes):
        for item in nodes:
            counts[item.get('tag', 'text')] += 1
            walk(item.get('children', []))
    for section in sections:
        walk(section['blocks'])
    return counts


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--content', type=Path, required=True)
    parser.add_argument('--published', action='store_true', help='Expect published samples instead of drafts')
    args = parser.parse_args()
    sources = [parse_source(path) for path in sorted(SOURCE.glob('*.md'))]
    ids = [report['id'] for report in sources]
    totals = Counter()
    for language in ['en', *LANGUAGES]:
        path = args.content / language / 'editorial_reports.json'
        reports = json.loads(path.read_text(encoding='utf-8'))
        assert len(reports) == 10 and [report['id'] for report in reports] == ids, f'{language}: missing/reordered reports'
        for original, report in zip(sources, reports):
            assert report['language'] == language
            assert report['status'] == ('published' if args.published else 'draft') and report['published'] is args.published
            assert report['reviewStatus'] == 'needs-fact-check' and report['isSample'] is True
            assert report['source'] == original['source'], f'{language}: provenance changed'
            assert report['slug'] == original['slug']
            assert report['readingTimeMinutes'] == original['readingTimeMinutes']
            assert not any(report.get(key) for key in ['coverImg', 'date', 'author', 'practicalInfo', 'photos', 'nearby'])
            assert len(report['sections']) == len(original['sections'])
            for before, after in zip(original['sections'], report['sections']):
                assert after['heading'].strip() and after['content'].strip()
                assert structure(before['blocks']) == structure(after['blocks']), f'{language}: changed layout or URL'
                assert after['content'] == plain(after['blocks']).strip(), f'{language}: stale plain-text fallback'
            if language == 'en':
                expected = dict(original,status=report['status'],published=report['published'])
                assert report == expected, 'English source lost content'
                totals.update(count_tags(report['sections']))
            else:
                assert report['translation']['status'] == 'machine-translated-needs-review'
                assert report['translation']['sourceSha256'] == report['source']['sha256']
                assert report['title'] != original['title'], f'{language}: untranslated title'
                assert report['summary'] != original['summary'], f'{language}: untranslated summary'
        print(f'{language}: 10 reports, identical IDs/URLs/structure, complete content, valid provenance')
    print(f"PASS: 120 reports; source contains {totals['table']} tables and {totals['a']} links, preserved in every language.")


if __name__ == '__main__':
    main()
