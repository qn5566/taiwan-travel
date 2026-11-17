const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function render(item) {
  const html = fs.readFileSync('ranking.html', 'utf8');
  const functions = ['generateCtaButton', 'renderRankingsPage'].map(name =>
    html.match(new RegExp(`function ${name}\\([^)]*\\) \\{[\\s\\S]*?\\n    \\}`))[0]
  ).join('\n');
  const grid = { innerHTML: '' };
  const context = {
    URL, currentTopicId: 'tea', searchKeyword: '',
    document: { getElementById: id => id === 'ranking-cards-grid' ? grid : null },
    RANKINGS_FULL_DATA: { tea: [item] },
    RANKINGS_TOPICS_META: [{ id: 'tea', category: 'food', ctaType: 'owlting' }],
    AFFILIATE_HUB: {
      getMapUrl: query => `https://maps.example/?q=${encodeURIComponent(query)}`,
      getSearchUrl: () => 'https://activities.example/'
    },
    FavoritesManager: { isFavorited: () => false, buttonAttributes: () => '' }
  };
  vm.runInNewContext(`${functions}\nrenderRankingsPage();`, context);
  return grid.innerHTML;
}

test('tea cards use the official store link and explicit map without inventing a rating', () => {
  const html = render({ id: 'wang-de-chuan-taipei', rank: 1, name: 'Wang De Chuan', rate: '',
    ctaType: 'official', mapUrl: 'https://maps.example/flagship',
    links: [{ type: 'official', label: '品茗洽詢', url: 'https://www.dechuantea.com/index.php#location' }] });
  assert.ok(html.includes('href="https://www.dechuantea.com/index.php#location"'));
  assert.ok(html.includes('品茗洽詢'));
  assert.ok(html.includes('href="https://maps.example/flagship"'));
  assert.ok(!html.includes('4.9'));
  assert.ok(!html.includes('https://activities.example/'));
});

test('other tea cards retain their rating and activity route; map fallback includes their address', () => {
  const html = render({ rank: 2, name: 'Other tea house', address: 'Taipei', rate: '4.8★' });
  assert.ok(html.includes('4.8★'));
  assert.ok(html.includes('href="https://activities.example/"'));
  assert.ok(html.includes('https://maps.example/?q=Other%20tea%20house%20Taipei'));
});

test('official CTA labels are escaped and unsafe URLs cannot become official links', () => {
  const html = render({ rank: 1, name: 'Tea house', ctaType: 'official',
    links: [{ type: 'official', label: '<b>Store</b>', url: 'https://store.example/?a=1&b=2' }] });
  assert.ok(html.includes('&lt;b&gt;Store&lt;/b&gt;'));
  assert.ok(html.includes('href="https://store.example/?a=1&amp;b=2"'));
  const unsafe = render({ rank: 1, name: 'Tea house', ctaType: 'official',
    links: [{ type: 'official', url: 'javascript:alert(1)' }] });
  assert.ok(!unsafe.includes('javascript:'));
  assert.ok(unsafe.includes('href="https://activities.example/"'));
});
