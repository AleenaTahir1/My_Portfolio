import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { inSphere } from "maath/random";
import type { Points as ThreePoints } from "three";
import { useTheme } from "../../contexts/ThemeContext";

/**
 * Global 3D starfield background (react-three-fiber).
 * Adapted from the open-source adrianhajdin/project_3D_developer_portfolio
 * `Stars.jsx`, re-colored to a dark-space + neon-accent palette and split into
 * parallax layers. Rendered once, fixed behind all page content.
 */

type StarLayerProps = {
  /** number of floats (must be a multiple of 3 → count/3 points) */
  count: number;
  radius: number;
  color: string;
  size: number;
  speed: number;
  animate: boolean;
};

const StarLayer = ({ count, radius, color, size, speed, animate }: StarLayerProps) => {
  const ref = useRef<ThreePoints>(null);

  // maath fills the array in-place; keep length a multiple of 3 to avoid NaNs.
  const positions = useMemo(
    () => inSphere(new Float32Array(count), { radius }) as Float32Array,
    [count, radius],
  );

  useFrame((_, delta) => {
    if (!animate || !ref.current) return;
    ref.current.rotation.x -= (delta * speed) / 10;
    ref.current.rotation.y -= (delta * speed) / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const SpaceBackground = () => {
  const { mode } = useTheme();
  const isLight = mode === "light";
  // Darker, muted particles in light mode so they read on a light background.
  const palette = isLight
    ? { dust: "#9c9a90", cyan: "#0e7490", violet: "#6d28d9" }
    : { dust: "#e6ebff", cyan: "#22d3ee", violet: "#a855f7" };

  // Respect device + accessibility preferences (evaluated once at mount).
  const { isMobile, reducedMotion } = useMemo(() => {
    if (typeof window === "undefined") return { isMobile: false, reducedMotion: false };
    return {
      isMobile: window.matchMedia("(max-width: 768px)").matches,
      reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    };
  }, []);

  // Fewer points on mobile to protect performance / battery.
  const scale = isMobile ? 0.4 : 1;
  const animate = !reducedMotion;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, isMobile ? 1.5 : 2]}>
        <Suspense fallback={null}>
          {/* dense dust */}
          <StarLayer
            count={Math.round(6000 * scale)}
            radius={1.5}
            color={palette.dust}
            size={isLight ? 0.002 : 0.0015}
            speed={1}
            animate={animate}
          />
          {/* cyan mid layer */}
          <StarLayer
            count={Math.round(2400 * scale)}
            radius={1.2}
            color={palette.cyan}
            size={0.0025}
            speed={1.5}
            animate={animate}
          />
          {/* sparse violet accents */}
          <StarLayer
            count={Math.round(1200 * scale)}
            radius={1.8}
            color={palette.violet}
            size={0.003}
            speed={0.6}
            animate={animate}
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;
