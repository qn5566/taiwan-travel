/** Run: node --test scripts/test_loading.cjs */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
function setup() {
  const nodes = new Map();
  const attrs = new Map();
  const events = {};
  const context = { URL, URLSearchParams, AbortController, setTimeout, clearTimeout,
    location: { search: '?lang=ko' }, localStorage: { getItem() { return null; } },
    addEventListener(type, callback) { events[type] = callback; },
    document: { readyState: 'loading', addEventListener() {}, getElementById: id => nodes.get(id),
      body: { append(node) { nodes.set(node.id, node); } },
      documentElement: { setAttribute(k, v) { attrs.set(k, v); }, removeAttribute(k) { attrs.delete(k); } },
      createElement() { const label = {}; return { setAttribute() {}, querySelector() { return label; } }; }
    }
  };
  context.window = context;
  vm.createContext(context);
  for (const file of ['js/global-language-bar.js', 'js/content_loader.js']) vm.runInContext(fs.readFileSync(file, 'utf8'), context);
  return { context, attrs, events, overlay: () => nodes.get('site-loading-overlay') };
}
test('overlapping loading tasks keep one localized overlay until the last release', () => {
  const { context, overlay, attrs } = setup();
  const a = context.SiteLoading.begin();
  const b = context.SiteLoading.begin();
  assert.equal(overlay().hidden, false);
  assert.equal(overlay().querySelector().textContent, '불러오는 중…');
  assert.equal(attrs.get('aria-busy'), 'true');
  a(); a();
  assert.equal(overlay().hidden, false);
  b();
  assert.equal(overlay().hidden, true);
  assert.equal(attrs.has('aria-busy'), false);
});
test('API body parsing keeps the mask visible and success and failure both release it', async () => {
  for (const failure of [false, true]) {
    const { context, overlay } = setup();
    let finishBody;
    context.fetch = async () => ({ ok: true, json: () => new Promise((resolve, reject) => { finishBody = failure ? () => reject(Error('bad JSON')) : () => resolve({ value: 1 }); }) });
    const request = vm.runInContext('fetchContentJson("test.json", "ko")', context);
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(overlay().hidden, false);
    finishBody();
    if (failure) await assert.rejects(request); else await request;
    assert.equal(overlay().hidden, true);
  }
});
test('returning through browser back/forward cache clears a navigation loading mask', () => {
  const { context, events, overlay } = setup();
  context.SiteLoading.begin('ja');
  events.pageshow({ persisted: true });
  assert.equal(overlay().hidden, true);
});
