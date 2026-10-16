const pageTitle = import.meta.env.VITE_PAGE_TITLE

export const routes = [
  {
    path: "/",
    name: "Startseite",
    component: () => import("@/views/Startseite.vue"),
    meta: {
      title: "Startseite || " + pageTitle,
    }
  },
  {
    path: "/veranstaltungen",
    name: "Veranstaltungen",
    component: () => import("@/views/Veranstaltungen.vue"),
    meta: {
      title: "Veranstaltungen || " + pageTitle
    }
  },
  {
    path: "/werbeanzeigen",
    name: "Werbeanzeigen",
    component: () => import("@/views/Werbeanzeigen.vue"),
    meta: {
      title: "Werbeanzeigen || " + pageTitle
    }
  },
  {
    path: "/abo",
    name: "Abonnement",
    component: () => import("@/views/Abonnement.vue"),
    meta: {
      title: "Abonnement || " + pageTitle
    }
  },
  {
    path: "/unterstuetzen",
    name: "Unterstützen",
    component: () => import("@/views/Unterstuetzen.vue"),
    meta: {
      title: "Unterstützen || " + pageTitle
    }
  },
  {
    path: "/mitmachen",
    name: "Mitmachen",
    component: () => import("@/views/Mitmachen.vue"),
    meta: {
      title: "Mitmachen || " + pageTitle
    }
  },
  {
    path: "/foerdern",
    name: "Fördern",
    component: () => import("@/views/Foerdern.vue"),
    meta: {
      title: "Fördern || " + pageTitle
    }
  },
  {
    path: "/kleinanzeigen",
    name: "Kleinanzeigen",
    component: () => import("@/views/Kleinanzeigen.vue"),
    meta: {
      title: "Kleinanzeigen || " + pageTitle
    }
  },
  {
    path: "/gewinnspiele",
    name: "Gewinnspiele",
    component: () => import("@/views/Gewinnspiele.vue"),
    meta: {
      title: "Gewinnspiele || " + pageTitle
    }
  },
  {
    path: "/galerie",
    name: "Galerie",
    component: () => import("@/views/Galerie.vue"),
    meta: {
      title: "Galerie || " + pageTitle
    }
  },
  {
    path: "/ueber",
    name: "Über uns",
    component: () => import("@/views/Ueber.vue"),
    meta: {
      title: "Über uns || " + pageTitle
    }
  },
  {
    path: "/anzeigen",
    name: "Anzeigen",
    component: () => import("@/views/Anzeigen.vue"),
    meta: {
      title: "Anzeigen || " + pageTitle
    }
  },
  {
    path: "/satzung",
    name: "Satzung",
    component: () => import("@/views/Satzung.vue"),
    meta: {
      title: "Satzung || " + pageTitle
    }
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: () => import("@/views/Kontakt.vue"),
    meta: {
      title: "Kontakt || " + pageTitle
    }
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: () => import("@/views/Impressum.vue"),
    meta: {
      title: "Impressum || " + pageTitle
    }
  },
  {
    path: "/datenschutz",
    name: "Datenschutzerklärung",
    component: () => import("@/views/Datenschutz.vue"),
    meta: {
      title: "Datenschutz || " + pageTitle
    }
  },
];
