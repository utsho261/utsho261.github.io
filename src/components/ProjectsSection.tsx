import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

interface ArchiveProject {
  rank: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  githubUrl: string;
}

const flagshipProjects: Project[] = [
  {
    number: '01',
    title: 'CampusConnect',
    category: 'FULL-STACK UNIVERSITY PLATFORM (SDP-400 LEAD)',
    description:
      'Decoupled university community platform engineered as a BUBT SDP-400 course capstone project. Features a high-throughput Django 5.1 & DRF backend with React frontend. Implemented secure user authentication and role-based permissions using SimpleJWT, and designed PostgreSQL database models with query optimization making API response times 35% faster.',
    githubUrl: 'https://github.com/utsho261/CampusConnect',
    tech: [
      'Django 5.1',
      'Django REST Framework',
      'Python',
      'PostgreSQL',
      'SimpleJWT',
      'Query Optimization',
      'React 19',
      'REST APIs',
    ],
    metrics: [
      { label: 'ROLE', value: 'Lead Backend Developer' },
      { label: 'PERFORMANCE', value: '35% Faster Response Times' },
      { label: 'SECURITY', value: 'Stateless SimpleJWT Auth' },
    ],
  },
  {
    number: '02',
    title: 'Hospital Management System (API)',
    category: 'HEALTHCARE REST API (4-TIER RBAC)',
    description:
      'Enterprise healthcare backend REST API architected with strict 4-Tier Role-Based Access Control (Admin, Doctor, Patient, Receptionist). Features appointment booking workflows, doctor schedule management, nested writable serializers for multi-medicine prescriptions, and billing calculation pipelines.',
    githubUrl: 'https://github.com/utsho261/hospital_management',
    tech: [
      'Python',
      'Django 5.x',
      'Django REST Framework',
      'SimpleJWT',
      '4-Tier RBAC',
      'PostgreSQL / MySQL',
      'Postman API Docs',
    ],
    metrics: [
      { label: 'RBAC', value: 'Admin, Doctor, Patient, Receptionist' },
      { label: 'SERIALIZERS', value: 'Nested Multi-Medicine Writes' },
      { label: 'WORKFLOW', value: 'Appointments & Billing Pipelines' },
    ],
  },
  {
    number: '03',
    title: 'Smart Expense Tracker & Analytics API',
    category: 'FINANCIAL ANALYTICS REST API & NOSQL',
    description:
      'Personal finance web service and financial analytics backend built with Flask and MongoDB. Features stateless JWT token verification, category filtering, budget threshold alerts, interactive Chart.js spending visualizations, and secure parameter validation.',
    githubUrl: 'https://github.com/utsho261/smart-expense-tracker',
    tech: [
      'Python',
      'Flask',
      'MongoDB (PyMongo)',
      'JWT Authentication',
      'REST APIs',
      'Chart.js',
      'API Security',
    ],
    metrics: [
      { label: 'DATABASE', value: 'MongoDB NoSQL Aggregations' },
      { label: 'SECURITY', value: 'Stateless JWT Verification' },
      { label: 'ANALYTICS', value: 'Dynamic Visual Spending Insights' },
    ],
  },
  {
    number: '04',
    title: 'BlogHub',
    category: 'FULL-STACK DJANGO ARCHITECTURE',
    description:
      'Full-featured content publishing platform with rich text editor, user profile avatars, relational category taxonomies, like counters, and moderated comment threads with strict relational database integrity.',
    githubUrl: 'https://github.com/utsho261/bloghub',
    tech: [
      'Python',
      'Django',
      'PostgreSQL',
      'Django ORM',
      'Bootstrap 5',
      'Django Auth',
    ],
    metrics: [
      { label: 'ARCHITECTURE', value: 'Django MVT + REST' },
      { label: 'DATABASE', value: 'PostgreSQL Relational Schema' },
      { label: 'AUTH', value: 'Session & User Permissions' },
    ],
  },
  {
    number: '05',
    title: 'Town Crier BD',
    category: 'REAL-TIME CLOUD & GEO-ALERT PLATFORM',
    description:
      'Hyperlocal emergency notification and community announcement broadcasting platform for Bangladesh. Features Google Maps proximity pinning, Cloudinary API real-time media CDN, live community chat via Firebase Realtime Database, and instant push broadcasts via Firebase Cloud Messaging.',
    githubUrl: 'https://github.com/utsho261/TownCrierBD',
    tech: [
      'Android (Java)',
      'Firebase Realtime DB',
      'Google Maps API',
      'Cloudinary API',
      'Firebase Cloud Messaging (FCM)',
      'Firebase Auth',
    ],
    metrics: [
      { label: 'GEO-LOCATION', value: 'Google Maps API Pinning' },
      { label: 'BROADCAST', value: 'Instant FCM Push Alerts' },
      { label: 'MEDIA CDN', value: 'Cloudinary CDN Integration' },
    ],
  },
];

