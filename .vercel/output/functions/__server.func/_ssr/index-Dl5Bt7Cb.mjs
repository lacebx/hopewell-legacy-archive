import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link, u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { a as PageShell, R as Reveal } from "./reveal-THcP2mTz.mjs";
import { C as Canvas, u as useFrame } from "../_libs/react-three__fiber.mjs";
import { R as Route$1, g as heroImg, d as familyImg, b as communityImg, c as cherokeeImg, h as headstoneImg, f as familiesMentioningEvent, E as ERA_DETAILS, H as HISTORICAL_EVENTS, e as eventById } from "./router-WGWV-_zI.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { m as mapImg } from "./territory-map-Be_ddE_I.mjs";
import { u as useScroll, a as useTransform, m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { a as AdditiveBlending, b as Color, k as Vector3, M as MathUtils } from "../_libs/three.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/zustand.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/scheduler.mjs";
import "../_libs/its-fine.mjs";
import "../_libs/react-use-measure.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Dust({ count = 1400 }) {
  const points = reactExports.useRef(null);
  const mouse = reactExports.useRef({ x: 0, y: 0 });
  const { positions, speeds } = reactExports.useMemo(() => {
    const positions2 = new Float32Array(count * 3);
    const speeds2 = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions2[i * 3] = (Math.random() - 0.5) * 24;
      positions2[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions2[i * 3 + 2] = (Math.random() - 0.5) * 10;
      speeds2[i] = 8e-4 + Math.random() * 3e-3;
    }
    return { positions: positions2, speeds: speeds2 };
  }, [count]);
  useFrame((state) => {
    const geo = points.current.geometry;
    const arr = geo.attributes.position.array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i];
      arr[i * 3] += Math.sin(t * 0.3 + i) * 8e-4;
      if (arr[i * 3 + 1] > 7) arr[i * 3 + 1] = -7;
    }
    geo.attributes.position.needsUpdate = true;
    points.current.rotation.y = MathUtils.lerp(
      points.current.rotation.y,
      mouse.current.x * 0.08,
      0.03
    );
    points.current.rotation.x = MathUtils.lerp(
      points.current.rotation.x,
      -mouse.current.y * 0.05,
      0.03
    );
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "points",
    {
      ref: points,
      onPointerMove: (e) => {
        mouse.current.x = e.clientX / window.innerWidth * 2 - 1;
        mouse.current.y = e.clientY / window.innerHeight * 2 - 1;
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "bufferAttribute",
          {
            attach: "attributes-position",
            args: [positions, 3],
            count
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "pointsMaterial",
          {
            size: 0.025,
            color: new Color("#d9b46a"),
            transparent: true,
            opacity: 0.7,
            sizeAttenuation: true,
            depthWrite: false,
            blending: AdditiveBlending
          }
        )
      ]
    }
  );
}
function DustCanvas({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Canvas,
    {
      camera: { position: [0, 0, 8], fov: 55 },
      dpr: [1, 1.5],
      gl: { antialias: true, alpha: true },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dust, {}) })
    }
  ) });
}
function Constellation() {
  const group = reactExports.useRef(null);
  const points = reactExports.useRef(null);
  const lines = reactExports.useRef(null);
  const { positions, linePositions } = reactExports.useMemo(() => {
    const N = 220;
    const positions2 = new Float32Array(N * 3);
    const v = new Vector3();
    const pts = [];
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      v.set(
        Math.cos(theta) * Math.sin(phi),
        Math.sin(theta) * Math.sin(phi),
        Math.cos(phi)
      ).multiplyScalar(2.4);
      positions2[i * 3] = v.x;
      positions2[i * 3 + 1] = v.y;
      positions2[i * 3 + 2] = v.z;
      pts.push(v.clone());
    }
    const linePts = [];
    for (let i = 0; i < pts.length; i++) {
      const dists = pts.map((p, j) => ({ d: pts[i].distanceTo(p), j })).filter((x) => x.j !== i).sort((a, b) => a.d - b.d).slice(0, 2);
      for (const { j } of dists) {
        linePts.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
      }
    }
    return {
      positions: positions2,
      linePositions: new Float32Array(linePts)
    };
  }, []);
  useFrame((state, dt) => {
    if (!group.current) return;
    group.current.rotation.y += dt * 0.08;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: group, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref: points, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3], count: positions.length / 3 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "pointsMaterial",
        {
          size: 0.05,
          color: new Color("#e8c47a"),
          transparent: true,
          opacity: 0.9,
          sizeAttenuation: true,
          depthWrite: false
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("lineSegments", { ref: lines, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [linePositions, 3], count: linePositions.length / 3 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("lineBasicMaterial", { color: new Color("#9b6a3a"), transparent: true, opacity: 0.25 })
    ] })
  ] });
}
function ConstellationCanvas({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Canvas, { camera: { position: [0, 0, 6.5], fov: 50 }, dpr: [1, 1.5], gl: { alpha: true, antialias: true }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Constellation, {}) }) }) });
}
const ERAS = [
  {
    id: "pre-1830",
    year: "Pre-1830",
    title: "Native Homelands",
    body: "Before removal, the lands along the Washita were home to Indigenous peoples whose presence shaped every trail, river crossing, and gathering ground.",
    clusters: ["homelands"],
    arcT: 0
  },
  {
    id: "1830s",
    year: "1830s",
    title: "The Removal Era",
    body: "The Cherokee, Choctaw, Chickasaw, and others were forced west into Indian Territory, carrying with them the Black families bound to them by slavery and, eventually, by kinship.",
    clusters: ["removal", "homelands"],
    arcT: Math.PI * 0.25
  },
  {
    id: "1860s",
    year: "1860s",
    title: "Emancipation in the Territory",
    body: "Treaties of 1866 recognized Freedmen of the tribes. Communities of Black and Native families began to root themselves to the land in their own right.",
    clusters: ["emancipation", "removal"],
    arcT: Math.PI * 0.5
  },
  {
    id: "late-1800s",
    year: "Late 1800s",
    title: "Cherokee Town & Hopewell",
    body: "John Shirley's log trading post, cotton gin, and blacksmith anchored the Washita ford, while Hopewell's log schoolhouse and church became the spiritual heart of Chickasaw and Choctaw Freedmen families just miles northeast.",
    clusters: ["settlement", "emancipation"],
    arcT: Math.PI * 0.75
  },
  {
    id: "1907",
    year: "1907 →",
    title: "Statehood & Forgetting",
    body: "The Santa Fe Railway bypassed Cherokee Town and Hopewell in 1906; merchants built Pauls Valley and Wynnewood along the tracks. Statehood redrew the maps, but the cemetery, the Stevensons, and the kinships remained.",
    clusters: ["statehood", "settlement"],
    arcT: Math.PI
  }
];
const CLUSTER_META = {
  homelands: { label: "Homelands", center: [0, 2.1, 0.4], color: "#c9e4a5" },
  removal: { label: "Removal routes", center: [-2, 0.3, 0.8], color: "#e8a87a" },
  emancipation: { label: "Freedmen kinship", center: [1.6, -0.5, 1.2], color: "#e8c47a" },
  settlement: { label: "Cherokee Town", center: [0.4, -1.4, 1.8], color: "#d4b896" },
  statehood: { label: "Memory held", center: [1.8, 0.6, -1.6], color: "#b89b6a" }
};
const ARCHIVAL_CARDS = [
  {
    id: "washita-trails",
    eraIds: ["pre-1830"],
    clusters: ["homelands"],
    kind: "Land & memory",
    title: "Washita crossing trails",
    years: "Antiquity-1830",
    excerpt: "River fords and gathering grounds along the Washita, mapped in oral tradition long before state lines."
  },
  {
    id: "folsom-kinship",
    eraIds: ["pre-1830", "1830s"],
    clusters: ["homelands", "removal"],
    kind: "Choctaw kinship",
    title: "Folsom marriage records",
    years: "1848-1912",
    excerpt: "Marriage records connect the Folsom family to Hopewell through the late 1880s. Burial confirmed by surviving headstone fragment.",
    familySlug: "folsom"
  },
  {
    id: "removal-roll",
    eraIds: ["1830s"],
    clusters: ["removal"],
    kind: "Removal era",
    title: "Trail of Tears correspondence",
    years: "1838-1840",
    excerpt: "Letters and muster lists documenting families who arrived in Indian Territory with Cherokee and Choctaw nations."
  },
  {
    id: "smith-lineage",
    eraIds: ["1860s", "late-1800s"],
    clusters: ["emancipation", "settlement"],
    kind: "Freedman lineage",
    title: "Smith family record",
    years: "1842-1919",
    excerpt: "Among the earliest documented burials at Hopewell. Cherokee and Freedman citizenship recorded in the Dawes Rolls of 1902.",
    familySlug: "smith"
  },
  {
    id: "perry-church",
    eraIds: ["1860s"],
    clusters: ["emancipation"],
    kind: "Freedman lineage",
    title: "Perry, lay preacher",
    years: "1851-1925",
    excerpt: "Schoolteacher and lay preacher. Oral histories from three descendant families confirm decades of service to the community.",
    familySlug: "perry"
  },
  {
    id: "vann-washita",
    eraIds: ["late-1800s"],
    clusters: ["settlement"],
    kind: "Cherokee Freedman",
    title: "Vann farm ledger",
    years: "1855-1930",
    excerpt: "Farmed along the Washita bottoms east of Cherokee Town. Oral history places the family at the founding of the Hopewell church.",
    familySlug: "vann"
  },
  {
    id: "walker-bible",
    eraIds: ["late-1800s", "1907"],
    clusters: ["settlement", "statehood"],
    kind: "Native-Black household",
    title: "Walker family bible",
    years: "1869-1934",
    excerpt: "Last recorded burial of the original generation. More than forty relations listed by descendants in Oklahoma City.",
    familySlug: "walker"
  },
  {
    id: "brown-photos",
    eraIds: ["1907"],
    clusters: ["statehood"],
    kind: "Continuing line",
    title: "Brown photograph collection",
    years: "1860s-present",
    excerpt: "Descendants still living in Garvin County. Custodians of one of the few surviving photograph collections from the original community.",
    familySlug: "brown"
  },
  {
    id: "stevenson-allotment",
    eraIds: ["late-1800s", "1907"],
    clusters: ["settlement", "statehood"],
    kind: "Chickasaw Freedmen",
    title: "Stevenson allotment, Wildhorse Creek",
    years: "Allotment era",
    excerpt: "Generations of Stevensons fought for tribal recognition; following the Allotment Act, the family secured land near Wildhorse Creek and Garvin County acreage.",
    familySlug: "stevenson"
  },
  {
    id: "harper-broncos",
    eraIds: ["late-1800s"],
    clusters: ["settlement"],
    kind: "Cattle trade",
    title: "Harper, bronc breaker",
    years: "Late 1800s",
    excerpt: "Birthet Harper gained regional fame for exceptional skill breaking wild broncos for ranching outfits across cattle country.",
    familySlug: "harper"
  },
  {
    id: "railway-bypass",
    eraIds: ["1907"],
    clusters: ["statehood"],
    kind: "Rail & relocation",
    title: "Santa Fe bypass, 1906",
    years: "1906-1907",
    excerpt: "The Atchison, Topeka and Santa Fe Railway bypassed Cherokee Town and Hopewell; residents relocated to Pauls Valley and Wynnewood before statehood."
  }
];
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function EraDetailPanel({ eraId, selectedEventId, onEventSelect }) {
  const era = ERAS.find((e) => e.id === eraId) ?? ERAS[0];
  const detail = ERA_DETAILS[eraId];
  const events = detail.eventIds.map((id) => HISTORICAL_EVENTS.find((e) => e.id === id)).filter(Boolean);
  const linkedFamilies = selectedEventId ? familiesMentioningEvent(selectedEventId) : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-background/80 p-6 md:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Era expanded" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-serif text-2xl text-foreground md:text-3xl", children: era.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: era.body }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-8 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary", children: "Documented burials" }),
        detail.burials.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "No burials recorded for this era yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-3", children: detail.burials.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/archive/$slug",
              params: { slug: b.familySlug },
              className: "font-serif text-foreground hover:text-primary",
              children: b.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 font-mono text-xs text-muted-foreground", children: b.year })
        ] }, `${b.name}-${b.year}`)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary", children: "Family arrivals" }),
        detail.arrivals.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "No new arrivals documented." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-3", children: detail.arrivals.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/archive/$slug",
              params: { slug: a.familySlug },
              className: "font-serif text-foreground hover:text-primary",
              children: a.surname
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 font-mono text-xs", children: a.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs leading-relaxed", children: a.note })
        ] }, `${a.familySlug}-${a.year}`)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary", children: "Historical events" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2", children: events.map((ev) => {
          if (!ev) return null;
          const active = selectedEventId === ev.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => onEventSelect(active ? null : ev.id),
              className: cn(
                "w-full border px-3 py-2 text-left text-sm transition",
                active ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground hover:border-primary/50"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[0.6rem] uppercase tracking-[0.2em]", children: ev.year }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block font-serif text-foreground", children: ev.label })
              ]
            }
          ) }, ev.id);
        }) })
      ] })
    ] }),
    selectedEventId && linkedFamilies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 border-t border-border pt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary", children: "Cross-linked records" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
        "Families whose records mention",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: eventById(selectedEventId)?.label }),
        ":"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 flex flex-wrap gap-2", children: linkedFamilies.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/archive/$slug",
          params: { slug: f.slug },
          search: { event: selectedEventId },
          className: "border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary hover:bg-primary/20",
          children: f.surname
        }
      ) }, f.slug)) })
    ] })
  ] });
}
const CLUSTER_IDS = Object.keys(CLUSTER_META);
new Color("#e8c47a");
function fibonacciSphere(count, radius) {
  const pts = [];
  const v = new Vector3();
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(1 - 2 * (i + 0.5) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    v.set(
      Math.cos(theta) * Math.sin(phi),
      Math.sin(theta) * Math.sin(phi),
      Math.cos(phi)
    ).multiplyScalar(radius);
    pts.push(v.clone());
  }
  return pts;
}
function assignCluster(p) {
  let best = "homelands";
  let bestD = Infinity;
  for (const id of CLUSTER_IDS) {
    const c = CLUSTER_META[id].center;
    const d = p.distanceTo(new Vector3(...c));
    if (d < bestD) {
      bestD = d;
      best = id;
    }
  }
  return best;
}
function ClusterPoints({
  clusterId,
  positions,
  linePositions,
  active,
  dimmed
}) {
  const points = reactExports.useRef(null);
  const lines = reactExports.useRef(null);
  const meta = CLUSTER_META[clusterId];
  const color = reactExports.useMemo(() => new Color(meta.color), [meta.color]);
  useFrame((_, dt) => {
    const targetOpacity = active ? 1 : dimmed ? 0.12 : 0.35;
    const targetSize = active ? 0.09 : 0.04;
    const pm = points.current.material;
    const lm = lines.current.material;
    pm.opacity = MathUtils.lerp(pm.opacity, targetOpacity, dt * 6);
    pm.size = MathUtils.lerp(pm.size, targetSize, dt * 6);
    lm.opacity = MathUtils.lerp(lm.opacity, active ? 0.55 : dimmed ? 0.06 : 0.18, dt * 6);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref: points, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "bufferAttribute",
        {
          attach: "attributes-position",
          args: [positions, 3],
          count: positions.length / 3
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "pointsMaterial",
        {
          size: active ? 0.09 : 0.04,
          color,
          transparent: true,
          opacity: active ? 1 : 0.35,
          sizeAttenuation: true,
          depthWrite: false
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("lineSegments", { ref: lines, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "bufferAttribute",
        {
          attach: "attributes-position",
          args: [linePositions, 3],
          count: linePositions.length / 3
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("lineBasicMaterial", { color, transparent: true, opacity: active ? 0.55 : 0.18 })
    ] })
  ] });
}
function Scene({
  activeClusters,
  focusOnDetail
}) {
  const group = reactExports.useRef(null);
  const cameraTarget = reactExports.useRef(new Vector3(0, 0, 0));
  const clusterGeometry = reactExports.useMemo(() => {
    const allPts = fibonacciSphere(220, 2.4);
    const byCluster = Object.fromEntries(
      CLUSTER_IDS.map((id) => [id, []])
    );
    for (const p of allPts) {
      byCluster[assignCluster(p)].push(p);
    }
    const result = {};
    for (const id of CLUSTER_IDS) {
      const pts = byCluster[id];
      const positions = new Float32Array(pts.length * 3);
      pts.forEach((p, i) => {
        positions[i * 3] = p.x;
        positions[i * 3 + 1] = p.y;
        positions[i * 3 + 2] = p.z;
      });
      const linePts = [];
      for (let i = 0; i < pts.length; i++) {
        const dists = pts.map((p, j) => ({ d: pts[i].distanceTo(p), j })).filter((x) => x.j !== i).sort((a, b) => a.d - b.d).slice(0, 2);
        for (const { j } of dists) {
          linePts.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
        }
      }
      result[id] = { positions, linePositions: new Float32Array(linePts) };
    }
    return result;
  }, []);
  const focusCenter = reactExports.useMemo(() => {
    const primary = [...activeClusters][0];
    if (!primary) return new Vector3(0, 0, 0);
    return new Vector3(...CLUSTER_META[primary].center).multiplyScalar(0.35);
  }, [activeClusters]);
  useFrame((state, dt) => {
    if (!group.current) return;
    group.current.rotation.y += dt * (activeClusters.size ? 0.04 : 0.08);
    group.current.rotation.x = MathUtils.lerp(
      group.current.rotation.x,
      Math.sin(state.clock.elapsedTime * 0.15) * 0.12 + focusCenter.y * 0.04,
      dt * 2
    );
    const detailPan = focusOnDetail ? 1.35 : 0;
    cameraTarget.current.lerp(focusCenter, dt * 2);
    const targetCam = new Vector3(
      cameraTarget.current.x * 0.5 + detailPan,
      cameraTarget.current.y * 0.35,
      focusOnDetail ? 5.8 : 6.5
    );
    state.camera.position.lerp(targetCam, dt * 2.2);
    state.camera.lookAt(
      cameraTarget.current.x + detailPan * 0.4,
      cameraTarget.current.y,
      cameraTarget.current.z
    );
  });
  const hasSelection = activeClusters.size > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.35 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("group", { ref: group, children: CLUSTER_IDS.map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ClusterPoints,
      {
        clusterId: id,
        positions: clusterGeometry[id].positions,
        linePositions: clusterGeometry[id].linePositions,
        active: activeClusters.has(id),
        dimmed: hasSelection && !activeClusters.has(id)
      },
      id
    )) })
  ] });
}
function TimelineConstellation({
  className,
  activeClusters,
  focusOnDetail = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Canvas,
    {
      camera: { position: [0, 0, 6.5], fov: 50 },
      dpr: [1, 1.5],
      gl: { alpha: true, antialias: true },
      style: { touchAction: "none" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scene, { activeClusters, focusOnDetail }) })
    }
  ) });
}
function InteractiveTimeline({ initialEraId, initialEventId }) {
  const navigate = useNavigate({ from: "/" });
  const timelineBlockRef = reactExports.useRef(null);
  const horizontalScrollRef = reactExports.useRef(null);
  const panelRefs = reactExports.useRef([]);
  const [activeEraId, setActiveEraId] = reactExports.useState(initialEraId ?? "pre-1830");
  const [selectedEventId, setSelectedEventId] = reactExports.useState(
    initialEventId ?? null
  );
  const [timelineInView, setTimelineInView] = reactExports.useState(false);
  const [whooshKey, setWhooshKey] = reactExports.useState(0);
  const isProgrammaticScroll = reactExports.useRef(false);
  const panelCount = ERAS.length;
  const syncActiveEraFromScroll = reactExports.useCallback(() => {
    const el = horizontalScrollRef.current;
    if (!el || isProgrammaticScroll.current) return;
    const idx = Math.min(
      panelCount - 1,
      Math.max(0, Math.round(el.scrollLeft / Math.max(el.clientWidth, 1)))
    );
    const nextId = ERAS[idx].id;
    setActiveEraId((prev) => prev === nextId ? prev : nextId);
  }, [panelCount]);
  reactExports.useEffect(() => {
    const scroller = horizontalScrollRef.current;
    if (!scroller) return;
    const onKeyDown = (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      const step = scroller.clientWidth * (e.key === "ArrowLeft" ? -1 : 1);
      scroller.scrollBy({ left: step, behavior: "smooth" });
    };
    const onWheel = (e) => {
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);
      if (absX <= absY) return;
      e.preventDefault();
      scroller.scrollLeft += e.deltaX;
    };
    scroller.addEventListener("wheel", onWheel, { passive: false });
    scroller.addEventListener("scroll", syncActiveEraFromScroll, { passive: true });
    scroller.addEventListener("keydown", onKeyDown);
    return () => {
      scroller.removeEventListener("wheel", onWheel);
      scroller.removeEventListener("scroll", syncActiveEraFromScroll);
      scroller.removeEventListener("keydown", onKeyDown);
    };
  }, [syncActiveEraFromScroll]);
  reactExports.useEffect(() => {
    const block = timelineBlockRef.current;
    if (!block) return;
    const io = new IntersectionObserver(
      ([entry]) => setTimelineInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(block);
    return () => io.disconnect();
  }, []);
  const scrollTimelineBlockIntoView = reactExports.useCallback((animate) => {
    const block = timelineBlockRef.current;
    if (!block) return;
    const headerOffset = 96;
    const top = block.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({
      top: Math.max(0, top),
      behavior: animate ? "smooth" : "auto"
    });
  }, []);
  const jumpToEra = reactExports.useCallback(
    (eraId, animate = true) => {
      const index = ERAS.findIndex((e) => e.id === eraId);
      const scroller = horizontalScrollRef.current;
      if (index < 0 || !scroller) return;
      setActiveEraId(eraId);
      setWhooshKey((k) => k + 1);
      scrollTimelineBlockIntoView(animate);
      isProgrammaticScroll.current = true;
      const left = index * scroller.clientWidth;
      scroller.scrollTo({ left, behavior: animate ? "smooth" : "auto" });
      window.setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, animate ? 600 : 50);
    },
    [scrollTimelineBlockIntoView]
  );
  reactExports.useEffect(() => {
    if (!initialEraId) return;
    const t = window.setTimeout(() => jumpToEra(initialEraId, false), 200);
    return () => window.clearTimeout(t);
  }, []);
  reactExports.useEffect(() => {
    if (initialEventId) setSelectedEventId(initialEventId);
  }, [initialEventId]);
  const syncUrl = reactExports.useCallback(
    (era, event) => {
      navigate({
        search: (prev) => ({
          ...prev,
          era,
          event: event ?? void 0
        }),
        replace: true,
        resetScroll: false
      });
    },
    [navigate]
  );
  const selectEra = reactExports.useCallback(
    (id) => {
      jumpToEra(id);
      syncUrl(id, selectedEventId);
    },
    [jumpToEra, selectedEventId, syncUrl]
  );
  const selectEvent = reactExports.useCallback(
    (id) => {
      setSelectedEventId(id);
      syncUrl(activeEraId, id);
    },
    [activeEraId, syncUrl]
  );
  const activeEra = ERAS.find((e) => e.id === activeEraId) ?? ERAS[0];
  const activeIndex = ERAS.findIndex((e) => e.id === activeEraId);
  const activeClusters = reactExports.useMemo(
    () => new Set(activeEra.clusters),
    [activeEra.clusters]
  );
  const eventFamilies = selectedEventId ? familiesMentioningEvent(selectedEventId) : [];
  const eventFamilySlugs = new Set(eventFamilies.map((f) => f.slug));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative border-y border-border bg-[oklch(0.15_0.01_55)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,oklch(0.22_0.02_60/0.5),transparent_55%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1400px] px-6 py-24 lg:px-10 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "A history in five movements" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-serif text-4xl leading-tight text-foreground md:text-6xl", children: "The land remembers what the map forgot." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-relaxed text-muted-foreground", children: "In the timeline below, use horizontal scroll only (trackpad sideways, tilt wheel, or Shift + scroll wheel) to move between eras. Scroll up and down normally to continue through the rest of the page." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-2", children: ERAS.map((era) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => selectEra(era.id),
          className: cn(
            "border px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] transition",
            era.id === activeEraId ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground hover:border-primary/50"
          ),
          children: era.year
        },
        era.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: timelineBlockRef,
        className: "relative mx-auto max-w-[1400px] px-4 pb-8 lg:px-10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-[min(88svh,920px)] flex-col overflow-hidden border border-border bg-[oklch(0.13_0.01_52)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 flex-col lg:flex-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[36vh] shrink-0 border-b border-border lg:h-auto lg:w-[40%] lg:border-b-0 lg:border-r", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TimelineConstellation,
                {
                  className: "absolute inset-0",
                  activeClusters,
                  focusOnDetail: timelineInView
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,transparent_40%,oklch(0.13_0.01_52)_85%)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-4 left-4 flex flex-wrap gap-2", children: activeEra.clusters.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-primary",
                  children: CLUSTER_META[c].label
                },
                c
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-4 py-3 lg:px-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground", children: [
                  "↔ Horizontal scroll only · ",
                  activeIndex + 1,
                  " / ",
                  panelCount
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.22em] text-primary", children: activeEra.year })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  ref: horizontalScrollRef,
                  className: "timeline-horizontal-scroll flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain",
                  "aria-label": "Era timeline, scroll horizontally",
                  tabIndex: 0,
                  children: ERAS.map((era, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      ref: (el) => {
                        panelRefs.current[i] = el;
                      },
                      className: "h-full w-full min-w-full shrink-0 snap-start overflow-y-auto px-4 py-6 lg:px-8 lg:py-8",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-primary", children: era.year }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-serif text-3xl text-foreground md:text-4xl", children: era.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground", children: era.body }),
                        era.id === activeEraId && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            initial: { x: 100, opacity: 0, filter: "blur(10px)" },
                            animate: { x: 0, opacity: 1, filter: "blur(0px)" },
                            exit: { x: -72, opacity: 0, filter: "blur(8px)" },
                            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              EraDetailPanel,
                              {
                                eraId: era.id,
                                selectedEventId,
                                onEventSelect: selectEvent
                              }
                            )
                          },
                          `${era.id}-${whooshKey}`
                        ) }) })
                      ]
                    },
                    era.id
                  ))
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 gap-1 overflow-x-auto border-t border-border bg-background/90 px-2 py-2 backdrop-blur-sm", children: ERAS.map((era, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => selectEra(era.id),
              className: cn(
                "shrink-0 border px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] transition",
                era.id === activeEraId ? "border-primary bg-primary/15 text-primary" : "border-transparent text-muted-foreground hover:text-primary"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 opacity-50", children: String(i + 1).padStart(2, "0") }),
                era.year
              ]
            },
            era.id
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1400px] px-6 py-24 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Records for this era" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-3 font-serif text-3xl text-foreground md:text-4xl", children: [
            "Archival cards: ",
            activeEra.title,
            selectedEventId && " · event filter active"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/archive",
            className: "shrink-0 border-b border-primary pb-1 text-xs uppercase tracking-[0.28em] text-primary",
            children: "Full archive →"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: ARCHIVAL_CARDS.map((card) => {
        const eraMatch = card.eraIds.includes(activeEraId);
        const eventMatch = !selectedEventId || !card.familySlug || eventFamilySlugs.has(card.familySlug);
        const highlighted = eraMatch && eventMatch;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "article",
          {
            "aria-hidden": !highlighted,
            className: cn(
              "relative bg-background p-8 transition-all duration-700",
              highlighted ? "ring-1 ring-inset ring-primary/60 opacity-100" : "opacity-25 grayscale-[0.4]"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: cn(
                    "font-mono text-[0.65rem] uppercase tracking-[0.32em]",
                    highlighted ? "text-primary" : "text-muted-foreground"
                  ),
                  children: card.kind
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 font-serif text-2xl text-foreground", children: card.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-mono text-xs text-muted-foreground", children: card.years }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "my-5 hairline w-10 transition-colors",
                    highlighted ? "bg-primary" : "bg-border"
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: card.excerpt }),
              highlighted && card.familySlug && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/archive/$slug",
                  params: { slug: card.familySlug },
                  search: selectedEventId ? { event: selectedEventId } : {},
                  className: "mt-6 inline-block font-mono text-[0.6rem] uppercase tracking-[0.28em] text-primary hover:underline",
                  children: "Open family record →"
                }
              )
            ]
          },
          card.id
        );
      }) })
    ] })
  ] });
}
function Home() {
  const {
    era,
    event
  } = Route$1.useSearch();
  const heroRef = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref: heroRef, className: "relative grain vignette h-[100svh] min-h-[700px] w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
        y
      }, className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Hopewell Cemetery at golden hour", className: "h-[120%] w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DustCanvas, { className: "pointer-events-none absolute inset-0 z-[5]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
        opacity
      }, className: "relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1.4,
          delay: 0.3
        }, className: "eyebrow", children: "Est. preservation · Indian Territory · Oklahoma" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 40,
          filter: "blur(12px)"
        }, animate: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        }, transition: {
          duration: 1.8,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }, className: "mt-8 max-w-5xl font-serif text-5xl leading-[1.02] tracking-tight text-foreground text-balance md:text-7xl lg:text-[5.5rem]", children: [
          "Before Oklahoma was Oklahoma,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-primary/90", children: "there was Hopewell." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1.4,
          delay: 1.1
        }, className: "mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg", children: "A sacred digital archive preserving the history, lineage, and legacy of the Hopewell Community, Cherokee Town, and Chickasaw Freedmen families, including the Stevenson lineage, along the Washita River." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1.2,
          delay: 1.4
        }, className: "mt-12 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/community", className: "group relative inline-flex items-center gap-3 border border-primary bg-primary px-8 py-4 text-xs uppercase tracking-[0.28em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary", children: [
            "Explore the Legacy",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/archive", className: "inline-flex items-center gap-3 border border-border px-8 py-4 text-xs uppercase tracking-[0.28em] text-foreground transition-all hover:border-primary hover:text-primary", children: "View Historical Archive" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 2
      }, className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground", children: "Scroll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
          y: [0, 12, 0]
        }, transition: {
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut"
        }, className: "h-12 w-px bg-gradient-to-b from-primary to-transparent" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-y border-border bg-[oklch(0.16_0.01_55)] py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ConstellationCanvas, { className: "pointer-events-none absolute inset-0 opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.16_0.01_55)_75%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1100px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-center", children: "Our Mission" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-10 max-w-4xl text-center font-serif text-3xl leading-[1.3] text-foreground text-balance md:text-5xl", children: [
          "We preserve the ground, the names, and the stories of those who built, and were buried in, the Hopewell Community, so that",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-primary", children: "no descendant ever again has to wonder if they came from somewhere." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-12 hairline w-32" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InteractiveTimeline, { initialEraId: era, initialEventId: event }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative grain overflow-hidden border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[70vh] min-h-[500px] w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mapImg, alt: "Antique map of Indian Territory", loading: "lazy", className: "absolute inset-0 h-full w-full object-cover opacity-60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Cartography of memory" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-serif text-4xl leading-tight text-foreground md:text-6xl", children: "Cherokee Town stood here, at the crossing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-relaxed text-muted-foreground md:text-base", children: "Five miles from Hopewell, John Shirley's log trading post anchored the solid-rock ford, stagecoaches, cattle drives, and Freedmen families all passed through Cherokee Town before the railroad chose other paths in 1906." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/history", className: "border-b border-primary pb-1 text-xs uppercase tracking-[0.28em] text-primary", children: "Historical context →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cherokee-town", className: "border-b border-border pb-1 text-xs uppercase tracking-[0.28em] text-muted-foreground hover:border-primary hover:text-primary", children: "Cherokee Town →" })
        ] })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-20 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 border border-primary/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: familyImg, alt: "Archival family portrait, late 1800s", loading: "lazy", className: "relative w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground", children: "Plate I, composite archival portrait, c. 1890s" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Why this matters" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-serif text-4xl leading-tight text-foreground md:text-6xl", children: "Identity is restored one name at a time." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-6 text-base leading-relaxed text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For more than a century, Chickasaw and Choctaw Freedmen, families like the Stevensons, Smiths, Harpers, and Allens, lived at the intersection of two erasures: written out of state history, and pushed to the edges of tribal rolls." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Their headstones still stand. Their kinships still hold. Their stories, once spoken in kitchens, churches, and porches, are being gathered here, deliberately, with reverence." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-2xl italic leading-snug text-foreground", children: '"When the names return, the people return."' })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border bg-[oklch(0.15_0.01_55)] py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Enter the archive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 max-w-2xl font-serif text-4xl leading-tight text-foreground md:text-6xl", children: "Six rooms in the preserved memory." })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3", children: [{
        to: "/history",
        num: "·",
        title: "Historical Context",
        body: "Cherokee Town, Hopewell, and the Stevenson legacy.",
        img: mapImg
      }, {
        to: "/community",
        num: "I",
        title: "The Hopewell Community",
        body: "Origins, migration, settlement, kinship.",
        img: communityImg
      }, {
        to: "/cherokee-town",
        num: "II",
        title: "Cherokee Town",
        body: "Trade routes, the Washita crossing, frontier life.",
        img: cherokeeImg
      }, {
        to: "/archive",
        num: "III",
        title: "Family Legacy Archive",
        body: "Stories, obituaries, lineages, oral histories.",
        img: familyImg
      }, {
        to: "/gallery",
        num: "IV",
        title: "Gallery",
        body: "Photographs, documents, newspaper clippings.",
        img: headstoneImg
      }, {
        to: "/map",
        num: "V",
        title: "Cemetery Map",
        body: "Burial records and the ground that holds them.",
        img: heroImg
      }, {
        to: "/preservation",
        num: "VI",
        title: "Preservation",
        body: "How we protect, restore, and continue.",
        img: mapImg
      }].map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: card.to, className: "group relative block h-full overflow-hidden bg-background", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: card.img, alt: "", loading: "lazy", className: "h-full w-full object-cover opacity-50 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-70" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif text-sm italic text-primary", children: [
            "· ",
            card.num,
            " ·"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-serif text-2xl text-foreground md:text-3xl", children: card.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: card.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-6 text-xs uppercase tracking-[0.28em] text-primary opacity-0 transition-opacity group-hover:opacity-100", children: "Enter →" })
        ] })
      ] }) }, card.to)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative grain vignette overflow-hidden py-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: headstoneImg, alt: "", loading: "lazy", className: "h-full w-full object-cover opacity-25" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-3xl italic leading-[1.3] text-foreground text-balance md:text-5xl", children: '"Every headstone is a sentence the land has been holding, waiting for someone to read it aloud."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 font-mono text-[0.7rem] uppercase tracking-[0.32em] text-primary", children: "From the founding statement" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1100px] px-6 text-center lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Help carry it forward" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight text-foreground text-balance md:text-6xl", children: "Help preserve what history tried to forget." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground", children: "The Hopewell Cemetery Association is a 501(c)(3) nonprofit. Every contribution, financial, ancestral, or oral, protects ground that has waited a long time to be remembered." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/preservation", className: "border border-primary bg-primary px-10 py-4 text-xs uppercase tracking-[0.28em] text-primary-foreground transition hover:bg-transparent hover:text-primary", children: "Support Preservation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "border border-border px-10 py-4 text-xs uppercase tracking-[0.28em] text-foreground transition hover:border-primary hover:text-primary", children: "Submit Family History" })
      ] })
    ] }) }) })
  ] });
}
export {
  Home as component
};
