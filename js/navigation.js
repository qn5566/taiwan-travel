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
    setSiteNavigationActive(new URLSearchParams(window.location.search).get("tab") === "weekend-hop"
      ? "navJournals" : "navCafe");
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
  mobile.addEventListener("change", () => setOpen(false));

});
