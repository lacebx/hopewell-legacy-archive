import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, Suspense, useEffect } from "react";
import * as THREE from "three";
import { ensureScrollProgress, scrollProgress } from "@/lib/scroll-progress";

/**
 * Drifting archival dust — golden particles floating slowly through the frame.
 * The camera drifts and the field densifies/sparsens with global scroll progress
 * so the hero atmosphere evolves as the visitor moves through the document.
 */
function Dust({ count = 1400 }: { count?: number }) {
  const points = useRef<THREE.Points>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const { camera } = useThree();

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      speeds[i] = 0.0008 + Math.random() * 0.003;
    }
    return { positions, speeds };
  }, [count]);

  const material = useRef<THREE.PointsMaterial>(null!);

  useFrame((state) => {
    const geo = points.current.geometry;
    const arr = geo.attributes.position.array as Float32Array;
    const t = state.clock.elapsedTime;
    const s = scrollProgress.value;

    // particles drift faster as we scroll deeper (memory dissolving)
    const speedMul = 1 + s * 2.2;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i] * speedMul;
      arr[i * 3] += Math.sin(t * 0.3 + i) * 0.0008;
      if (arr[i * 3 + 1] > 7) arr[i * 3 + 1] = -7;
    }
    geo.attributes.position.needsUpdate = true;

    // gentle parallax
    points.current.rotation.y = THREE.MathUtils.lerp(
      points.current.rotation.y,
      mouse.current.x * 0.08 + s * 0.4,
      0.03
    );
    points.current.rotation.x = THREE.MathUtils.lerp(
      points.current.rotation.x,
      -mouse.current.y * 0.05 - s * 0.2,
      0.03
    );

    // camera drifts along a curved path: zooms in, rises, then pulls back
    const camZ = THREE.MathUtils.lerp(8, 4.2, Math.min(1, s * 1.6));
    const camY = Math.sin(s * Math.PI) * 1.4;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, Math.sin(s * Math.PI * 1.2) * 1.6, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, camY, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, camZ, 0.05);
    camera.lookAt(0, 0, 0);

    // particles fade out as we approach the end
    if (material.current) {
      material.current.opacity = THREE.MathUtils.lerp(0.7, 0.15, s);
      material.current.size = THREE.MathUtils.lerp(0.025, 0.055, s);
    }
  });

  return (
    <points
      ref={points}
      onPointerMove={(e) => {
        mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
      }}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={material}
        size={0.025}
        color={new THREE.Color("#d9b46a")}
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function DustCanvas({ className }: { className?: string }) {
  useEffect(() => {
    ensureScrollProgress();
  }, []);
  return (
    <div className={className} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Dust />
        </Suspense>
      </Canvas>
    </div>
  );
}
