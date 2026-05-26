# Hopewell Legacy Archive

A sacred digital archive dedicated to preserving the history of the Hopewell Community, Cherokee Town, and the Chickasaw and Choctaw Freedmen families of the Washita River valley in what is now Garvin County, Oklahoma. This project is built on behalf of the **Hopewell Cemetery Association**, a 501(c)(3) nonprofit organization, and serves as both a historical record and a living tribute to the generations who built and sustained this community.

---

## About the Project

The Hopewell Legacy Archive is a full-stack, single-page web application built with React, TypeScript, and TanStack Router. It tells a layered story of Indigenous homelands, forced removal, emancipation, community founding, and eventual erasure, spanning from before 1830 through Oklahoma statehood in 1907. The experience is designed as an immersive, high-fidelity archival journey rather than a simple website, featuring 3D constellation visualizations, parallax scrolling, animated transitions, and deep-linked URLs for every point in history.

The archive centers on a specific geography: the trading crossroads known as Cherokee Town (6 miles southeast of modern Pauls Valley) and the Freedmen sanctuary known as the Hopewell Community (4 miles north of Wynnewood). These places, now largely erased from official records, are brought back through family genealogy, oral tradition, Dawes Roll documentation, burial records, and historical correspondence.

---

## Historical Context

The archive covers six pivotal historical events that shaped the Hopewell Community:

| Event | Year(s) | Description |
|---|---|---|
| Indian Removal | 1830s | Forced removal of Cherokee, Choctaw, Chickasaw, and allied Black families into Indian Territory |
| Treaty of 1866 | 1866 | Post-Civil War treaties recognizing Freedmen as citizens of the Five Tribes |
| Hopewell Founded | c. 1868 | Freedmen families established a log schoolhouse and church as the community heart |
| Dawes Act and Rolls | 1887-1907 | Enrollment commissions assigned allotments and recorded Freedmen on tribal rolls |
| Santa Fe Rail Bypass | 1906 | Railway bypassed Hopewell, causing merchant relocation to Pauls Valley and Wynnewood |
| Oklahoma Statehood | 1907 | Dissolved tribal jurisdiction; Hopewell faded from official records |

### Family Lineages

The archive documents nine core family lineages associated with the Hopewell community:

- **Stevenson** - Allotment land along Wildhorse Creek; stewards of the Hopewell Cemetery
- **Smith** - Among the earliest Hopewell burials; documented on Dawes Rolls
- **Harper** - Regional history of Black cowboy labor and cattle trade
- **Allen** - Founding settlers of the Washita valley after the Civil War
- **Vann** - Farming history; connected to the founding of Hopewell church
- **Brown** - One of the few surviving photograph collections from the original community
- **Folsom** - Connected to pre-1830 Indigenous presence and early kinship
- **Perry** - Lay preacher and schoolteacher; spiritual leader of the community
- **Walker** - A family bible listing over 40 relations of the original generation

### Landmarks

- **Cherokee Town**: A frontier crossroad that served as a massive supply hub for stagecoaches, wagon trains, and cattle drives. Featured a trading post, blacksmith, and cotton gin.
- **The Hopewell Community**: A Freedmen's sanctuary founded in the 1860s, centered on a log schoolhouse that served as the social and spiritual heart of the community.
- **Hopewell Cemetery**: Located east of N County Road 3280 in Garvin County. The final, enduring monument to the pioneers, Black cowboys, and veterans of the area.

---

## Features

### 3D Constellation Timeline
The centerpiece of the archive is an interactive 3D globe rendered with Three.js (via `@react-three/fiber`). Five historical eras are represented as node clusters on a slowly rotating wireframe sphere. The camera tracks a curved path tied to the page's global scroll, so the constellation opens, tilts, and recedes as the visitor descends through the page. Each era node is color-coded and clickable, opening contextual details about the period.

### Interactive Era Timeline
A horizontally scrollable timeline with full keyboard navigation (`ArrowLeft` / `ArrowRight`) and trackpad support. The active era is synchronized via URL search parameters, enabling deep-linking to any specific point in history. An Intersection Observer triggers animations when the component enters view, and `framer-motion` powers smooth layout transitions between eras.

