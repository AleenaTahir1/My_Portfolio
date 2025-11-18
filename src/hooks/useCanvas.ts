import { useEffect, useRef } from 'react';

export const useCanvas = (
  draw: (ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number) => void,
  options: { animate?: boolean } = { animate: true }
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    let frameCount = 0;
    let animationFrameId: number;
    
    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      // Set actual size in memory (scaled to account for extra pixel density)
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      // Normalize coordinate system to use css pixels.
      context.scale(dpr, dpr);
      
      // Force a redraw after resize
      if (!options.animate) {
        draw(context, frameCount, width, height);
      }
    };

    const render = () => {
      frameCount++;
      const { width, height } = canvas.getBoundingClientRect();
      draw(context, frameCount, width, height);
      
      if (options.animate) {
        animationFrameId = window.requestAnimationFrame(render);
      }
    };

    resize();
    render();
    
    window.addEventListener('resize', resize);
    
    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, options.animate]);

  return canvasRef;
};

