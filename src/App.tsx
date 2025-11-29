import { lazy, Suspense } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SEO from "./components/SEO";
import StructuredData from "./components/StructuredData";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

// Lazy load non-critical components for better performance
const AboutSection = lazy(() => import("./components/AboutSection"));
const EducationSection = lazy(() => import("./components/EducationSection"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-brutalist-black">
    <div className="font-mono text-white text-sm">Loading...</div>
  </div>
);

function App() {
  return (
    <ParallaxProvider>
      <div className="bg-brutalist-black min-h-screen">
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <SEO />
        <StructuredData />
        <Navbar />
        <main>
          <HeroSection />
          <Suspense fallback={<SectionLoader />}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <EducationSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <ExperienceSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <ProjectsSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <ContactSection />
          </Suspense>
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
                  <span className="ml-2">© 2025 Saqlain Abbas</span>
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
                    href="https://www.linkedin.com/in/saqlainrazee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline transition-all duration-300"
                  >
                    [LinkedIn]
                  </a>
                  <a
                    href="mailto:saqlainrazee@gmail.com"
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
