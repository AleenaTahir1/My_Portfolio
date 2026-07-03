import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

/**
 * 3D perspective tilt wrapper — the card rotates toward the cursor and a
 * soft glare sweeps across it. Pure CSS transforms (no WebGL), so it costs
 * almost nothing. Tilt is disabled automatically on touch/coarse pointers.
 */
type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** max tilt in degrees */
  max?: number;
};

const TiltCard = ({ children, className = "", max = 7 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 25 });
  const glareX = useSpring(useMotionValue(50), { stiffness: 300, damping: 30 });
  const glareY = useSpring(useMotionValue(50), { stiffness: 300, damping: 30 });
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 200, damping: 30 });

  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.14), transparent 55%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 2 * max);
    rotateX.set(-(py - 0.5) * 2 * max);
    glareX.set(px * 100);
    glareY.set(py * 100);
    glareOpacity.set(1);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative h-full ${className}`}
      >
        {children}
        {/* glare sweep */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10"
          style={{ background: glare, opacity: glareOpacity }}
        />
      </motion.div>
    </div>
  );
};

export default TiltCard;