### Archival Cards
Eleven primary archival records are presented as cards throughout the archive, each linked to one or more historical eras. Cards are dynamically filtered and highlighted based on the active era and selected event. Topics include:
- Washita crossing trails and oral tradition (pre-1830)
- Folsom marriage records connecting family to the Hopewell site
- Trail of Tears correspondence
- Smith family burial and Dawes Rolls documentation
- Perry lay preacher and schoolteacher records
- Vann farm ledger and church founding
- Walker family bible with 40+ relations
- Brown photograph collection (one of the few surviving from the original community)
- Stevenson allotment along Wildhorse Creek
- Harper bronc-breaker and cattle trade records
- Santa Fe bypass displacement records (1906)

### Parallax Hero
The landing page features a full-viewport hero with a parallax background image that moves at 30% of the scroll rate, an opacity fade, and a "drifting archival dust" particle effect rendered on a WebGL canvas. Motion-animated typography introduces the archive with layered enter animations.

### Personal Timeline
Each family record includes a personal milestone timeline tracking births, arrivals in Indian Territory, Dawes Roll enrollments, land allotments, and burials at Hopewell Cemetery.

### Multi-page Navigation
The archive is organized into distinct routes:

| Route | Description |
|---|---|
| `/` | Homepage with hero, mission statement, 3D timeline, and preview cards |
| `/archive` | Full family legacy archive with filterable records |
| `/archive/:slug` | Individual family record detail page |
| `/cherokee-town` | Dedicated page for Cherokee Town historical context |
| `/community` | The Hopewell Community history and founding story |
| `/history` | Broader historical narrative and context |
| `/gallery` | Photographic and archival image collection |
| `/map` | Geographic and territorial mapping resources |
| `/preservation` | Preservation efforts and the Hopewell Cemetery |
| `/contact` | Contact and contribution information |

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 with TypeScript |
| Routing | TanStack Router v1 (file-based routing) |
| Build Tool | Vite 7 |
| Runtime | Bun |
| Deployment | Cloudflare (via `@cloudflare/vite-plugin` and Wrangler) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion v12 |
| 3D Rendering | Three.js + `@react-three/fiber` |
| UI Components | Radix UI (full suite) + shadcn/ui conventions |
| Data Fetching | TanStack Query v5 |
| Forms | React Hook Form + Zod + `@hookform/resolvers` |
| Charts | Recharts, D3 |
| Carousel | Embla Carousel |
| Icons | Lucide React |
| Code Quality | ESLint, Prettier |

---

## Project Structure

```
hopewell-legacy-archive/
ss src/
ss   assets/              # Images: cemetery, cherokee town, territory map, family archive, etc.
ss   components/
ss     archival-figure.tsx         # Reusable figure/caption component for archival images
ss     constellation-canvas.tsx    # Three.js wireframe globe; scroll-driven camera path
ss     dust-canvas.tsx             # WebGL particle effect simulating drifting archival dust
ss     era-detail-panel.tsx        # Contextual detail panel shown when an era is selected
ss     era-timeline.tsx            # 3D constellation-based era navigation component
ss     interactive-timeline.tsx    # Horizontal scroll timeline with keyboard and URL state
ss     page-shell.tsx              # Global layout wrapper (SiteHeader + SiteFooter)
ss     personal-timeline.tsx       # Per-family milestone timeline (births, arrivals, burials)
ss     reveal.tsx                  # Scroll-triggered reveal animation wrapper
ss     site-footer.tsx             # Site-wide footer
ss     site-header.tsx             # Site-wide navigation header with interactive constellation
ss     timeline-constellation.tsx  # Era cluster visualization used inside the timeline
ss     ui/                         # Radix UI / shadcn component library
ss   hooks/                        # Custom React hooks
ss   lib/
ss     error-capture.ts            # Error boundary utilities
ss     error-page.ts               # Error page definitions
ss     family-records.ts           # All family genealogy data, milestones, and event links
ss     historical-context.ts       # Shared narrative, landmarks, and external archival sources
ss     scroll-progress.ts          # Scroll progress utilities for 3D camera tracking
ss     timeline-data.ts            # Era definitions, cluster metadata, and archival card data
ss     utils.ts                    # General utility functions (cn, etc.)
ss   routes/
ss     __root.tsx                  # Root layout and global providers
ss     index.tsx                   # Homepage (hero, timeline, preview cards)
ss     archive.tsx                 # Family legacy archive listing
ss     archive.$slug.tsx           # Dynamic individual family record page
ss     cherokee-town.tsx           # Cherokee Town historical page
ss     community.tsx               # Hopewell Community page
ss     contact.tsx                 # Contact page
ss     gallery.tsx                 # Image gallery
ss     history.tsx                 # Broader historical narrative
ss     map.tsx                     # Territory map page
ss     preservation.tsx            # Preservation and cemetery page
ss     sitemap[.]xml.ts            # Auto-generated sitemap
ss   router.tsx                    # TanStack Router configuration
ss   routeTree.gen.ts              # Auto-generated route tree
ss   server.ts                     # Cloudflare Workers server entry
ss public/                         # Static assets
bunfig.toml                        # Bun configuration
components.json                    # shadcn/ui component registry config
vite.config.ts                     # Vite + Cloudflare + TanStack Router plugin config
wrangler.jsonc                     # Cloudflare Workers deployment config
tsconfig.json                      # TypeScript configuration
```

