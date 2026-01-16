import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="font-mono text-xs border-2 border-[var(--border-color)] px-3 py-2 transition-all duration-200 flex items-center gap-2 bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={mode}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          className="inline-block w-4 text-center"
        >
          {mode === 'dark' ? '○' : '●'}
        </motion.span>
      </AnimatePresence>
      <span className="hidden sm:inline uppercase tracking-wider">
        {mode === 'dark' ? 'Light' : 'Dark'}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;

