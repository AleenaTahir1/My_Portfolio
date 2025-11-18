import { useRef, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { useCanvas } from '../hooks/useCanvas';

// Canvas container
const AntContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const AntCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  opacity: 0.9;
  background-color: rgba(20, 30, 48, 0.15);
`;

const isMobileDevice = () => window.innerWidth <= 768;

const getColor = (state: number) => {
  const colors = [
    'rgba(22, 34, 52, 0.1)',
    'rgba(76, 161, 175, 0.65)',
    'rgba(230, 244, 255, 0.55)',
    'rgba(41, 128, 185, 0.5)',
    'rgba(142, 68, 173, 0.45)',
    'rgba(39, 174, 96, 0.4)',
  ];
  return colors[state % colors.length];
};

const getAntColor = () => {
  const colors = [
    'rgba(255, 255, 255, 0.9)',
    'rgba(255, 223, 0, 0.9)',
    'rgba(255, 105, 180, 0.9)',
    'rgba(0, 255, 255, 0.9)',
    'rgba(127, 255, 0, 0.9)',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const directions = [
  { x: 0, y: -1 }, // Up
  { x: 1, y: 0 },  // Right
  { x: 0, y: 1 },  // Down
  { x: -1, y: 0 }  // Left
];

interface Ant {
  x: number;
  y: number;
  direction: number;
  color: string;
}

const LangtonAntBackground = () => {
  const gridRef = useRef<Map<string, number>>(new Map());
  const antsRef = useRef<Ant[]>([]);
  
  const ruleSets = [
    "RL", "RLR", "LLRR", "RRLLLRLLLRRR", "LRRRRRLLR"
  ];
  const rules = useMemo(() => ruleSets[Math.floor(Math.random() * ruleSets.length)], []);

  const init = useCallback((width: number, height: number) => {
     const isMobile = isMobileDevice();
     const cellSize = isMobile ? 12 : 18;
     const gridWidth = Math.floor(width / cellSize);
     const gridHeight = Math.floor(height / cellSize);
     
     gridRef.current.clear();
     antsRef.current = [];
     
     const antCount = isMobile ? 3 : 6;
     const positions = new Set();

     for (let i = 0; i < antCount; i++) {
       let x, y;
       do {
         x = Math.floor(Math.random() * gridWidth);
         y = Math.floor(Math.random() * gridHeight);
       } while (positions.has(`${x},${y}`));
       positions.add(`${x},${y}`);

       antsRef.current.push({
         x, y, direction: Math.floor(Math.random() * 4), color: getAntColor()
       });
     }
  }, []);

  const draw = useCallback((ctx: CanvasRenderingContext2D, _frameCount: number, width: number, height: number) => {
    const isMobile = isMobileDevice();
    const cellSize = isMobile ? 12 : 18;
    
    // Init if needed
    if (antsRef.current.length === 0) {
        init(width, height);
    }

    // Clear
    ctx.clearRect(0, 0, width, height);

    // Update logic (multiple steps per frame for speed without lag)
    const steps = 1; // reduced steps to avoid locking thread
    
    for (let s = 0; s < steps; s++) {
       antsRef.current.forEach(ant => {
          const key = `${ant.x},${ant.y}`;
          const state = gridRef.current.get(key) || 0;
          const newState = (state + 1) % rules.length;
          gridRef.current.set(key, newState);
          
          const ruleChar = rules[state % rules.length];
          const turnVal = ruleChar === 'R' ? 1 : -1;

          ant.direction = (ant.direction + turnVal + 4) % 4;
          ant.x += directions[ant.direction].x;
          ant.y += directions[ant.direction].y;
          
          const gridWidth = Math.floor(width / cellSize);
          const gridHeight = Math.floor(height / cellSize);
          
          if (ant.x < 0) ant.x = gridWidth - 1;
          if (ant.y < 0) ant.y = gridHeight - 1;
          if (ant.x >= gridWidth) ant.x = 0;
          if (ant.y >= gridHeight) ant.y = 0;
       });
    }

    // Draw Grid
    gridRef.current.forEach((state, key) => {
        const [x, y] = key.split(',').map(Number);
        ctx.fillStyle = getColor(state);
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
    });

    // Draw Ants
    antsRef.current.forEach(ant => {
        const cx = ant.x * cellSize + cellSize/2;
        const cy = ant.y * cellSize + cellSize/2;
        
        ctx.beginPath();
        ctx.fillStyle = ant.color;
        ctx.arc(cx, cy, cellSize * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Glow (simulated)
        ctx.beginPath();
        ctx.fillStyle = ant.color.replace('0.9', '0.3');
        ctx.arc(cx, cy, cellSize * 0.8, 0, Math.PI * 2);
        ctx.fill();
    });
  }, [init, rules]);

  const canvasRef = useCanvas(draw, { animate: true });

  return (
    <AntContainer>
      <AntCanvas ref={canvasRef} />
    </AntContainer>
  );
};

export default LangtonAntBackground;
