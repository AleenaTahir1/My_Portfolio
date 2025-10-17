import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import SEO from "./components/SEO";
import StructuredData from "./components/StructuredData";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <ParallaxProvider>
      <div className="bg-brutalist-black min-h-screen">
        <LoadingScreen />
        <CustomCursor />
        <SEO />
        <StructuredData />
        <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-white bg-brutalist-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="font-mono text-xs sm:text-sm text-gray-500 space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="break-words">
                <span className="text-white">saqlain@portfolio</span>
                <span className="text-gray-600">:</span>
                <span className="text-white">~</span>
                <span className="text-gray-600">$</span>
                <span className="ml-2">© 2024 Saqlain Abbas</span>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-6">
                <a
                  href="https://github.com/Razee4315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline transition-all duration-300"
                >
                  [GitHub]
                </a>
                <a
                  href="https://linkedin.com/in/saqlain-abbas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline transition-all duration-300"
                >
                  [LinkedIn]
                </a>
                <a
                  href="mailto:saqlainabbas315@gmail.com"
                  className="text-white hover:underline transition-all duration-300"
                >
                  [Email]
                </a>
                <a
                  href="https://saqlainabbas.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline transition-all duration-300"
                >
                  [Website]
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </ParallaxProvider>
  );
}

export default App;
