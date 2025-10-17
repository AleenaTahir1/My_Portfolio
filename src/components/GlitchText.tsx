import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
    >
      {/* Main text */}
      <span className="relative z-10">{text}</span>
      
      {/* Glitch layers - always active */}
      <>
          {/* Red glitch layer */}
          <motion.span
            className="absolute top-0 left-0 text-red-500 opacity-70"
            animate={{ 
              x: [-2, 2, -2, 1, -1], 
              y: [1, -1, 1, -2, 2]
            }}
            transition={{ 
              duration: 0.15, 
              repeat: Infinity,
              repeatDelay: 0.8,
              ease: "easeInOut"
            }}
          >
            {text}
          </motion.span>
          
          {/* Blue glitch layer */}
          <motion.span
            className="absolute top-0 left-0 text-blue-500 opacity-70"
            animate={{ 
              x: [2, -2, 2, -1, 1], 
              y: [-1, 1, -1, 2, -2]
            }}
            transition={{ 
              duration: 0.15, 
              repeat: Infinity,
              repeatDelay: 0.8,
              delay: 0.075,
              ease: "easeInOut"
            }}
          >
            {text}
          </motion.span>
      </>
    </motion.div>
  );
};

export default GlitchText;
