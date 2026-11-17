#!/usr/bin/env python3
"""Compatibility entrypoint for the current shared affiliate configuration.

The old cleaner replaced verified accounts with obsolete IDs and collapsed
unrelated merchant campaigns. This entrypoint now only synchronizes the matrix
and its offline JS snapshot. It never rewrites content or backup files.
"""
from sync_affiliate_config import main

if __name__ == '__main__':
    main()
