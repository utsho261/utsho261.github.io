import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black text-[#e8dfd8] font-sans selection:bg-[#cbb59d] selection:text-black">

      {/* ================= 2. FIXED VIDEO LAYER ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-end bg-black">
        {/* Ambient Warm Golden Spotlight behind character */}
        <div className="absolute top-1/3 right-[15%] w-[32rem] h-[32rem] bg-[#d4af37]/[0.06] rounded-full blur-3xl pointer-events-none" />

        <div className="relative h-full flex items-center justify-end">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-auto max-w-none object-contain origin-right scale-100 lg:scale-[1.06] opacity-95 transition-opacity -translate-x-0 lg:-translate-x-8 xl:-translate-x-10"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dynamic Soft Left Edge Blend - smooth gradient so text on left stays crisp while video breathes */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 md:w-1/2 lg:w-[48%] bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none z-[1]" />

        {/* Subtle Top & Bottom Vignettes for seamless blending */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-[1]" />

      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">

        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-white hover:opacity-75 transition-opacity"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            UTSHO.
          </a>

          {/* Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-medium uppercase text-[#c5b8ab] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-white"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/80 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Theme Toggle & Contact Button */}
          <div className="flex items-center space-x-3 ml-auto md:ml-0">
            <ThemeToggle />

            <a
              href="#contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-medium uppercase py-2 px-4 border border-[rgba(212,175,55,0.4)] hover:border-[#D4AF37] text-white transition-all duration-300 backdrop-blur-sm bg-black/60"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>LET&apos;S TALK</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs text-[#D4AF37]">
                ↗
              </span>
            </a>
          </div>
        </header>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">

          {/* LEFT: Balanced Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[40rem] pointer-events-auto z-20"
          >
            {/* Live Availability Status Pill */}
            <motion.div variants={fadeUpVariants} className="mb-2.5 inline-flex items-center space-x-2.5 px-3.5 py-1 rounded-full border border-[rgba(212,175,55,0.35)] bg-black/75 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-medium">
                AVAILABLE FOR HIRE // BACKEND & ANDROID DEVELOPER
              </span>
            </motion.div>

            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-2.5 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: I BUILD */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2D9D0] to-[#9C7F62] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                  I CRAFT
                </span>

                {/* Line 2: BACKEND & */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#D4AF37] to-[#8C6D4F] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                  BACKEND &
                </span>

                {/* Line 3: ANDROID APPS */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#E8CFAB] via-[#AA854E] to-[#5C3E1B] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                  ANDROID APPS
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies */}
            <motion.div variants={fadeUpVariants} className="mb-2.5">
              <p
                className="text-[10.5px] sm:text-[11.5px] md:text-xs font-semibold tracking-[0.28em] uppercase text-[#C5B8AB]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                PYTHON & DJANGO SPECIALIST <span className="text-[#D4AF37] mx-1 font-bold">•</span> NATIVE ANDROID (JAVA) <span className="text-[#D4AF37] mx-1 font-bold">•</span> REST APIS & CLOUD
              </p>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-normal text-[#C5B8AB] leading-[1.75] tracking-wide max-w-lg mb-4 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                I transform complex logic into scalable backend systems and high-performance Android applications.
                <br />
                Specializing in Python, Django REST Framework, and native Android apps with real-time Firebase integration.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row items-center gap-4 sm:gap-6 mb-3.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore My Work CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3 border border-[rgba(212,175,55,0.5)] bg-[#16120E]/90 hover:border-[#D4AF37] hover:bg-[#201912] text-white text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.2)] overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent pointer-events-none group-hover:via-[#F7E7C4] transition-all" />
                <span>EXPLORE MY WORK</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-xs text-[#D4AF37]">
                  ↗
                </span>
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3 border border-[rgba(140,109,79,0.5)] hover:border-[#D4AF37] hover:bg-black/80 text-[#C5B8AB] hover:text-white text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 bg-black/60 cursor-pointer"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-1 text-xs text-[#D4AF37]">
                  ↓
                </span>
              </motion.a>
            </motion.div>

            {/* Quick Profiles Link Bar */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2 text-[11px] font-mono tracking-[0.2em] text-[#A8988B]"
            >
              <span className="text-[#8C6D4F] text-[10px] uppercase font-sans tracking-[0.25em]">PROFILES //</span>
              <a
                href="https://www.linkedin.com/in/utshoroy261/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors flex items-center space-x-1"
              >
                <span>LINKEDIN</span>
                <span className="text-[10px] text-[#D4AF37]">↗</span>
              </a>
              <span className="text-[#8C6D4F]/40">•</span>
              <a
                href="https://github.com/utsho261"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors flex items-center space-x-1"
              >
                <span>GITHUB</span>
                <span className="text-[10px] text-[#D4AF37]">↗</span>
              </a>
              <span className="text-[#8C6D4F]/40">•</span>
              <a
                href="https://codeforces.com/profile/UtshoRoy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors flex items-center space-x-1"
              >
                <span>CODEFORCES</span>
                <span className="text-[10px] text-[#D4AF37]">↗</span>
              </a>
            </motion.div>
          </motion.div>

        </div>

        {/* RIGHT: Floating Cinematic Editorial Quote & Signature */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex absolute right-4 sm:right-6 lg:right-8 xl:right-10 top-[57%] -translate-y-1/2 flex-col items-start pointer-events-auto select-none z-20 p-3.5 sm:p-4 rounded-sm backdrop-blur-xl bg-black/35 border border-[rgba(212,175,55,0.22)] shadow-[0_10px_35px_rgba(0,0,0,0.75)] hover:border-[rgba(212,175,55,0.45)] hover:bg-black/50 transition-all duration-300 group"
        >
          {/* Subtle Corner Ambient Gold Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/60 pointer-events-none" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#D4AF37]/60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#D4AF37]/60 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D4AF37]/60 pointer-events-none" />
          
          {/* 1. Quote Mark */}
          <span className="text-sm sm:text-base text-[#D4AF37] leading-none font-serif mb-1 select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] opacity-95">
            “
          </span>

          {/* 2. Statement */}
          <div
            className="text-[8.5px] xl:text-[9px] font-medium tracking-[0.26em] uppercase text-[#F0EBE5] space-y-1 mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <p className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">CODE IS MY CRAFT.</p>
            <p className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] text-[#C5B8AB]">RELIABILITY IS MY STANDARD.</p>
          </div>

          {/* 3. Gold Accent Line */}
          <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#F7E7C4]/70 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.5)] mb-1.5" />

          {/* 4. Fine Monoline Calligraphy Signature */}
          <div
            className="text-[1.8rem] xl:text-[2rem] text-[#D4AF37] font-normal leading-none -ml-0.5 drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)] group-hover:text-[#F7E7C4] transition-colors"
            style={{
              fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
              letterSpacing: '0.04em',
            }}
          >
            Utsho Roy
          </div>
        </motion.div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;