const archiveProjects: ArchiveProject[] = [
  {
    rank: '06',
    title: 'DescoSmartApp',
    category: 'UTILITY AUTOMATION & PUSH ALERT',
    description: 'Smart utility Android application engineered for DESCO prepaid electricity customers in Dhaka. Automates background meter balance synchronization, triggers low-balance threshold alert push notifications before power shutoff, and provides offline SQLite caching for recharge analytics.',
    tech: ['Android (Java)', 'Background Daemon', 'SQLite Caching', 'Web Scraping / API', 'Push Notifications'],
    githubUrl: 'https://github.com/utsho261/DescoSmartApp',
  },
  {
    rank: '07',
    title: 'TaskFlow / Todo Django',
    category: 'PRODUCTIVITY WEB APP',
    description: 'User-specific task organization with priority levels (High, Med, Low), category tagging, completion status toggling, and deadline countdown tracking.',
    tech: ['Python', 'Django', 'SQLite', 'JavaScript', 'Bootstrap'],
    githubUrl: 'https://github.com/utsho261/todo-django',
  },
  {
    rank: '08',
    title: 'Medicine Tracker & Reminder',
    category: 'ANDROID HEALTHCARE UTILITY',
    description: 'Mobile medication reminder scheduling dosage alerts with Android AlarmManager even when the app process is terminated, backed by local SQLite storage.',
    tech: ['Android (Java)', 'AlarmManager', 'NotificationCompat', 'SQLite'],
    githubUrl: 'https://github.com/utsho261/MedicineTrackerAndReminder',
  },
  {
    rank: '09',
    title: 'Blood Bank Management System (BBMS)',
    category: 'DESKTOP GUI SOFTWARE',
    description: 'Desktop software for donor registration, blood group inventory tracking, recipient requisition handling, and instant emergency contact filtering.',
    tech: ['Python', 'Tkinter GUI', 'SQLite Database'],
    githubUrl: 'https://github.com/utsho261/BBMS',
  },
  {
    rank: '10',
    title: 'Student Performance Data Mining',
    category: 'DATA SCIENCE & MACHINE LEARNING',
    description: 'Exploratory data analysis, feature engineering, correlation matrices, and classification models to predict student academic outcomes and dropouts.',
    tech: ['Python', 'Jupyter Notebook', 'Pandas', 'Scikit-Learn', 'Matplotlib'],
    githubUrl: 'https://github.com/utsho261/Student-Performance-Data-Mining-Project',
  },
  {
    rank: '11',
    title: 'Student Task Tracker (CLI)',
    category: 'CORE OOP COMMAND-LINE TOOL',
    description: 'Modular command-line student assignment and deadline management tool built with clean Object-Oriented Programming and JSON serialization.',
    tech: ['Python 3', 'OOP Architecture', 'JSON Persistence', 'CLI'],
    githubUrl: 'https://github.com/utsho261/StudentTaskTracker',
  },
  {
    rank: '12',
    title: 'React Shopping Cart & Dashboard',
    category: 'FRONTEND UI PROTOTYPES',
    description: 'Interactive e-commerce cart with dynamic price calculations and responsive student record management tables using React state hooks.',
    tech: ['React.js', 'JavaScript ES6+', 'Context API', 'Modern CSS'],
    githubUrl: 'https://github.com/utsho261/react-shopping-cart',
  },
  {
    rank: '13',
    title: 'Shopping Management System',
    category: 'RETAIL POS SIMULATION',
    description: 'Console retail management system handling catalog browsing, cart operations, discount code validation, and invoice generation.',
    tech: ['Python', 'File I/O', 'Data Structures', 'Console POS'],
    githubUrl: 'https://github.com/utsho261/SHOPPING-MANAGEMENT-SYSTEM',
  },
  {
    rank: '14',
    title: 'Java Arcade Games Collection',
    category: '2D DESKTOP GAME LOOPS',
    description: 'Classic arcade games (Snake 2D, Flappy Bird clone, Tic-Tac-Toe) built with Java Swing graphics rendering, collision physics, and keyboard listeners.',
    tech: ['Java', 'Java Swing', 'AWT', 'Multithreading', 'KeyListeners'],
    githubUrl: 'https://github.com/utsho261/Java',
  },
  {
    rank: '15',
    title: 'Algorithms & Design Patterns',
    category: 'CS FOUNDATIONS & PROBLEM SOLVING',
    description: 'Implementations of graph search, dynamic programming, Greedy algorithms, and Gang of Four (GoF) design patterns (Factory, Singleton, Observer).',
    tech: ['C++', 'Python', 'Java', 'DSA', 'GoF Patterns'],
    githubUrl: 'https://github.com/utsho261/Software-Design-Pattern',
  },
  {
    rank: '16',
    title: 'Starter Scripts & Mini Utilities',
    category: 'FOUNDATION SCRIPTS',
    description: 'Early programming milestone utilities: GUI scientific calculator, Rock-Paper-Scissors, and interactive terminal logic experiments.',
    tech: ['Python', 'Tkinter', 'Console Utilities'],
    githubUrl: 'https://github.com/utsho261/PythonCalculator',
  },
];

