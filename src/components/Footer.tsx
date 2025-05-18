
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-card text-card-foreground py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Aleena Tahir</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Artificial Intelligence Student & Developer
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} className="text-primary" />
          </button>
        </div>
        
        <div className="border-t border-border mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Aleena Tahir. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
