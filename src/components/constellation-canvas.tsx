import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, Suspense, useEffect } from "react";
import * as THREE from "three";
import { ensureScrollProgress, scrollProgress } from "@/lib/scroll-progress";

/**
 * A slowly rotating wireframe globe of points — like an old constellation chart
 * etched into archival paper. The camera tracks a curved path tied to the page's
 * global scroll, so the chart opens, tilts, and recedes as the visitor descends.
 */
function Constellation() {
  const group = useRef<THREE.Group>(null!);
  const lineMat = useRef<THREE.LineBasicMaterial>(null!);
  const pointMat = useRef<THREE.PointsMaterial>(null!);
  const { camera } = useThree();

  const { positions, linePositions } = useMemo(() => {
    const N = 220;
    const positions = new Float32Array(N * 3);
    const v = new THREE.Vector3();
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < N; i++) {
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
    const s = scrollProgress.value;

    // Base rotation + scroll-driven tilt
    group.current.rotation.y += dt * (0.05 + s * 0.25);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.sin(state.clock.elapsedTime * 0.15) * 0.15 + (s - 0.5) * 0.8,
      0.05
    );
    const scale = 1 + Math.sin(s * Math.PI) * 0.15;
    group.current.scale.setScalar(scale);

    // Camera drift along a curved path
    const targetZ = THREE.MathUtils.lerp(7.2, 4.6, s);
    const targetX = Math.sin(s * Math.PI * 1.5) * 1.8;
    const targetY = Math.cos(s * Math.PI * 0.9) * 0.9 - 0.2;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.lookAt(0, 0, 0);

    // Material evolves: dim at top, brightest mid-page, fades at end
    const arc = Math.sin(s * Math.PI);
    if (lineMat.current) lineMat.current.opacity = 0.15 + arc * 0.45;
    if (pointMat.current) {
      pointMat.current.opacity = 0.6 + arc * 0.35;
      pointMat.current.size = 0.045 + arc * 0.035;
    }
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} />
        </bufferGeometry>
        <pointsMaterial
          ref={pointMat}
          size={0.05}
          color={new THREE.Color("#e8c47a")}
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} count={linePositions.length / 3} />
        </bufferGeometry>
        <lineBasicMaterial ref={lineMat} color={new THREE.Color("#9b6a3a")} transparent opacity={0.25} />
      </lineSegments>
    </group>
  );
}

export function ConstellationCanvas({ className }: { className?: string }) {
  useEffect(() => {
    ensureScrollProgress();
  }, []);
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
