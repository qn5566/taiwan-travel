const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

for (const page of ['cafe.html', 'michelin.html']) {
  function render(item) {
    const html = fs.readFileSync(page, 'utf8');
    const source = html.match(/function renderMichelinList\(\) \{[\s\S]*?\n    \}/)[0];
    const container = { innerHTML: '' };
    const context = {
      document: { getElementById: id => id === 'michelin-cards-grid' ? container : null },
      TAIPEI_MICHELIN_STARS_DATA: [item], BIB_GOURMAND_DATA: [], currentMichCategory: 'all',
      AFFILIATE_HUB: {
        getMapUrl: query => `https://maps.example/?q=${encodeURIComponent(query)}`,
        getDiningUrl: () => 'https://dining.example/'
      }
    };
    vm.runInNewContext(`${source}\nrenderMichelinList();`, context);
    return container.innerHTML;
  }

  test(`${page}: restaurant map and booking links take priority`, () => {
    const html = render({ name: 'JL STUDIO', address: '台中市西區存中街59號',
      mapUrl: 'https://maps.example/jl', bookingUrl: 'https://jlstudiotw.com/reservation' });
    assert.ok(html.includes('href="https://maps.example/jl"'));
    assert.ok(html.includes('href="https://jlstudiotw.com/reservation"'));
    assert.ok(!html.includes('https://dining.example/'));
  });

  test(`${page}: official links work and map fallback includes the address`, () => {
    const item = { name: 'Restaurant', address: 'Taichung',
      links: [{ type: 'official', url: 'https://restaurant.example/reserve' }] };
    const html = render(item);
    assert.ok(html.includes('href="https://restaurant.example/reserve"'));
    assert.ok(html.includes('https://maps.example/?q=Restaurant%20Taichung'));
    assert.ok(render({ name: 'Other restaurant' }).includes('href="https://dining.example/"'));
  });
}
