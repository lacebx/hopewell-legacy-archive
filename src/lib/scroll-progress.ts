// Global scroll progress (0 → 1) updated via rAF.
// Three.js canvases read this inside useFrame to drive camera / motion
// without React re-renders.

export const scrollProgress = { value: 0 };

let installed = false;

export function ensureScrollProgress() {
  if (installed || typeof window === "undefined") return;
  installed = true;

  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    scrollProgress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
}
