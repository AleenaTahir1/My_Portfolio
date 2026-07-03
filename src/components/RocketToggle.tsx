import { useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

/**
 * Rocket theme toggle. Click → the engine ignites, the rocket rumbles and
 * sinks well below its pad (crossing the header line) building thrust, then
 * blasts off the top of the screen; the theme flips while it's gone, and it
 * descends back onto its pad engine-first with a landing burn.
 * Respects prefers-reduced-motion (instant flip, no flight).
 */

type FlamePhase = "off" | "ignite" | "full" | "landing";

const RocketToggle = () => {
  const { mode, toggleTheme } = useTheme();
  const controls = useAnimationControls();
  const busy = useRef(false);
  const [flame, setFlame] = useState<FlamePhase>("off");
  const [burst, setBurst] = useState(0); // keys the smoke puffs

  const launch = async () => {
    if (busy.current) return;
    busy.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      toggleTheme();
      busy.current = false;
      return;
    }

    // ignition — flame lights, rumble builds while the rocket sinks deep
    // below the pad (dips across the header border) storing energy
    setFlame("ignite");
    setBurst((b) => b + 1);
    await controls.start({
      y: [0, 4, 8, 12, 16],
      x: [0, -1.4, 1.4, -1.8, 1.8],
      transition: { duration: 0.6, ease: "easeIn" },
    });
    // violent final shake at full throttle, pressed all the way down
    await controls.start({
      x: [1.8, -2.5, 2.5, -2.5, 2.5, 0],
      y: 16,
      transition: { duration: 0.24 },
    });

    // liftoff — ferocious, accelerating straight off the top of the screen
    setFlame("full");
    await controls.start({
      y: -200,
      scaleY: [1, 1.12, 1.04],
      transition: { duration: 0.3, ease: [0.75, 0.02, 1, 0.4] },
    });

    // theme flips while the rocket is out of sight
    toggleTheme();

    // descent — engine burn, easing onto the pad with a tiny settle bounce
    setFlame("landing");
    await controls.start({
      y: [-200, 3, 0],
      scaleY: 1,
      transition: { duration: 1, ease: [0.2, 0.7, 0.35, 1] },
    });

    setFlame("off");
    busy.current = false;
  };

  const flameScale =
    flame === "ignite" ? 0.5 : flame === "full" ? 1 : flame === "landing" ? 0.65 : 0;

  return (
    <button
      onClick={launch}
      aria-label={`Launch rocket to switch to ${mode === "light" ? "dark" : "light"} mode`}
      title="Launch to toggle theme"
      className="relative flex items-end justify-center bg-transparent focus:outline-none cursor-pointer"
      style={{ width: 44, height: 50 }}
    >
      {/* launch pad */}
      <span
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-7"
        style={{ background: "var(--text-muted)" }}
      />

      {/* smoke puffs on ignition */}
      {burst > 0 && flame !== "off" && (
        <span key={burst} className="absolute bottom-0 left-1/2 pointer-events-none">
          {[-16, -4, 13].map((dx, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.3, x: dx * 0.3, y: 0 }}
              animate={{ opacity: [0, 0.6, 0], scale: [0.3, 1.5, 2.3], x: dx, y: -2 - i }}
              transition={{ duration: 1.2, delay: i * 0.12, ease: "easeOut" }}
              className="absolute w-3 h-3 rounded-full"
              style={{ background: "var(--text-muted)", filter: "blur(2px)" }}
            />
          ))}
        </span>
      )}

      {/* the rocket (flame is inside so it travels with it) */}
      <motion.span animate={controls} className="relative block will-change-transform">
        <svg width="32" height="44" viewBox="0 0 36 50" fill="none">
          <defs>
            <linearGradient id="rkBody" x1="11" y1="0" x2="26" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#fafbfc" />
              <stop offset="0.4" stopColor="#dde3ea" />
              <stop offset="0.75" stopColor="#93a0b0" />
              <stop offset="1" stopColor="#5b6675" />
            </linearGradient>
            <linearGradient id="rkNose" x1="11" y1="0" x2="26" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#f1f4f7" />
              <stop offset="0.6" stopColor="#c3ccd7" />
              <stop offset="1" stopColor="#7c8896" />
            </linearGradient>
            <linearGradient id="rkTip" x1="14.4" y1="0" x2="21.6" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#9aa5b1" />
              <stop offset="1" stopColor="#525d6b" />
            </linearGradient>
            <linearGradient id="rkFin" x1="0" y1="0" x2="36" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#ef4444" />
              <stop offset="0.5" stopColor="#b91c1c" />
              <stop offset="1" stopColor="#6d1414" />
            </linearGradient>
            <linearGradient id="rkSkirt" x1="0" y1="36" x2="0" y2="39.2" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#374151" />
              <stop offset="1" stopColor="#1f2937" />
            </linearGradient>
            <linearGradient id="rkNozzle" x1="0" y1="39.2" x2="0" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#4b5563" />
              <stop offset="0.6" stopColor="#1f2937" />
              <stop offset="1" stopColor="#0b0f16" />
            </linearGradient>
            <radialGradient id="rkFlameIn" cx="0.5" cy="0.25" r="0.8">
              <stop offset="0" stopColor="#fffbeb" />
              <stop offset="0.5" stopColor="#fde047" />
              <stop offset="1" stopColor="#f59e0b" />
            </radialGradient>
          </defs>

          {/* nose cone */}
          <path d="M18 1 C 22.5 4.5, 24.6 8, 25 12 L 11 12 C 11.4 8, 13.5 4.5, 18 1 Z" fill="url(#rkNose)" />
          {/* metal tip */}
          <path d="M18 1 C 19.6 2.2, 20.8 3.6, 21.6 5.4 L 14.4 5.4 C 15.2 3.6, 16.4 2.2, 18 1 Z" fill="url(#rkTip)" />
          {/* red band under the nose */}
          <path d="M11.05 12 L24.95 12 L25.1 13.8 L10.9 13.8 Z" fill="#dc2626" />

          {/* body — chubby tapered cylinder */}
          <path d="M10.9 13.8 L25.1 13.8 C 25.7 21.5, 25.6 29, 24.9 36 L 11.1 36 C 10.4 29, 10.3 21.5, 10.9 13.8 Z" fill="url(#rkBody)" />
          {/* vertical specular highlight */}
          <rect x="13.4" y="15" width="2.2" height="19.5" rx="1.1" fill="#ffffff" opacity="0.4" />
          {/* panel seam */}
          <line x1="10.5" y1="26.5" x2="25.5" y2="26.5" stroke="#8b96a5" strokeWidth="0.7" opacity="0.6" />

          {/* porthole */}
          <circle cx="18" cy="19.5" r="3.6" fill="#0b7285" stroke="#3f4a59" strokeWidth="1.4" />
          <circle cx="16.6" cy="18.1" r="1.1" fill="#99f6e4" opacity="0.9" />

          {/* mission marking */}
          <text
            x="18"
            y="31.2"
            textAnchor="middle"
            fontSize="4.6"
            fontFamily="monospace"
            fontWeight="bold"
            fill="#475569"
            letterSpacing="0.6"
          >
            AT
          </text>

          {/* interstage dark band */}
          <rect x="10.7" y="32.4" width="14.6" height="2.2" fill="#1f2937" />

          {/* swept-back fins */}
          <path d="M11.2 29.5 C 6.5 33, 4 37.5, 3.5 42 L 11.4 37.8 Z" fill="url(#rkFin)" />
          <path d="M24.8 29.5 C 29.5 33, 32 37.5, 32.5 42 L 24.6 37.8 Z" fill="url(#rkFin)" />

          {/* engine skirt + nozzle bell */}
          <path d="M11.1 36 L24.9 36 L23.9 39.2 L12.1 39.2 Z" fill="url(#rkSkirt)" />
          <path d="M13.8 39.2 C 13.3 41.2, 13 42.8, 12.9 44 L 23.1 44 C 23 42.8, 22.7 41.2, 22.2 39.2 Z" fill="url(#rkNozzle)" />
          <ellipse cx="18" cy="44" rx="5.1" ry="1" fill="#0b0f16" />
        </svg>

        {/* engine flame — layered outer/inner, flickers while burning */}
        <motion.span
          animate={
            flame === "off"
              ? { opacity: 0, scale: 0.2 }
              : {
                  opacity: 1,
                  scale: flameScale,
                  scaleY: [flameScale, flameScale * 1.3, flameScale * 0.9, flameScale * 1.2, flameScale],
                }
          }
          transition={
            flame === "off"
              ? { duration: 0.15 }
              : { scaleY: { duration: 0.28, repeat: Infinity }, opacity: { duration: 0.1 } }
          }
          className="absolute left-1/2 pointer-events-none"
          style={{ top: 38, x: "-50%", transformOrigin: "top center" }}
        >
          <svg width="20" height="30" viewBox="0 0 20 34" fill="none">
            <path d="M10 0 C 15.5 6, 18.5 13, 10 33 C 1.5 13, 4.5 6, 10 0 Z" fill="#f97316" opacity="0.85" />
            <path d="M10 1 C 14 6, 15 11, 10 23 C 5 11, 6 6, 10 1 Z" fill="url(#rkFlameIn)" />
          </svg>
        </motion.span>
      </motion.span>
    </button>
  );
};

export default RocketToggle;
