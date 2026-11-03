import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  HeartHandshake, 
  FileCheck2, 
  Compass, 
  Briefcase, 
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function PeopleTechnology() {
  const [selectedRole, setSelectedRole] = useState(0);

  const roles = [
    {
      id: 'managers',
      role: 'Care Managers',
      desc: 'Coordinate care and close gaps',
      icon: HeartHandshake,
      color: '#ec4899',
      highlight: '94% care gap resolution rate',
      details: [
        'Proactive post-discharge transition outreach within 48 hours',
        'Longitudinal chronic condition management & care plans',
        'Direct coordination with primary care physicians & specialists',
      ],
    },
    {
      id: 'coders',
      role: 'Risk Coders',
      desc: 'Ensure accurate and complete data',
      icon: FileCheck2,
      color: '#38bdf8',
      highlight: '99.2% coding audit accuracy',
      details: [
        'Pre-encounter clinical documentation reviews before patient visits',
        'Persistent chronic condition recapture validation',
        'Full compliance with CMS HCC & commercial risk models',
      ],
    },
    {
      id: 'navigators',
      role: 'Care Navigators',
      desc: 'Guide patients through care',
      icon: Compass,
      color: '#10b981',
      highlight: '2.8x higher patient engagement',
      details: [
        'Direct patient scheduling for annual wellness & preventive screenings',
        'Overcoming social determinants of health (SDOH) & transportation barriers',
        'Closed-loop referral tracking with local specialists',
      ],
    },
    {
      id: 'executives',
      role: 'Account Executives',
      desc: 'Strategic partnership and support',
      icon: Briefcase,
      color: '#a855f7',
      highlight: '100% contract milestone delivery',
      details: [
        'Executive value-based contract governance & upside monitoring',
        'Performance milestone tracking across all payer agreements',
        'Bi-weekly operational cadence & clinical leadership alignment',
      ],
    },
  ];

  return (
    <section 
      id="people-tech" 
      className="relative py-24 sm:py-28 lg:py-32 bg-[#0c0919] text-white overflow-hidden select-none"
    >
      {/* ─────────────────────────────────────────────────────────────
          CINEMATIC CLINICIAN BACKGROUND PHOTOGRAPHY
          Features high-resolution clinician with layered dark gradient overlay
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/people-technology-bg.jpg"
          alt="Healthcare Expert Clinician in Hospital"
          className="w-full h-full object-cover object-[48%_center] lg:object-[44%_center] opacity-80 lg:opacity-90 brightness-110 contrast-105"
        />

        {/* Soft edge blend for top and bottom to seamlessly integrate with adjacent sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0919] via-transparent via-50% to-[#0c0919]" />

        {/* Left side text backdrop to guarantee 100% crystal clear headline readability */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#0c0919] via-[#0c0919]/80 to-transparent" />

        {/* Right side subtle shade behind cards */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/3 bg-gradient-to-l from-[#0c0919]/40 via-transparent to-transparent hidden lg:block" />

        {/* Ambient Grid Accent */}
        <div className="absolute inset-0 ambient-grid opacity-10 pointer-events-none" />

        {/* Subtle Atmospheric Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[#7b3fc7]/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: Story Narrative & CTA Button (Compact 5 columns)
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5 max-w-lg"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a57] animate-pulse" />
              <span>PEOPLE + TECHNOLOGY</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.14] mb-5 drop-shadow-md">
              Technology is only valuable{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-[#ff7a57]">
                when people can act on it.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-purple-100/85 leading-relaxed font-normal mb-8">
              Our healthcare experts work alongside your teams to turn intelligence into real-world impact.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                to="/company#leadership"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7b3fc7] via-[#8b5cf6] to-[#a855f7] hover:from-[#8b5cf6] hover:to-[#c084fc] shadow-[0_6px_28px_rgba(147,51,234,0.55)] hover:shadow-[0_8px_36px_rgba(147,51,234,0.75)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
              >
                <span>Meet our experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/solutions#care-teams"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-purple-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all duration-200"
              >
                <span>View Service Model</span>
              </Link>
            </div>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: Compact Operational Service Role Cards
              Shifted to col-span-5 col-start-8 (or max-w-[390px] ml-auto)
              Leaving the clinician completely unobstructed in the center
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5 lg:col-start-8 space-y-3 max-w-[400px] w-full lg:ml-auto"
          >
            {roles.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedRole === idx;

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedRole(idx)}
                  className={`relative rounded-xl p-3 sm:p-3.5 transition-all duration-300 backdrop-blur-xl border cursor-pointer ${
                    isSelected
                      ? 'bg-white/[0.15] border-[#8b5cf6]/60 shadow-[0_10px_32px_rgba(139,92,246,0.25)]'
                      : 'bg-[#130f24]/70 hover:bg-white/[0.10] border-white/12 hover:border-white/25 shadow-[0_6px_24px_rgba(0,0,0,0.3)]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Compact Frosted Badge */}
                      <div className={`p-2 sm:p-2.5 rounded-xl transition-transform duration-300 shrink-0 ${
                        isSelected 
                          ? 'bg-gradient-to-br from-[#7b3fc7] to-[#9333ea] text-white shadow-md shadow-[#7b3fc7]/40 scale-105'
                          : 'bg-white/10 text-purple-200 group-hover:bg-white/15 group-hover:text-white'
                      }`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>

                      {/* Role Title & Subtext */}
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug truncate">
                          {item.role}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-purple-200/70 font-normal leading-tight mt-0.5 truncate">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {isSelected && (
                        <span className="hidden sm:inline text-[9px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-[#7b3fc7]/40 border border-[#7b3fc7] text-purple-200">
                          Active
                        </span>
                      )}
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'text-white translate-x-0.5' : 'text-purple-200/40'
                      }`} />
                    </div>
                  </div>

                  {/* Expanded Operational Details Drawer on Selected Card */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pt-3 mt-3 border-t border-white/10"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[9px] font-mono uppercase tracking-wider text-[#38bdf8] font-bold">
                            Operational Delivery Impact
                          </span>
                          <span className="text-[10px] font-semibold text-emerald-300">
                            {item.highlight}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 gap-1.5 text-[11px] text-purple-100/80">
                          {item.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span className="leading-snug">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {/* Illustrative Benchmark Disclaimer */}
            <p className="text-xs text-purple-200/70 leading-relaxed italic text-right pt-1">
              * Operational targets and illustrative partner benchmarks. Individual results depend on cohort baseline and implementation scope.
            </p>

            {/* ─────────────────────────────────────────────────────────
                HANDWRITTEN ANNOTATION (Matching Master Reference Mockup)
                ───────────────────────────────────────────────────────── */}
            <div className="pt-1.5 text-right pr-2">
              <span className="font-['Caveat',cursive] text-xl sm:text-2xl text-purple-200/80 -rotate-3 inline-block tracking-wide">
                People make the difference.
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
