import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

/**
 * A slowly rotating wireframe globe of points — like an old constellation chart
 * etched into archival paper. Used as the centerpiece of the timeline section.
 */
function Constellation() {
  const group = useRef<THREE.Group>(null!);
  const points = useRef<THREE.Points>(null!);
  const lines = useRef<THREE.LineSegments>(null!);

  const { positions, linePositions } = useMemo(() => {
    const N = 220;
    const positions = new Float32Array(N * 3);
    const v = new THREE.Vector3();
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < N; i++) {
      // Fibonacci sphere
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      v.set(
        Math.cos(theta) * Math.sin(phi),
        Math.sin(theta) * Math.sin(phi),
        Math.cos(phi)
      ).multiplyScalar(2.4);
      positions[i * 3] = v.x;
      positions[i * 3 + 1] = v.y;
      positions[i * 3 + 2] = v.z;
      pts.push(v.clone());
    }

    // Connect each point to its 2 nearest neighbors
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
    return {
      positions,
      linePositions: new Float32Array(linePts),
    };
  }, []);

  useFrame((state, dt) => {
    if (!group.current) return;
    group.current.rotation.y += dt * 0.08;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
  });

  return (
    <group ref={group}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color={new THREE.Color("#e8c47a")}
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} count={linePositions.length / 3} />
        </bufferGeometry>
        <lineBasicMaterial color={new THREE.Color("#9b6a3a")} transparent opacity={0.25} />
      </lineSegments>
    </group>
  );
}

export function ConstellationCanvas({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <Canvas camera={{ position: [0, 0, 6.5], fov: 50 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <Suspense fallback={null}>
          <Constellation />
        </Suspense>
      </Canvas>
    </div>
  );
}
