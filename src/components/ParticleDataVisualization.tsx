const ParticleDataVisualization = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`neural-network-visualization ${className}`}>
      <div className="tech-overlay">
        <div className="network-name">Neural Network <span className="blink">•</span></div>
        <div className="data-points">Active nodes: <span className="highlight">248</span></div>
      </div>
      
      {/* SVG Neural Network */}
      <div className="svg-container">
        <svg className="neural-svg" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
          {/* Background grid */}
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 0 10 L 40 10" fill="none" stroke="rgba(77, 171, 247, 0.1)" strokeWidth="0.5"/>
            <path d="M 10 0 L 10 40" fill="none" stroke="rgba(77, 171, 247, 0.1)" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Connection lines */}
          <g className="connections">
            <path className="connection animate-pulse-1" d="M 150,130 C 250,110 350,190 450,170" stroke="rgba(77, 171, 247, 0.5)" strokeWidth="1.5" fill="none" />
            <path className="connection animate-pulse-2" d="M 150,170 C 250,150 350,230 450,210" stroke="rgba(77, 171, 247, 0.5)" strokeWidth="1.5" fill="none" />
            <path className="connection animate-pulse-3" d="M 150,210 C 250,190 350,270 450,250" stroke="rgba(77, 171, 247, 0.5)" strokeWidth="1.5" fill="none" />
            <path className="connection animate-pulse-1" d="M 150,250 C 250,230 350,310 450,290" stroke="rgba(77, 171, 247, 0.5)" strokeWidth="1.5" fill="none" />
            <path className="connection animate-pulse-2" d="M 150,290 C 250,270 350,350 450,330" stroke="rgba(77, 171, 247, 0.5)" strokeWidth="1.5" fill="none" />
            <path className="connection animate-pulse-3" d="M 150,330 C 250,310 350,390 450,370" stroke="rgba(77, 171, 247, 0.5)" strokeWidth="1.5" fill="none" />
            
            <path className="connection animate-pulse-2" d="M 450,170 C 550,150 650,230 750,210" stroke="rgba(77, 171, 247, 0.5)" strokeWidth="1.5" fill="none" />
            <path className="connection animate-pulse-3" d="M 450,210 C 550,190 650,270 750,250" stroke="rgba(77, 171, 247, 0.5)" strokeWidth="1.5" fill="none" />
            <path className="connection animate-pulse-1" d="M 450,250 C 550,230 650,310 750,290" stroke="rgba(77, 171, 247, 0.5)" strokeWidth="1.5" fill="none" />
            <path className="connection animate-pulse-2" d="M 450,290 C 550,270 650,350 750,330" stroke="rgba(77, 171, 247, 0.5)" strokeWidth="1.5" fill="none" />
            <path className="connection animate-pulse-3" d="M 450,330 C 550,310 650,390 750,370" stroke="rgba(77, 171, 247, 0.5)" strokeWidth="1.5" fill="none" />
            
            <path className="connection animate-pulse-1" d="M 450,170 C 500,150 600,350 650,330" stroke="rgba(77, 171, 247, 0.3)" strokeWidth="1" fill="none" />
            <path className="connection animate-pulse-2" d="M 450,330 C 500,350 600,150 650,170" stroke="rgba(77, 171, 247, 0.3)" strokeWidth="1" fill="none" />
          </g>
          
          {/* Input layer */}
          <g className="input-layer">
            <circle className="node animate-pulse-opacity-1" cx="150" cy="130" r="10" fill="rgba(77, 171, 247, 0.8)" />
            <circle className="node animate-pulse-opacity-2" cx="150" cy="170" r="10" fill="rgba(59, 201, 219, 0.8)" />
            <circle className="node animate-pulse-opacity-3" cx="150" cy="210" r="10" fill="rgba(56, 217, 169, 0.8)" />
            <circle className="node animate-pulse-opacity-1" cx="150" cy="250" r="10" fill="rgba(77, 171, 247, 0.8)" />
            <circle className="node animate-pulse-opacity-2" cx="150" cy="290" r="10" fill="rgba(59, 201, 219, 0.8)" />
            <circle className="node animate-pulse-opacity-3" cx="150" cy="330" r="10" fill="rgba(56, 217, 169, 0.8)" />
            <circle className="node animate-pulse-opacity-1" cx="150" cy="370" r="10" fill="rgba(77, 171, 247, 0.8)" />
          </g>
          
          {/* Hidden layer */}
          <g className="hidden-layer">
            <circle className="node animate-pulse-opacity-2" cx="450" cy="170" r="10" fill="rgba(59, 201, 219, 0.8)" />
            <circle className="node animate-pulse-opacity-3" cx="450" cy="210" r="10" fill="rgba(56, 217, 169, 0.8)" />
            <circle className="node animate-pulse-opacity-1" cx="450" cy="250" r="10" fill="rgba(77, 171, 247, 0.8)" />
            <circle className="node animate-pulse-opacity-2" cx="450" cy="290" r="10" fill="rgba(59, 201, 219, 0.8)" />
            <circle className="node animate-pulse-opacity-3" cx="450" cy="330" r="10" fill="rgba(56, 217, 169, 0.8)" />
            <circle className="node animate-pulse-opacity-1" cx="450" cy="370" r="10" fill="rgba(77, 171, 247, 0.8)" />
          </g>
          
          {/* Output layer */}
          <g className="output-layer">
            <circle className="node animate-pulse-opacity-3" cx="750" cy="210" r="10" fill="rgba(56, 217, 169, 0.8)" />
            <circle className="node animate-pulse-opacity-1" cx="750" cy="250" r="10" fill="rgba(77, 171, 247, 0.8)" />
            <circle className="node animate-pulse-opacity-2" cx="750" cy="290" r="10" fill="rgba(59, 201, 219, 0.8)" />
            <circle className="node animate-pulse-opacity-3" cx="750" cy="330" r="10" fill="rgba(56, 217, 169, 0.8)" />
            <circle className="node animate-pulse-opacity-1" cx="750" cy="370" r="10" fill="rgba(77, 171, 247, 0.8)" />
          </g>
          
          {/* Data flow animation */}
          <g className="data-flow-animation">
            <circle className="data-dot animate-flow-1" r="3" fill="#4dabf7">
              <animateMotion path="M 150,170 C 250,150 350,230 450,210" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle className="data-dot animate-flow-2" r="3" fill="#4dabf7">
              <animateMotion path="M 150,250 C 250,230 350,310 450,290" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle className="data-dot animate-flow-3" r="3" fill="#4dabf7">
              <animateMotion path="M 450,210 C 550,190 650,270 750,250" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle className="data-dot animate-flow-4" r="3" fill="#4dabf7">
              <animateMotion path="M 450,290 C 550,270 650,350 750,330" dur="4.5s" repeatCount="indefinite" />
            </circle>
          </g>
          
          {/* Interactive highlight */}
          <circle className="interactive-highlight" cx="450" cy="250" r="15" fill="none" stroke="rgba(77, 171, 247, 0.8)" strokeWidth="2">
            <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      
      {/* Data flow simulation */}
      <div className="data-flow-container">
        <div className="data-flow"></div>
        <div className="data-flow delay-1"></div>
        <div className="data-flow delay-2"></div>
      </div>
      
      {/* Add corner accents */}
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>
    </div>
  );
};

export default ParticleDataVisualization;
