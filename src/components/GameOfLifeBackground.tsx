import { useRef, useCallback } from "react";
import { useCanvas } from "../hooks/useCanvas";

const GameOfLifeBackground = () => {
  const gridRef = useRef<number[][]>([]);
  const colsRef = useRef(0);
  const rowsRef = useRef(0);
  const cellSize = 20;

  // Initialize grid
  const initGrid = useCallback((width: number, height: number) => {
    const cols = Math.floor(width / cellSize);
    const rows = Math.floor(height / cellSize);
    colsRef.current = cols;
    rowsRef.current = rows;

    gridRef.current = Array(rows)
      .fill(null)
      .map(() =>
        Array(cols)
          .fill(null)
          .map(() => (Math.random() > 0.85 ? 1 : 0))
      );
  }, []);

  const countNeighbors = (grid: number[][], x: number, y: number, rows: number, cols: number) => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const row = (x + i + rows) % rows;
        const col = (y + j + cols) % cols;
        count += grid[row][col];
      }
    }
    return count;
  };

  const draw = useCallback((ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number) => {
    // Initialize if needed or resized significantly
    if (gridRef.current.length === 0 || 
        Math.abs(gridRef.current.length - Math.floor(height / cellSize)) > 2) {
      initGrid(width, height);
    }

    // Update grid every 5 frames for visible speed (approx 12 updates/sec at 60fps)
    if (frameCount % 5 === 0) {
      const grid = gridRef.current;
      const rows = rowsRef.current;
      const cols = colsRef.current;
      
      const newGrid = grid.map((row, x) =>
        row.map((cell, y) => {
          const neighbors = countNeighbors(grid, x, y, rows, cols);
          if (cell === 1) {
            return neighbors === 2 || neighbors === 3 ? 1 : 0;
          } else {
            return neighbors === 3 ? 1 : 0;
          }
        })
      );
      gridRef.current = newGrid;
    }

    // Draw
    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, width, height);

    const grid = gridRef.current;
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";

    for (let i = 0; i < rowsRef.current; i++) {
      for (let j = 0; j < colsRef.current; j++) {
        if (grid[i] && grid[i][j] === 1) {
          ctx.fillRect(j * cellSize, i * cellSize, cellSize - 2, cellSize - 2);
        } else {
          ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
        }
      }
    }
  }, [initGrid]);

  const canvasRef = useCanvas(draw, { animate: true });

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-20"
      style={{ zIndex: 0 }}
    />
  );
};

export default GameOfLifeBackground;
