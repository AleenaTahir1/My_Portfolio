import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    { progress: 0, text: "Initializing system..." },
    { progress: 15, text: "Loading components..." },
    { progress: 30, text: "Connecting to services..." },
    { progress: 45, text: "Initializing animations..." },
    { progress: 60, text: "Fetching portfolio data..." },
    { progress: 75, text: "Rendering interface..." },
    { progress: 90, text: "Finalizing setup..." },
    { progress: 100, text: "System ready. Welcome!" },
  ];

  useEffect(() => {
    // Progress increases over 1.5 seconds (15ms * 100 = 1500ms) - faster for better UX
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 4; // Increase by 4 each time for faster progress
      });
    }, 15); // Reduced from 30ms to 15ms for faster loading

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Update message based on progress
    const messageIndex = messages.findIndex((msg) => progress < msg.progress);
    if (messageIndex > 0) {
      setCurrentMessage(messageIndex - 1);
    } else if (progress >= 100) {
      setCurrentMessage(messages.length - 1);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-brutalist-black flex items-center justify-center p-4 sm:p-6"
        >
          <div className="font-mono text-white space-y-4 sm:space-y-6 w-full max-w-md sm:max-w-lg md:max-w-2xl">
            {/* Terminal Prompt */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl"
            >
              <span className="text-gray-500">$</span> Initializing Portfolio...
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 sm:w-80 md:w-96 h-2 border-2 border-white relative overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-500 flex items-center justify-between w-64 sm:w-80 md:w-96"
            >
              <span>[{progress}%]</span>
              {progress < 100 && (
                <div className="flex gap-1">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              )}
              {progress === 100 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-green-500 font-bold"
                >
                  [✓ READY]
                </motion.span>
              )}
            </motion.div>

            {/* Loading Messages - Stack and stay visible */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xs sm:text-sm space-y-1 sm:space-y-2 min-h-[200px] sm:min-h-[220px] overflow-y-auto overflow-x-hidden px-2"
            >
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: idx <= currentMessage ? (idx === currentMessage && progress === 100 ? 1 : idx === currentMessage ? 1 : 0.4) : 0,
                    x: idx <= currentMessage ? 0 : -20
                  }}
                  transition={{ duration: 0.3, delay: 0 }}
                  className={`${
                    idx === currentMessage && progress === 100 
                      ? "text-green-500 font-bold" 
                      : idx === currentMessage
                      ? "text-white"
                      : "text-gray-600"
                  }`}
                >
                  <span className={idx === currentMessage ? "text-white" : "text-gray-700"}>{">"}  </span>
                  {msg.text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
