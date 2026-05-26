import type { EraId } from "@/lib/timeline-data";

export type HistoricalEventId =
  | "removal-era"
  | "treaty-1866"
  | "hopewell-founded"
  | "dawes-act"
  | "rail-bypass-1906"
  | "statehood-1907";

export type MilestoneKind =
  | "birth"
  | "arrival"
  | "dawes"
  | "allotment"
  | "burial";

export type HistoricalEvent = {
  id: HistoricalEventId;
  label: string;
  year: string;
  description: string;
  eraIds: EraId[];
  familySlugs: string[];
};

export type EraBurial = {
  name: string;
  year: number;
  familySlug: string;
};

export type EraArrival = {
  familySlug: string;
  surname: string;
  year: number;
  note: string;
};

export type EraDetail = {
  burials: EraBurial[];
  arrivals: EraArrival[];
  eventIds: HistoricalEventId[];
};

export type PersonalMilestone = {
  kind: MilestoneKind;
  label: string;
  year: number;
  detail?: string;
  eventId?: HistoricalEventId;
};

export type FamilyRecord = {
  slug: string;
  surname: string;
  years: string;
  kind: string;
  excerpt: string;
  narrative: string;
  eventIds: HistoricalEventId[];
  eraIds: EraId[];
  milestones: PersonalMilestone[];
};

export const MILESTONE_LABELS: Record<MilestoneKind, string> = {
  birth: "Birth",
  arrival: "Arrival in Indian Territory",
  dawes: "Dawes Roll enrollment",
  allotment: "Allotment secured",
  burial: "Burial at Hopewell",
};

export const HISTORICAL_EVENTS: HistoricalEvent[] = [
  {
    id: "removal-era",
    label: "Indian Removal",
    year: "1830s",
    description:
      "Forced removal of Cherokee, Choctaw, Chickasaw, and allied Black families into Indian Territory.",
    eraIds: ["1830s"],
    familySlugs: ["folsom", "stevenson"],
  },
  {
    id: "treaty-1866",
    label: "Treaty of 1866",
    year: "1866",
    description:
      "Post-Civil War treaties recognized Freedmen as citizens of the Five Tribes, the legal foundation for Hopewell settlement.",
    eraIds: ["1860s"],
    familySlugs: ["stevenson", "smith", "perry", "allen", "vann"],
  },
  {
    id: "hopewell-founded",
    label: "Hopewell community founded",
    year: "c. 1868",
    description:
      "Freedmen families establish the log schoolhouse and church northeast of Cherokee Town.",
    eraIds: ["1860s", "late-1800s"],
    familySlugs: ["stevenson", "smith", "perry", "vann", "allen"],
  },
  {
    id: "dawes-act",
    label: "Dawes Act & Rolls",
    year: "1887-1907",
    description:
      "The Dawes Act (1887) and subsequent enrollment commissions assigned allotments and recorded Freedmen on tribal rolls.",
    eraIds: ["late-1800s", "1907"],
    familySlugs: ["stevenson", "smith", "vann", "walker", "folsom", "brown"],
  },
  {
    id: "rail-bypass-1906",
    label: "Santa Fe rail bypass",
    year: "1906",
    description:
      "The Atchison, Topeka and Santa Fe Railway bypassed Cherokee Town and Hopewell; merchants relocated to Pauls Valley and Wynnewood.",
    eraIds: ["1907"],
    familySlugs: ["stevenson", "brown", "walker", "harper"],
  },
  {
    id: "statehood-1907",
    label: "Oklahoma statehood",
    year: "1907",
    description:
      "Oklahoma statehood dissolved tribal jurisdiction and redrew maps, Cherokee Town and Hopewell faded from official records.",
    eraIds: ["1907"],
    familySlugs: ["stevenson", "smith", "walker", "brown", "perry"],
  },
];

