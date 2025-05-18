import { useEffect, useRef, useState } from 'react';

interface GameOfLifeProps {
  width: number;
  height: number;
  cellSize: number;
  framesPerSecond?: number;
  primaryColor?: string;
  secondaryColor?: string;
  initialDensity?: number;
}

const GameOfLife = ({
  width,
  height,
  cellSize,
  framesPerSecond = 10,
  primaryColor = 'rgba(0, 0, 0, 0.7)',
  secondaryColor = 'rgba(166, 106, 255, 0.8)',
  initialDensity = 0.3,
}: GameOfLifeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [running, setRunning] = useState(true);
  
  const cols = Math.floor(width / cellSize);
  const rows = Math.floor(height / cellSize);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize grid
    let grid = Array(cols).fill(null).map(() => 
      Array(rows).fill(null).map(() => Math.random() < initialDensity ? 1 : 0)
    );
    
    // Animation timing
    const interval = 1000 / framesPerSecond;
    let lastTime = 0;
    
    // Animation frame
    const animate = (currentTime: number) => {
      if (!running) return;
      
      const deltaTime = currentTime - lastTime;
      if (deltaTime < interval) {
        requestAnimationFrame(animate);
        return;
      }
      
      lastTime = currentTime - (deltaTime % interval);
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Draw cells and compute next generation
      const next = Array(cols).fill(null).map(() => Array(rows).fill(0));
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          // Draw current cell
          if (grid[i][j] === 1) {
            ctx.fillStyle = secondaryColor;
            ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
          } else {
            ctx.fillStyle = primaryColor;
            ctx.fillRect(i * cellSize, j * cellSize, cellSize - 1, cellSize - 1);
          }
          
          // Count neighbors
          let neighbors = 0;
          for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
              if (x === 0 && y === 0) continue;
              
              const col = (i + x + cols) % cols;
              const row = (j + y + rows) % rows;
              
              neighbors += grid[col][row];
            }
          }
          
          // Apply Conway's rules
          if (grid[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
            next[i][j] = 0; // Die
          } else if (grid[i][j] === 0 && neighbors === 3) {
            next[i][j] = 1; // Born
          } else {
            next[i][j] = grid[i][j]; // Stay the same
          }
        }
      }
      
      grid = next;
      requestAnimationFrame(animate);
    };
    
    // Start animation
    requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      setRunning(false);
    };
  }, [cols, rows, cellSize, width, height, running, primaryColor, secondaryColor, framesPerSecond, initialDensity]);
  
  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="absolute inset-0 z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default GameOfLife;
