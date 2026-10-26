import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ArrowRight, 
  ArrowUpRight, 
  LayoutGrid, 
  Rows3, 
  Quote, 
  X, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';

export const leadershipMembers = [
  {
    id: 'sandeep-bajaj',
    name: 'Dr. Sandeep Bajaj, MD',
    role: 'Founder & Chief Executive Officer',
    discipline: 'Clinical Vision & Governance',
    image: '/images/team/Sandeep Bajaj, MD.png',
    credentials: 'Board-Certified Interventional Cardiologist & Internist',
    experience: '35+ Years Healthcare Practice',
    shortBio: 'Board-certified cardiologist and healthcare operator leading Guardian’s mission to connect clinical insight with frontline action.',
    quote: 'Healthcare technology is only valuable when it serves the clinicians and patients living with its results.',
    featured: true
  },
  {
    id: 'satya-thottappillil',
    name: 'Satya Thottappillil',
    role: 'Chief Technology Officer',
    discipline: 'Platform & Technology',
    image: '/images/team/Satya Thottappillil.png',
    credentials: 'Enterprise Healthtech Systems Architect',
    experience: '20+ Years Distributed Systems',
    shortBio: 'Enterprise IT strategist specializing in managed care systems, high-scale clinical data exchange, and secure cloud pipelines.',
    quote: 'Architecture should make complex health data instantly intuitive at the bedside.'
  },
  {
    id: 'joseph-macau',
    name: 'Joseph Macau, CGMA',
    role: 'Chief Financial Officer',
    discipline: 'Finance & Fiscal Governance',
    image: '/images/team/Joseph Macau, CGMA.png',
    credentials: 'Chartered Global Management Accountant',
    experience: '25+ Years Healthcare Economics',
    shortBio: 'Oversees Guardian’s financial architecture, risk modeling, and capital allocation for risk-bearing healthcare partnerships.',
    quote: 'Aligning clinical performance with fiscal viability secures lasting care models.'
  },
  {
    id: 'richard-cairl',
    name: 'Richard Cairl, PhD',
    role: 'VP of Clinical Operations',
    discipline: 'Clinical Systems & Medicare Advantage',
    image: '/images/team/Richard Cairl.png',
    credentials: 'PhD Healthcare Systems Researcher',
    experience: '30+ Years Clinical Operations',
    shortBio: 'Focuses on scaling Medicare Advantage quality attainments, clinical operations, and structured community health interventions.',
    quote: 'Sustainable healthcare relies on structured, empathetic community workflows.'
  },
  {
    id: 'ganesh-ramachandran',
    name: 'Ganesh Ramachandran',
    role: 'VP of Operations',
    discipline: 'Operations & Service Delivery',
    image: '/images/team/Ganesh Ramachandran.png',
    credentials: 'Cross-Functional Healthtech Operator',
    experience: '25+ Years Healthtech Interface',
    shortBio: 'Directs cross-functional service delivery, client success, and operational scalability across provider networks.',
    quote: 'Rigorous process discipline makes advanced healthcare software truly work.'
  },
  {
    id: 'vikram-saini',
    name: 'Vikram Saini, MD',
    role: 'Director of Legal Affairs & Compliance',
    discipline: 'Governance & Compliance',
    image: '/images/team/Vikram Saini.png',
    credentials: 'Physician & Healthcare Legal Counsel',
    experience: 'Regulatory Risk & Governance',
    shortBio: 'Directs regulatory compliance, HIPAA privacy frameworks, and value-based risk contracts with clinical and legal expertise.',
    quote: 'Uncompromising compliance protects both patient trust and organizational health.'
  },
  {
    id: 'david-weavil',
    name: 'David Weavil',
    role: 'Advisor for Growth',
    discipline: 'Growth & Strategic Advisory',
    image: '/images/team/David Weavil.png',
    credentials: 'Diagnostics Industry Leader & Advisor',
    experience: '30+ Years Diagnostics Leadership',
    shortBio: 'Senior healthcare advisor guiding commercial market expansion, technological innovations, and strategic alliances.',
    quote: 'True innovation bridges the gap between laboratory insight and clinic reality.'
  }
];

