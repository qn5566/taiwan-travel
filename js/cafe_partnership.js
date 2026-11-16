/* Prepare a Gmail draft; the owner reviews and sends it in Gmail. */
(() => {
  function init() {
    const mailbox = 'himydream.studio0220@gmail.com';
    const dialog = document.getElementById('cafe-partnership-dialog');
    const open = document.getElementById('cafe-partnership-open');
    const form = document.getElementById('cafe-partnership-form');
    if (!dialog || !open || !form) return;
    let previousOverflow;
    open.addEventListener('click', () => {
      if (dialog.open) return;
      CategoryUI.apply();
      document.getElementById('partnership-mail-status').hidden = true;
      document.getElementById('partnership-gmail-link').hidden = true;
      document.getElementById('partnership-copy-status').textContent = '';
      previousOverflow = document.body.style.overflow;
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    });
    document.getElementById('cafe-partnership-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => {
      document.body.style.overflow = previousOverflow;
      open.focus();
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const value = name => form.elements.namedItem(name).value.trim();
      const type = value('type');
      if (!['visit', 'menu', 'business'].includes(type)) return;
      const body = ['shop', 'location', 'contact', 'type'].map(key =>
        `${CategoryUI.t(`partnership.${key}`)}: ${key === 'type' ? CategoryUI.t(`partnership.${type}`) : value(key)}`
      ).join('\r\n');
      const subject = `${CategoryUI.t('partnership.subject')} | ${value('shop')} | ${CategoryUI.t(`partnership.${type}`)}`.replace(/[\r\n]/g, ' ');
      const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(mailbox)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const link = document.getElementById('partnership-gmail-link');
      link.href = url;
      link.hidden = false;
      const status = document.getElementById('partnership-mail-status');
      status.textContent = CategoryUI.t('partnership.mailOpened');
      status.hidden = false;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
    document.getElementById('partnership-copy-email').addEventListener('click', async () => {
      const status = document.getElementById('partnership-copy-status');
      try {
        await navigator.clipboard.writeText(mailbox);
        status.textContent = CategoryUI.t('partnership.copied');
      } catch (_) {
        status.textContent = CategoryUI.t('partnership.copyFailed');
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
