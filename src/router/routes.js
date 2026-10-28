const pageTitle = import.meta.env.VITE_PAGE_TITLE

export const routes = [
  {
    path: "/",
    name: "Startseite",
    component: () => import("@/views/Startseite.vue"),
    meta: {
      title: "Der Eschweger kommt - erfahren Sie mehr! || " + pageTitle,
    }
  },
  {
    path: "/veranstaltungen",
    name: "Veranstaltungen",
    component: () => import("@/views/Veranstaltungen.vue"),
    meta: {
      title: "Veranstaltungen in Eschwege und Umgebung || " + pageTitle
    }
  },
  {
    path: "/abo",
    name: "Abonnement",
    component: () => import("@/views/Abonnement.vue"),
    meta: {
      title: "Jetzt abonnieren und unterstützen || " + pageTitle
    }
  },
  {
    path: "/unterstuetzen",
    name: "Unterstützen",
    component: () => import("@/views/Unterstuetzen.vue"),
    meta: {
      title: "Unterstützen und Gutes fördern || " + pageTitle
    }
  },
  {
    path: "/mitmachen",
    name: "Mitmachen",
    component: () => import("@/views/Mitmachen.vue"),
    meta: {
      title: "Mitmachen und Teil werden || " + pageTitle
    }
  },
  {
    path: "/foerdern",
    name: "Fördern",
    component: () => import("@/views/Foerdern.vue"),
    meta: {
      title: "Unsere Fördermitgliedschaften || " + pageTitle
    }
  },
  {
    path: "/kleinanzeigen",
    name: "Kleinanzeigen",
    component: () => import("@/views/Kleinanzeigen.vue"),
    meta: {
      title: "Kleinanzeigen für Eschwege und Umgebung || " + pageTitle
    }
  },
  {
    path: "/gewinnspiele",
    name: "Gewinnspiele",
    component: () => import("@/views/Gewinnspiele.vue"),
    meta: {
      title: "Jetzt am aktuellen Gewinnspiel teilnehmen! || " + pageTitle
    }
  },
  {
    path: "/galerie",
    name: "Galerie",
    component: () => import("@/views/Galerie.vue"),
    meta: {
      title: "Bildergalerie || " + pageTitle
    }
  },
  {
    path: "/ueber",
    name: "Über uns",
    component: () => import("@/views/Ueber.vue"),
    meta: {
      title: "Über DIE ESCHWEGER und was dahinter steckt... || " + pageTitle
    }
  },
  {
    path: "/anzeigen",
    name: "Anzeigen",
    component: () => import("@/views/Anzeigen.vue"),
    meta: {
      title: "Gedruckte Anzeigen für die Region schalten || " + pageTitle
    }
  },
  {
    path: "/demo",
    name: "Ausgaben",
    component: () => import("@/views/Demo.vue"),
    meta: {
      title: "Unsere Ausgaben und Online-Demo || " + pageTitle
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
