import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Stethoscope,
  BarChart3,
  ShieldCheck,
  Compass,
  Workflow
} from 'lucide-react';
import { onsiteTeam, offshoreTeam } from './UnifiedLeadershipCarousel';

export const executiveMembers = [
  {
    id: 'sandeep-bajaj',
    name: 'Dr. Sandeep Bajaj, MD',
    role: 'Founder & Chief Executive Officer',
    discipline: 'Clinical Leadership & Governance',
    image: '/images/team/Sandeep Bajaj, MD.png',
    credentials: 'Board-Certified Interventional Cardiologist & Internist',
    experience: '35+ Years Clinical Practice',
    bio: 'Board-certified cardiologist and healthcare operator leading Guardian’s mission to connect clinical insight with frontline action. Dr. Bajaj provides strategic direction and clinical governance across all population health and value-based care programs.',
    quote: 'Healthcare technology is only valuable when it serves the clinicians and patients living with its results.'
  },
  {
    id: 'joseph-macau',
    name: 'Joseph Macau, CPA, CGMA',
    role: 'Chief Financial Officer',
    discipline: 'Finance & Fiscal Governance',
    image: '/images/team/Joseph Macau, CGMA.png',
    credentials: 'Chartered Global Management Accountant',
    experience: '25+ Years Healthcare Economics',
    bio: 'Oversees Guardian’s financial architecture, risk modeling, and capital allocation. Directs economic strategies across risk-bearing healthcare partnerships, Medicare Shared Savings Program (MSSP) entities, and commercial value-based arrangements.',
    quote: 'Aligning clinical performance with fiscal viability secures lasting care models.'
  },
  {
    id: 'ganesh-ramachandran',
    name: 'Ganesh Ramachandran',
    role: 'Vice President of Operations',
    discipline: 'Operations & Service Delivery',
    image: '/images/team/Ganesh Ramachandran.png',
    credentials: 'Cross-Functional Healthtech Leader',
    experience: '25+ Years Health IT & Operations',
    bio: 'Directs cross-functional service delivery, client success, and operational scalability across provider networks. Brings extensive experience in EHR workflows, HIE data exchange, and high-reliability healthcare implementations.',
    quote: 'Rigorous process discipline makes advanced healthcare software truly work.'
  },
  {
    id: 'vikram-saini',
    name: 'Vikram J. Saini, JD',
    role: 'Director of Legal Affairs & Compliance',
    discipline: 'Legal & Regulatory Compliance',
    image: '/images/team/Vikram Saini.png',
    credentials: 'Healthcare Legal Counsel & Compliance Officer',
    experience: 'Regulatory Risk & Governance',
    bio: 'Leads regulatory compliance, HIPAA privacy safeguards, and value-based risk contracting. Combines clinical understanding with legal governance to ensure operational integrity and patient privacy.',
    quote: 'Uncompromising compliance protects both patient trust and organizational health.'
  },
  {
    id: 'richard-cairl',
    name: 'Richard Cairl, PhD',
    role: 'VP of Clinical Operations & Analytics',
    discipline: 'Quality Performance & Care Models',
    image: '/images/team/Richard Cairl.png',
    credentials: 'PhD Healthcare Systems Researcher',
    experience: '30+ Years Health Services Research',
    bio: 'Focuses on scaling Medicare Advantage quality performance, clinical operations, and structured community health interventions. Bridges empirical healthcare analytics with patient-centered care coordination.',
    quote: 'Sustainable healthcare relies on structured, empathetic community workflows.'
  },
  {
    id: 'david-weavil',
    name: 'David Weavil',
    role: 'Advisor for Growth & Partnerships',
    discipline: 'Strategic Growth & Diagnostic Alliances',
    image: '/images/team/David Weavil.png',
    credentials: 'Diagnostics Industry Leader & Advisor',
    experience: '30+ Years Healthcare Leadership',
    bio: 'Senior healthcare advisor guiding commercial market expansion, diagnostic innovation integration, and strategic partnerships between laboratory networks and health systems.',
    quote: 'True innovation bridges the gap between laboratory insight and clinical reality.'
  }
];

