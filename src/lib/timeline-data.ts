export type EraId = "pre-1830" | "1830s" | "1860s" | "late-1800s" | "1907";

export type ClusterId = "homelands" | "removal" | "emancipation" | "settlement" | "statehood";

export type Era = {
  id: EraId;
  year: string;
  title: string;
  body: string;
  clusters: ClusterId[];
  /** Radians along the 3D timeline arc (0 → π) */
  arcT: number;
};

export type ArchivalCard = {
  id: string;
  eraIds: EraId[];
  clusters: ClusterId[];
  kind: string;
  title: string;
  years: string;
  excerpt: string;
};

export const ERAS: Era[] = [
  {
    id: "pre-1830",
    year: "Pre-1830",
    title: "Native Homelands",
    body: "Before removal, the lands along the Washita were home to Indigenous peoples whose presence shaped every trail, river crossing, and gathering ground.",
    clusters: ["homelands"],
    arcT: 0,
  },
  {
    id: "1830s",
    year: "1830s",
    title: "The Removal Era",
    body: "The Cherokee, Choctaw, Chickasaw, and others were forced west into Indian Territory — carrying with them the Black families bound to them by slavery and, eventually, by kinship.",
    clusters: ["removal", "homelands"],
    arcT: Math.PI * 0.25,
  },
  {
    id: "1860s",
    year: "1860s",
    title: "Emancipation in the Territory",
    body: "Treaties of 1866 recognized Freedmen of the tribes. Communities of Black and Native families began to root themselves to the land in their own right.",
    clusters: ["emancipation", "removal"],
    arcT: Math.PI * 0.5,
  },
  {
    id: "late-1800s",
    year: "Late 1800s",
    title: "Cherokee Town & Hopewell",
    body: "John Shirley's log trading post, cotton gin, and blacksmith anchored the Washita ford — while Hopewell's log schoolhouse and church became the spiritual heart of Chickasaw and Choctaw Freedmen families just miles northeast.",
    clusters: ["settlement", "emancipation"],
    arcT: Math.PI * 0.75,
  },
  {
    id: "1907",
    year: "1907 →",
    title: "Statehood & Forgetting",
    body: "The Santa Fe Railway bypassed Cherokee Town and Hopewell in 1906; merchants built Pauls Valley and Wynnewood along the tracks. Statehood redrew the maps — but the cemetery, the Stevensons, and the kinships remained.",
    clusters: ["statehood", "settlement"],
    arcT: Math.PI,
  },
];

export const CLUSTER_META: Record<
  ClusterId,
  { label: string; center: [number, number, number]; color: string }
> = {
  homelands: { label: "Homelands", center: [0, 2.1, 0.4], color: "#c9e4a5" },
  removal: { label: "Removal routes", center: [-2, 0.3, 0.8], color: "#e8a87a" },
  emancipation: { label: "Freedmen kinship", center: [1.6, -0.5, 1.2], color: "#e8c47a" },
  settlement: { label: "Cherokee Town", center: [0.4, -1.4, 1.8], color: "#d4b896" },
  statehood: { label: "Memory held", center: [1.8, 0.6, -1.6], color: "#b89b6a" },
};

export const ARCHIVAL_CARDS: ArchivalCard[] = [
  {
    id: "washita-trails",
    eraIds: ["pre-1830"],
    clusters: ["homelands"],
    kind: "Land & memory",
    title: "Washita crossing trails",
    years: "Antiquity – 1830",
    excerpt: "River fords and gathering grounds along the Washita — mapped in oral tradition long before state lines.",
  },
  {
    id: "folsom-kinship",
    eraIds: ["pre-1830", "1830s"],
    clusters: ["homelands", "removal"],
    kind: "Choctaw kinship",
    title: "Folsom marriage records",
    years: "1848 – 1912",
    excerpt: "Marriage records connect the Folsom family to Hopewell through the late 1880s. Burial confirmed by surviving headstone fragment.",
  },
  {
    id: "removal-roll",
    eraIds: ["1830s"],
    clusters: ["removal"],
    kind: "Removal era",
    title: "Trail of Tears correspondence",
    years: "1838 – 1840",
    excerpt: "Letters and muster lists documenting families who arrived in Indian Territory with Cherokee and Choctaw nations.",
  },
  {
    id: "smith-lineage",
    eraIds: ["1860s", "late-1800s"],
    clusters: ["emancipation", "settlement"],
    kind: "Freedman lineage",
    title: "Smith family record",
    years: "1842 – 1919",
    excerpt: "Among the earliest documented burials at Hopewell. Cherokee and Freedman citizenship recorded in the Dawes Rolls of 1902.",
  },
  {
    id: "perry-church",
    eraIds: ["1860s"],
    clusters: ["emancipation"],
    kind: "Freedman lineage",
    title: "Perry — lay preacher",
    years: "1851 – 1925",
    excerpt: "Schoolteacher and lay preacher. Oral histories from three descendant families confirm decades of service to the community.",
  },
  {
    id: "vann-washita",
    eraIds: ["late-1800s"],
    clusters: ["settlement"],
    kind: "Cherokee Freedman",
    title: "Vann farm ledger",
    years: "1855 – 1930",
    excerpt: "Farmed along the Washita bottoms east of Cherokee Town. Oral history places the family at the founding of the Hopewell church.",
  },
  {
    id: "walker-bible",
    eraIds: ["late-1800s", "1907"],
    clusters: ["settlement", "statehood"],
    kind: "Native–Black household",
    title: "Walker family bible",
    years: "1869 – 1934",
    excerpt: "Last recorded burial of the original generation. More than forty relations listed by descendants in Oklahoma City.",
  },
  {
    id: "brown-photos",
    eraIds: ["1907"],
    clusters: ["statehood"],
    kind: "Continuing line",
    title: "Brown photograph collection",
    years: "1860s – present",
    excerpt: "Descendants still living in Garvin County. Custodians of one of the few surviving photograph collections from the original community.",
  },
  {
    id: "stevenson-allotment",
    eraIds: ["late-1800s", "1907"],
    clusters: ["settlement", "statehood"],
    kind: "Chickasaw Freedmen",
    title: "Stevenson allotment — Wildhorse Creek",
    years: "Allotment era",
    excerpt:
      "Generations of Stevensons fought for tribal recognition; following the Allotment Act, the family secured land near Wildhorse Creek and Garvin County acreage.",
  },
  {
    id: "harper-broncos",
    eraIds: ["late-1800s"],
    clusters: ["settlement"],
    kind: "Cattle trade",
    title: "Harper — bronc breaker",
    years: "Late 1800s",
    excerpt:
      "Birthet Harper gained regional fame for exceptional skill breaking wild broncos for ranching outfits across cattle country.",
  },
  {
    id: "railway-bypass",
    eraIds: ["1907"],
    clusters: ["statehood"],
    kind: "Rail & relocation",
    title: "Santa Fe bypass — 1906",
    years: "1906 – 1907",
    excerpt:
      "The Atchison, Topeka and Santa Fe Railway bypassed Cherokee Town and Hopewell; residents relocated to Pauls Valley and Wynnewood before statehood.",
  },
];

export function cardsForEra(eraId: EraId): ArchivalCard[] {
  return ARCHIVAL_CARDS.filter((c) => c.eraIds.includes(eraId));
}

export function eraById(id: EraId): Era {
  return ERAS.find((e) => e.id === id) ?? ERAS[0];
}