export default function LeadershipEditorial() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' (Reference A) or 'capsule' (Reference B)
  const [activeLeaderModal, setActiveLeaderModal] = useState(null);

  return (
    <section className="py-20 sm:py-28 bg-[#faf8fd] text-[#1c1636] border-t border-[#edeaf2] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#7b3fc7]/8 via-[#0284c7]/8 to-[#ff7a57]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with View Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2ecf9] text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#d6cde2]">
              <Award className="w-3.5 h-3.5 text-[#7b3fc7]" />
              <span>Executive Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1c1636] leading-tight">
              Guided by clinical depth and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#9333ea] to-[#ff7a57]">
                operational experience.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#554e6d] mt-4 font-normal leading-relaxed">
              Guardian was founded by practicing clinicians and managed care operators who understand healthcare realities from the inside out.
            </p>
          </div>

          {/* Interactive View Switcher: Reference A (Portrait Grid) vs Reference B (Capsules) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white border border-[#e5e0ee] rounded-full shadow-xs self-start md:self-end">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#1c1636] text-white shadow-sm'
                  : 'text-[#625b82] hover:text-[#1c1636] hover:bg-[#faf8fc]'
              }`}
              title="Portrait Cards View (Reference A)"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Portrait Cards</span>
            </button>
            <button
              onClick={() => setViewMode('capsule')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                viewMode === 'capsule'
                  ? 'bg-[#1c1636] text-white shadow-sm'
                  : 'text-[#625b82] hover:text-[#1c1636] hover:bg-[#faf8fc]'
              }`}
              title="Capsule / Pill View (Reference B)"
            >
              <Rows3 className="w-3.5 h-3.5" />
              <span>Capsule View</span>
            </button>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            STYLE 1: VERTICAL PORTRAIT CARDS (REFERENCE STYLE A)
            Features individual photos on top, bold name, role & discipline
            ───────────────────────────────────────────────────────────── */}
        {viewMode === 'grid' && (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {leadershipMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                onClick={() => setActiveLeaderModal(member)}
                className="group cursor-pointer rounded-[26px] bg-white border border-[#e5e0ee] shadow-[0_10px_30px_rgba(28,22,54,0.06)] hover:shadow-[0_22px_45px_rgba(28,22,54,0.13)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Portrait Photo Container */}
                  <div className="relative w-full aspect-[4/4.6] overflow-hidden bg-gradient-to-t from-[#1b1435] via-[#2a1d4a] to-[#3a2768]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient bottom shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                    {/* Founder / Leadership Pill Badge */}
                    {member.featured ? (
                      <span className="absolute top-3.5 left-3.5 px-2.5 py-0.5 rounded-full bg-[#7b3fc7] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#ff7a57]" />
                        <span>Founder</span>
                      </span>
                    ) : (
                      <span className="absolute top-3.5 left-3.5 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/20 text-[9.5px] font-bold uppercase tracking-wider">
                        Executive
                      </span>
                    )}

                    {/* Discipline Badge (Overlaid on Bottom of Photo) */}
                    <div className="absolute bottom-3 left-3.5 right-3.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#ff7a57] block truncate">
                        {member.discipline}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-extrabold text-[#1c1636] group-hover:text-[#7b3fc7] transition-colors leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#7b3fc7] mt-1 leading-tight">
                      {member.role}
                    </p>

                    <p className="text-[11.5px] text-[#554e6d] mt-2.5 line-clamp-2 leading-relaxed">
                      {member.shortBio}
                    </p>
                  </div>
                </div>

                {/* Footer Callout */}
                <div className="px-5 sm:px-6 pb-5 pt-0">
                  <div className="pt-3 border-t border-[#ede8f5] flex items-center justify-between text-xs font-bold text-[#7b3fc7] group-hover:text-purple-700">
                    <span className="text-[11px] text-[#716b89] font-normal truncate max-w-[170px]">
                      {member.experience}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-[#f4effa] group-hover:bg-[#7b3fc7] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            STYLE 2: HORIZONTAL CAPSULE / PILL CARDS (REFERENCE STYLE B)
            Sleek capsule cards with circular photo, name, role and bio
            ───────────────────────────────────────────────────────────── */}
        {viewMode === 'capsule' && (
          <motion.div
            key="capsule"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {leadershipMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                onClick={() => setActiveLeaderModal(member)}
                className="group cursor-pointer rounded-[32px] sm:rounded-full bg-white border border-[#e5e0ee] shadow-[0_8px_24px_rgba(28,22,54,0.06)] hover:shadow-[0_18px_38px_rgba(28,22,54,0.12)] hover:-translate-y-1 transition-all duration-300 p-3.5 sm:p-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
              >
                {/* Circular Portrait Image */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 bg-gradient-to-tr from-[#1b1435] to-[#7b3fc7] p-1 shadow-md group-hover:scale-105 transition-transform">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                  {member.featured && (
                    <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#ff7a57] border-2 border-white flex items-center justify-center text-white">
                      <Sparkles className="w-2.5 h-2.5" />
                    </span>
                  )}
                </div>

                {/* Content Body */}
                <div className="flex-1 min-w-0 text-center sm:text-left pr-0 sm:pr-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-0.5">
                    <h3 className="text-base sm:text-lg font-extrabold text-[#1c1636] group-hover:text-[#7b3fc7] transition-colors truncate">
                      {member.name}
                    </h3>
                    <span className="text-[10px] font-mono font-bold uppercase text-[#ff7a57] bg-[#ff7a57]/10 px-2 py-0.5 rounded-full self-center sm:self-auto shrink-0">
                      {member.discipline}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#7b3fc7] mb-1">
                    {member.role}
                  </p>

                  <p className="text-xs text-[#554e6d] line-clamp-2 leading-relaxed">
                    {member.shortBio}
                  </p>
                </div>

                {/* Right Arrow Trigger */}
                <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#f4effa] group-hover:bg-[#7b3fc7] group-hover:text-white items-center justify-center text-[#7b3fc7] shrink-0 mr-2 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>

      {/* ─────────────────────────────────────────────────────────────
          EXECUTIVE BIO MODAL (Detailed Experience & Clinical Quote)
          ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeLeaderModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLeaderModal(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#e5e0ee] overflow-hidden p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLeaderModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-[#1c1636] flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-5 mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-gradient-to-tr from-[#1b1435] to-[#7b3fc7] shadow-md">
                  <img
                    src={activeLeaderModal.image}
                    alt={activeLeaderModal.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7b3fc7] bg-[#f2ecf9] px-2.5 py-0.5 rounded-full inline-block mb-1">
                    {activeLeaderModal.discipline}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1c1636]">
                    {activeLeaderModal.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#7b3fc7]">
                    {activeLeaderModal.role}
                  </p>
                  <p className="text-xs text-[#716b89] font-medium mt-1">
                    {activeLeaderModal.credentials}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-2xl bg-[#faf8fc] border border-[#ede7f6] mb-5">
                <div className="flex items-start gap-2.5">
                  <Quote className="w-4 h-4 text-[#7b3fc7] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm italic text-[#554e6d] font-serif leading-relaxed">
                    “{activeLeaderModal.quote}”
                  </p>
                </div>
              </div>

              {/* Bio & Experience */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1c1636]">
                  Executive Profile & Governance Role
                </h4>
                <p className="text-xs sm:text-sm text-[#554e6d] leading-relaxed">
                  {activeLeaderModal.shortBio}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-[#7b3fc7] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{activeLeaderModal.experience}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
