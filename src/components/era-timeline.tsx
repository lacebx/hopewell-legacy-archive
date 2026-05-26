import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import communityImg from "@/assets/community.jpg";
import cherokeeImg from "@/assets/cherokee-town.jpg";
import familyImg from "@/assets/family-archive.jpg";
import headstoneImg from "@/assets/headstone.jpg";
import mapImg from "@/assets/territory-map.jpg";

type Era = {
  id: string;
  year: string;
  title: string;
  body: string;
  // Cluster placement on the sphere (radians) + color
  phi: number;
  theta: number;
  hue: string;
  cards: { to: string; label: string; caption: string; img: string }[];
};

const ERAS: Era[] = [
  {
    id: "pre-1830",
    year: "Pre-1830",
    title: "Native Homelands",
    body: "Before removal, the lands along the Washita were home to Indigenous peoples whose presence shaped every trail and crossing.",
    phi: 0.6,
    theta: 0.2,
    hue: "#e8c47a",
    cards: [
      { to: "/community", label: "The Land Before", caption: "Origins of the river ground", img: mapImg },
      { to: "/cherokee-town", label: "Ancient Crossings", caption: "Trails into Indian Territory", img: cherokeeImg },
    ],
  },
  {
    id: "1830s",
    year: "1830s",
    title: "The Removal Era",
    body: "The Cherokee, Choctaw, Chickasaw, and others were forced west — carrying with them the Black families bound by slavery and, eventually, by kinship.",
    phi: 1.1,
    theta: 1.4,
    hue: "#d49a5c",
    cards: [
      { to: "/community", label: "Forced Migration", caption: "Arrival in the Territory", img: communityImg },
      { to: "/archive", label: "Lineage Records", caption: "Families carried west", img: familyImg },
    ],
  },
  {
    id: "1860s",
    year: "1860s",
    title: "Emancipation",
    body: "Treaties of 1866 recognized Freedmen of the tribes. Communities of Black and Native families began to root themselves in their own right.",
    phi: 1.7,
    theta: 2.8,
    hue: "#c98a4a",
    cards: [
      { to: "/archive", label: "Freedmen Rolls", caption: "Citizenship after 1866", img: familyImg },
      { to: "/community", label: "New Households", caption: "Kinship by treaty and blood", img: communityImg },
    ],
  },
  {
    id: "late-1800s",
    year: "Late 1800s",
    title: "Cherokee Town & Hopewell",
    body: "A trading settlement at the Washita River crossing anchored the surrounding farms, churches, and the community known as Hopewell.",
    phi: 2.1,
    theta: 4.1,
    hue: "#b87333",
    cards: [
      { to: "/cherokee-town", label: "The Trading Post", caption: "Marketplace of the crossing", img: cherokeeImg },
      { to: "/map", label: "Cemetery Map", caption: "Where Hopewell rooted", img: headstoneImg },
    ],
  },
  {
    id: "1907",
    year: "1907 →",
    title: "Statehood & Forgetting",
    body: "Oklahoma statehood erased many of these places from the official map. The headstones, the names, the kinships remained.",
    phi: 2.6,
    theta: 5.4,
    hue: "#a05a2c",
    cards: [
      { to: "/preservation", label: "Preservation", caption: "Protecting what remains", img: mapImg },
      { to: "/gallery", label: "Gallery", caption: "What the families kept", img: headstoneImg },
    ],
  },
];

const RADIUS = 2.6;

function eraPosition(era: Era) {
  return new THREE.Vector3(
    Math.cos(era.theta) * Math.sin(era.phi),
    Math.sin(era.theta) * Math.sin(era.phi),
    Math.cos(era.phi)
  ).multiplyScalar(RADIUS);
}