---

## The Five Historical Eras

The archive is organized around five chronological eras, each with a corresponding color, 3D arc position, and set of archival clusters:

### 1. Pre-1830 | Native Homelands
Documents Indigenous presence along the Washita River valley before forced removal. Clusters: Homelands. Color: `#e8c47a`.

### 2. 1830s | The Removal Era
Covers the forced migration of Cherokee, Choctaw, and Chickasaw peoples and the enslaved Black families who arrived with them in Indian Territory. Clusters: Removal routes. Color: `#d49a5c`.

### 3. 1860s | Emancipation in the Territory
Focuses on the Treaties of 1866, Freedmen citizenship, and the rooting of Black and Native families in the Washita valley. Clusters: Freedmen kinship. Color: `#c98a4a`.

### 4. Late 1800s | Cherokee Town and Hopewell
Highlights the local economic anchors (trading post, cotton gin) and the founding of the Hopewell school and church as the community's spiritual and educational heart. Clusters: Cherokee Town. Color: `#b87333`.

### 5. 1907 | Statehood and Forgetting
Documents the impact of the Santa Fe Railway bypass in 1906, the development of Pauls Valley and Wynnewood, Oklahoma statehood, the dissolution of tribal jurisdiction, and the persistence of family kinship despite official erasure. Clusters: Memory held. Color: `#a05a2c`.

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended runtime)
- Node.js 18+ (alternative)

### Installation

```bash
git clone https://github.com/lacebx/hopewell-legacy-archive.git
cd hopewell-legacy-archive
bun install
```

### Development

```bash
bun run dev
```

The app will start at `http://localhost:5173`.

### Build

```bash
# Production build
bun run build

# Development mode build
bun run build:dev

# Preview production build locally
bun run preview
```

### Linting and Formatting

```bash
bun run lint
bun run format
```

### Deployment

This project is configured for deployment to **Cloudflare Workers** using Wrangler. The `wrangler.jsonc` file contains the deployment configuration, and the `src/server.ts` file is the Cloudflare Workers entry point.

```bash
bunx wrangler deploy
```

---

## Archival Sources

The archive references and links to the following external institutional sources:

- **OKGenWeb** - Hopewell Cemetery signage and Garvin County burial documentation
- **The Gateway to Oklahoma History** - Chickasaw Freedmen allotment-era photography and records
- **Historical maps of Garvin County** - Washita River corridor, Cherokee Town boundaries, and Indian Territory geospatial records

---

## Contributing

If you are a descendant of one of the families documented here, a historian, or a researcher with knowledge of the Hopewell Community, Cherokee Town, or the Chickasaw and Choctaw Freedmen of Garvin County, your contributions are welcome. Please use the `/contact` page on the live site to get in touch with the Hopewell Cemetery Association.

For code contributions, please open an issue or pull request describing the change you would like to make.

---

## License

This repository and its historical content are maintained by the Hopewell Cemetery Association. All archival photographs, family records, and narrative content are the intellectual and cultural property of the families and community they document. Please contact the association before reproducing any content.

---

*Built with care for the Stevensons, Smiths, Harpers, Allens, Vanns, Browns, Folsoms, Perrys, and Walkers, and for every family whose name is held in the Hopewell Cemetery.*