export const ProjectsSection: React.FC = () => {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <section
      id="work"
      className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-[#cbb59d] selection:text-black pt-14 sm:pt-20 pb-20 sm:pb-32 px-5 sm:px-12 lg:px-20 theme-transition"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 sm:w-[36rem] sm:h-[36rem] bg-[var(--glow-color)] rounded-full blur-3xl sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-[30rem] sm:h-[30rem] bg-[var(--glow-color)] rounded-full blur-2xl sm:blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[var(--border-highlight)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED BACKEND SYSTEMS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[var(--border-highlight)] via-[var(--border-subtle)] to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block heading-gradient-primary">
              SELECTED WORKS.
            </span>
            <span className="block heading-gradient-gold">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[var(--text-secondary)] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to explore backend system architectures. Each platform was engineered with production-ready REST APIs, database query optimization, and secure role-based permissions.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck for Top 5 Flagship Projects */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {flagshipProjects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[var(--border-medium)] bg-[var(--bg-surface)] p-5 sm:p-8 md:p-12 shadow-[var(--card-shadow)] group overflow-hidden transition-colors duration-500 hover:border-[var(--border-highlight)] backdrop-blur-md">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-highlight)]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--border-highlight)]/60 group-hover:border-[var(--border-highlight)] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--border-highlight)]/60 group-hover:border-[var(--border-highlight)] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--border-highlight)]/60 group-hover:border-[var(--border-highlight)] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--border-highlight)]/60 group-hover:border-[var(--border-highlight)] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[var(--text-primary)]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[var(--border-highlight)]">
                          {project.number} //
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-highlight)] animate-pulse shadow-[0_0_8px_var(--border-highlight)]" />
                          <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[var(--text-secondary)]">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--text-heading)] mb-4 group-hover:text-[var(--border-highlight)] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[var(--text-secondary)] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[var(--border-subtle)]">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] group-hover:border-[var(--border-highlight)]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[var(--border-subtle)]">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[var(--text-muted)] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="relative p-3.5 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex items-center justify-between group/metric hover:border-[var(--border-highlight)]/70 transition-all duration-300 overflow-hidden"
                        >
                          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover/metric:bg-[var(--border-highlight)] transition-colors" />
                          <span className="text-[10px] font-mono text-[var(--text-secondary)]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[var(--border-highlight)]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[var(--border-medium)] bg-[var(--bg-surface-elevated)] hover:border-[var(--border-highlight)] hover:bg-[var(--border-highlight)] text-[var(--text-primary)] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)] overflow-hidden"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-highlight)] to-transparent opacity-70 group-hover/btn:opacity-0 transition-opacity" />
                      <span>VIEW ON GITHUB</span>
                      <span className="text-xs transform transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                        ↗
                      </span>
                    </a>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        {/* Expandable Archive for Ranks 06 to 16 */}
        <div className="mt-24 text-center">
          <motion.button
            onClick={() => setShowArchive(!showArchive)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center space-x-3 px-8 py-4 border border-[var(--border-highlight)]/60 bg-[var(--bg-surface)] hover:border-[var(--border-highlight)] text-[var(--text-primary)] text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 shadow-[var(--card-shadow)] cursor-pointer"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>{showArchive ? 'COLLAPSE REPOSITORY ARCHIVE' : 'EXPLORE ALL 16+ REPOSITORIES'}</span>
            <span className="text-sm transform transition-transform duration-300">
              {showArchive ? '↑' : '↓'}
            </span>
          </motion.button>

          <AnimatePresence>
            {showArchive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden mt-12 text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {archiveProjects.map((p) => (
                    <div
                      key={p.rank}
                      className="relative p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 overflow-hidden"
                    >
                      {/* Top ambient gold line */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-highlight)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono font-bold text-[var(--border-highlight)]">
                            RANK {p.rank}
                          </span>
                          <span className="text-[9px] font-mono tracking-wider uppercase text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors">
                            {p.category}
                          </span>
                        </div>
                        <h4
                          className="text-2xl font-normal text-[var(--text-heading)] uppercase mb-2 group-hover:text-[var(--border-highlight)] transition-colors"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {p.title}
                        </h4>
                        <p
                          className="text-xs font-light text-[var(--text-secondary)] leading-relaxed mb-4"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {p.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-[9px] font-mono uppercase bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] rounded-xs group-hover:border-[var(--border-highlight)]/30 transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-[10.5px] font-mono font-medium text-[var(--border-highlight)] hover:text-[var(--text-heading)] transition-colors tracking-widest uppercase"
                        >
                          <span>VIEW REPOSITORY</span>
                          <span className="text-xs transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
