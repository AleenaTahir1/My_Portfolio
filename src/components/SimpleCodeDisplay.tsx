
import { useState, useEffect, useRef } from 'react';

interface SimpleCodeDisplayProps {
  className?: string;
}

const SimpleCodeDisplay = ({ className = '' }: SimpleCodeDisplayProps) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const typingSpeedRef = useRef(40); // ms per character
  const pauseBetweenCodesRef = useRef(3000); // 3 seconds
  const glitchIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Collection of small code snippets to cycle through
  const codeSnippets = [
    // Python AI snippet
    `# Simple neural network in Python
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Initialize weights
w1 = np.random.randn()
w2 = np.random.randn()
bias = np.random.randn()

# Training loop
for _ in range(100):
    # Forward pass
    z = w1 * x1 + w2 * x2 + bias
    pred = sigmoid(z)`,

    // React snippet
    `// React component with hooks
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => 
        setCount(count + 1)
      }>
        Increment
      </button>
    </div>
  );
}`,

    // Python ML snippet
    `# Quick machine learning example
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    features, labels, test_size=0.2
)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Evaluate
accuracy = model.score(X_test, y_test)`
  ];

  // Handle the typing animation
  useEffect(() => {
    if (!isTyping) return;
    
    const currentSnippet = codeSnippets[currentCodeIndex];
    
    if (currentCharIndex < currentSnippet.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(currentSnippet.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prevIndex => prevIndex + 1);
      }, typingSpeedRef.current);
      
      return () => clearTimeout(timer);
    } else {
      // Finished typing current snippet
      setIsTyping(false);
      
      const nextCodeTimer = setTimeout(() => {
        setDisplayedCode('');
        setCurrentCharIndex(0);
        setCurrentCodeIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
        setIsTyping(true);
      }, pauseBetweenCodesRef.current);
      
      return () => clearTimeout(nextCodeTimer);
    }
  }, [currentCharIndex, isTyping, currentCodeIndex, codeSnippets]);

  // Manage glitch effect
  useEffect(() => {
    // Trigger glitch effect randomly
    glitchIntervalRef.current = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150); // Glitch duration
    }, Math.random() * 3000 + 2000); // Random interval between 2-5 seconds
    
    return () => {
      if (glitchIntervalRef.current) {
        clearInterval(glitchIntervalRef.current);
      }
    };
  }, []);

  // Format code with basic syntax highlighting
  const formatCode = (text: string) => {
    const keywordsRegex = /\b(import|from|def|return|class|if|else|for|in|function|const|let|var)\b/g;
    const commentsRegex = /(#.*$|\/\/.*$)/gm;
    const stringsRegex = /(["'][^"']*["']|`[^`]*`)/g;
    const functionRegex = /\b(\w+)(?=\s*\()/g;
    
    let formattedText = text
      .replace(keywordsRegex, '<span class="text-cyan-300">$1</span>')
      .replace(commentsRegex, '<span class="text-gray-400">$1</span>')
      .replace(stringsRegex, '<span class="text-yellow-300">$1</span>')
      .replace(functionRegex, '<span class="text-blue-300">$1</span>');
    
    return formattedText;
  };

  return (
    <div className={`simple-code-display ${className} ${glitchActive ? 'glitch-effect' : ''}`}>
      <div 
        className="code-container p-4 rounded-md bg-gray-900 shadow-lg border border-gray-700 relative overflow-hidden"
        style={{ width: '360px', height: '240px' }} // Fixed dimensions to prevent resizing
      >
        {/* Glitch overlay elements - reduced opacity */}
        <div className="glitch-overlay-1 absolute inset-0 bg-gray-900 opacity-0"></div>
        <div className="glitch-overlay-2 absolute inset-0 bg-gray-900 opacity-0"></div>
        
        <pre className="code-editor font-mono text-sm whitespace-pre-wrap overflow-hidden max-h-[220px] relative z-10 text-white">
          <code 
            dangerouslySetInnerHTML={{ 
              __html: formatCode(displayedCode) 
            }} 
            className="text-white" // Ensure base text is white for visibility
          />
          {isTyping && (
            <span className="inline-block w-2 h-5 bg-blue-400 ml-0.5 animate-cursor-blink"></span>
          )}
        </pre>
      </div>
    </div>
  );
};

export default SimpleCodeDisplay;
