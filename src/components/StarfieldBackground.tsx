import { useEffect, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import { useCanvas } from '../hooks/useCanvas';

// Canvas container
const StarfieldContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const NetworkCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

const isMobileDevice = () => window.innerWidth <= 768;

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 50);
  const g = Math.floor(Math.random() * 100 + 120);
  const b = Math.floor(Math.random() * 80 + 175);
  return `rgba(${r}, ${g}, ${b}`; // Intentionally missing alpha to add later
};

type Node = {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  isMain: boolean;
  color: string;
  pulseSpeed: number;
  phase: number; 
};

const StarfieldBackground = () => {
  const nodesRef = useRef<Node[]>([]);
  const mousePositionRef = useRef<{x: number, y: number} | null>(null);
  const maxDistance = 120;
  const initializedRef = useRef(false);

  // Initialize nodes
  const initNodes = useCallback((width: number, height: number) => {
    const isMobile = isMobileDevice();
    const count = isMobile ? 40 : 80; // Reduced count for better performance
    const nodes: Node[] = [];

    for (let i = 0; i < count; i++) {
      const isMain = Math.random() < 0.15;
      const speed = isMain ? 0.3 : 0.5;
      
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isMain ? Math.random() * 4 + 2 : Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        isMain,
        color: isMain ? getRandomColor() : 'rgba(255, 255, 255',
        pulseSpeed: Math.random() * 0.05 + 0.02,
        phase: Math.random() * Math.PI * 2
      });
    }
    nodesRef.current = nodes;
    initializedRef.current = true;
  }, []);

  const draw = useCallback((ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number) => {
    if (!initializedRef.current) {
      initNodes(width, height);
    }

    ctx.clearRect(0, 0, width, height);
    
    // Update nodes
    const nodes = nodesRef.current;
    // const isMobile = isMobileDevice(); // Removed unused variable
    const mouse = mousePositionRef.current;
    
    // Spatial partitioning
    const gridSize = maxDistance;
    const grid: Map<string, number[]> = new Map();

    const getGridKey = (x: number, y: number) => {
      const gx = Math.floor(x / gridSize);
      const gy = Math.floor(y / gridSize);
      return `${gx},${gy}`;
    };

    nodes.forEach((node, index) => {
      // Move
      node.x += node.vx;
      node.y += node.vy;

      // Mouse interaction
      if (mouse) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 200) {
           const force = (200 - dist) / 200;
           if (node.isMain) {
              // Attract
              node.x += (dx / dist) * force * 0.5;
              node.y += (dy / dist) * force * 0.5;
           } else {
              // Repel
              node.x -= (dx / dist) * force * 1;
              node.y -= (dy / dist) * force * 1;
           }
        }
      }

      // Bounce
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
      
      // Clamp
      node.x = Math.max(0, Math.min(width, node.x));
      node.y = Math.max(0, Math.min(height, node.y));

      // Add to grid
      const key = getGridKey(node.x, node.y);
      if (!grid.has(key)) grid.set(key, []);
      grid.get(key)!.push(index);
    });

    // Draw connections
    ctx.lineWidth = 0.5;
    
    // Check connections using grid
    // Only check current cell and neighbors (top-left, top, top-right, left) to avoid duplicates
    const neighborOffsets = [
       {x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1} 
    ];

    // Helper to draw line
    const drawLine = (n1: Node, n2: Node, dist: number) => {
        const opacity = 1 - dist / maxDistance;
        if (opacity <= 0) return;
        
        ctx.beginPath();
        ctx.strokeStyle = n1.isMain || n2.isMain 
           ? `rgba(76, 161, 175, ${opacity * 0.5})`
           : `rgba(255, 255, 255, ${opacity * 0.15})`;
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();
    };

    grid.forEach((indices, key) => {
        const [gx, gy] = key.split(',').map(Number);
        
        // Check against nodes in same cell and neighbor cells
        neighborOffsets.forEach(offset => {
            const neighborKey = `${gx + offset.x},${gy + offset.y}`;
            const neighborIndices = grid.get(neighborKey);
            if (!neighborIndices) return;

            for (const i of indices) {
                for (const j of neighborIndices) {
                    if (offset.x === 0 && offset.y === 0 && i >= j) continue; // avoid self and duplicates in same cell
                    
                    const n1 = nodes[i];
                    const n2 = nodes[j];
                    const dx = n1.x - n2.x;
                    const dy = n1.y - n2.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    
                    if (dist < maxDistance) {
                        drawLine(n1, n2, dist);
                    }
                }
            }
        });
    });

    // Draw nodes
    nodes.forEach(node => {
      ctx.beginPath();
      const pulse = 1 + Math.sin(frameCount * node.pulseSpeed + node.phase) * 0.2;
      ctx.arc(node.x, node.y, node.size * pulse, 0, Math.PI * 2);
      
      if (node.isMain) {
          // Efficient glow
          ctx.fillStyle = `${node.color}, 0.8)`;
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * pulse * 2, 0, Math.PI * 2);
          ctx.fillStyle = `${node.color}, 0.2)`;
          ctx.fill();
      } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.fill();
      }
    });

  }, [initNodes]);

  const canvasRef = useCanvas(draw, { animate: true });

  const handleMouseMove = useCallback((e: MouseEvent) => {
     const rect = canvasRef.current?.getBoundingClientRect();
     if (rect) {
         mousePositionRef.current = {
             x: e.clientX - rect.left,
             y: e.clientY - rect.top
         };
     }
  }, []);

  const handleMouseLeave = useCallback(() => {
      mousePositionRef.current = null;
  }, []);

  useEffect(() => {
      const hero = document.getElementById('home');
      if (hero) {
          hero.addEventListener('mousemove', handleMouseMove);
          hero.addEventListener('mouseleave', handleMouseLeave);
      }
      return () => {
          if (hero) {
              hero.removeEventListener('mousemove', handleMouseMove);
              hero.removeEventListener('mouseleave', handleMouseLeave);
          }
      };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <StarfieldContainer>
      <NetworkCanvas ref={canvasRef} />
    </StarfieldContainer>
  );
};

export default StarfieldBackground;
