#!/usr/bin/env python3
"""Copy backend editions for standalone frontend use before remote data is pushed."""
import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LANGUAGES = ['zh','en','ja','ko','es','th','vi','ms','fil','hi','id','de']


def sync(content):
    for language in LANGUAGES:
        source = content / language / 'editorial_reports.json'
        reports = json.loads(source.read_text(encoding='utf-8'))
        assert isinstance(reports, list), f'{language}: expected report list'
        target = ROOT / 'data' / 'editorial_reports' / f'{language}.json'
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(json.dumps(reports,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print('Synced 12 frontend report editions')


if __name__ == '__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--content',type=Path,default=ROOT.parent/'ActivityEvent/content')
    sync(parser.parse_args().content)
