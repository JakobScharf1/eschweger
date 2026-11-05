import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const SITE_URL = "https://www.die-eschweger.de";
const DEFAULT_TITLE = "Die Eschweger";
const DEFAULT_DESC = "Unabhängiger Journalismus von Eschwegern für Eschweger. Wir stehen für transparente und gemeinschaftliche Berichterstattung.";
const DEFAULT_IMAGE = `${SITE_URL}/assets/img/eschweger/head/logo-head.png`;

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "instant" };
  },
});

router.beforeEach((to) => {
  if (to.meta.externalRedirect) {
    window.location.href = to.meta.externalRedirect;
    return false;
  }
})

  router.afterEach((to) => {
  const url = SITE_URL + to.path;
  const title = to.meta.title ?? DEFAULT_TITLE;
  const description = to.meta.description ?? DEFAULT_DESC;
  const image = to.meta.image ?? DEFAULT_IMAGE;

  document.title = title;
  setMeta("name", "description", description);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:image", image);

  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
});

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
};

export default router;