import { forwardRef, useMemo, useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Decal, Html, Preload, useTexture } from "@react-three/drei";
import type { Mesh } from "three";
import { useTheme } from "../../contexts/ThemeContext";

/**
 * Bouncing cloud of 3D tech "balls" — ball look adapted from the open-source
 * adrianhajdin/project_3D_developer_portfolio `Ball.jsx`.
 *
 * Single contained canvas. A lightweight 2D physics loop (in the z=0 plane)
 * moves each ball, reflecting off the canvas edges and off every other ball
 * (elastic, equal-mass) so they never overlap. Names reveal on hover.
 * Mobile falls back to a static icon grid.
 */

const BASE = import.meta.env.BASE_URL;

const TECHS = [
  { name: "Python", icon: `${BASE}tech/python.png` },
  { name: "Rust", icon: `${BASE}tech/rust.png` },
  { name: "Go", icon: `${BASE}tech/go.png` },
  { name: "TypeScript", icon: `${BASE}tech/typescript.png` },
  { name: "JavaScript", icon: `${BASE}tech/javascript.png` },
  { name: "React", icon: `${BASE}tech/reactjs.png` },
  { name: "Next.js", icon: `${BASE}tech/nextjs.png` },
  { name: "Tailwind", icon: `${BASE}tech/tailwind.png` },
  { name: "FastAPI", icon: `${BASE}tech/fastapi.png` },
  { name: "Tauri", icon: `${BASE}tech/tauri.png` },
  { name: "TensorFlow", icon: `${BASE}tech/tensorflow.png` },
  { name: "OpenAI", icon: `${BASE}tech/openai.png` },
  { name: "LangChain", icon: `${BASE}tech/langchain.png` },
  { name: "Ollama", icon: `${BASE}tech/ollama.png` },
  { name: "Gemini", icon: `${BASE}tech/gemini.png` },
  { name: "n8n", icon: `${BASE}tech/n8n.png` },
  { name: "Zapier", icon: `${BASE}tech/zapier.png` },
  { name: "Monday CRM", icon: `${BASE}tech/monday.png` },
  { name: "ElevenLabs", icon: `${BASE}tech/elevenlabs.png` },
  { name: "Twilio", icon: `${BASE}tech/twilio.png` },
  { name: "Telegram Bot", icon: `${BASE}tech/telegram.png` },
  { name: "Roboflow", icon: `${BASE}tech/roboflow.png` },
  { name: "PostgreSQL", icon: `${BASE}tech/postgresql.png` },
  { name: "MongoDB", icon: `${BASE}tech/mongodb.png` },
  { name: "Supabase", icon: `${BASE}tech/supabase.png` },
  { name: "ChromaDB", icon: `${BASE}tech/chromadb.png` },
  { name: "Backblaze B2", icon: `${BASE}tech/backblaze.png` },
  { name: "AWS", icon: `${BASE}tech/aws.png` },
  { name: "Stripe", icon: `${BASE}tech/stripe.png` },
  { name: "Showcase IDX", icon: `${BASE}tech/showcaseidx.png` },
  { name: "Docker", icon: `${BASE}tech/docker.png` },
  { name: "GitHub Actions", icon: `${BASE}tech/githubactions.png` },
  { name: "Vercel", icon: `${BASE}tech/vercel.png` },
  { name: "Git", icon: `${BASE}tech/git.png` },
  { name: "VS Code", icon: `${BASE}tech/vscode.png` },
  { name: "Figma", icon: `${BASE}tech/figma.png` },
  { name: "WebSocket", icon: `${BASE}tech/websocket.png` },
];

type Tech = (typeof TECHS)[number];

// Deterministic pseudo-random so the layout is stable between renders.
const seeded = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

type BallMeshProps = {
  tech: Tech;
  radius: number;
  initial: [number, number, number];
  hovered: boolean;
  light: boolean;
  onOver: () => void;
  onOut: () => void;
};

const BallMesh = forwardRef<Mesh, BallMeshProps>(
  ({ tech, radius, initial, hovered, light, onOver, onOut }, ref) => {
    const [decal] = useTexture([tech.icon]);
    const ballColor = light
      ? hovered
        ? "#d3d0c6"
        : "#b2afa5"
      : hovered
        ? "#ffffff"
        : "#eef2ff";

    return (
      <mesh
        ref={ref}
        position={initial}
        scale={radius * (hovered ? 1.15 : 1)}
        onPointerOver={(e) => {
          e.stopPropagation();
          onOver();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          onOut();
          document.body.style.cursor = "auto";
        }}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={ballColor}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
        {hovered && (
          <Html center position={[0, 1.7, 0]} style={{ pointerEvents: "none" }}>
            <span className="whitespace-nowrap rounded-md border border-[var(--accent-color)] bg-black/85 px-2 py-1 font-mono text-[11px] text-white">
              {tech.name}
            </span>
          </Html>
        )}
      </mesh>
    );
  },
);
BallMesh.displayName = "BallMesh";

