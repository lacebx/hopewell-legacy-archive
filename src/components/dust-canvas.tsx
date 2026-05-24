import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

/**
 * Drifting archival dust — golden particles floating slowly through the frame,
 * with subtle parallax response to the cursor. Atmospheric, not decorative.
 */
function Dust({ count = 1400 }: { count?: number }) {
  const points = useRef<THREE.Points>(null!);
  const mouse = useRef({ x: 0, y: 0 });

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

  useFrame((state) => {
    const geo = points.current.geometry;
    const arr = geo.attributes.position.array as Float32Array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i];
      arr[i * 3] += Math.sin(t * 0.3 + i) * 0.0008;
      if (arr[i * 3 + 1] > 7) arr[i * 3 + 1] = -7;
    }
    geo.attributes.position.needsUpdate = true;

    // gentle parallax
    points.current.rotation.y = THREE.MathUtils.lerp(
      points.current.rotation.y,
      mouse.current.x * 0.08,
      0.03
    );
    points.current.rotation.x = THREE.MathUtils.lerp(
      points.current.rotation.x,
      -mouse.current.y * 0.05,
      0.03
    );
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
