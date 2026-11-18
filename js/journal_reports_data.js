/** Frontend contract for content/<language>/editorial_reports.json. */
const JournalReportData = (() => {
  const string = value => typeof value === 'string' ? value.trim() : '';
  function list(payload) {
    if (!Array.isArray(payload)) throw new Error('Expected a reports array');
    const seen = new Set();
    return payload.filter(item => {
      if (!item || typeof item !== 'object' || item.published === false || (item.status && item.status !== 'published')) return false;
      const id = string(item.id), title = string(item.title);
      if (!id || !title || seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  }
  function resolve(params, reports) {
    const id = params.get('id'), slug = params.get('slug');
    return id ? reports.find(report => report.id === id) : slug ? reports.find(report => report.slug === slug) : undefined;
  }
  function safeUrl(value) {
    if (!string(value)) return '';
    try {
      const url = new URL(value);
      return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
    } catch (_) { return ''; }
  }
  async function load(lang, fetcher = fetchContentJson, localFetch = typeof fetch === 'function' ? fetch : null) {
    async function read(language) {
      const code = language === 'de' ? 'de' : mapToContentLang(language);
      async function bundled() {
        if (!localFetch) return null;
        let response;
        try { response = await localFetch(`data/editorial_reports/${code}.json`, {cache:'no-store'}); } catch (_) {}
        return response?.ok ? list(await response.json()) : null;
      }
      // Local static previews use the checked-out content, before the backend is pushed.
      // The admin's /preview/ overrides CONTENT_BASE_URL and reads its live JSON instead.
      const localPreview = typeof window !== 'undefined' && ['localhost','127.0.0.1','[::1]'].includes(window.location.hostname)
        && (!window.CONTENT_BASE_URL || window.CONTENT_BASE_URL.startsWith('https://raw.githubusercontent.com/qn5566/ActivityEvent/'));
      if (localPreview) { const edition = await bundled(); if (edition) return edition; }
      try { return list(await fetcher('editorial_reports.json', language, language === 'de' ? 'de' : undefined)); }
      catch (remoteError) {
        // A successful remote [] is authoritative. Only unavailable endpoints use the bundled edition.
        if (localFetch) {
          const edition = await bundled();
          if (edition) return edition;
        }
        throw remoteError;
      }
    }
    try {
      // Reports have their own German edition; other content keeps its English fallback.
      const reports = await read(lang);
      return { reports, state: reports.length ? 'ready' : 'empty', fallback: false };
    } catch (error) {
      // An endpoint not created yet is an empty publication, not a sample article.
      if (!/\bHTTP 404\b/.test(error.message || '')) return { reports: [], state: 'error', fallback: false };
      if (mapToContentLang(lang) !== 'zh') {
        try {
          const reports = await read('zh-TW');
          return { reports, state: reports.length ? 'ready' : 'empty', fallback: reports.length > 0 };
        } catch (fallbackError) {
          if (!/\bHTTP 404\b/.test(fallbackError.message || '')) return { reports: [], state: 'error', fallback: false };
        }
      }
      return { reports: [], state: 'empty', fallback: false };
    }
  }
  return { list, resolve, safeUrl, load, string };
})();
