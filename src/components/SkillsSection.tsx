import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

type CategoryKey = 'all' | 'backend' | 'android' | 'database' | 'problem-solving';

interface DomainFeature {
  title: string;
  detail: string;
}

interface SkillDomain {
  key: CategoryKey;
  id: string;
  title: string;
  simpleName: string;
  badge: string;
  stat: string;
  colSpan: string;
  icon: React.ReactNode;
  whatItIs: string;
  keyFeatures: DomainFeature[];
  technologies: string[];
  builtProject: string;
  projectUrl?: string;
}

const skillDomains: SkillDomain[] = [
  {
    key: 'backend',
    id: '01',
    title: 'BACKEND & REST APIS',
    simpleName: 'Python & Django Specialist',
    badge: 'CORE EXPERTISE',
    stat: 'SERVER & APIS',
    colSpan: 'lg:col-span-6',
    whatItIs: 'I build fast, secure web APIs and server logic that connect frontend and mobile apps to databases.',
    keyFeatures: [
      {
        title: 'RESTful API Development',
        detail: 'Creating clean, robust API endpoints using Django REST Framework for mobile and web clients.',
      },
      {
        title: 'User Login & Security',
        detail: 'Secure token authentication (JWT), password hashing, and role-based permissions.',
      },
      {
        title: 'Background Tasks & Queues',
        detail: 'Using Celery and Redis to dispatch background jobs and keep API responses fast.',
      },
    ],
    technologies: [
      'Python 3',
      'Django',
      'Django REST Framework',
      'RESTful APIs',
      'JWT Authentication',
      'Celery & Redis',
      'Flask',
      'Postman',
      'Git & GitHub',
    ],
    builtProject: 'BlogHub (Full Blogging Platform) & CampusConnect',
    projectUrl: 'https://github.com/utsho261/bloghub',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    key: 'android',
    id: '02',
    title: 'NATIVE ANDROID APPS',
    simpleName: 'Native Android (Java)',
    badge: 'MOBILE SPECIALTY',
    stat: 'PLAYSTORE READY',
    colSpan: 'lg:col-span-6',
    whatItIs: 'I create native Android apps with GPS location, instant push notifications, and offline storage.',
    keyFeatures: [
      {
        title: 'Live Location & Maps',
        detail: 'Integrating Google Maps to show nearby users, live coordinates, and custom radar discovery.',
      },
      {
        title: 'Push Notifications & Alerts',
        detail: 'Sending instant notifications to users via Firebase Cloud Messaging (FCM).',
      },
      {
        title: 'Works Offline (Local Storage)',
        detail: 'Using SQLite & Room DB so the app stores data securely and works seamlessly without internet.',
      },
    ],
    technologies: [
      'Android SDK (Java)',
      'Google Maps API',
      'Firebase Push (FCM)',
      'Firebase Realtime DB',
      'SQLite / Room DB',
      'Location Radar',
      'Background Services',
    ],
    builtProject: 'Town Crier BD (Location Social App) & Medicine Tracker',
    projectUrl: 'https://github.com/utsho261',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: 'database',
    id: '03',
    title: 'DATABASES & STORAGE',
    simpleName: 'SQL & NoSQL Systems',
    badge: 'DATA INTEGRITY',
    stat: 'FAST QUERIES',
    colSpan: 'lg:col-span-6',
    whatItIs: 'I design databases that store user information safely and return search results in milliseconds.',
    keyFeatures: [
      {
        title: 'Relational Data (PostgreSQL / MySQL)',
        detail: 'Designing organized tables with foreign keys and ACID transactions that prevent data bugs.',
      },
      {
        title: 'Fast Query Optimization',
        detail: 'Writing efficient queries and using indexes so pages load instantly even with large datasets.',
      },
      {
        title: 'NoSQL Document Store (MongoDB)',
        detail: 'Flexible document storage for real-time analytics, dynamic budgets, and fast logging.',
      },
    ],
    technologies: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'SQLite',
      'Django ORM',
      'Query Optimization',
      'Data Indexing',
    ],
    builtProject: 'Smart Expense Tracker (MongoDB) & CampusConnect (PostgreSQL)',
    projectUrl: 'https://github.com/utsho261/smart-expense-tracker',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    key: 'problem-solving',
    id: '04',
    title: 'ALGORITHMIC PROBLEM SOLVING',
    simpleName: 'Codeforces Competitive Programming',
    badge: 'CODEFORCES',
    stat: '154+ SOLVED',
    colSpan: 'lg:col-span-6',
    whatItIs: 'I practice competitive programming on Codeforces to sharpen mathematical logic and optimal time/space complexity.',
    keyFeatures: [
      {
        title: '154+ Algorithmic Problems Solved',
        detail: 'Hands-on practice across Implementation (102), Math (50), Greedy (27), Brute Force (25), and Strings (24).',
      },
      {
        title: 'Active Contest Rating (956 Max)',
        detail: 'Active participant in timed division contests on Codeforces, writing fast and correct solutions under pressure.',
      },
      {
        title: 'Optimal Time & Space Complexity',
        detail: 'Ensuring algorithms run within strict memory limits and execution time to avoid TLE and memory bottlenecks.',
      },
    ],
    technologies: [
      'Codeforces @UtshoRoy',
      '154+ Solved',
      'Implementation',
      'Greedy Algorithms',
      'Math & Logic',
      'Time Complexity',
      'Data Structures',
      'Strings',
    ],
    builtProject: 'Codeforces Profile @UtshoRoy (Rating: 956 // 154 Solved)',
    projectUrl: 'https://codeforces.com/profile/UtshoRoy',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const marqueeTechs = [
  'PYTHON 3',
  'DJANGO REST FRAMEWORK',
  'NATIVE ANDROID (JAVA)',
  'CODEFORCES (154+ SOLVED)',
  'POSTGRESQL',
  'FIREBASE REALTIME DB',
  'GIT & GITHUB',
  'REDIS & CELERY',
  'GOOGLE MAPS API',
  'JWT AUTHENTICATION',
  'MYSQL',
  'MONGODB',
  'CLEAN ARCHITECTURE',
  'ROOM DB',
  'POSTMAN',
];

const filterButtons: { key: CategoryKey; label: string }[] = [
  { key: 'all', label: 'ALL DISCIPLINES' },
  { key: 'backend', label: 'PYTHON & BACKEND' },
  { key: 'android', label: 'ANDROID APPS' },
  { key: 'database', label: 'DATABASES & STORAGE' },
  { key: 'problem-solving', label: 'CODEFORCES & ALGORITHMS' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryKey>('all');

  const displayedDomains =
    activeFilter === 'all'
      ? skillDomains
      : skillDomains.filter((d) => d.key === activeFilter);

  return (
    <section
      id="skills"
      className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-[#cbb59d] selection:text-black pt-12 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center theme-transition"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/5 w-[36rem] h-[36rem] bg-[var(--glow-color)] rounded-full blur-[180px] pointer-events-none opacity-80" />
      <div className="absolute bottom-16 right-1/5 w-[32rem] h-[32rem] bg-[var(--glow-color)] rounded-full blur-[170px] pointer-events-none opacity-70" />

      {/* Modern Ticker Ribbon */}
      <div className="max-w-7xl mx-auto w-full mb-12 relative z-10 overflow-hidden border-y border-[var(--border-subtle)] py-3.5 bg-[var(--bg-surface)]/60 backdrop-blur-md">
        {/* Soft edge fades for seamless ticker */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max">
          <motion.div
            className="flex items-center space-x-8 shrink-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 26,
            }}
          >
            {[...marqueeTechs, ...marqueeTechs].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="flex items-center space-x-3 text-xs tracking-[0.2em] uppercase font-mono text-[var(--text-secondary)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-highlight)] shadow-[0_0_8px_var(--border-highlight)]" />
                <span className="hover:text-[var(--text-heading)] transition-colors cursor-default whitespace-nowrap font-medium">
                  {tech}
                </span>
                <span className="text-[var(--border-subtle)]">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-4"
        >
          <span
            className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[var(--border-highlight)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 // TECHNICAL EXPERTISE & RIGOR
          </span>
          <div className="w-24 h-[1px] bg-gradient-to-r from-[var(--border-highlight)] via-[var(--border-subtle)] to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.88] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block heading-gradient-primary">
                WHAT I BUILD.
              </span>
              <span className="block heading-gradient-gold">
                TOOLS I USE.
              </span>
            </h2>
          </div>
          <p
            className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed max-w-md"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            A practical overview of the backend frameworks, native Android tools, databases, and competitive programming problem solving I apply to build robust software.
          </p>
        </motion.div>

        {/* Intuitive Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-2 border-b border-[var(--border-subtle)]"
        >
          {filterButtons.map((btn) => {
            const isActive = activeFilter === btn.key;
            return (
              <button
                key={btn.key}
                onClick={() => setActiveFilter(btn.key)}
                className={`relative px-4 py-2 text-[11px] font-medium tracking-[0.16em] uppercase rounded-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-[var(--text-heading)] bg-[var(--bg-surface-elevated)] border border-[var(--border-highlight)] shadow-[0_0_15px_rgba(212,175,55,0.18)]'
                    : 'text-[var(--text-secondary)] border border-transparent hover:border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSkillTabPill"
                    className="absolute inset-0 border border-[var(--border-highlight)] pointer-events-none"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {btn.label}
              </button>
            );
          })}
        </motion.div>

        {/* Bento Grid - Balanced 2x2 Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {displayedDomains.map((block) => (
              <motion.div
                key={block.id}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`${
                  activeFilter === 'all' ? block.colSpan : 'lg:col-span-12'
                } relative p-7 sm:p-8 rounded-sm border border-[var(--border-medium)] bg-[var(--bg-surface)] backdrop-blur-xl overflow-hidden transition-all duration-500 shadow-[var(--card-shadow)] hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] group flex flex-col justify-between`}
              >
                {/* Top Ambient Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--border-highlight)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner Accent Marks */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--border-highlight)]/40 group-hover:border-[var(--border-highlight)] transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--border-highlight)]/40 group-hover:border-[var(--border-highlight)] transition-colors duration-300" />

                <div>
                  {/* Top Row: Icon + Badge + Stat */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] flex items-center justify-center text-[var(--border-highlight)] group-hover:border-[var(--border-highlight)] transition-colors duration-300">
                        {block.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[var(--border-highlight)] block font-semibold">
                          {block.badge}
                        </span>
                        <span className="text-[11px] font-mono text-[var(--text-secondary)]">
                          {block.simpleName}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-3 py-1 border border-[var(--border-subtle)] text-[var(--text-secondary)] bg-[var(--bg-surface-elevated)] group-hover:border-[var(--border-highlight)] group-hover:text-[var(--text-heading)] transition-all">
                      {block.stat}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3
                    className="text-2xl sm:text-3xl lg:text-[2.2rem] font-normal tracking-wide text-[var(--text-heading)] mb-2 group-hover:text-[var(--border-highlight)] transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {block.title}
                  </h3>

                  {/* 1-Sentence Clear Explanation */}
                  <p
                    className="text-xs sm:text-[13px] text-[var(--text-primary)] font-normal leading-relaxed mb-5"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {block.whatItIs}
                  </p>

                  {/* 3 Clear Capabilities */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-[var(--border-subtle)]">
                    {block.keyFeatures.map((feat) => (
                      <div key={feat.title} className="flex items-start space-x-2.5">
                        <span className="text-[var(--border-highlight)] text-[9px] shrink-0 mt-0.5 select-none drop-shadow-[0_0_6px_var(--border-highlight)]">
                          ◆
                        </span>
                        <div className="text-[12px] leading-snug">
                          <strong className="text-[var(--text-heading)] font-medium">
                            {feat.title}:{' '}
                          </strong>
                          <span className="text-[var(--text-secondary)] font-light">
                            {feat.detail}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Real Project Example (Clickable if URL available) */}
                  <div className="mb-4 p-2.5 rounded-sm border border-[var(--border-subtle)] border-l-2 border-l-[var(--border-highlight)] bg-[var(--bg-surface-elevated)]/70 flex items-center justify-between text-[11px] group-hover:border-r-[var(--border-highlight)]/40 transition-colors">
                    <span className="font-mono uppercase text-[var(--border-highlight)] font-semibold tracking-wider text-[10px] flex items-center space-x-1">
                      <span>PROVEN BY:</span>
                    </span>
                    {block.projectUrl ? (
                      <a
                        href={block.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-heading)] hover:text-[var(--border-highlight)] font-medium truncate ml-2 flex items-center space-x-1 transition-colors"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span className="truncate">{block.builtProject}</span>
                        <span className="text-xs text-[var(--border-highlight)]">↗</span>
                      </a>
                    ) : (
                      <span
                        className="text-[var(--text-heading)] font-medium truncate ml-2"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {block.builtProject}
                      </span>
                    )}
                  </div>

                  {/* Tech Badges / Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
                    {block.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] uppercase rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] group-hover:border-[var(--border-highlight)]/40 transition-all duration-200"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;