#!/usr/bin/env python3
"""Convert the PM Michelin HTML into editable documents, menus and language editions.

Requires beautifulsoup4 plus requirements-editorial-reports.txt.
Default imports zh only; --translate creates all twelve editions. --published displays the sample.
"""
import argparse
import concurrent.futures
import copy
import hashlib
import json
import re
from pathlib import Path
from bs4 import BeautifulSoup, NavigableString
from build_editorial_reports import ROOT, batches, plain, translate_batch, write_json

SOURCE = ROOT/'米其林餐廳/01-mi.html'
TARGETS = {'en':'en','ja':'ja','ko':'ko','es':'es','th':'th','vi':'vi','ms':'ms','fil':'tl','hi':'hi','id':'id','de':'de'}


def text(node):
    return node.get_text(' ',strip=True) if node else ''


def blocks(node):
    result=[]
    for child in node.children:
        if isinstance(child,NavigableString):
            value=re.sub(r'\s+',' ',str(child))
            if value.strip():result.append({'text':value})
        elif child.name in ['p','strong','em','br','blockquote','h3','h4','ul','li']:
            result.append({'tag':child.name,'children':blocks(child)})
        elif child.name not in ['script','style']:
            result.extend(blocks(child))
    return result


def source_report(published=False):
    raw=SOURCE.read_text(encoding='utf-8');soup=BeautifulSoup(raw,'html.parser')
    def section(node,heading,layout,image=''):
        value={'heading':heading,'layout':layout,'blocks':blocks(node)}
        value['content']=plain(value['blocks']).strip()
        if image:value.update(image=image,imageRole='illustration',caption='設計稿示意照片，非餐廳實拍')
        return value
    story=soup.select_one('.editorial-essay')
    storycopy=BeautifulSoup(str(story),'html.parser');storycopy.h3.decompose()
    quote=soup.select_one('.editorial-pullquote-box blockquote')
    storycopy.append(copy.copy(quote))
    cite=soup.select_one('.editorial-pullquote-box cite');storycopy.append(copy.copy(cite))
    sections=[section(storycopy,text(story.h3),'intro')]
    ambiance=soup.select_one('.spatial-floating-card');ambcopy=BeautifulSoup(str(ambiance),'html.parser');ambcopy.h3.decompose()
    sections.append(section(ambcopy,text(ambiance.h3),'ambiance',soup.select_one('.spatial-wide-img img')['src']))
    for dish in soup.select('.dish-editorial-item'):
        body=dish.select_one('.dish-text-body');bodycopy=BeautifulSoup(str(body),'html.parser');bodycopy.h4.decompose()
        sections.append(section(bodycopy,text(body.h4),'dish',dish.img['src']))
    guide_originals={}
    for index,guide in enumerate(soup.select('.etiquette-card')):
        en=guide.select_one('.en-guide');ja=guide.select_one('.jp-guide')
        paragraph=BeautifulSoup(str(en.p),'html.parser')
        item=section(paragraph,text(en.h3),'guide');item['key']=f'guide_{index+1}'
        # English/Japanese guide copy supplied by PM is retained exactly, rather than retranslated.
        guide_originals[item['key']]={'en':{'heading':text(en.h3),'blocks':blocks(paragraph)},
                                      'ja':{'heading':text(ja.h3),'blocks':blocks(BeautifulSoup(str(ja.p),'html.parser'))}}
        sections.append(item)
    variants=[]
    for code,selector in [('zh','#boardZh'),('en','#boardEn'),('ja','#boardJp')]:
        board=soup.select_one(selector)
        items=[{'id':f'dish_{i+1}','name':text(li.select_one('.m-name')),
                'description':text(li.select_one('.m-desc')),'price':text(li.select_one('.m-price'))}
               for i,li in enumerate(board.select('li'))]
        variants.append({'language':code,'title':text(board.select_one('.board-lang-title')),'items':items})
    honor=soup.select_one('.michelin-honor-block')
    info=soup.select_one('.concierge-info')
    report={'id':'michelin_le_palais','restaurantId':'star-1','slug':'le-palais','language':'zh',
            'title':text(soup.h1),'enTitle':text(soup.select_one('.hero-en-display')),
            'summary':soup.select_one('meta[name="description"]')['content'],
            'status':'published' if published else 'draft','published':published,
            'isSample':True,'reviewStatus':'needs-fact-check','city':'台北市',
            'coverImg':soup.select_one('.hero-bg-img')['src'],'coverImageRole':'illustration',
            'quickFacts':[text(n) for n in soup.select('.hero-quick-specs span')],
            'honors':{'heading':text(honor.h2),'content':text(honor.p),
                      'years':[text(n) for n in honor.select('.years-ribbon span')],
                      'note':'原稿獲獎紀錄截至 2025 年，並非目前年度評鑑結果。'},
            'sections':sections,'menuVariants':variants,
            'menuNote':text(soup.select_one('.trilingual-menu-band .container-narrow > p')),
            'practicalInfo':{'name':text(info.strong),'address':'台北市大同區承德路一段 3 號 17 樓',
                             'businessHours':'午餐 11:30–14:30 ｜ 晚餐 17:30–21:30',
                             'phone':'+886-2-2181-9985',
                             'transport':'台北車站步行 3 分鐘／捷運中山站步行 6 分鐘',
                             'mapUrl':'https://maps.google.com/?q=頤宮中餐廳+Le+Palais'},
            'bookingUrl':soup.select_one('.btn-solid-gold')['href'],
            'editorialNote':'依 PM 設計稿建立的範例；圖片非餐廳實拍，價格、菜單與訂位規則尚待查核。',
            'source':{'file':'米其林餐廳/01-mi.html','language':'zh',
                      'sha256':hashlib.sha256(raw.encode()).hexdigest(),'awardThroughYear':2025,
                      'imageUsage':'design-illustrations','guideOriginals':guide_originals},
            'translation':{'status':'source','sourceLanguage':'zh'}}
    return report