function Scene({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const group = useRef<THREE.Group>(null!);

  // Background field of faint stars
  const bgPositions = useMemo(() => {
    const N = 320;
    const a = new Float32Array(N * 3);
    const v = new THREE.Vector3();
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      v.set(
        Math.cos(theta) * Math.sin(phi),
        Math.sin(theta) * Math.sin(phi),
        Math.cos(phi)
      ).multiplyScalar(RADIUS * 1.15);
      a[i * 3] = v.x;
      a[i * 3 + 1] = v.y;
      a[i * 3 + 2] = v.z;
    }
    return a;
  }, []);

  // Per-era satellite cluster (small points around the era anchor)
  const clusters = useMemo(() => {
    return ERAS.map((era) => {
      const center = eraPosition(era);
      const N = 42;
      const positions = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        const offset = new THREE.Vector3(
          (Math.random() - 0.5) * 1.2,
          (Math.random() - 0.5) * 1.2,
          (Math.random() - 0.5) * 1.2
        );
        const p = center.clone().add(offset);
        positions[i * 3] = p.x;
        positions[i * 3 + 1] = p.y;
        positions[i * 3 + 2] = p.z;
      }
      // Lines from center to each satellite
      const lines: number[] = [];
      for (let i = 0; i < N; i++) {
        lines.push(center.x, center.y, center.z, positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
      }
      return {
        era,
        center,
        positions,
        linePositions: new Float32Array(lines),
      };
    });
  }, []);

  useFrame((state, dt) => {
    if (!group.current) return;
    group.current.rotation.y += dt * 0.06;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.1;
  });

  return (
    <group ref={group}>
      {/* Background star field */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[bgPositions, 3]} count={bgPositions.length / 3} />
        </bufferGeometry>
        <pointsMaterial size={0.025} color="#8a6a3a" transparent opacity={0.45} sizeAttenuation depthWrite={false} />
      </points>

      {clusters.map(({ era, center, positions, linePositions }) => {
        const isActive = era.id === activeId;
        const color = new THREE.Color(era.hue);
        return (
          <group key={era.id}>
            {/* Connecting threads */}
            <lineSegments>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  args={[linePositions, 3]}
                  count={linePositions.length / 3}
                />
              </bufferGeometry>
              <lineBasicMaterial color={color} transparent opacity={isActive ? 0.55 : 0.08} />
            </lineSegments>

            {/* Satellite points */}
            <points>
              <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} />
              </bufferGeometry>
              <pointsMaterial
                size={isActive ? 0.09 : 0.045}
                color={color}
                transparent
                opacity={isActive ? 1 : 0.35}
                sizeAttenuation
                depthWrite={false}
              />
            </points>

            {/* Central node — clickable */}
            <mesh
              position={center}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(era.id);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                document.body.style.cursor = "pointer";
              }}
              onPointerOut={() => {
                document.body.style.cursor = "";
              }}
              scale={isActive ? 1.6 : 1}
            >
              <sphereGeometry args={[0.13, 24, 24]} />
              <meshBasicMaterial color={color} transparent opacity={isActive ? 1 : 0.7} />
            </mesh>

            {/* Halo for the active era */}
            {isActive && (
              <mesh position={center}>
                <sphereGeometry args={[0.28, 24, 24]} />
                <meshBasicMaterial color={color} transparent opacity={0.18} />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}

export function EraTimeline() {
  const [activeId, setActiveId] = useState<string>(ERAS[0].id);
  const active = ERAS.find((e) => e.id === activeId)!;

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      {/* 3D canvas */}
      <div className="relative lg:col-span-7">
        <div className="relative aspect-square w-full overflow-hidden border border-border bg-[oklch(0.13_0.01_55)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.13_0.01_55)_80%)]" />
          <Canvas
            camera={{ position: [0, 0, 7.2], fov: 50 }}
            dpr={[1, 1.5]}
            gl={{ alpha: true, antialias: true }}
          >
            <Suspense fallback={null}>
              <Scene activeId={activeId} onSelect={setActiveId} />
            </Suspense>
          </Canvas>

          {/* Era selector chips overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 md:p-6">
            <div className="pointer-events-auto flex flex-wrap gap-2">
              {ERAS.map((era) => {
                const isActive = era.id === activeId;
                return (
                  <button
                    key={era.id}
                    onClick={() => setActiveId(era.id)}
                    className={`border px-3 py-2 font-mono text-[0.6rem] uppercase tracking-[0.24em] transition-all ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background/60 text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {era.year}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Caption */}
          <div className="pointer-events-none absolute left-4 top-4 md:left-6 md:top-6">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
              Constellation · Five Movements
            </p>
          </div>
        </div>
      </div>

      {/* Active era panel + linked archival cards */}
      <div className="lg:col-span-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">{active.year}</p>
            <h3 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-5xl">
              {active.title}
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              {active.body}
            </p>

            <div className="mt-10 hairline w-24" />

            <p className="mt-10 eyebrow">From the archive</p>
            <div className="mt-6 grid gap-px bg-border sm:grid-cols-2">
              {active.cards.map((card) => (
                <Link
                  key={card.to + card.label}
                  to={card.to}
                  className="group relative block overflow-hidden bg-background"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={card.img}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-serif text-base text-foreground">{card.label}</p>
                    <p className="mt-1 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                      {card.caption}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
