import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { CLUSTER_META, type ClusterId } from "@/lib/timeline-data";

const CLUSTER_IDS = Object.keys(CLUSTER_META) as ClusterId[];
const GOLD = new THREE.Color("#e8c47a");

function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  const v = new THREE.Vector3();
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    v.set(
      Math.cos(theta) * Math.sin(phi),
      Math.sin(theta) * Math.sin(phi),
      Math.cos(phi),
    ).multiplyScalar(radius);
    pts.push(v.clone());
  }
  return pts;
}

function assignCluster(p: THREE.Vector3): ClusterId {
  let best: ClusterId = "homelands";
  let bestD = Infinity;
  for (const id of CLUSTER_IDS) {
    const c = CLUSTER_META[id].center;
    const d = p.distanceTo(new THREE.Vector3(...c));
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
  dimmed,
}: {
  clusterId: ClusterId;
  positions: Float32Array;
  linePositions: Float32Array;
  active: boolean;
  dimmed: boolean;
}) {
  const points = useRef<THREE.Points>(null!);
  const lines = useRef<THREE.LineSegments>(null!);
  const meta = CLUSTER_META[clusterId];
  const color = useMemo(() => new THREE.Color(meta.color), [meta.color]);

  useFrame((_, dt) => {
    const targetOpacity = active ? 1 : dimmed ? 0.12 : 0.35;
    const targetSize = active ? 0.09 : 0.04;
    const pm = points.current.material as THREE.PointsMaterial;
    const lm = lines.current.material as THREE.LineBasicMaterial;
    pm.opacity = THREE.MathUtils.lerp(pm.opacity, targetOpacity, dt * 6);
    pm.size = THREE.MathUtils.lerp(pm.size, targetSize, dt * 6);
    lm.opacity = THREE.MathUtils.lerp(lm.opacity, active ? 0.55 : dimmed ? 0.06 : 0.18, dt * 6);
  });

  return (
    <group>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={positions.length / 3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={active ? 0.09 : 0.04}
          color={color}
          transparent
          opacity={active ? 1 : 0.35}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={linePositions.length / 3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={active ? 0.55 : 0.18} />
      </lineSegments>
    </group>
  );
}

function Scene({
  activeClusters,
  focusOnDetail,
}: {
  activeClusters: Set<ClusterId>;
  focusOnDetail: boolean;
}) {
  const group = useRef<THREE.Group>(null!);
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0));

  const clusterGeometry = useMemo(() => {
    const allPts = fibonacciSphere(220, 2.4);
    const byCluster = Object.fromEntries(
      CLUSTER_IDS.map((id) => [id, [] as THREE.Vector3[]]),
    ) as Record<ClusterId, THREE.Vector3[]>;

    for (const p of allPts) {
      byCluster[assignCluster(p)].push(p);
    }

    const result: Record<
      ClusterId,
      { positions: Float32Array; linePositions: Float32Array }
    > = {} as Record<ClusterId, { positions: Float32Array; linePositions: Float32Array }>;

    for (const id of CLUSTER_IDS) {
      const pts = byCluster[id];
      const positions = new Float32Array(pts.length * 3);
      pts.forEach((p, i) => {
        positions[i * 3] = p.x;
        positions[i * 3 + 1] = p.y;
        positions[i * 3 + 2] = p.z;
      });

      const linePts: number[] = [];
      for (let i = 0; i < pts.length; i++) {
        const dists = pts
          .map((p, j) => ({ d: pts[i].distanceTo(p), j }))
          .filter((x) => x.j !== i)
          .sort((a, b) => a.d - b.d)
          .slice(0, 2);
        for (const { j } of dists) {
          linePts.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
        }
      }
      result[id] = { positions, linePositions: new Float32Array(linePts) };
    }
    return result;
  }, []);

  const focusCenter = useMemo(() => {
    const primary = [...activeClusters][0];
    if (!primary) return new THREE.Vector3(0, 0, 0);
    return new THREE.Vector3(...CLUSTER_META[primary].center).multiplyScalar(0.35);
  }, [activeClusters]);

  useFrame((state, dt) => {
    if (!group.current) return;
    group.current.rotation.y += dt * (activeClusters.size ? 0.04 : 0.08);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.sin(state.clock.elapsedTime * 0.15) * 0.12 + focusCenter.y * 0.04,
      dt * 2,
    );

    const detailPan = focusOnDetail ? 1.35 : 0;
    cameraTarget.current.lerp(focusCenter, dt * 2);
    const targetCam = new THREE.Vector3(
      cameraTarget.current.x * 0.5 + detailPan,
      cameraTarget.current.y * 0.35,
      focusOnDetail ? 5.8 : 6.5,
    );
    state.camera.position.lerp(targetCam, dt * 2.2);
    state.camera.lookAt(
      cameraTarget.current.x + detailPan * 0.4,
      cameraTarget.current.y,
      cameraTarget.current.z,
    );
  });

  const hasSelection = activeClusters.size > 0;

  return (
    <>
      <ambientLight intensity={0.35} />
      <group ref={group}>
        {CLUSTER_IDS.map((id) => (
          <ClusterPoints
            key={id}
            clusterId={id}
            positions={clusterGeometry[id].positions}
            linePositions={clusterGeometry[id].linePositions}
            active={activeClusters.has(id)}
            dimmed={hasSelection && !activeClusters.has(id)}
          />
        ))}
      </group>
    </>
  );
}

export function TimelineConstellation({
  className,
  activeClusters,
  focusOnDetail = false,
}: {
  className?: string;
  activeClusters: Set<ClusterId>;
  focusOnDetail?: boolean;
}) {
  return (
    <div className={className} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ touchAction: "none" }}
      >
        <Suspense fallback={null}>
          <Scene activeClusters={activeClusters} focusOnDetail={focusOnDetail} />
        </Suspense>
      </Canvas>
    </div>
  );
}
