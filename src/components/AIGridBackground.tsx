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
 * AI-themed grid animation with floating data points and subtle wave effect
 * Inspired by neural network visualizations
 */
const AIGridBackground = () => {
    const [isDark, setIsDark] = useState(true);
    const isDarkRef = useRef(isDark);
    const timeRef = useRef(0);
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
        const count = Math.floor((width * height) / 25000); // Fewer on mobile

        for (let i = 0; i < count; i++) {
            points.push({
                x: Math.random() * width,
                y: Math.random() * height,
                speed: 0.3 + Math.random() * 0.5,
                size: 2 + Math.random() * 3
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

        // Update time
        timeRef.current += 0.02;
        const time = timeRef.current;

        // Grid settings
        const gridSize = 60;
        const lineColor = dark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.04)';
        const accentColor = dark ? 'rgba(76, 161, 175, 0.4)' : 'rgba(50, 100, 140, 0.4)';
        const pointColor = dark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)';

        // Draw subtle grid with wave effect
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;

        // Vertical lines with subtle wave
        for (let x = 0; x <= width; x += gridSize) {
            ctx.beginPath();
            for (let y = 0; y <= height; y += 5) {
                const wave = Math.sin((y * 0.01) + time + (x * 0.005)) * 3;
                if (y === 0) {
                    ctx.moveTo(x + wave, y);
                } else {
                    ctx.lineTo(x + wave, y);
                }
            }
            ctx.stroke();
        }

        // Horizontal lines with subtle wave
        for (let y = 0; y <= height; y += gridSize) {
            ctx.beginPath();
            for (let x = 0; x <= width; x += 5) {
                const wave = Math.sin((x * 0.01) + time + (y * 0.005)) * 3;
                if (x === 0) {
                    ctx.moveTo(x, y + wave);
                } else {
                    ctx.lineTo(x, y + wave);
                }
            }
            ctx.stroke();
        }

        // Draw accent crosses at intersections
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 1;

        for (let x = gridSize; x < width; x += gridSize * 2) {
            for (let y = gridSize; y < height; y += gridSize * 2) {
                const pulse = 1 + Math.sin(time * 2 + x * 0.01 + y * 0.01) * 0.3;
                const size = 4 * pulse;

                ctx.beginPath();
                ctx.moveTo(x - size, y);
                ctx.lineTo(x + size, y);
                ctx.moveTo(x, y - size);
                ctx.lineTo(x, y + size);
                ctx.stroke();
            }
        }

        // Update and draw floating data points (moving upward like data flow)
        ctx.fillStyle = pointColor;
        dataPointsRef.current.forEach(point => {
            // Move upward
            point.y -= point.speed;

            // Reset at bottom when reaching top
            if (point.y < -10) {
                point.y = height + 10;
                point.x = Math.random() * width;
            }

            // Draw point with subtle glow
            const alpha = 0.3 + Math.sin(time * 3 + point.x * 0.01) * 0.2;
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
            ctx.fillStyle = dark
                ? `rgba(76, 161, 175, ${alpha})`
                : `rgba(50, 100, 140, ${alpha})`;
            ctx.fill();

            // Small white/black core
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
