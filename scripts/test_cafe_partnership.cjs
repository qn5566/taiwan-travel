/** Run: node --test scripts/test_cafe_partnership.cjs */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
function setup(lang = 'zh-TW') {
  function node() {
    const handlers = {};
    return { handlers, addEventListener(type, fn) { handlers[type] = fn; },
      fire(type, event = {}) { return handlers[type](event); }, focus() { this.focused = true; }, setAttribute() {} };
  }
  const nodes = Object.fromEntries(['cafe-partnership-dialog', 'cafe-partnership-open', 'cafe-partnership-close', 'cafe-partnership-form', 'partnership-mail-status', 'partnership-copy-status', 'partnership-copy-email', 'partnership-gmail-link'].map(id => [id, node()]));
  const dialog = nodes['cafe-partnership-dialog'];
  dialog.showModal = () => { dialog.open = true; };
  dialog.close = () => { dialog.open = false; dialog.fire('close'); };
  dialog.getBoundingClientRect = () => ({ left: 20, right: 520, top: 20, bottom: 600 });
  const values = { shop: 'Café & Co #1', location: '台北市', contact: 'LINE: @cafe&co', type: 'business', website: '' };
  const form = nodes['cafe-partnership-form'];
  const submit = node();
  form.querySelector = () => submit;
  form.elements = { namedItem: name => ({ value: values[name] }) };
  form.reportValidity = () => true;
  const body = { style: { overflow: 'auto' } };
  const document = { readyState: 'complete', body, getElementById: id => nodes[id], querySelectorAll: () => [] };
  const calls = [];
  const context = vm.createContext({ document, getWebLang: () => lang, URLSearchParams,
    navigator: { clipboard: { writeText: async () => {} } },
    window: { location: { href: 'https://example.com/cafe.html', search: '' }, open: (...args) => calls.push(args) } });
  vm.runInContext(fs.readFileSync('js/category_i18n.js', 'utf8'), context);
  vm.runInContext(fs.readFileSync('js/cafe_partnership.js', 'utf8'), context);
  return { nodes, dialog, form, submit, body, context, values, calls, t: key => vm.runInContext(`CategoryUI.t(${JSON.stringify(key)})`, context) };
}
const submitEvent = { preventDefault() {} };
test('dialog restores scrolling and focus and closes only on the backdrop', () => {
  const { nodes, dialog, body } = setup();
  nodes['cafe-partnership-open'].fire('click');
  assert.equal(dialog.open, true);
  assert.equal(body.style.overflow, 'hidden');
  dialog.fire('click', { target: dialog, clientX: 100, clientY: 100 });
  assert.equal(dialog.open, true);
  dialog.fire('click', { target: dialog, clientX: 0, clientY: 0 });
  assert.equal(dialog.open, false);
  assert.equal(body.style.overflow, 'auto');
  assert.equal(nodes['cafe-partnership-open'].focused, true);
});
test('seven languages and three options open Gmail with encoded recipient, subject and form content', () => {
  for (const lang of ['zh-TW', 'en', 'ja', 'ko', 'es', 'de', 'th']) {
    const { form, values, t, nodes, calls } = setup(lang);
    for (const type of ['visit', 'menu', 'business']) {
      values.type = type;
      form.fire('submit', submitEvent);
      const [href, target, features] = calls.at(-1);
      const url = new URL(href);
      assert.equal(url.origin, 'https://mail.google.com');
      assert.equal(url.searchParams.get('to'), 'himydream.studio0220@gmail.com');
      assert.equal(url.searchParams.get('su'), `${t('partnership.subject')} | ${values.shop} | ${t(`partnership.${type}`)}`);
      for (const value of [values.shop, values.location, values.contact, t(`partnership.${type}`)]) assert.ok(url.searchParams.get('body').includes(value));
      assert.equal(target, '_blank');
      assert.equal(features, 'noopener,noreferrer');
      assert.equal(nodes['partnership-mail-status'].textContent, t('partnership.mailOpened'));
      assert.equal(nodes['partnership-gmail-link'].href, href);
      assert.equal(nodes['partnership-gmail-link'].hidden, false);
    }
  }
});
test('invalid forms do not open Gmail', () => {
  const { form, calls, values } = setup();
  form.reportValidity = () => false;
  form.fire('submit', submitEvent);
  assert.equal(calls.length, 0);
  form.reportValidity = () => true;
  values.type = 'invalid';
  form.fire('submit', submitEvent);
  assert.equal(calls.length, 0);
});
test('copy email reports success and gives a manual fallback on failure', async () => {
  const { nodes, context, t } = setup();
  let copied;
  context.navigator.clipboard.writeText = async text => { copied = text; };
  await nodes['partnership-copy-email'].fire('click');
  assert.equal(copied, 'himydream.studio0220@gmail.com');
  assert.equal(nodes['partnership-copy-status'].textContent, t('partnership.copied'));
  context.navigator.clipboard.writeText = async () => { throw Error('denied'); };
  await nodes['partnership-copy-email'].fire('click');
  assert.equal(nodes['partnership-copy-status'].textContent, t('partnership.copyFailed'));
});
