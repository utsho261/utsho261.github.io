import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import aboutImg from '../assets/about.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // 1. Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(200);
  const spotlightY = useMotionValue(200);

  // 2. Springs for 3D Physics
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, -16]), { damping: 18, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), { damping: 18, stiffness: 220 });

  // 3. Top-Level Unconditional Transform for Spotlight Background
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle 240px at ${x}px ${y}px, rgba(255,255,255,0.25), rgba(212,175,55,0.15), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches)) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      setIsCardHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
      className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-[#cbb59d] selection:text-black pt-12 sm:pt-16 pb-20 sm:pb-28 px-5 sm:px-12 lg:px-20 overflow-hidden theme-transition"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 sm:w-[35rem] sm:h-[35rem] bg-[var(--glow-color)] rounded-full blur-3xl sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-[28rem] sm:h-[28rem] bg-[var(--glow-color)] rounded-full blur-2xl sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4 mb-10"
        >
          <span 
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[var(--border-highlight)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            01 / ABOUT ME
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[var(--border-highlight)] via-[var(--border-subtle)] to-transparent" />
        </motion.div>

        {/* Main Grid: Content + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT CONTENT (7 COLS) ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Cinematic Headline with Glow Flare */}
            <motion.div variants={fadeUpVariants} className="relative mb-6 select-none">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.88]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block heading-gradient-primary">
                  I DON'T JUST WRITE CODE.
                </span>
                <span className="block heading-gradient-gold">
                  I ARCHITECT WHAT'S NEXT.
                </span>
              </h2>
            </motion.div>

            {/* Concise Bio Paragraph */}
            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-light text-[var(--text-secondary)] leading-[1.85] tracking-wide mb-10 max-w-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I'm <span className="text-[var(--accent-gold)] font-medium">Utsho Roy</span>, a Backend & Android Developer with a strong foundation in Computer Science & Engineering from Bangladesh University of Business and Technology (BUBT). I specialize in engineering high-performance Django REST APIs, scalable database architectures, and native Android applications integrated with Firebase and Google Maps APIs. Passionate about clean architecture, query optimization, and real-time mobile cloud systems.
            </motion.p>

            {/* Concise 4-Item Achievement Metrics Grid */}
            <motion.div 
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 pb-2 border-t border-[var(--border-subtle)]"
            >
              {/* Stat 1 */}
              <div className="relative flex flex-col p-3.5 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/70 backdrop-blur-md hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] transition-all duration-300 group shadow-sm overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-highlight)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-[8px] font-mono tracking-[0.2em] uppercase text-[var(--text-muted)] group-hover:text-[var(--border-highlight)] transition-colors mb-1">
                  VERIFIED ALGORITHMS
                </span>
                <span 
                  className="text-3xl sm:text-4xl font-light text-[var(--border-highlight)] tracking-tight leading-none group-hover:translate-x-0.5 transition-transform"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  154+
                </span>
                <span className="text-[9.5px] font-medium tracking-[0.18em] uppercase text-[var(--text-secondary)] mt-1.5">
                  Codeforces Solved
                </span>
              </div>

              {/* Stat 2 */}
              <div className="relative flex flex-col p-3.5 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/70 backdrop-blur-md hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] transition-all duration-300 group shadow-sm overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-highlight)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-[8px] font-mono tracking-[0.2em] uppercase text-[var(--text-muted)] group-hover:text-[var(--border-highlight)] transition-colors mb-1">
                  OPEN SOURCE
                </span>
                <span 
                  className="text-3xl sm:text-4xl font-light text-[var(--border-highlight)] tracking-tight leading-none group-hover:translate-x-0.5 transition-transform"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  17+
                </span>
                <span className="text-[9.5px] font-medium tracking-[0.18em] uppercase text-[var(--text-secondary)] mt-1.5">
                  GitHub Repos
                </span>
              </div>

              {/* Stat 3 */}
              <div className="relative flex flex-col p-3.5 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/70 backdrop-blur-md hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] transition-all duration-300 group shadow-sm overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-highlight)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-[8px] font-mono tracking-[0.2em] uppercase text-[var(--text-muted)] group-hover:text-[var(--border-highlight)] transition-colors mb-1">
                  FULL STACK & APPS
                </span>
                <span 
                  className="text-3xl sm:text-4xl font-light text-[var(--text-heading)] group-hover:text-[var(--border-highlight)] tracking-tight leading-none group-hover:translate-x-0.5 transition-transform"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  5+
                </span>
                <span className="text-[9.5px] font-medium tracking-[0.18em] uppercase text-[var(--text-secondary)] mt-1.5">
                  Core Projects
                </span>
              </div>

              {/* Stat 4 */}
              <div className="relative flex flex-col p-3.5 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/70 backdrop-blur-md hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] transition-all duration-300 group shadow-sm overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-highlight)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-[8px] font-mono tracking-[0.2em] uppercase text-[var(--text-muted)] group-hover:text-[var(--border-highlight)] transition-colors mb-1">
                  DEGREE CANDIDATE
                </span>
                <span 
                  className="text-3xl sm:text-4xl font-light text-[var(--border-highlight)] tracking-tight leading-none group-hover:translate-x-0.5 transition-transform"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  BUBT
                </span>
                <span className="text-[9.5px] font-medium tracking-[0.18em] uppercase text-[var(--text-secondary)] mt-1.5">
                  B.Sc. in CSE
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT PORTRAIT FRAME ================= */}
          <div className="lg:col-span-5 flex items-center justify-center relative perspective-[1400px]">
            
            {/* Ambient Animated Gold Glow Ring Behind Frame */}
            <motion.div 
              animate={{
                scale: isCardHovered ? 1.15 : 1,
                opacity: isCardHovered ? 0.35 : 0.15,
                rotate: isCardHovered ? 180 : 0
              }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute -inset-6 bg-[conic-gradient(from_0deg,#D4AF37_0%,#8C6D4F_30%,transparent_60%,#D4AF37_100%)] blur-2xl rounded-3xl pointer-events-none"
            />

            {/* 3D Holographic Main Card Container */}
            <motion.div
              ref={cardRef}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-3.5 border border-[var(--border-medium)] rounded-sm bg-[var(--bg-surface)]/90 backdrop-blur-xl shadow-[var(--card-shadow)] cursor-pointer group transition-colors duration-500 hover:border-[var(--border-highlight)]"
            >
              {/* Dynamic Laser Border Pulse on Card Perimeter */}
              <div className="absolute inset-0 rounded-sm pointer-events-none overflow-hidden">
                <motion.div 
                  animate={{ x: isCardHovered ? ['-100%', '200%'] : '-100%' }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-[var(--border-highlight)]/30 to-transparent skew-x-12"
                />
              </div>

              {/* Locked Corner Gold Accent Brackets */}
              <div className="pointer-events-none">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--border-highlight)] transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--border-highlight)] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--border-highlight)] transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--border-highlight)] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
              </div>

              {/* Inner Picture Box */}
              <div className="relative overflow-hidden rounded-xs border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                
                {/* Physical Interactive Spotlight Layer */}
                <motion.div 
                  style={{ background: spotlightBg }}
                  className="absolute inset-0 pointer-events-none z-20 mix-blend-screen transition-opacity duration-300"
                />

                {/* Portrait Photo */}
                <motion.img
                  src={aboutImg}
                  alt="Utsho Roy — Backend and Android Developer"
                  width={1084}
                  height={992}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto aspect-[1084/992] max-h-[460px] object-cover object-center filter grayscale contrast-[1.08] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out"
                  style={{ transform: 'translateZ(20px)' }}
                />

                {/* Cyber Scanline Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity" />
              </div>

              {/* Elegant Calligraphy Signature below image */}
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex flex-col items-center justify-center text-center">
                <div 
                  className="text-4xl sm:text-5xl text-[var(--border-highlight)] font-normal leading-none"
                  style={{ 
                    fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
                    letterSpacing: '0.04em',
                  }}
                >
                  Utsho Roy
                </div>
                <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[var(--text-muted)] mt-1">
                  BACKEND &amp; ANDROID DEVELOPER
                </span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;