def slots(report):
    for key in ['title','summary','menuNote','editorialNote']:
        yield report,key
    for key in ['heading','content','note']:yield report['honors'],key
    for i,value in enumerate(report['quickFacts']):yield report['quickFacts'],i
    def nodes(items):
        for item in items:
            if 'text' in item:yield item,'text'
            yield from nodes(item.get('children',[]))
    for item in report['sections']:
        yield item,'heading'
        if 'caption' in item:yield item,'caption'
        yield from nodes(item['blocks'])
    for key in ['name','address','businessHours','transport']:yield report['practicalInfo'],key


def edition(language,target,source,output):
    cache_path=output/'_translations/michelin_articles'/f'{language}.json'
    cache=json.loads(cache_path.read_text()) if cache_path.exists() else {}
    texts=list(dict.fromkeys(owner[key] for owner,key in slots(source)))
    for group in batches([t for t in texts if t.strip() and t not in cache]):
        cache.update(translate_batch(group,target,'auto'));write_json(cache_path,cache)
    result=copy.deepcopy(source)
    for owner,key in slots(result):
        old=owner[key]
        owner[key]=re.match(r'^\s*',old).group()+cache.get(old,old).strip()+re.search(r'\s*$',old).group()
    for item in result['sections']:
        original=result['source']['guideOriginals'].get(item.get('key'),{}).get(language)
        if original:item.update(copy.deepcopy(original))
        item['content']=plain(item['blocks']).strip()
    result['language']=language
    result['translation']={'status':'machine-translated-needs-review','sourceLanguage':'zh',
                           'provider':'Google Translate','sourceSha256':result['source']['sha256']}
    write_json(output/language/'michelin_articles.json',[result]);print(language+': 1 article',flush=True)


def snapshots(output):
    for language in ['zh',*TARGETS]:
        path=output/language/'michelin_articles.json'
        if not path.exists():continue
        write_json(ROOT/'data/michelin_articles'/f'{language}.json',json.loads(path.read_text()))
        restaurants=output/(language if (output/language/'michelin.json').exists() else 'en')/'michelin.json'
        write_json(ROOT/'data/michelin_restaurants'/f'{language}.json',json.loads(restaurants.read_text()))


def main():
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('--output',type=Path,default=ROOT.parent/'ActivityEvent/content')
    p.add_argument('--translate',action='store_true');p.add_argument('--published',action='store_true');args=p.parse_args()
    report=source_report(args.published)
    # Translate the supplied English FAQ into Chinese; its source-language versions remain in provenance.
    zh=copy.deepcopy(report)
    english=[(owner,key) for item in zh['sections'] if item['layout']=='guide' for owner,key in [(item,'heading')]]
    def faq_nodes(nodes):
        for n in nodes:
            if 'text' in n:yield n,'text'
            yield from faq_nodes(n.get('children',[]))
    for item in zh['sections']:
        if item['layout']=='guide':english.extend(faq_nodes(item['blocks']))
    cache_path=args.output/'_translations/michelin_articles/zh.json'
    cache=json.loads(cache_path.read_text()) if cache_path.exists() else {}
    for group in batches(list(dict.fromkeys(o[k] for o,k in english if o[k] not in cache))):
        cache.update(translate_batch(group,'zh-TW','en'));write_json(cache_path,cache)
    from opencc import OpenCC
    traditional=OpenCC('s2tw').convert
    for owner,key in english:
        original=owner[key];owner[key]=re.match(r'^\s*',original).group()+traditional(cache[original]).strip()+re.search(r'\s*$',original).group()
    for item in zh['sections']:item['content']=plain(item['blocks']).strip()
    write_json(args.output/'zh/michelin_articles.json',[zh]);print('zh: imported 1 article, 7 images, 21 menu entries, 5 FAQ cards',flush=True)
    if args.translate:
        with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
            for future in concurrent.futures.as_completed([pool.submit(edition,lang,target,report,args.output) for lang,target in TARGETS.items()]):future.result()
    snapshots(args.output)


if __name__=='__main__':main()
