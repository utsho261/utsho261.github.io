import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full border transition-all duration-300 backdrop-blur-md cursor-pointer ${
        isDark
          ? 'border-[#8C6D4F]/40 bg-[#14100D]/80 hover:border-[#D4AF37] text-[#E8DFD8] shadow-[0_0_15px_rgba(212,175,55,0.15)]'
          : 'border-[#B89772]/50 bg-white/90 hover:border-[#9E751B] text-[#1C1814] shadow-[0_4px_15px_rgba(80,60,40,0.08)]'
      } ${className}`}
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <motion.div
          key={theme}
          initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center text-sm"
        >
          {isDark ? (
            /* Sun Icon in Dark Mode */
            <svg
              className="w-4 h-4 text-[#F7E7C4]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            /* Moon Icon in Light Mode */
            <svg
              className="w-4 h-4 text-[#9E751B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </motion.div>
      </div>

      {showLabel && (
        <span className="text-[10px] font-mono tracking-widest uppercase font-medium">
          {isDark ? 'LIGHT' : 'DARK'}
        </span>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