type Body = { x: number; y: number; vx: number; vy: number };

const Cloud = ({ light }: { light: boolean }) => {
  const { viewport } = useThree();
  const meshes = useRef<(Mesh | null)[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);

  // Build radius, bounds and initial non-overlapping placement from viewport.
  const { bodies, radius, halfW, halfH } = useMemo(() => {
    const rand = seeded(1337);
    const n = TECHS.length;
    const W = viewport.width;
    const H = viewport.height;

    // Ball radius from a target packing fraction, then fit to a clean grid.
    let r = Math.sqrt((0.24 * W * H) / (n * Math.PI));
    let cols = Math.max(1, Math.floor(W / (2.25 * r)));
    let rows = Math.ceil(n / cols);
    if (rows * 2.25 * r > H) {
      r = H / (rows * 2.25);
      cols = Math.max(1, Math.floor(W / (2.25 * r)));
      rows = Math.ceil(n / cols);
    }

    const pad = r * 1.05;
    const hw = W / 2 - pad;
    const hh = H / 2 - pad;
    const cellW = (hw * 2) / cols;
    const cellH = (hh * 2) / rows;

    const bodies: Body[] = TECHS.map((_, i) => {
      const row = Math.floor(i / cols);
      const col = i - row * cols;
      const itemsInRow = row < rows - 1 ? cols : n - cols * (rows - 1);
      const rowW = itemsInRow * cellW;
      const x = -rowW / 2 + (col + 0.5) * cellW + (rand() - 0.5) * cellW * 0.1;
      const y = hh - (row + 0.5) * cellH + (rand() - 0.5) * cellH * 0.1;
      const ang = rand() * Math.PI * 2;
      const speed = 0.4 + rand() * 0.4;
      return { x, y, vx: Math.cos(ang) * speed, vy: Math.sin(ang) * speed };
    });

    return { bodies, radius: r, halfW: hw, halfH: hh };
  }, [viewport.width, viewport.height]);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.033);
    const n = bodies.length;
    const r = radius;
    const min = r * 2;

    // Integrate + reflect off the walls.
    for (let i = 0; i < n; i++) {
      const b = bodies[i];
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      if (b.x < -halfW) { b.x = -halfW; b.vx = Math.abs(b.vx); }
      else if (b.x > halfW) { b.x = halfW; b.vx = -Math.abs(b.vx); }
      if (b.y < -halfH) { b.y = -halfH; b.vy = Math.abs(b.vy); }
      else if (b.y > halfH) { b.y = halfH; b.vy = -Math.abs(b.vy); }
    }

    // Elastic, equal-mass ball-to-ball collisions (separate + exchange normal velocity).
    for (let i = 0; i < n; i++) {
      const a = bodies[i];
      for (let j = i + 1; j < n; j++) {
        const c = bodies[j];
        const dx = c.x - a.x;
        const dy = c.y - a.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < min * min && d2 > 1e-6) {
          const d = Math.sqrt(d2);
          const nx = dx / d;
          const ny = dy / d;
          const overlap = (min - d) / 2;
          a.x -= nx * overlap; a.y -= ny * overlap;
          c.x += nx * overlap; c.y += ny * overlap;
          const rel = (c.vx - a.vx) * nx + (c.vy - a.vy) * ny;
          if (rel < 0) {
            a.vx += rel * nx; a.vy += rel * ny;
            c.vx -= rel * nx; c.vy -= rel * ny;
          }
        }
      }
    }

    // Commit to meshes.
    for (let i = 0; i < n; i++) {
      const m = meshes.current[i];
      if (m) m.position.set(bodies[i].x, bodies[i].y, 0);
    }
  });

  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      {TECHS.map((tech, i) => (
        <BallMesh
          key={tech.name}
          ref={(el) => {
            meshes.current[i] = el;
          }}
          tech={tech}
          radius={radius}
          initial={[bodies[i].x, bodies[i].y, 0]}
          hovered={hovered === i}
          light={light}
          onOver={() => setHovered(i)}
          onOut={() => setHovered((h) => (h === i ? null : h))}
        />
      ))}
    </>
  );
};

const SkillsBalls = () => {
  const { mode } = useTheme();
  const isLight = mode === "light";
  const isMobile = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches,
    [],
  );

  // Mobile: lightweight static icon grid (no WebGL).
  if (isMobile) {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {TECHS.map((t) => (
          <div key={t.name} className="flex w-16 flex-col items-center gap-1.5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-tertiary)]">
              <img
                src={t.icon}
                alt={t.name}
                className="h-8 w-8 object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-center font-mono text-[9px] text-[var(--text-muted)]">
              {t.name}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="h-[520px] md:h-[600px] lg:h-[640px] w-full">
      <Canvas camera={{ position: [0, 0, 12], fov: 35 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Cloud light={isLight} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SkillsBalls;