export const ERA_DETAILS: Record<EraId, EraDetail> = {
  "pre-1830": {
    burials: [],
    arrivals: [],
    eventIds: [],
  },
  "1830s": {
    burials: [],
    arrivals: [
      {
        familySlug: "folsom",
        surname: "Folsom",
        year: 1838,
        note: "Arrived with Choctaw nation during Removal.",
      },
      {
        familySlug: "stevenson",
        surname: "Stevenson",
        year: 1839,
        note: "Mobile Stevenson lineage enters Indian Territory with Chickasaw removal parties.",
      },
    ],
    eventIds: ["removal-era"],
  },
  "1860s": {
    burials: [
      { name: "Early Smith patriarch", year: 1868, familySlug: "smith" },
    ],
    arrivals: [
      {
        familySlug: "stevenson",
        surname: "Stevenson",
        year: 1867,
        note: "Camped south of Cherokee Town log store; cleared timber for Hopewell.",
      },
      {
        familySlug: "smith",
        surname: "Smith",
        year: 1866,
        note: "Settled Washita bottoms after Treaty of 1866 recognition.",
      },
      {
        familySlug: "perry",
        surname: "Perry",
        year: 1869,
        note: "Arrived as lay preacher and schoolteacher for the new community.",
      },
      {
        familySlug: "allen",
        surname: "Allen",
        year: 1870,
        note: "Allied pioneer household migrating with Stevenson and Smith families.",
      },
    ],
    eventIds: ["treaty-1866", "hopewell-founded"],
  },
  "late-1800s": {
    burials: [
      { name: "Vann family head", year: 1892, familySlug: "vann" },
      { name: "Folsom patriarch", year: 1912, familySlug: "folsom" },
    ],
    arrivals: [
      {
        familySlug: "vann",
        surname: "Vann",
        year: 1880,
        note: "Farmed east of Cherokee Town; oral history ties family to church founding.",
      },
      {
        familySlug: "harper",
        surname: "Harper",
        year: 1885,
        note: "Birthet Harper arrives as bronc breaker for regional ranch outfits.",
      },
      {
        familySlug: "walker",
        surname: "Walker",
        year: 1888,
        note: "Native-Black household established near Hopewell schoolhouse.",
      },
    ],
    eventIds: ["hopewell-founded", "dawes-act"],
  },
  "1907": {
    burials: [
      { name: "Smith patriarch", year: 1919, familySlug: "smith" },
      { name: "Walker matriarch", year: 1934, familySlug: "walker" },
    ],
    arrivals: [],
    eventIds: ["dawes-act", "rail-bypass-1906", "statehood-1907"],
  },
};

