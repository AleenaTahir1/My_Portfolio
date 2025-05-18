
import { Button } from "./ui/button";
import GameOfLife from "./GameOfLife";
import { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const rightSectionRef = useRef<HTMLDivElement>(null);
  const [rightSectionDimensions, setRightSectionDimensions] = useState({
    width: 0,
    height: 0
  });
  
  useEffect(() => {
    // Set initial dimensions for the right section
    const updateDimensions = () => {
      if (rightSectionRef.current) {
        setRightSectionDimensions({
          width: rightSectionRef.current.offsetWidth,
          height: rightSectionRef.current.offsetHeight
        });
      }
    };
    
    // Call immediately and add listener for resize
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    // Add a small delay to ensure the section is fully rendered
    const timeoutId = setTimeout(updateDimensions, 100);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-16 pb-12 bg-[#f0f0f0]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div>
            <div className="mb-2">
              <h1 
                className="glitch text-5xl md:text-6xl lg:text-7xl font-bold mb-4 relative" 
                data-text="Aleena Tahir"
              >
                Aleena Tahir
              </h1>
            </div>
            <div className="w-16 h-1 bg-primary mb-6 mx-auto md:mx-0"></div>
            <h2 className="text-xl md:text-2xl mb-4 text-muted-foreground">
              Artificial Intelligence Student & Developer
            </h2>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#contact">
                <Button>
                  Get in touch
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline">
                  View projects
                </Button>
              </a>
              <a href="Aleena_CV.pdf" download="Aleena_CV.pdf">
                <Button variant="outline">
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div 
          ref={rightSectionRef}
          className="w-full md:w-1/2 flex justify-center relative h-[400px] md:h-[500px]"
        >
          {/* Game of Life Animation in right section */}
          {rightSectionDimensions.width > 0 && (
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="w-full h-full relative rounded-xl border-2 border-black/40 overflow-hidden shadow-lg">
                <GameOfLife 
                  width={rightSectionDimensions.width - 48} /* Accounting for padding */
                  height={rightSectionDimensions.height - 48}
                  cellSize={15}
                  framesPerSecond={2}
                  primaryColor="rgba(240, 240, 240, 0.1)"
                  secondaryColor="rgba(0, 0, 0, 0.8)"
                  initialDensity={0.25}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
