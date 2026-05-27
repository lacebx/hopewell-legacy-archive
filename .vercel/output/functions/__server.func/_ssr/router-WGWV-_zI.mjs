import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, d as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { G as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-C6fwOVzi.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$b = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hopewell Cemetery Association: Preserving Indian Territory Legacy" },
      { name: "description", content: "A sacred digital archive preserving the history, lineage, and legacy of the Hopewell Community, Cherokee Town, and the Black and Native families connected to Indian Territory." },
      { name: "author", content: "Hopewell Cemetery Association" },
      { property: "og:title", content: "Hopewell Cemetery Association" },
      { property: "og:description", content: "Before Oklahoma was Oklahoma, there was Hopewell." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$b.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const BASE_URL = "";
const Route$a = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = ["/", "/history", "/community", "/cherokee-town", "/archive", "/gallery", "/map", "/preservation", "/contact"];
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>monthly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const headstoneImg = "/assets/headstone-D9BbW7BX.jpg";
const $$splitComponentImporter$9 = () => import("./preservation-BTA8xa4f.mjs");
const Route$9 = createFileRoute("/preservation")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component"),
  head: () => ({
    meta: [{
      title: "Preservation & Donations | Hopewell Cemetery Association"
    }, {
      name: "description",
      content: "Support the restoration, marking, and educational preservation of Hopewell Cemetery and its history."
    }, {
      property: "og:image",
      content: headstoneImg
    }]
  })
});
const heroImg = "/assets/hero-cemetery-CNYo7LYR.jpg";
const $$splitComponentImporter$8 = () => import("./map-CiBrYyuo.mjs");
const Route$8 = createFileRoute("/map")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component"),
  head: () => ({
    meta: [{
      title: "Cemetery Map | Hopewell Cemetery Association"
    }, {
      name: "description",
      content: "Interactive map of Hopewell Cemetery with searchable burial records and section markers."
    }, {
      property: "og:image",
      content: heroImg
    }]
  })
});
const $$splitComponentImporter$7 = () => import("./history-7I5_Mi-5.mjs");
const Route$7 = createFileRoute("/history")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  head: () => ({
    meta: [{
      title: "The Crossroads of Freedom, Cherokee Town: Hopewell & the Stevenson Legacy"
    }, {
      name: "description",
      content: "Historical context linking Cherokee Town, the Hopewell Community, and Chickasaw Freedmen families along the Washita River in Indian Territory."
    }, {
      property: "og:image",
      content: heroImg
    }]
  })
});
const $$splitComponentImporter$6 = () => import("./gallery-DEGm02U8.mjs");
const Route$6 = createFileRoute("/gallery")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      title: "Gallery | Hopewell Cemetery Association"
    }, {
      name: "description",
      content: "Photographs, maps, scanned documents, and historical references from the Hopewell archive."
    }, {
      property: "og:image",
      content: headstoneImg
    }]
  })
});
const ledger = "/assets/ledger-Bq8CO4d7.jpg";
const $$splitComponentImporter$5 = () => import("./contact-BD4a0C9i.mjs");
const Route$5 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: () => ({
    meta: [{
      title: "Contact & Submit Family History | Hopewell Cemetery Association"
    }, {
      name: "description",
      content: "Contact the Hopewell Cemetery Association, submit family histories, photographs, or oral histories."
    }, {
      property: "og:image",
      content: ledger
    }]
  })
});
const communityImg = "/assets/community-D5uAhWEm.jpg";
const $$splitComponentImporter$4 = () => import("./community-CLzpcxQ7.mjs");
const Route$4 = createFileRoute("/community")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "The Hopewell Community | Hopewell Cemetery Association"
    }, {
      name: "description",
      content: "A Freedmen's sanctuary northeast of Cherokee Town, founded in the late 1860s by Chickasaw and Choctaw Freedmen along the Washita River."
    }, {
      property: "og:image",
      content: communityImg
    }]
  })
});
const cherokeeImg = "/assets/cherokee-town-C4rIOCZ3.jpg";
const $$splitComponentImporter$3 = () => import("./cherokee-town-poQHTJY6.mjs");
const Route$3 = createFileRoute("/cherokee-town")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Cherokee Town: A vanished crossroads of Indian Territory"
    }, {
      name: "description",
      content: "The Washita River ford, John Shirley's trading post, and the supply hub that made Hopewell possible, five miles northeast along the corridor."
    }, {
      property: "og:image",
      content: cherokeeImg
    }]
  })
});
const familyImg = "/assets/family-archive-CeLhdoIw.jpg";
const $$splitComponentImporter$2 = () => import("./archive-CB1O2-Lb.mjs");
const Route$2 = createFileRoute("/archive")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Family Legacy Archive | Hopewell Cemetery Association"
    }, {
      name: "description",
      content: "Stories, obituaries, and lineages of Chickasaw Freedmen and allied families, Stevenson, Smith, Harper, Allen, and the pioneers of Hopewell."
    }, {
      property: "og:image",
      content: familyImg
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./index-Dl5Bt7Cb.mjs");
const Route$1 = createFileRoute("/")({
  validateSearch: (search) => ({
    era: typeof search.era === "string" ? search.era : void 0,
    event: typeof search.event === "string" ? search.event : void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "Hopewell Cemetery Association: Before Oklahoma was Oklahoma"
    }, {
      name: "description",
      content: "A sacred digital archive preserving the history, lineage, and legacy of the Hopewell Community, Cherokee Town, and the families of Indian Territory."
    }, {
      property: "og:image",
      content: heroImg
    }, {
      name: "twitter:image",
      content: heroImg
    }]
  })
});
const MILESTONE_LABELS = {
  birth: "Birth",
  arrival: "Arrival in Indian Territory",
  dawes: "Dawes Roll enrollment",
  allotment: "Allotment secured",
  burial: "Burial at Hopewell"
};
const HISTORICAL_EVENTS = [
  {
    id: "removal-era",
    label: "Indian Removal",
    year: "1830s",
    description: "Forced removal of Cherokee, Choctaw, Chickasaw, and allied Black families into Indian Territory.",
    eraIds: ["1830s"],
    familySlugs: ["folsom", "stevenson"]
  },
  {
    id: "treaty-1866",
    label: "Treaty of 1866",
    year: "1866",
    description: "Post-Civil War treaties recognized Freedmen as citizens of the Five Tribes, the legal foundation for Hopewell settlement.",
    eraIds: ["1860s"],
    familySlugs: ["stevenson", "smith", "perry", "allen", "vann"]
  },
  {
    id: "hopewell-founded",
    label: "Hopewell community founded",
    year: "c. 1868",
    description: "Freedmen families establish the log schoolhouse and church northeast of Cherokee Town.",
    eraIds: ["1860s", "late-1800s"],
    familySlugs: ["stevenson", "smith", "perry", "vann", "allen"]
  },
  {
    id: "dawes-act",
    label: "Dawes Act & Rolls",
    year: "1887-1907",
    description: "The Dawes Act (1887) and subsequent enrollment commissions assigned allotments and recorded Freedmen on tribal rolls.",
    eraIds: ["late-1800s", "1907"],
    familySlugs: ["stevenson", "smith", "vann", "walker", "folsom", "brown"]
  },
  {
    id: "rail-bypass-1906",
    label: "Santa Fe rail bypass",
    year: "1906",
    description: "The Atchison, Topeka and Santa Fe Railway bypassed Cherokee Town and Hopewell; merchants relocated to Pauls Valley and Wynnewood.",
    eraIds: ["1907"],
    familySlugs: ["stevenson", "brown", "walker", "harper"]
  },
  {
    id: "statehood-1907",
    label: "Oklahoma statehood",
    year: "1907",
    description: "Oklahoma statehood dissolved tribal jurisdiction and redrew maps, Cherokee Town and Hopewell faded from official records.",
    eraIds: ["1907"],
    familySlugs: ["stevenson", "smith", "walker", "brown", "perry"]
  }
];
const ERA_DETAILS = {
  "pre-1830": {
    burials: [],
    arrivals: [],
    eventIds: []
  },
  "1830s": {
    burials: [],
    arrivals: [
      {
        familySlug: "folsom",
        surname: "Folsom",
        year: 1838,
        note: "Arrived with Choctaw nation during Removal."
      },
      {
        familySlug: "stevenson",
        surname: "Stevenson",
        year: 1839,
        note: "Mobile Stevenson lineage enters Indian Territory with Chickasaw removal parties."
      }
    ],
    eventIds: ["removal-era"]
  },
  "1860s": {
    burials: [
      { name: "Early Smith patriarch", year: 1868, familySlug: "smith" }
    ],
    arrivals: [
      {
        familySlug: "stevenson",
        surname: "Stevenson",
        year: 1867,
        note: "Camped south of Cherokee Town log store; cleared timber for Hopewell."
      },
      {
        familySlug: "smith",
        surname: "Smith",
        year: 1866,
        note: "Settled Washita bottoms after Treaty of 1866 recognition."
      },
      {
        familySlug: "perry",
        surname: "Perry",
        year: 1869,
        note: "Arrived as lay preacher and schoolteacher for the new community."
      },
      {
        familySlug: "allen",
        surname: "Allen",
        year: 1870,
        note: "Allied pioneer household migrating with Stevenson and Smith families."
      }
    ],
    eventIds: ["treaty-1866", "hopewell-founded"]
  },
  "late-1800s": {
    burials: [
      { name: "Vann family head", year: 1892, familySlug: "vann" },
      { name: "Folsom patriarch", year: 1912, familySlug: "folsom" }
    ],
    arrivals: [
      {
        familySlug: "vann",
        surname: "Vann",
        year: 1880,
        note: "Farmed east of Cherokee Town; oral history ties family to church founding."
      },
      {
        familySlug: "harper",
        surname: "Harper",
        year: 1885,
        note: "Birthet Harper arrives as bronc breaker for regional ranch outfits."
      },
      {
        familySlug: "walker",
        surname: "Walker",
        year: 1888,
        note: "Native-Black household established near Hopewell schoolhouse."
      }
    ],
    eventIds: ["hopewell-founded", "dawes-act"]
  },
  "1907": {
    burials: [
      { name: "Smith patriarch", year: 1919, familySlug: "smith" },
      { name: "Walker matriarch", year: 1934, familySlug: "walker" }
    ],
    arrivals: [],
    eventIds: ["dawes-act", "rail-bypass-1906", "statehood-1907"]
  }
};
const FAMILY_RECORDS = [
  {
    slug: "stevenson",
    surname: "Stevenson",
    years: "c. 1860s-present",
    kind: "Chickasaw Freedmen",
    excerpt: "Lineage of Mobile Stevenson & Lanie Colbert, Steven Stevenson, and Mack James Stevenson.",
    narrative: "Foundational Chickasaw Freedmen patriarchs who pitched camp south of Cherokee Town, cleared the Washita valley, and fought for tribal recognition through allotment and statehood.",
    eventIds: ["removal-era", "treaty-1866", "hopewell-founded", "dawes-act", "rail-bypass-1906", "statehood-1907"],
    eraIds: ["1830s", "1860s", "late-1800s", "1907"],
    milestones: [
      { kind: "birth", label: "Mobile Stevenson born", year: 1835, detail: "Enslaved within Chickasaw nation, pre-removal." },
      { kind: "arrival", label: "Arrival in Indian Territory", year: 1839, detail: "With Chickasaw removal parties.", eventId: "removal-era" },
      { kind: "arrival", label: "Hopewell settlement", year: 1867, detail: "Camp south of Cherokee Town log store.", eventId: "hopewell-founded" },
      { kind: "dawes", label: "Dawes Roll enrollment", year: 1902, eventId: "dawes-act" },
      { kind: "allotment", label: "Wildhorse Creek allotment", year: 1904, detail: "Garvin County acreage secured.", eventId: "dawes-act" }
    ]
  },
  {
    slug: "smith",
    surname: "Smith",
    years: "1842-1919",
    kind: "Freedman lineage",
    excerpt: "Among the earliest documented burials at Hopewell.",
    narrative: "The Smith family carried both Cherokee and Freedman citizenship, recorded in the Dawes Rolls of 1902, among the earliest documented burials at Hopewell Cemetery.",
    eventIds: ["treaty-1866", "hopewell-founded", "dawes-act", "statehood-1907"],
    eraIds: ["1860s", "late-1800s", "1907"],
    milestones: [
      { kind: "birth", label: "Smith patriarch born", year: 1842 },
      { kind: "arrival", label: "Washita valley settlement", year: 1866, eventId: "treaty-1866" },
      { kind: "dawes", label: "Dawes Rolls of 1902", year: 1902, eventId: "dawes-act" },
      { kind: "allotment", label: "Allotment recorded", year: 1903, eventId: "dawes-act" },
      { kind: "burial", label: "Burial at Hopewell", year: 1919 }
    ]
  },
  {
    slug: "harper",
    surname: "Harper",
    years: "Late 1800s",
    kind: "Cattle trade",
    excerpt: "Birthet Harper, regional bronc breaker.",
    narrative: "Hopewell men worked the heart of cattle country. Birthet Harper gained regional fame breaking wild broncos for ranching outfits along the Washita corridor.",
    eventIds: ["hopewell-founded", "rail-bypass-1906"],
    eraIds: ["late-1800s", "1907"],
    milestones: [
      { kind: "arrival", label: "Arrival in Garvin County", year: 1885, detail: "Joined Hopewell ranch-hand economy." },
      { kind: "birth", label: "Birthet Harper active", year: 1890, detail: "Peak years as bronc breaker." }
    ]
  },
  {
    slug: "allen",
    surname: "Allen",
    years: "1860s-1900s",
    kind: "Pioneer household",
    excerpt: "Allied pioneer family of the Washita valley.",
    narrative: "The Allen family migrated with the Stevensons and Smiths during the fight for Freedmen citizenship and land after the Treaty of 1866.",
    eventIds: ["treaty-1866", "hopewell-founded"],
    eraIds: ["1860s", "late-1800s"],
    milestones: [
      { kind: "arrival", label: "Washita valley migration", year: 1870, eventId: "treaty-1866" },
      { kind: "arrival", label: "Hopewell community", year: 1872, eventId: "hopewell-founded" }
    ]
  },
  {
    slug: "vann",
    surname: "Vann",
    years: "1855-1930",
    kind: "Cherokee Freedman",
    excerpt: "Farmed along the Washita bottoms east of Cherokee Town.",
    narrative: "Oral history places the Vann family at the founding of the Hopewell church. Farm ledgers document life along the Washita bottoms through allotment.",
    eventIds: ["treaty-1866", "hopewell-founded", "dawes-act"],
    eraIds: ["1860s", "late-1800s"],
    milestones: [
      { kind: "birth", label: "Vann patriarch born", year: 1855 },
      { kind: "arrival", label: "Washita bottoms farm", year: 1880, eventId: "hopewell-founded" },
      { kind: "dawes", label: "Dawes Roll enrollment", year: 1902, eventId: "dawes-act" },
      { kind: "allotment", label: "Farm allotment secured", year: 1904, eventId: "dawes-act" },
      { kind: "burial", label: "Burial at Hopewell", year: 1930 }
    ]
  },
  {
    slug: "brown",
    surname: "Brown",
    years: "1860s-present",
    kind: "Continuing line",
    excerpt: "Custodians of surviving photograph collections.",
    narrative: "Descendants still living in Garvin County hold one of the few surviving photograph collections from the original Hopewell community, through rail bypass and statehood.",
    eventIds: ["dawes-act", "rail-bypass-1906", "statehood-1907"],
    eraIds: ["late-1800s", "1907"],
    milestones: [
      { kind: "birth", label: "Brown lineage in territory", year: 1865 },
      { kind: "dawes", label: "Dawes enrollment", year: 1903, eventId: "dawes-act" },
      { kind: "allotment", label: "Family allotment", year: 1905, eventId: "dawes-act" }
    ]
  },
  {
    slug: "folsom",
    surname: "Folsom",
    years: "1848-1912",
    kind: "Choctaw kinship",
    excerpt: "Marriage records connect Folsom to Hopewell through the 1880s.",
    narrative: "Marriage records connect the Folsom family to Hopewell through the late 1880s. Burial confirmed by surviving headstone fragment.",
    eventIds: ["removal-era", "dawes-act"],
    eraIds: ["1830s", "late-1800s"],
    milestones: [
      { kind: "birth", label: "Folsom patriarch born", year: 1848 },
      { kind: "arrival", label: "Choctaw Removal arrival", year: 1838, eventId: "removal-era" },
      { kind: "dawes", label: "Dawes Roll", year: 1901, eventId: "dawes-act" },
      { kind: "burial", label: "Burial at Hopewell", year: 1912 }
    ]
  },
  {
    slug: "perry",
    surname: "Perry",
    years: "1851-1925",
    kind: "Freedman lineage",
    excerpt: "Schoolteacher and lay preacher for Hopewell.",
    narrative: "Schoolteacher and lay preacher. Oral histories from three descendant families confirm decades of service to the Hopewell community through emancipation and statehood.",
    eventIds: ["treaty-1866", "hopewell-founded", "statehood-1907"],
    eraIds: ["1860s", "1907"],
    milestones: [
      { kind: "birth", label: "Perry patriarch born", year: 1851 },
      { kind: "arrival", label: "Hopewell settlement", year: 1869, eventId: "treaty-1866" },
      { kind: "arrival", label: "Log schoolhouse service begins", year: 1875, eventId: "hopewell-founded" },
      { kind: "burial", label: "Burial at Hopewell", year: 1925 }
    ]
  },
  {
    slug: "walker",
    surname: "Walker",
    years: "1869-1934",
    kind: "Native-Black household",
    excerpt: "Last recorded burial of the original generation.",
    narrative: "Family bible held by descendants in Oklahoma City lists more than forty relations. Last recorded burial of the original founding generation at Hopewell.",
    eventIds: ["hopewell-founded", "dawes-act", "rail-bypass-1906", "statehood-1907"],
    eraIds: ["late-1800s", "1907"],
    milestones: [
      { kind: "birth", label: "Walker matriarch born", year: 1869 },
      { kind: "arrival", label: "Hopewell household established", year: 1888, eventId: "hopewell-founded" },
      { kind: "dawes", label: "Dawes Roll enrollment", year: 1902, eventId: "dawes-act" },
      { kind: "allotment", label: "Allotment secured", year: 1904, eventId: "dawes-act" },
      { kind: "burial", label: "Burial at Hopewell", year: 1934 }
    ]
  }
];
function familyBySlug(slug) {
  return FAMILY_RECORDS.find((f) => f.slug === slug);
}
function eventById(id) {
  return HISTORICAL_EVENTS.find((e) => e.id === id);
}
function familiesMentioningEvent(id) {
  return FAMILY_RECORDS.filter((f) => f.eventIds.includes(id));
}
const $$splitComponentImporter = () => import("./archive._slug-DGhZF6dV.mjs");
const Route = createFileRoute("/archive/$slug")({
  validateSearch: (search) => ({
    event: typeof search.event === "string" ? search.event : void 0
  }),
  loader: ({
    params
  }) => {
    const record = familyBySlug(params.slug);
    if (!record) throw notFound();
    return {
      record
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.record.surname} Family | Hopewell Cemetery Archive`
    }, {
      name: "description",
      content: loaderData?.record.excerpt ?? ""
    }, {
      property: "og:image",
      content: familyImg
    }]
  })
});
const SitemapDotxmlRoute = Route$a.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$b
});
const PreservationRoute = Route$9.update({
  id: "/preservation",
  path: "/preservation",
  getParentRoute: () => Route$b
});
const MapRoute = Route$8.update({
  id: "/map",
  path: "/map",
  getParentRoute: () => Route$b
});
const HistoryRoute = Route$7.update({
  id: "/history",
  path: "/history",
  getParentRoute: () => Route$b
});
const GalleryRoute = Route$6.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$b
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$b
});
const CommunityRoute = Route$4.update({
  id: "/community",
  path: "/community",
  getParentRoute: () => Route$b
});
const CherokeeTownRoute = Route$3.update({
  id: "/cherokee-town",
  path: "/cherokee-town",
  getParentRoute: () => Route$b
});
const ArchiveRoute = Route$2.update({
  id: "/archive",
  path: "/archive",
  getParentRoute: () => Route$b
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const ArchiveSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ArchiveRoute
});
const ArchiveRouteChildren = {
  ArchiveSlugRoute
};
const ArchiveRouteWithChildren = ArchiveRoute._addFileChildren(ArchiveRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  ArchiveRoute: ArchiveRouteWithChildren,
  CherokeeTownRoute,
  CommunityRoute,
  ContactRoute,
  GalleryRoute,
  HistoryRoute,
  MapRoute,
  PreservationRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ERA_DETAILS as E,
  FAMILY_RECORDS as F,
  HISTORICAL_EVENTS as H,
  MILESTONE_LABELS as M,
  Route$1 as R,
  Route as a,
  communityImg as b,
  cherokeeImg as c,
  familyImg as d,
  eventById as e,
  familiesMentioningEvent as f,
  heroImg as g,
  headstoneImg as h,
  ledger as l,
  router as r
};
