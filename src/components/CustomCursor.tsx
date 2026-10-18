import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  // Motion values move the square without re-rendering React on every mousemove
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 1000, damping: 60 });
  const smoothY = useSpring(y, { stiffness: 1000, damping: 60 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop with a real mouse
    const isDesktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
    if (!isDesktop) return;

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      x.set(e.clientX - 6);
      y.set(e.clientY - 6);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(Boolean(target.closest('a, button')));
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [x, y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Simple minimalistic cursor - single square */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 border border-white pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: smoothX, y: smoothY }}
        animate={{ scale: isHovering ? 1.8 : 1 }}
        transition={{ duration: 0.15 }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
