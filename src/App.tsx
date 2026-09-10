import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { ThemeToggle } from './components/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const StickyNav: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const past = window.scrollY > 480;
      setShowNav(past);
      if (!past) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <>
          {/* Desktop Sticky Nav */}
          <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center space-x-6 px-6 py-2.5 rounded-full border border-[var(--border-medium)] bg-[var(--bg-glass)] backdrop-blur-xl shadow-2xl pointer-events-auto"
          >
            <a
              href="#"
              className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--text-heading)] hover:text-[var(--border-highlight)] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              UTSHO.
            </a>

            <div className="w-[1px] h-3 bg-[var(--border-subtle)]" />

            <nav
              className="flex items-center space-x-6 text-[10.5px] tracking-[0.25em] font-medium uppercase text-[var(--text-secondary)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <a href="#about" className="hover:text-[var(--text-heading)] transition-colors">ABOUT</a>
              <a href="#work" className="hover:text-[var(--text-heading)] transition-colors">PROJECTS</a>
              <a href="#skills" className="hover:text-[var(--text-heading)] transition-colors">SKILLS</a>
              <a href="#experience" className="hover:text-[var(--text-heading)] transition-colors">EXPERIENCE</a>
              <a href="#contact" className="hover:text-[var(--text-heading)] transition-colors">CONTACT</a>
            </nav>

            <div className="w-[1px] h-3 bg-[var(--border-subtle)]" />

            <a
              href="#contact"
              className="flex items-center space-x-1.5 text-[10px] tracking-[0.22em] font-medium uppercase px-3 py-1 rounded-full border border-[var(--border-highlight)]/60 hover:border-[var(--border-highlight)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--border-highlight)] text-[var(--text-heading)] hover:text-black transition-all duration-300 shadow-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>LET&apos;S TALK</span>
              <span className="text-[11px]">↗</span>
            </a>
          </motion.header>

          {/* Mobile Sticky Nav Bar & Collapsible Drawer */}
          <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-3 inset-x-3 z-40 md:hidden pointer-events-auto"
          >
            <div className="flex items-center justify-between px-4 py-2 rounded-full border border-[var(--border-medium)] bg-[var(--bg-glass)] backdrop-blur-xl shadow-xl">
              <a
                href="#"
                className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--text-heading)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                UTSHO.
              </a>

              <div className="flex items-center space-x-2">
                <a
                  href="#contact"
                  className="text-[9px] tracking-[0.16em] font-medium uppercase px-2.5 py-1 rounded-full border border-[var(--border-highlight)]/70 bg-[var(--border-highlight)] text-black font-semibold"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  TALK ↗
                </a>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle Navigation Menu"
                  className="w-7 h-7 rounded-full border border-[var(--border-medium)] bg-[var(--bg-surface-elevated)] flex items-center justify-center text-[var(--text-primary)]"
                >
                  <span className="text-[11px] leading-none">{mobileMenuOpen ? '✕' : '☰'}</span>
                </button>
              </div>
            </div>

            {/* Mobile Nav Links Dropdown */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.nav
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 p-3 rounded-2xl border border-[var(--border-medium)] bg-[var(--bg-surface)]/95 backdrop-blur-2xl shadow-2xl flex flex-col space-y-1.5 text-center"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {[
                    { name: 'ABOUT', href: '#about' },
                    { name: 'PROJECTS', href: '#work' },
                    { name: 'SKILLS', href: '#skills' },
                    { name: 'EXPERIENCE', href: '#experience' },
                    { name: 'CONTACT', href: '#contact' },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-3 text-xs tracking-[0.25em] uppercase font-medium text-[var(--text-secondary)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-surface-elevated)] rounded-lg transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.header>
        </>
      )}
    </AnimatePresence>
  );
};

const FloatingControls: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center space-x-2 sm:space-x-3 pointer-events-auto">
      <div className="hidden sm:block">
        <ThemeToggle showLabel className="shadow-2xl" />
      </div>
      <div className="sm:hidden">
        <ThemeToggle showLabel={false} className="shadow-2xl" />
      </div>
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
            className="w-9 h-9 rounded-full border border-[var(--border-medium)] bg-[var(--bg-glass)] text-[var(--text-primary)] hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] flex items-center justify-center backdrop-blur-md cursor-pointer transition-colors shadow-lg"
          >
            <span className="text-xs">↑</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

function PortfolioContent() {
  const { theme } = useTheme();

  return (
    <div className={`w-full min-h-screen ${theme} theme-transition font-sans selection:bg-[#cbb59d] selection:text-black`}>
      <StickyNav />
      <main id="main-content" role="main" className="w-full">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
      </main>
      <ContactSection />
      <FloatingControls />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;