import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "00. Home" },
    { id: "about", label: "01. About" },
    { id: "education", label: "02. Education" },
    { id: "experience", label: "03. Experience" },
    { id: "projects", label: "04. Work" },
    { id: "contact", label: "05. Contact" },
  ];

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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-[var(--bg-primary)] border-b-2 border-[var(--border-color)]`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Brand */}
            <button
              onClick={() => scrollToSection("home")}
              className="font-mono text-[var(--text-primary)] text-sm md:text-base font-bold hover:opacity-70 transition-opacity"
            >
              <span className="text-[var(--text-muted)]">$</span> SA
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-mono text-[var(--text-primary)] text-sm px-4 py-2 transition-all duration-200 border-b-2 border-transparent hover:border-[var(--border-color)]"
                >
                  {item.label}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden font-mono text-[var(--text-primary)] text-base border-2 border-[var(--border-color)] px-4 py-2 hover:opacity-70 transition-all duration-200 min-w-[50px] min-h-[44px] flex items-center justify-center"
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
        className="fixed inset-0 z-[90] md:hidden bg-[var(--bg-primary)]"
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
              className="font-mono text-[var(--text-primary)] text-lg w-full text-left border-2 border-[var(--border-color)] px-4 py-3 hover:opacity-70 transition-all duration-200"
            >
              {item.label}
            </motion.button>
          ))}
          <ThemeToggle />
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;

