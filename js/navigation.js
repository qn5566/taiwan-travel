/** One navigation list serves desktop and mobile on every main page. */
function setSiteNavigationActive(key) {
  document.querySelectorAll("#site-navigation [data-nav-key]").forEach(link => {
    const active = link.dataset.navKey === key;
    link.closest(".nav-item").classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-navigation");
  if (!header || !toggle || !nav) return;

  let lang = new URLSearchParams(window.location.search).get("lang");
  if (!lang) {
    try { lang = localStorage.getItem("taiwan_travel_lang"); } catch (e) {}
  }
  lang = lang || "zh-TW";
  // Remember URL language when following links to another page.
  try { localStorage.setItem("taiwan_travel_lang", lang); } catch (e) {}
  updateSiteNavigation(lang);

  const page = window.location.pathname.split("/").pop() || "index.html";
  if (page === "cafe.html") {
    setSiteNavigationActive("navCafe");
  } else if (page === "journals.html") {
    setSiteNavigationActive("navJournals");
  }

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    header.classList.toggle("nav-open", open);
    const labels = WEB_I18N[nav.dataset.language] || WEB_I18N.en;
    toggle.setAttribute("aria-label", open ? labels.navCloseMenu : labels.navOpenMenu);
  }

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  nav.addEventListener("click", event => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", event => {
    if (!header.contains(event.target)) setOpen(false);
  });
  const mobile = window.matchMedia("(max-width: 1320px)");
  // Measure the translated desktop labels instead of assuming every language
  // fits at the same breakpoint. Removing the class is synchronous (no flicker).
  function fitNavigation() {
    header.classList.remove("nav-compact");
    if (!mobile.matches) {
      const inner = header.querySelector(".header-inner");
      const style = getComputedStyle(inner);
      const children = [...inner.children].filter(el => getComputedStyle(el).display !== "none");
      const needed = children.reduce((sum, el) => sum + el.getBoundingClientRect().width, 0)
        + Math.max(0, children.length - 1) * parseFloat(style.columnGap || 0);
      const available = inner.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      header.classList.toggle("nav-compact", needed > available);
    }
    if (!header.classList.contains("nav-compact") && !mobile.matches) setOpen(false);
  }
  mobile.addEventListener("change", () => { setOpen(false); fitNavigation(); });
  window.addEventListener("resize", fitNavigation);
  new MutationObserver(fitNavigation).observe(nav, { childList: true, subtree: true, characterData: true });
  fitNavigation();
  if (document.fonts) document.fonts.ready.then(fitNavigation);

});