export const FAMILY_RECORDS: FamilyRecord[] = [
  {
    slug: "stevenson",
    surname: "Stevenson",
    years: "c. 1860s-present",
    kind: "Chickasaw Freedmen",
    excerpt:
      "Lineage of Mobile Stevenson & Lanie Colbert, Steven Stevenson, and Mack James Stevenson.",
    narrative:
      "Foundational Chickasaw Freedmen patriarchs who pitched camp south of Cherokee Town, cleared the Washita valley, and fought for tribal recognition through allotment and statehood.",
    eventIds: ["removal-era", "treaty-1866", "hopewell-founded", "dawes-act", "rail-bypass-1906", "statehood-1907"],
    eraIds: ["1830s", "1860s", "late-1800s", "1907"],
    milestones: [
      { kind: "birth", label: "Mobile Stevenson born", year: 1835, detail: "Enslaved within Chickasaw nation, pre-removal." },
      { kind: "arrival", label: "Arrival in Indian Territory", year: 1839, detail: "With Chickasaw removal parties.", eventId: "removal-era" },
      { kind: "arrival", label: "Hopewell settlement", year: 1867, detail: "Camp south of Cherokee Town log store.", eventId: "hopewell-founded" },
      { kind: "dawes", label: "Dawes Roll enrollment", year: 1902, eventId: "dawes-act" },
      { kind: "allotment", label: "Wildhorse Creek allotment", year: 1904, detail: "Garvin County acreage secured.", eventId: "dawes-act" },
    ],
  },
  {
    slug: "smith",
    surname: "Smith",
    years: "1842-1919",
    kind: "Freedman lineage",
    excerpt: "Among the earliest documented burials at Hopewell.",
    narrative:
      "The Smith family carried both Cherokee and Freedman citizenship, recorded in the Dawes Rolls of 1902, among the earliest documented burials at Hopewell Cemetery.",
    eventIds: ["treaty-1866", "hopewell-founded", "dawes-act", "statehood-1907"],
    eraIds: ["1860s", "late-1800s", "1907"],
    milestones: [
      { kind: "birth", label: "Smith patriarch born", year: 1842 },
      { kind: "arrival", label: "Washita valley settlement", year: 1866, eventId: "treaty-1866" },
      { kind: "dawes", label: "Dawes Rolls of 1902", year: 1902, eventId: "dawes-act" },
      { kind: "allotment", label: "Allotment recorded", year: 1903, eventId: "dawes-act" },
      { kind: "burial", label: "Burial at Hopewell", year: 1919 },
    ],
  },
  {
    slug: "harper",
    surname: "Harper",
    years: "Late 1800s",
    kind: "Cattle trade",
    excerpt: "Birthet Harper, regional bronc breaker.",
    narrative:
      "Hopewell men worked the heart of cattle country. Birthet Harper gained regional fame breaking wild broncos for ranching outfits along the Washita corridor.",
    eventIds: ["hopewell-founded", "rail-bypass-1906"],
    eraIds: ["late-1800s", "1907"],
    milestones: [
      { kind: "arrival", label: "Arrival in Garvin County", year: 1885, detail: "Joined Hopewell ranch-hand economy." },
      { kind: "birth", label: "Birthet Harper active", year: 1890, detail: "Peak years as bronc breaker." },
    ],
  },
  {
    slug: "allen",
    surname: "Allen",
    years: "1860s-1900s",
    kind: "Pioneer household",
    excerpt: "Allied pioneer family of the Washita valley.",
    narrative:
      "The Allen family migrated with the Stevensons and Smiths during the fight for Freedmen citizenship and land after the Treaty of 1866.",
    eventIds: ["treaty-1866", "hopewell-founded"],
    eraIds: ["1860s", "late-1800s"],
    milestones: [
      { kind: "arrival", label: "Washita valley migration", year: 1870, eventId: "treaty-1866" },
      { kind: "arrival", label: "Hopewell community", year: 1872, eventId: "hopewell-founded" },
    ],
  },
  {
    slug: "vann",
    surname: "Vann",
    years: "1855-1930",
    kind: "Cherokee Freedman",
    excerpt: "Farmed along the Washita bottoms east of Cherokee Town.",
    narrative:
      "Oral history places the Vann family at the founding of the Hopewell church. Farm ledgers document life along the Washita bottoms through allotment.",
    eventIds: ["treaty-1866", "hopewell-founded", "dawes-act"],
    eraIds: ["1860s", "late-1800s"],
    milestones: [
      { kind: "birth", label: "Vann patriarch born", year: 1855 },
      { kind: "arrival", label: "Washita bottoms farm", year: 1880, eventId: "hopewell-founded" },
      { kind: "dawes", label: "Dawes Roll enrollment", year: 1902, eventId: "dawes-act" },
      { kind: "allotment", label: "Farm allotment secured", year: 1904, eventId: "dawes-act" },
      { kind: "burial", label: "Burial at Hopewell", year: 1930 },
    ],
  },
  {
    slug: "brown",
    surname: "Brown",
    years: "1860s-present",
    kind: "Continuing line",
    excerpt: "Custodians of surviving photograph collections.",
    narrative:
      "Descendants still living in Garvin County hold one of the few surviving photograph collections from the original Hopewell community, through rail bypass and statehood.",
    eventIds: ["dawes-act", "rail-bypass-1906", "statehood-1907"],
    eraIds: ["late-1800s", "1907"],
    milestones: [
      { kind: "birth", label: "Brown lineage in territory", year: 1865 },
      { kind: "dawes", label: "Dawes enrollment", year: 1903, eventId: "dawes-act" },
      { kind: "allotment", label: "Family allotment", year: 1905, eventId: "dawes-act" },
    ],
  },
  {
    slug: "folsom",
    surname: "Folsom",
    years: "1848-1912",
    kind: "Choctaw kinship",
    excerpt: "Marriage records connect Folsom to Hopewell through the 1880s.",
    narrative:
      "Marriage records connect the Folsom family to Hopewell through the late 1880s. Burial confirmed by surviving headstone fragment.",
    eventIds: ["removal-era", "dawes-act"],
    eraIds: ["1830s", "late-1800s"],
    milestones: [
      { kind: "birth", label: "Folsom patriarch born", year: 1848 },
      { kind: "arrival", label: "Choctaw Removal arrival", year: 1838, eventId: "removal-era" },
      { kind: "dawes", label: "Dawes Roll", year: 1901, eventId: "dawes-act" },
      { kind: "burial", label: "Burial at Hopewell", year: 1912 },
    ],
  },
  {
    slug: "perry",
    surname: "Perry",
    years: "1851-1925",
    kind: "Freedman lineage",
    excerpt: "Schoolteacher and lay preacher for Hopewell.",
    narrative:
      "Schoolteacher and lay preacher. Oral histories from three descendant families confirm decades of service to the Hopewell community through emancipation and statehood.",
    eventIds: ["treaty-1866", "hopewell-founded", "statehood-1907"],
    eraIds: ["1860s", "1907"],
    milestones: [
      { kind: "birth", label: "Perry patriarch born", year: 1851 },
      { kind: "arrival", label: "Hopewell settlement", year: 1869, eventId: "treaty-1866" },
      { kind: "arrival", label: "Log schoolhouse service begins", year: 1875, eventId: "hopewell-founded" },
      { kind: "burial", label: "Burial at Hopewell", year: 1925 },
    ],
  },
  {
    slug: "walker",
    surname: "Walker",
    years: "1869-1934",
    kind: "Native-Black household",
    excerpt: "Last recorded burial of the original generation.",
    narrative:
      "Family bible held by descendants in Oklahoma City lists more than forty relations. Last recorded burial of the original founding generation at Hopewell.",
    eventIds: ["hopewell-founded", "dawes-act", "rail-bypass-1906", "statehood-1907"],
    eraIds: ["late-1800s", "1907"],
    milestones: [
      { kind: "birth", label: "Walker matriarch born", year: 1869 },
      { kind: "arrival", label: "Hopewell household established", year: 1888, eventId: "hopewell-founded" },
      { kind: "dawes", label: "Dawes Roll enrollment", year: 1902, eventId: "dawes-act" },
      { kind: "allotment", label: "Allotment secured", year: 1904, eventId: "dawes-act" },
      { kind: "burial", label: "Burial at Hopewell", year: 1934 },
    ],
  },
];

export function familyBySlug(slug: string): FamilyRecord | undefined {
  return FAMILY_RECORDS.find((f) => f.slug === slug);
}

export function eventById(id: HistoricalEventId): HistoricalEvent | undefined {
  return HISTORICAL_EVENTS.find((e) => e.id === id);
}

export function familiesForEvent(id: HistoricalEventId): FamilyRecord[] {
  const event = eventById(id);
  if (!event) return [];
  return FAMILY_RECORDS.filter((f) => event.familySlugs.includes(f.slug));
}

export function familiesMentioningEvent(id: HistoricalEventId): FamilyRecord[] {
  return FAMILY_RECORDS.filter((f) => f.eventIds.includes(id));
}
