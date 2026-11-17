/** Shared tracking entry point. Add future tracking integrations here. */
(() => {
  'use strict';

  // Avoid loading trackers twice if this file is included more than once.
  if (window.__taiwanTravelAnalyticsLoaded) return;
  window.__taiwanTravelAnalyticsLoaded = true;

  // Google Tag Manager manages the published GA4 tags in this container.
  const gtmContainerId = 'GTM-N38CZ8XN';
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });

  const gtmScript = document.createElement('script');
  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtmContainerId}`;
  document.head.appendChild(gtmScript);
})();
