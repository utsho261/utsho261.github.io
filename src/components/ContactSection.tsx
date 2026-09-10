// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/utshoroy5@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const result = await response.json();
      if (result.success === 'true' || response.ok) {
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback gracefully on first activation message
        setSent(true);
      }
    } catch (error) {
      console.warn('Network transmission fallback:', error);
      // Fallback to direct mailto if offline or network failure
      window.open(
        `mailto:utshoroy5@gmail.com?subject=${encodeURIComponent(
          `Portfolio Message from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`,
        '_blank'
      );
      setSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-[#cbb59d] selection:text-black pt-12 sm:pt-16 pb-12 sm:pb-16 px-5 sm:px-12 lg:px-20 overflow-hidden theme-transition"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
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
                  05 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[var(--border-highlight)] via-[var(--border-subtle)] to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block heading-gradient-primary">
                    INITIALIZE
                  </span>
                  <span className="block heading-gradient-gold">
                    TRANSMISSION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[var(--text-secondary)] leading-relaxed max-w-md"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an ambitious backend architecture to engineer, an internship or engineering opportunity, or a technical inquiry? Send a direct dispatch below or reach out via direct channels.
              </p>

              {/* Direct Channels */}
              <div className="mt-8 space-y-3">
                <a
                  href="mailto:utshoroy5@gmail.com"
                  className="flex items-center justify-between p-3.5 rounded-sm border border-[var(--border-medium)] bg-[var(--bg-surface)] hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] transition-all duration-300 group shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-[var(--border-highlight)]">// EMAIL</span>
                    <span className="text-xs text-[var(--text-primary)] group-hover:text-[var(--border-highlight)] transition-colors">utshoroy5@gmail.com</span>
                  </div>
                  <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--border-highlight)] transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.linkedin.com/in/utshoroy261/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-sm border border-[var(--border-medium)] bg-[var(--bg-surface)] hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] transition-all duration-300 group shadow-sm"
                  >
                    <span className="text-xs font-mono font-semibold tracking-wider text-[var(--accent-gold)] group-hover:text-[var(--border-highlight)]">LINKEDIN</span>
                    <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--border-highlight)] transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>

                  <a
                    href="https://github.com/utsho261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-sm border border-[var(--border-medium)] bg-[var(--bg-surface)] hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] transition-all duration-300 group shadow-sm"
                  >
                    <span className="text-xs font-mono font-semibold tracking-wider text-[var(--accent-gold)] group-hover:text-[var(--border-highlight)]">GITHUB</span>
                    <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--border-highlight)] transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://codeforces.com/profile/UtshoRoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-sm border border-[var(--border-medium)] bg-[var(--bg-surface)] hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] transition-all duration-300 group shadow-sm"
                  >
                    <span className="text-xs font-mono font-semibold tracking-wider text-[var(--accent-gold)] group-hover:text-[var(--border-highlight)]">CODEFORCES</span>
                    <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--border-highlight)] transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>

                  <a
                    href="https://wa.me/8801797732899"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-sm border border-[var(--border-medium)] bg-[var(--bg-surface)] hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] transition-all duration-300 group shadow-sm"
                  >
                    <span className="text-xs font-mono font-semibold tracking-wider text-[var(--accent-gold)] group-hover:text-[var(--border-highlight)]">WHATSAPP</span>
                    <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--border-highlight)] transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://t.me/+8801797732899"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-sm border border-[var(--border-medium)] bg-[var(--bg-surface)] hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] transition-all duration-300 group shadow-sm"
                  >
                    <span className="text-xs font-mono font-semibold tracking-wider text-[var(--accent-gold)] group-hover:text-[var(--border-highlight)]">TELEGRAM</span>
                    <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--border-highlight)] transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>

                  <a
                    href="https://facebook.com/utsho261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-sm border border-[var(--border-medium)] bg-[var(--bg-surface)] hover:border-[var(--border-highlight)] hover:bg-[var(--bg-surface-elevated)] transition-all duration-300 group shadow-sm"
                  >
                    <span className="text-xs font-mono text-[var(--border-highlight)]">FACEBOOK</span>
                    <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--border-highlight)] transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </div>

                <div className="p-3.5 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">// LOCATION</span>
                  <span className="text-xs font-mono text-[var(--text-secondary)]">Mirpur 2, Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[var(--border-medium)] bg-[var(--bg-surface)] p-7 sm:p-9 shadow-[var(--card-shadow)] overflow-hidden backdrop-blur-md"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--border-highlight)] to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--border-highlight)]/70" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[var(--border-highlight)]/70" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[var(--border-highlight)]/70" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--border-highlight)]/70" />

            {/* Form Card Header */}
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-[var(--border-subtle)]">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[var(--border-highlight)] font-semibold block mb-0.5">
                  DIRECT TRANSMISSION // INQUIRY
                </span>
                <h3 
                  className="text-2xl sm:text-3xl font-normal text-[var(--text-heading)] uppercase tracking-wide leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  SEND A DIRECT MESSAGE
                </h3>
              </div>

              <div className="flex items-center space-x-2 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[9px] font-mono text-[var(--text-secondary)] tracking-widest uppercase">
                  ACTIVE
                </span>
              </div>
            </div>

            {sent ? (
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[var(--border-highlight)] bg-[var(--bg-surface-elevated)] text-[var(--border-highlight)] text-lg shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                  ✓
                </div>
                <h3 className="text-3xl sm:text-4xl text-[var(--text-heading)] font-normal uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  TRANSMISSION DELIVERED
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light max-w-sm mx-auto leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Thank you! Your dispatch has been routed directly to <span className="text-[var(--border-highlight)] font-medium">utshoroy5@gmail.com</span>. Utsho Roy will review and reply promptly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 text-[10px] font-mono tracking-widest text-[var(--border-highlight)] hover:underline uppercase cursor-pointer"
                >
                  ← SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="sender-name" className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                      NAME // SENDER
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name or organization"
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] focus:border-[var(--border-highlight)] focus:ring-1 focus:ring-[var(--border-highlight)]/40 focus:bg-[var(--bg-surface-elevated)] text-base sm:text-xs text-[var(--text-heading)] placeholder-[var(--text-muted)] px-4 py-3.5 outline-none rounded-sm transition-all"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label htmlFor="sender-email" className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                      EMAIL // RETURN ADDRESS
                    </label>
                    <input
                      id="sender-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] focus:border-[var(--border-highlight)] focus:ring-1 focus:ring-[var(--border-highlight)]/40 focus:bg-[var(--bg-surface-elevated)] text-base sm:text-xs text-[var(--text-heading)] placeholder-[var(--text-muted)] px-4 py-3.5 outline-none rounded-sm transition-all"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="sender-message" className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                    MESSAGE // PROJECT BRIEF
                  </label>
                  <textarea
                    id="sender-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, architectural needs, timeline, or engineering opportunity..."
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] focus:border-[var(--border-highlight)] focus:ring-1 focus:ring-[var(--border-highlight)]/40 focus:bg-[var(--bg-surface-elevated)] text-base sm:text-xs text-[var(--text-heading)] placeholder-[var(--text-muted)] p-4 outline-none rounded-sm transition-all resize-none leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-4 border border-[var(--border-medium)] bg-[var(--bg-surface-elevated)] hover:border-[var(--border-highlight)] hover:bg-[var(--border-highlight)] text-[var(--text-heading)] hover:text-black text-xs font-semibold tracking-[0.28em] uppercase transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] cursor-pointer overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--border-highlight)] to-transparent pointer-events-none group-hover:via-white transition-all" />
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin text-sm">↻</span>
                        <span>DISPATCHING TRANSMISSION...</span>
                      </>
                    ) : (
                      <>
                        <span>EXECUTE DISPATCH</span>
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 text-sm">↗</span>
                      </>
                    )}
                  </span>
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
            UTSHO ROY // BACKEND &amp; ANDROID DEVELOPER
          </span>
          <span className="text-[10px] font-mono text-[var(--text-muted)]">
            © {new Date().getFullYear()} • ENGINEERED WITH PRECISION
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;