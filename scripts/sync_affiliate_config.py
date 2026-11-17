#!/usr/bin/env python3
"""Sync the verified ActivityEvent matrix and regenerate the offline JS snapshot.

Default source: ../ActivityEvent/affiliate_config.json. Pet brands are omitted.
"""
import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, default=ROOT.parent / 'ActivityEvent' / 'affiliate_config.json')
    args = parser.parse_args()
    data = json.loads(args.source.read_text(encoding='utf-8'))
    if data.get('version') != 1 or 'GLOBAL' not in data.get('regions', {}):
        raise ValueError('Unsupported affiliate config')
    data.pop('unconfigured', None)
    for key in list(data.get('platforms', {})):
        if key.startswith('pet'):
            del data['platforms'][key]
    serialized = json.dumps(data, ensure_ascii=False, indent=2)
    (ROOT / 'config' / 'affiliate.json').write_text(serialized + '\n', encoding='utf-8')
    (ROOT / 'js' / 'affiliate-config.js').write_text(
        '// Generated from config/affiliate.json by scripts/sync_affiliate_config.py.\n'
        + 'window.TAIWAN_AFFILIATE_CONFIG = ' + serialized + ';\n', encoding='utf-8')
    print('Updated config/affiliate.json and js/affiliate-config.js')


if __name__ == '__main__':
    main()
