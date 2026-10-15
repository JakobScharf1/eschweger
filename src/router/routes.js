export const routes = [
  {
    path: "/",
    name: "Startseite",
    component: () => import("@/views/Startseite.vue"),
    meta: {
      title: "Startseite || PLACEHOLDER",
    }
  },
  {
    path: "/veranstaltungen",
    name: "Veranstaltungen",
    component: () => import("@/views/Veranstaltungen.vue"),
    meta: {
      title: "Veranstaltungen || PLACEHOLDER"
    }
  },
  {
    path: "/werbeanzeigen",
    name: "Werbeanzeigen",
    component: () => import("@/views/Werbeanzeigen.vue"),
    meta: {
      title: "Werbeanzeigen || PLACEHOLDER"
    }
  },
  {
    path: "/abo",
    name: "Abonnement",
    component: () => import("@/views/Abonnement.vue"),
    meta: {
      title: "Abonnement || PLACEHOLDER"
    }
  },
  {
    path: "/unterstuetzen",
    name: "Unterstützen",
    component: () => import("@/views/Unterstuetzen.vue"),
    meta: {
      title: "Unterstützen || PLACEHOLDER"
    }
  },
  {
    path: "/mitmachen",
    name: "Mitmachen",
    component: () => import("@/views/Mitmachen.vue"),
    meta: {
      title: "Mitmachen || PLACEHOLDER"
    }
  },
  {
    path: "/foerdern",
    name: "Fördern",
    component: () => import("@/views/Foerdern.vue"),
    meta: {
      title: "Fördern || PLACEHOLDER"
    }
  },
  {
    path: "/kleinanzeigen",
    name: "Kleinanzeigen",
    component: () => import("@/views/Kleinanzeigen.vue"),
    meta: {
      title: "Kleinanzeigen || Kleinanzeigen"
    }
  },
  {
    path: "/galerie",
    name: "Galerie",
    component: () => import("@/views/Galerie.vue"),
    meta: {
      title: "Galerie || PLACEHOLDER"
    }
  },
  {
    path: "/ueber",
    name: "Über uns",
    component: () => import("@/views/Ueber.vue"),
    meta: {
      title: "Über uns || PLACEHOLDER"
    }
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: () => import("@/views/Kontakt.vue"),
    meta: {
      title: "Kontakt || PLACEHOLDER"
    }
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: () => import("@/views/Impressum.vue"),
    meta: {
      title: "Impressum || PLACEHOLDER"
    }
  },
  {
    path: "/datenschutz",
    name: "Datenschutzerklärung",
    component: () => import("@/views/Datenschutz.vue"),
    meta: {
      title: "Datenschutz || PLACEHOLDER"
    }
  },
];
