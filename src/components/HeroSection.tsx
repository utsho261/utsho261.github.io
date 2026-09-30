import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
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
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-black text-[#e8dfd8] font-sans selection:bg-[#cbb59d] selection:text-black flex flex-col justify-between">
      
      {/* ================= 1. CINEMATIC BACKGROUND AMBIENCE ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Warm Golden Spotlight Top Right */}
        <div className="absolute -top-24 right-0 sm:right-[10%] w-80 h-80 sm:w-[38rem] sm:h-[38rem] bg-[#d4af37]/[0.12] rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle Cyber Emerald Backend Glow */}
        <div className="absolute bottom-10 right-1/3 w-64 h-64 sm:w-[26rem] sm:h-[26rem] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        
        {/* Deep Bottom Vignette */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        
        {/* Subtle Architecture Blueprint Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(rgba(212,175,55,0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* ================= 2. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between min-h-[100dvh] w-full px-5 sm:px-12 lg:px-16 pt-5 sm:pt-6 pb-8 pointer-events-none">

        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
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
                className="relative group py-1 transition-colors duration-300 hover:text-white"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/80 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Theme Toggle & Contact Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 ml-auto md:ml-0">
            <ThemeToggle />

            <a
              href="#contact"
              className="group flex items-center space-x-1.5 sm:space-x-2 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.24em] font-medium uppercase py-1.5 sm:py-2 px-3 sm:px-4 border border-[rgba(212,175,55,0.4)] hover:border-[#D4AF37] text-white transition-all duration-300 backdrop-blur-sm bg-black/60"
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
        <div className="relative flex flex-col lg:flex-row items-center justify-between w-full pt-8 sm:pt-10 pb-4 my-auto gap-10 lg:gap-8">

          {/* LEFT: Headline & Backend Focus */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[38rem] xl:max-w-[42rem] pointer-events-auto z-20 w-full"
          >
            {/* Live Availability Status Pill */}
            <motion.div variants={fadeUpVariants} className="mb-3 inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[rgba(212,175,55,0.35)] bg-black/80 backdrop-blur-md max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-wider sm:tracking-widest uppercase text-[#D4AF37] font-medium truncate">
                AVAILABLE FOR HIRE // JUNIOR BACKEND DEVELOPER
              </span>
            </motion.div>

            {/* Massive Condensed Headline */}
            <div className="relative mb-3 select-none">
              <h1
                className="text-[3.2rem] xs:text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.88] sm:leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: I ARCHITECT */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2D9D0] to-[#9C7F62] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                  I ARCHITECT
                </span>

                {/* Line 2: SCALABLE & */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#D4AF37] to-[#8C6D4F] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                  SCALABLE &amp;
                </span>

                {/* Line 3: BACKEND APIS */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8CFAB] to-[#AA854E] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                  BACKEND APIS
                </span>
              </h1>
            </div>

            {/* Subtitle Technologies */}
            <motion.div variants={fadeUpVariants} className="mb-3">
              <p
                className="text-[10px] sm:text-[11.5px] md:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.28em] uppercase text-[#C5B8AB]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                PYTHON &amp; DJANGO REST SPECIALIST <span className="text-[#D4AF37] mx-1 font-bold">•</span> POSTGRESQL &amp; QUERY OPTIMIZATION <span className="text-[#D4AF37] mx-1 font-bold">•</span> API ARCHITECTURE
              </p>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-normal text-[#C5B8AB] leading-[1.75] tracking-wide max-w-xl mb-5 space-y-1.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                Computer Science undergraduate student at <span className="text-white font-medium">BUBT (CGPA 3.75)</span> seeking a Junior Backend Developer or Engineering Intern position.
              </p>
              <p>
                Skilled in designing high-throughput RESTful APIs using Python, Django, DRF, and PostgreSQL. Experienced in database indexing, query optimization (achieving 35% speedup), SimpleJWT auth, and solving 154+ algorithmic problems on Codeforces.
              </p>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore My Work CTA */}
              <a
                href="#work"
                className="group relative inline-flex items-center justify-center space-x-2 px-6 sm:px-7 py-3 border border-[#D4AF37] bg-[#D4AF37] text-black hover:bg-[#F7E7C4] hover:border-[#F7E7C4] text-[11px] font-semibold tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] cursor-pointer text-center"
              >
                <span>EXPLORE PROJECTS</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-xs text-black">
                  ↗
                </span>
              </a>

              {/* Download Resume / CV Link */}
              <a
                href="/resume.pdf"
                download="Utsho_Roy_Resume.pdf"
                className="group relative inline-flex items-center justify-center space-x-2 px-5 sm:px-6 py-3 border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-black/90 text-white text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-300 bg-black/60 backdrop-blur-sm cursor-pointer text-center"
              >
                <span>DOWNLOAD CV</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-1 text-xs text-[#D4AF37]">
                  ↓
                </span>
              </a>

              {/* View CV In Browser */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center space-x-1.5 px-4 py-3 border border-[rgba(140,109,79,0.35)] hover:border-[#D4AF37] text-[#C5B8AB] hover:text-white text-[10.5px] font-medium tracking-[0.2em] uppercase transition-all duration-300 bg-black/40 cursor-pointer text-center"
              >
                <span>VIEW CV</span>
                <span className="text-[10px] text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </a>
            </motion.div>

            {/* Profiles Links */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-5 pt-2 text-[10.5px] sm:text-[11px] font-mono tracking-[0.16em] sm:tracking-[0.2em] text-[#E8DFD8]"
            >
              <span className="text-[#D4AF37] text-[9.5px] sm:text-[10px] uppercase font-sans tracking-[0.2em] sm:tracking-[0.25em] font-semibold">
                PROFILES //
              </span>
              <a
                href="https://www.linkedin.com/in/utshoroy261/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8DFD8] hover:text-[#D4AF37] transition-colors flex items-center space-x-1"
              >
                <span>LINKEDIN</span>
                <span className="text-[10px] text-[#D4AF37]">↗</span>
              </a>
              <span aria-hidden="true" className="text-[#8C6D4F] font-bold">•</span>
              <a
                href="https://github.com/utsho261"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8DFD8] hover:text-[#D4AF37] transition-colors flex items-center space-x-1"
              >
                <span>GITHUB</span>
                <span className="text-[10px] text-[#D4AF37]">↗</span>
              </a>
              <span aria-hidden="true" className="text-[#8C6D4F] font-bold">•</span>
              <a
                href="https://codeforces.com/profile/UtshoRoy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8DFD8] hover:text-[#D4AF37] transition-colors flex items-center space-x-1"
              >
                <span>CODEFORCES (154+)</span>
                <span className="text-[10px] text-[#D4AF37]">↗</span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: High-End Cinematic Backend Architecture Telemetry Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[28rem] xl:w-[32rem] pointer-events-auto select-none z-20 flex flex-col gap-4"
          >
            {/* 1. Interactive Terminal Console */}
            <div className="relative rounded-sm border border-[rgba(212,175,55,0.3)] bg-black/85 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-4 sm:p-5 overflow-hidden group hover:border-[#D4AF37]/60 transition-all duration-500">
              
              {/* Corner Ambient Gold Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]/70 pointer-events-none" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]/70 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]/70 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]/70 pointer-events-none" />
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[rgba(140,109,79,0.3)]">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90 inline-block" />
                  <span className="text-[10px] font-mono text-[#C5B8AB] ml-2 tracking-wider">
                    backend_runtime.py
                  </span>
                </div>
                
                <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[8.5px] font-mono text-emerald-400 tracking-wider">
                    200 OK
                  </span>
                </div>
              </div>

              {/* Live Backend Telemetry Logs */}
              <div className="space-y-2 font-mono text-[10.5px] sm:text-[11px] leading-relaxed">
                <div className="flex items-center justify-between text-[#8C6D4F]">
                  <span>// ACTIVE PRODUCTION SERVICES</span>
                  <span className="text-[#D4AF37] text-[9.5px]">DJANGO 5.1 + DRF</span>
                </div>

                <div className="p-2 rounded bg-black/60 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-medium">[POST]</span>
                    <span className="text-[#F0EBE5] truncate mx-2">/api/v1/auth/jwt/create/</span>
                    <span className="text-[#D4AF37] text-[10px] shrink-0">24ms</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-medium">[GET]</span>
                    <span className="text-[#F0EBE5] truncate mx-2">/api/v1/campus/resources/</span>
                    <span className="text-[#D4AF37] text-[10px] shrink-0">35ms</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-medium">[POST]</span>
                    <span className="text-[#F0EBE5] truncate mx-2">/api/v1/hospital/records/</span>
                    <span className="text-[#D4AF37] text-[10px] shrink-0">19ms</span>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2 rounded border border-[rgba(212,175,55,0.2)] bg-black/50">
                    <span className="text-[8.5px] text-[#C5B8AB] block uppercase tracking-wider">QUERY SPEEDUP</span>
                    <span className="text-sm font-bold text-[#D4AF37]">+35% FASTER</span>
                  </div>
                  <div className="p-2 rounded border border-[rgba(212,175,55,0.2)] bg-black/50">
                    <span className="text-[8.5px] text-[#C5B8AB] block uppercase tracking-wider">ALGORITHMS SOLVED</span>
                    <span className="text-sm font-bold text-white">154+ CODEFORCES</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 text-[9px] uppercase tracking-wider">
                  <span className="px-2 py-0.5 rounded border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">POSTGRESQL</span>
                  <span className="px-2 py-0.5 rounded border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">SIMPLEJWT</span>
                  <span className="px-2 py-0.5 rounded border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">4-TIER RBAC</span>
                  <span className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[#C5B8AB]">REDIS &amp; CELERY</span>
                </div>
              </div>
            </div>

            {/* 2. Floating Cinematic Editorial Quote & Calligraphy Signature */}
            <div className="p-3.5 sm:p-4 rounded-sm backdrop-blur-xl bg-black/50 border border-[rgba(212,175,55,0.22)] shadow-[0_10px_35px_rgba(0,0,0,0.75)] hover:border-[rgba(212,175,55,0.45)] transition-all duration-300 group">
              <span className="text-sm text-[#D4AF37] leading-none font-serif select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] opacity-95">
                “
              </span>
              <div
                className="text-[8.5px] sm:text-[9px] font-medium tracking-[0.24em] uppercase text-[#F0EBE5] space-y-0.5 my-1"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <p className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">CODE IS MY CRAFT.</p>
                <p className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] text-[#C5B8AB]">RELIABILITY IS MY STANDARD.</p>
              </div>

              <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#F7E7C4]/70 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.5)] my-2" />

              <div className="flex items-center justify-between">
                <div
                  className="text-[1.8rem] sm:text-[2rem] text-[#D4AF37] font-normal leading-none -ml-0.5 drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)] group-hover:text-[#F7E7C4] transition-colors"
                  style={{
                    fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
                    letterSpacing: '0.04em',
                  }}
                >
                  Utsho Roy
                </div>
                <span className="text-[9px] font-mono tracking-widest uppercase text-[#8C6D4F]">
                  BACKEND SPECIALIST
                </span>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;