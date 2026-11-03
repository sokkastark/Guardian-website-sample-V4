import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Zap, 
  UserCheck, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  ArrowRight 
} from 'lucide-react';

export default function ImpactSection() {
  const pillars = [
    { label: 'Real-world experience', icon: UserCheck },
    { label: 'Proven methodologies', icon: BarChart3 },
    { label: 'Measurable outcomes', icon: ShieldCheck },
    { label: 'Long-term partnerships', icon: Users },
  ];

  const statCards = [
    {
      title: 'Improved care gap closure',
      stat: '35%',
      desc: 'Average improvement across value-based programs',
      icon: ArrowUpRight,
      color: '#38bdf8',
      bgGlow: 'rgba(56, 189, 248, 0.2)',
    },
    {
      title: 'Reduced avoidable utilization',
      stat: '28%',
      desc: 'Through proactive outreach and care coordination',
      icon: ArrowDownRight,
      color: '#10b981',
      bgGlow: 'rgba(16, 185, 129, 0.2)',
    },
    {
      title: 'Faster time to insight',
      stat: '60%',
      desc: 'Reduction in data-to-action cycle',
      icon: Zap,
      color: '#a855f7',
      bgGlow: 'rgba(168, 85, 247, 0.2)',
    },
  ];

  return (
    <section 
      id="experience" 
      className="relative py-24 sm:py-28 lg:py-32 bg-[#090614] text-white overflow-hidden select-none"
    >
      {/* ─────────────────────────────────────────────────────────────
          CINEMATIC CLINICIAN BACKGROUND PHOTOGRAPHY
          Doctor looking up-right towards the future of healthcare
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/experience-doctor.jpg"
          alt="Healthcare Clinician with Stethoscope looking towards the future"
          className="w-full h-full object-cover object-[55%_center] lg:object-[50%_center] opacity-80 lg:opacity-90 brightness-105 contrast-105"
        />

        {/* Soft edge blend for top & bottom to connect cleanly with adjacent sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090614] via-transparent via-50% to-[#090614]" />

        {/* Left side text protection backdrop for 100% crisp typography */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#090614] via-[#090614]/85 to-transparent" />

        {/* Right side subtle shade behind cards */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/3 bg-gradient-to-l from-[#090614]/40 via-transparent to-transparent hidden lg:block" />

        {/* Ambient Grid */}
        <div className="absolute inset-0 ambient-grid opacity-10 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: Narrative, 4 Horizontal Feature Badges & CTA
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-6 max-w-xl"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a57] animate-pulse" />
              <span>OUR EXPERIENCE</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 drop-shadow-md">
              Healthcare experience that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-[#ff7a57]">
                delivers results.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-purple-100/85 leading-relaxed font-normal mb-8">
              Decades of clinical, operational, and technical expertise powering measurable improvements for healthcare organizations.
            </p>

            {/* 4 Feature Badges in a Horizontal Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="flex flex-col items-center text-center p-3 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md hover:bg-white/[0.12] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#7b3fc7]/30 text-purple-200 flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-semibold text-white/90 leading-tight">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link
              to="/company#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7b3fc7] via-[#8b5cf6] to-[#a855f7] hover:from-[#8b5cf6] hover:to-[#c084fc] shadow-[0_6px_28px_rgba(147,51,234,0.55)] hover:shadow-[0_8px_36px_rgba(147,51,234,0.75)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
            >
              <span>Explore our approach</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: 3 Stacked Frosted Glass Metric Cards
              Directly reproducing Master Mockup!
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5 lg:col-start-8 space-y-3.5 max-w-[390px] w-full lg:ml-auto"
          >
            {statCards.map((card, idx) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="relative rounded-2xl p-4 sm:p-5 bg-[#0e0920]/75 hover:bg-[#0e0920]/90 backdrop-blur-2xl border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.4)] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Stat Icon Badge */}
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: card.bgGlow, color: card.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Stat Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between mb-0.5">
                        <span className="text-xs sm:text-sm font-semibold text-purple-200/90 leading-tight">
                          {card.title}
                        </span>
                        <span 
                          className="text-2xl sm:text-3xl font-black tracking-tight ml-2"
                          style={{ color: card.color }}
                        >
                          {card.stat}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-purple-200/60 leading-snug">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Illustrative Benchmark Disclaimer */}
            <p className="text-xs text-purple-200/70 leading-relaxed italic text-right pt-1">
              * Metrics represent illustrative program benchmarks and sample operational targets. Individual outcomes vary based on population baseline and implementation scope.
            </p>

            {/* Handwritten script annotation */}
            <div className="pt-2 text-right pr-2">
              <span className="font-['Caveat',cursive] text-2xl sm:text-3xl text-purple-200/80 -rotate-3 inline-block tracking-wide">
                Experience that makes a difference.
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
