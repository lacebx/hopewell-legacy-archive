/** Shared narrative, landmarks, and external archival references */

export type ArchivalSource = {
  id: string;
  title: string;
  institution: string;
  href: string;
  designNote: string;
};

export const ARCHIVAL_SOURCES: ArchivalSource[] = [
  {
    id: "cemetery-sign",
    title: "Hopewell Cemetery signage & Garvin County records",
    institution: "Oklahoma Cemeteries / OKGenWeb",
    href: "https://www.okcemeteries.net/garvin/hopewell/hopewell.htm",
    designNote: "Cemetery sign post and local burial documentation.",
  },
  {
    id: "freedmen-photo",
    title: "Chickasaw Freedmen — Indian Territory allotments",
    institution: "The Gateway to Oklahoma History",
    href: "https://gateway.okhistory.org/search?q=Chickasaw+Freedmen",
    designNote: "Archival photography anchoring the allotment era and sovereignty struggle.",
  },
  {
    id: "washita-landscape",
    title: "Washita River corridor — Indian Territory",
    institution: "The Gateway to Oklahoma History",
    href: "https://gateway.okhistory.org/ark:/67531/metadc231570/",
    designNote: "Historic landscape of the river corridor linking Cherokee Town and early settlement.",
  },
  {
    id: "territory-map",
    title: "Historic Cherokee settlements & Indian Territory boundaries",
    institution: "Wikipedia · Historic Cherokee settlements",
    href: "https://en.wikipedia.org/wiki/Cherokee_towns",
    designNote: "Boundary context prior to 1907 statehood.",
  },
  {
    id: "garvin-maps",
    title: "Garvin County historical maps",
    institution: "PastMaps · Garvin County collections",
    href: "https://pastmaps.com/collections/garvin-county-oklahoma",
    designNote: "Regional maps showing township layout and cemetery approaches.",
  },
];

export const LANDMARKS = {
  cherokeeTown: {
    title: "Cherokee Town",
    subtitle: "The frontier crossroad",
    location:
      "About 6 miles southeast of modern Pauls Valley, along the Washita River and Cherokee Sandy Creek.",
    details: [
      "Built around a natural, solid-rock river ford — a massive supply hub for stagecoaches, wagon trains, military expeditions, and cattle drives between Fort Sill and Boggy Depot.",
      "At its height: John Shirley's busy log trading post, a general store, cotton gin, blacksmith, and a local doctor.",
    ],
  },
  hopewell: {
    title: "The Hopewell Community",
    subtitle: "A Freedmen's sanctuary",
    location:
      "A few miles northeast of Cherokee Town, about 4 miles north of present-day Wynnewood.",
    details: [
      "Founded in the late 1860s by Freedmen with deep ties to the Choctaw and Chickasaw nations — families who survived forced removal and the Trail of Tears.",
      "Centered on a log schoolhouse that doubled as a church on Sundays — the spiritual and social heartbeat of the community.",
    ],
  },
} as const;

export const STEVENSON_LINEAGE = {
  title: "The Stevenson Legacy & Taming the Frontier",
  patriarchs: [
    "Mobile Stevenson & Lanie Colbert",
    "Steven Stevenson",
    "Mack James Stevenson",
  ],
  alliedFamilies: ["Smith", "Harper", "Allen"],
  fightForSovereignty: `Following the Civil War, Freedmen in Indian Territory faced a daunting wilderness and a complex battle for tribal citizenship and lands. Pioneers like the Smith, Harper, Allen, and Stevenson families migrated to the Washita River valley. Chickasaw Freedmen patriarchs pitched camp just south of the Cherokee Town log store to access supplies while clearing surrounding land.`,
  buildingCommunity: [
    "Within weeks, families cleared thick timber and built dirt-floor log homes with heavy timber roofs packed with prairie earth.",
    "Generations of Stevensons fought for recognition within the nation; after the Allotment Act, family members secured land near Wildhorse Creek and surrounding Garvin County acreage.",
    "Hopewell men became skilled ranch hands in the heart of cattle country — pioneers like Birthet Harper gained regional fame for breaking wild broncos.",
    "The Hopewell log school educated the first generation of free-born children; Sunday church services bonded the community through decades of structural oppression.",
  ],
  railwayEra: `In 1906, the Atchison, Topeka and Santa Fe Railway bypassed both Cherokee Town and Hopewell. Merchants and residents relocated toward the tracks, building Pauls Valley and Wynnewood. When Oklahoma achieved statehood in 1907, old boundary lines faded — Cherokee Town and Hopewell became ghost towns on paper, but never in memory.`,
} as const;

export const CEMETERY_LEGACY = {
  location:
    "4 miles north of Wynnewood, just east of N County Road 3280 — Garvin County, Oklahoma.",
  body: `While log cabins and trading posts are gone, Hopewell Cemetery remains a permanent monument to early pioneers: trailblazers who cleared the land, Black cowboys who rode the territory's trails, military veterans, and generations of descendants. Land stewarded by the Stevenson family and this sacred ground ensure the story of Chickasaw Freedmen will not be forgotten.`,
} as const;

export const CROSSROADS_INTRO = `The historic Hopewell Cemetery in Garvin County, Oklahoma, is more than a final resting place. It is the physical anchor of a powerful chapter in American history — the story of resilient Chickasaw and Choctaw Freedmen who carved independent lives on the frontier of Indian Territory, alongside one of the region's most vital pioneer crossroads: Cherokee Town.`;
