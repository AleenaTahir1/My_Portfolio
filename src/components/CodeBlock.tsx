
import { useEffect, useState, useRef } from 'react';

interface CodeBlockProps {
  className?: string;
}

const CodeBlock = ({ className = '' }: CodeBlockProps) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const typingSpeedRef = useRef(50);
  const pauseBetweenCodesRef = useRef(2000);
  
  // Collection of code snippets to cycle through
  const codeSnippets = [
    // Python AI code
    `import torch
from unsloth import FastLanguageModel

# Fine-tuning LLM for university chatbot
model, tokenizer = FastLanguageModel.from_pretrained(
    "unsloth/llama-2-7b",
    max_seq_length=2048,
    dtype=torch.float16,
    load_in_4bit=True
)

# Customize for university data
model = model.train(
    university_data,
    epochs=3,
    learning_rate=2e-5
)`,

    // React code
    `import React, { useState } from 'react';

// Building a smart UI component
function SmartComponent({ initialData }) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const handleProcess = async () => {
    setLoading(true);
    try {
      const result = await processData(data);
      setData(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="smart-container">
      {loading ? <Spinner /> : null}
      <div className="data-display">{data}</div>
      <button onClick={handleProcess}>
        Process Data
      </button>
    </div>
  );
}`,

    // Machine Learning code
    `from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import numpy as np

# Training a classifier on student data
def train_model(X_train, y_train):
    # Initialize the classifier
    clf = RandomForestClassifier(
        n_estimators=100, 
        max_depth=10,
        random_state=42
    )
    
    # Train the model
    clf.fit(X_train, y_train)
    return clf

# Evaluate the model
predictions = clf.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Model accuracy: {accuracy:.2f}")`
  ];

  // Reset typing when switching to a new code snippet
  useEffect(() => {
    setDisplayedCode('');
    setCurrentLine(0);
    setIsTyping(true);
  }, [currentCodeIndex]);

  // Handle the typing animation
  useEffect(() => {
    if (!isTyping) return;

    const lines = codeSnippets[currentCodeIndex].split('\n');
    
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(prev => prev + (prev ? '\n' : '') + lines[currentLine]);
        setCurrentLine(prev => prev + 1);
      }, typingSpeedRef.current + Math.random() * 40);
      
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      const nextCodeTimer = setTimeout(() => {
        setCurrentCodeIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
      }, pauseBetweenCodesRef.current);
      
      return () => clearTimeout(nextCodeTimer);
    }
  }, [currentLine, isTyping, currentCodeIndex, codeSnippets]);

  const formatCode = (text: string) => {
    let language: string;
    
    if (currentCodeIndex === 0 || currentCodeIndex === 2) {
      language = 'python';
    } else {
      language = 'javascript';
    }
    
    // Function to wrap text in span with appropriate class
    const wrapWithClass = (text: string, className: string) => {
      return `<span class="text-code-${className}">${text}</span>`;
    };
    
    // Define syntax highlighting patterns based on language
    const patterns: Record<string, { regex: RegExp; className: string }[]> = {
      'python': [
        { regex: /\b(import|from|def|return|as|class|if|else|for|in|True|False|None|and|or|not|try|except|finally)\b/g, className: 'keyword' },
        { regex: /\b(print|len|range|str|int|float|list|dict|set|tuple|max|min)\b(?=\s*\()/g, className: 'function' },
        { regex: /("[^"]*"|'[^']*')/g, className: 'string' },
        { regex: /(#.*$)/gm, className: 'comment' },
        { regex: /\b(\d+\.?\d*|\.\d+)\b/g, className: 'number' },
        { regex: /\b(\w+)(?=\s*\()/g, className: 'function' }
      ],
      'javascript': [
        { regex: /\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|new|this|class|import|from|export|default|try|catch|finally|throw|typeof|instanceof|async|await)\b/g, className: 'keyword' },
        { regex: /\b(console|document|window|Math|Array|Object|String|Number|Boolean|Function|RegExp|Map|Set|Promise)\b\./g, className: 'variable' },
        { regex: /\b(log|warn|error|info|time|timeEnd|group|groupEnd)\b(?=\s*\()/g, className: 'function' },
        { regex: /("[^"]*"|'[^']*'|`[^`]*`)/g, className: 'string' },
        { regex: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, className: 'comment' },
        { regex: /\b(\d+\.?\d*|\.\d+)\b/g, className: 'number' },
        { regex: /\b(\w+)(?=\s*\()/g, className: 'function' },
        { regex: /\b(true|false|null|undefined|NaN)\b/g, className: 'keyword' }
      ]
    };
    
    // Apply formatting based on language
    let formattedText = text;
    if (patterns[language]) {
      patterns[language].forEach(pattern => {
        formattedText = formattedText.replace(pattern.regex, match => {
          // Avoid re-highlighting already highlighted text
          if (match.includes('<span class="')) return match;
          return wrapWithClass(match, pattern.className);
        });
      });
    }
    
    return formattedText;
  };

  const getLanguageLabel = () => {
    if (currentCodeIndex === 0 || currentCodeIndex === 2) {
      return 'python';
    } else {
      return 'javascript';
    }
  };

  return (
    <div className={`code-block overflow-hidden ${className}`}>
      <div className="flex items-center px-4 py-3 bg-[#1a1b26] border-b border-[#44475a] text-white rounded-t-lg">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-sm text-gray-400 font-mono">{getLanguageLabel()}</div>
        <div className="flex space-x-2">
          <div className="text-gray-400 text-xs">editor</div>
        </div>
      </div>
      <div className="p-4 overflow-x-auto bg-[#1a1b26] min-h-[300px] max-h-[400px] overflow-y-auto">
        <pre className="code-editor font-mono text-sm text-white">
          {displayedCode.split('\n').map((line, i) => (
            <div key={i} className="code-line">
              <span dangerouslySetInnerHTML={{ __html: formatCode(line) }} />
              {i === displayedCode.split('\n').length - 1 && isTyping && (
                <span className="inline-block w-2 h-4 bg-white ml-0.5 animate-cursor-blink"></span>
              )}
            </div>
          ))}
        </pre>
      </div>
      <div className="px-4 py-2 bg-[#1a1b26] border-t border-[#44475a] text-xs text-gray-400 flex justify-between rounded-b-lg">
        <span>UTF-8</span>
        <span>Tab Size: 2</span>
      </div>
    </div>
  );
};

export default CodeBlock;