export default function EditorialLeadershipDirectory() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeGroup, setActiveGroup] = useState('executive');

  const getMemberList = (group) => {
    if (group === 'executive') return executiveMembers;
    if (group === 'onsite') return onsiteTeam;
    return offshoreTeam;
  };

  const currentList = getMemberList(activeGroup);
  const currentIndex = selectedMember 
    ? currentList.findIndex(m => m.id === selectedMember.id) 
    : -1;

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setSelectedMember(currentList[currentIndex - 1]);
    } else {
      setSelectedMember(currentList[currentList.length - 1]);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentIndex < currentList.length - 1) {
      setSelectedMember(currentList[currentIndex + 1]);
    } else {
      setSelectedMember(currentList[0]);
    }
  };

  return (
    <section id="leadership" className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#008ba3]/10 text-[#008ba3] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#008ba3]/20">
            <Users className="w-3.5 h-3.5 text-[#008ba3]" />
            <span>LEADERSHIP &amp; GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#14263e] tracking-tight leading-tight">
            Leadership Team
          </h2>
          <p className="text-base text-slate-500 mt-3 font-normal">
            Members of the team include:
          </p>
        </div>

        {/* ── 1. EXECUTIVE LEADERSHIP (EDITORIAL ROW LAYOUT) ── */}
        <div className="space-y-16 sm:space-y-20 mb-24">
          {executiveMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-10 items-start"
            >
              {/* Photo or Initials Monogram Frame */}
              <div className="w-44 h-52 sm:w-48 sm:h-56 shrink-0 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-xs relative flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#008ba3]/10 to-[#008ba3]/20 text-[#008ba3]">
                    <span className="text-3xl font-extrabold tracking-wider">{member.initials || 'ST'}</span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-1 font-semibold">Leadership</span>
                  </div>
                )}
              </div>

              {/* Leader Narrative Details */}
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl sm:text-[28px] font-serif font-bold text-[#14263e] tracking-tight leading-snug">
                  {member.name}
                </h3>
                <div className="text-sm sm:text-[15px] font-bold text-[#008ba3] mt-1 mb-3.5">
                  {member.role}
                </div>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  {member.bio}
                </p>

                {member.quote && (
                  <div className="mt-4 pt-3.5 border-t border-slate-100">
                    <p className="text-xs sm:text-sm italic text-slate-500 font-serif leading-relaxed">
                      “{member.quote}”
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── 2. ONSITE TEAM (GRID CARDS) ── */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-7 bg-[#008ba3] rounded-xs" />
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#14263e]">
              Onsite Engineering &amp; Clinical Operations
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {onsiteTeam.map((member) => (
              <div
                key={member.id}
                onClick={() => {
                  setActiveGroup('onsite');
                  setSelectedMember(member);
                }}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#008ba3]/50 transition-all cursor-pointer flex flex-col items-center text-center group"
              >
                <div className="w-36 h-44 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs mb-4">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-bold text-xl text-[#008ba3]">
                      {member.initials}
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-[#14263e] text-base group-hover:text-[#008ba3] transition-colors">
                  {member.name}
                </h4>
                <div className="text-xs text-[#008ba3] font-semibold mt-1">
                  {member.role}
                </div>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {member.tagline || member.domain}
                </p>
                <span className="text-[11px] font-bold text-[#008ba3] mt-3 group-hover:underline">
                  View Profile →
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. OFFSHORE ENGINEERING TEAM (DIRECTLY OPEN GRID) ── */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-7 bg-[#008ba3] rounded-xs" />
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#14263e]">
              Offshore Engineering &amp; Development Team
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {offshoreTeam.map((member) => (
              <div
                key={member.id}
                onClick={() => {
                  setActiveGroup('offshore');
                  setSelectedMember(member);
                }}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#008ba3]/50 transition-all cursor-pointer flex flex-col items-center text-center group"
              >
                <div className="w-36 h-44 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs mb-4">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-bold text-xl text-[#008ba3]">
                      {member.initials}
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-[#14263e] text-sm sm:text-base group-hover:text-[#008ba3] transition-colors leading-tight">
                  {member.name}
                </h4>
                <div className="text-xs text-[#008ba3] font-semibold mt-1">
                  {member.role}
                </div>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {member.tagline || member.domain}
                </p>
                <span className="text-[11px] font-bold text-[#008ba3] mt-3 group-hover:underline">
                  View Profile →
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── MODAL: INDIVIDUAL PROFILE SPOTLIGHT WITH PREV / NEXT CONTROLS ── */}
      <AnimatePresence>
        {selectedMember && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 text-[#14263e] overflow-hidden"
            >
              {/* Header Controls */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous team member"
                    className="p-1.5 rounded-full hover:bg-slate-100 text-[#008ba3] cursor-pointer transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {currentIndex + 1} of {currentList.length}
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label="Next team member"
                    className="p-1.5 rounded-full hover:bg-slate-100 text-[#008ba3] cursor-pointer transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <button
                  onClick={() => setSelectedMember(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#14263e] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Profile Body */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">
                <div className="w-36 h-48 sm:w-44 sm:h-56 shrink-0 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center">
                  {selectedMember.image ? (
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-extrabold text-3xl text-[#008ba3]">
                      {selectedMember.initials || 'ST'}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0 text-left">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#008ba3]">
                    {selectedMember.domain || selectedMember.discipline}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#14263e] mt-1">
                    {selectedMember.name}
                  </h3>
                  <div className="text-sm font-semibold text-[#008ba3] mt-0.5">
                    {selectedMember.role}
                  </div>
                  {selectedMember.credentials && (
                    <div className="text-xs text-slate-500 font-mono mt-1">
                      {selectedMember.credentials}
                    </div>
                  )}
                  <p className="text-sm text-slate-600 leading-relaxed mt-4 font-normal">
                    {selectedMember.bio}
                  </p>
                  {selectedMember.quote && (
                    <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <p className="text-xs italic text-slate-600 font-serif">
                        “{selectedMember.quote}”
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
