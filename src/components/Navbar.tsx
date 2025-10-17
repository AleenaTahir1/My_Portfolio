import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "00. Home" },
    { id: "about", label: "01. About" },
    { id: "experience", label: "02. Experience" },
    { id: "projects", label: "03. Work" },
    { id: "contact", label: "04. Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brutalist-black border-b-2 border-white"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Brand */}
            <button
              onClick={() => scrollToSection("home")}
              className="font-mono text-white text-sm md:text-base font-bold hover:opacity-70 transition-opacity"
            >
              <span className="text-gray-500">$</span> SA
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-mono text-white text-sm px-4 py-2 hover:bg-white hover:text-black transition-all duration-200 border-2 border-transparent hover:border-white"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden font-mono text-white text-sm border-2 border-white px-3 py-2 hover:bg-white hover:text-black transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? "[X]" : "[≡]"}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 md:hidden bg-brutalist-black"
        style={{ top: "64px" }}
      >
        <div className="flex flex-col items-start p-6 space-y-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: mobileMenuOpen ? 1 : 0,
                x: mobileMenuOpen ? 0 : -20,
              }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              className="font-mono text-white text-lg w-full text-left border-2 border-white px-4 py-3 hover:bg-white hover:text-black transition-all duration-200"
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
