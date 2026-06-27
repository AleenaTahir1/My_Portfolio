import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

/**
 * Simple cute light-bulb theme toggle (pure SVG).
 * Light mode = bulb ON (yellow glass, glowing filament, rays + halo).
 * Dark mode  = bulb OFF (gray, no glow). Click to flip the theme.
 */
const LampToggle = () => {
  const { mode, toggleTheme } = useTheme();
  const on = mode === "light";
  const tr = "all 0.4s ease";
  const glass = on ? "#fde047" : "#cbd5e1";
  const glassEdge = on ? "#f59e0b" : "#94a3b8";
  const filament = on ? "#b45309" : "#9aa3b2";

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.08 }}
      aria-label={`Turn the bulb ${on ? "off (dark mode)" : "on (light mode)"}`}
      title={on ? "Turn the bulb off" : "Turn the bulb on"}
      className="relative flex items-center justify-center bg-transparent focus:outline-none"
      style={{ width: 40, height: 48 }}
    >
      <svg width="38" height="46" viewBox="0 0 40 48" fill="none">
        {/* soft glow */}
        <circle
          cx="20"
          cy="17"
          r="15"
          fill="#fbbf24"
          style={{ opacity: on ? 0.45 : 0, transition: tr, filter: "blur(4px)" }}
        />
        {/* rays */}
        <g
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ opacity: on ? 0.9 : 0, transition: tr }}
        >
          <line x1="20" y1="1" x2="20" y2="5" />
          <line x1="4" y1="17" x2="8" y2="17" />
          <line x1="36" y1="17" x2="32" y2="17" />
          <line x1="8" y1="6" x2="11" y2="9" />
          <line x1="32" y1="6" x2="29" y2="9" />
        </g>

        {/* glass bulb */}
        <circle
          cx="20"
          cy="17"
          r="11"
          fill={glass}
          stroke={glassEdge}
          strokeWidth="1.6"
          style={{ transition: tr }}
        />
        {/* filament */}
        <path
          d="M16 18 q2 -5 4 0 q2 5 4 0"
          fill="none"
          stroke={filament}
          strokeWidth="1.8"
          strokeLinecap="round"
          style={{ transition: tr }}
        />

        {/* neck + screw base */}
        <rect x="15.5" y="26" width="9" height="3" fill={glassEdge} style={{ transition: tr }} />
        <rect x="15" y="29" width="10" height="8" rx="1.5" fill="#9ca3af" />
        <line x1="15" y1="32" x2="25" y2="32" stroke="#6b7280" strokeWidth="1" />
        <line x1="15" y1="34.5" x2="25" y2="34.5" stroke="#6b7280" strokeWidth="1" />
        <rect x="17.5" y="37" width="5" height="2.5" rx="1" fill="#6b7280" />
      </svg>
    </motion.button>
  );
};

export default LampToggle;
