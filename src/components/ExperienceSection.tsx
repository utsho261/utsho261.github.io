// src/components/ExperienceSection.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  tag: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    tag: 'ACADEMIC DEGREE',
    year: '2021 — PRESENT',
    title: 'B.SC. IN COMPUTER SCIENCE & ENGINEERING',
    organization: 'BANGLADESH UNIVERSITY OF BUSINESS AND TECHNOLOGY (BUBT)',
    description: 'Undergraduate Computer Science & Engineering program specializing in Python backend systems, database optimization, and scalable software architecture. Capstone Project: CampusConnect.',
  },
  {
    id: '02',
    tag: 'PROFESSIONAL MASTERY',
    year: 'COMPLETED 2026',
    title: 'FULL STACK WEB DEV (PYTHON, DJANGO & REACT)',
    organization: 'OSTAD PLATFORM',
    description: 'Mastered full-stack enterprise web development covering Python, Django, DRF, REST API architecture, JWT authentication, PostgreSQL, MySQL, and React integration.',
  },
  {
    id: '03',
    tag: 'HIGHER SECONDARY STEM',
    year: 'PASSED 2021',
    title: 'HIGHER SECONDARY CERTIFICATE (HSC) — SCIENCE',
    organization: 'COLLECTORATE PUBLIC COLLEGE, NILPHAMARI',
    description: 'Graduated in Science with a rigorous academic foundation in higher mathematics, analytical physics, and computing concepts.',
  },
  {
    id: '04',
    tag: 'FOUNDATIONAL ROOTS',
    year: 'PASSED 2019',
    title: 'SECONDARY SCHOOL CERTIFICATE (SSC) — SCIENCE',
    organization: 'PALASHBARI PARASHMANI HIGH SCHOOL, NILPHAMARI',
    description: 'Completed secondary education in Science division, igniting a lifelong passion for software engineering, algorithms, and technology.',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-20 sm:pb-24 px-5 sm:px-12 lg:px-20 overflow-hidden theme-transition"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[40rem] sm:h-[40rem] bg-[var(--glow-color)] rounded-full blur-3xl sm:blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[var(--border-highlight)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / EXPERIENCE
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[var(--border-highlight)] via-[var(--border-subtle)] to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block heading-gradient-primary">
              EXPERIENCE &amp;
            </span>
            <span className="block heading-gradient-gold">
              MILESTONES.
            </span>
          </h2>
        </motion.div>

        {/* Minimalist Route Map */}
        <div className="relative w-full">
          
          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[var(--border-subtle)]" />
          
          {/* Animated Gold Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[var(--border-highlight)] via-[var(--accent-gold)] to-[var(--border-subtle)] shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-8">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year (Left side of track) */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-4 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--text-muted)] group-hover:text-[var(--border-highlight)] transition-colors block">
                    {stop.year}
                  </span>
                  <span className="text-[8px] font-mono tracking-widest text-[var(--border-highlight)]/70 uppercase block mt-1">
                    {stop.tag}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[19px] md:left-[140px] top-5 -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="absolute w-6 h-6 rounded-full border border-[var(--border-highlight)]/0 group-hover:border-[var(--border-highlight)]/40 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-medium)] group-hover:bg-[var(--border-highlight)] group-hover:border-[var(--border-highlight)] group-hover:shadow-[0_0_12px_#D4AF37] transition-colors duration-300" />
                </div>

                {/* Content Card (Right side of track) */}
                <div className="ml-14 md:ml-12 w-full">
                  <div className="relative p-5 sm:p-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] group/card overflow-hidden">
                    {/* Top ambient gold line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-highlight)]/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[var(--border-highlight)]/40 pointer-events-none" />

                    {/* Mobile Year & Tag */}
                    <div className="md:hidden flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--border-highlight)]">
                        {stop.year}
                      </span>
                      <span className="text-[8px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
                        {stop.tag}
                      </span>
                    </div>

                    <h3
                      className="text-2xl sm:text-3xl tracking-wide text-[var(--text-heading)] group-hover/card:text-[var(--border-highlight)] transition-colors mb-1.5 leading-none"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {stop.title}
                    </h3>
                    
                    <span 
                      className="block text-[10.5px] font-medium tracking-[0.18em] uppercase text-[var(--accent-gold)] mb-3"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {stop.organization}
                    </span>
                    
                    <p 
                      className="text-xs sm:text-[13px] font-light text-[var(--text-secondary)] leading-[1.75] group-hover/card:text-[var(--text-primary)] transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {stop.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;