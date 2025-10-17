import { useEffect, useRef } from "react";

const GameOfLifeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Game of Life configuration
    const cellSize = 20;
    const cols = Math.floor(canvas.width / cellSize);
    const rows = Math.floor(canvas.height / cellSize);

    // Initialize grid with random cells
    let grid: number[][] = [];
    const initializeGrid = () => {
      grid = Array(rows)
        .fill(null)
        .map(() =>
          Array(cols)
            .fill(null)
            .map(() => (Math.random() > 0.85 ? 1 : 0))
        );
    };
    initializeGrid();

    // Count neighbors
    const countNeighbors = (x: number, y: number): number => {
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

    // Update grid based on Game of Life rules
    const updateGrid = () => {
      const newGrid = grid.map((row, x) =>
        row.map((cell, y) => {
          const neighbors = countNeighbors(x, y);
          // Conway's Game of Life rules
          if (cell === 1) {
            return neighbors === 2 || neighbors === 3 ? 1 : 0;
          } else {
            return neighbors === 3 ? 1 : 0;
          }
        })
      );
      grid = newGrid;
    };

    // Draw grid
    const draw = () => {
      // Clear canvas with black background
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw cells
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 1) {
            // Draw white cells with brutalist style
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(j * cellSize, i * cellSize, cellSize - 2, cellSize - 2);
          } else {
            // Draw grid lines
            ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
            ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
          }
        }
      }
    };

    // Animation loop - SLOWER (30 FPS instead of 10)
    let frameCount = 0;
    const fps = 30; // Higher number = slower animation
    const animate = () => {
      frameCount++;
      if (frameCount % fps === 0) {
        updateGrid();
        draw();
      }
      animationId = requestAnimationFrame(animate);
    };

    let animationId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-20"
      style={{ zIndex: 0 }}
    />
  );
};

export default GameOfLifeBackground;
