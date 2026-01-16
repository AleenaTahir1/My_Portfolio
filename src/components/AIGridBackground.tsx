import { useEffect, useRef, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { useCanvas } from '../hooks/useCanvas';

const GridContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const GridCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;

/**
 * AI-themed grid animation with floating data points
 * Simple, clean grid with accent crosses at intersections
 */
const AIGridBackground = () => {
    const [isDark, setIsDark] = useState(true);
    const isDarkRef = useRef(isDark);
    const dataPointsRef = useRef<{ x: number; y: number; speed: number; size: number }[]>([]);

    // Listen for theme changes
    useEffect(() => {
        const checkTheme = () => {
            const dark = document.documentElement.classList.contains('dark');
            setIsDark(dark);
            isDarkRef.current = dark;
        };

        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    // Initialize data points
    const initDataPoints = useCallback((width: number, height: number) => {
        const points: { x: number; y: number; speed: number; size: number }[] = [];
        const count = Math.floor((width * height) / 30000);

        for (let i = 0; i < count; i++) {
            points.push({
                x: Math.random() * width,
                y: Math.random() * height,
                speed: 0.2 + Math.random() * 0.3,
                size: 2 + Math.random() * 2
            });
        }
        dataPointsRef.current = points;
    }, []);

    const draw = useCallback((ctx: CanvasRenderingContext2D, _frameCount: number, width: number, height: number) => {
        const dark = isDarkRef.current;

        // Initialize data points if needed
        if (dataPointsRef.current.length === 0) {
            initDataPoints(width, height);
        }

        // Clear
        ctx.clearRect(0, 0, width, height);

        // Grid settings
        const gridSize = 60;
        const lineColor = dark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.06)';
        const accentColor = dark ? 'rgba(76, 161, 175, 0.5)' : 'rgba(50, 100, 140, 0.5)';
        const pointColor = dark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.3)';

        // Draw straight grid lines
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;

        // Vertical lines
        for (let x = 0; x <= width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }

        // Horizontal lines
        for (let y = 0; y <= height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // Draw accent crosses at every grid intersection
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 1.5;
        const crossSize = 5;

        for (let x = 0; x <= width; x += gridSize) {
            for (let y = 0; y <= height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x - crossSize, y);
                ctx.lineTo(x + crossSize, y);
                ctx.moveTo(x, y - crossSize);
                ctx.lineTo(x, y + crossSize);
                ctx.stroke();
            }
        }

        // Update and draw floating data points (moving upward like data flow)
        dataPointsRef.current.forEach(point => {
            // Move upward
            point.y -= point.speed;

            // Reset at bottom when reaching top
            if (point.y < -10) {
                point.y = height + 10;
                point.x = Math.random() * width;
            }

            // Draw point with fixed size (no pulsing)
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
            ctx.fillStyle = dark
                ? 'rgba(76, 161, 175, 0.4)'
                : 'rgba(50, 100, 140, 0.4)';
            ctx.fill();

            // Small core
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.size * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = pointColor;
            ctx.fill();
        });

    }, [initDataPoints]);

    const canvasRef = useCanvas(draw, { animate: true });

    return (
        <GridContainer>
            <GridCanvas ref={canvasRef} />
        </GridContainer>
    );
};

export default AIGridBackground;

