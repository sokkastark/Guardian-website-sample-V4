import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Stethoscope, 
  Monitor, 
  BarChart3, 
  Handshake, 
  Lightbulb, 
  TrendingUp, 
  Settings,
  Database,
  Search,
  Target,
  Heart,
  ChevronsRight,
  ArrowRight,
  X
} from 'lucide-react';
import { leadershipMembers } from './LeadershipEditorial';

// Precision coordinates in a 1100 x 760 coordinate system with guaranteed ZERO overlap
const teamConstellation = [
  {
    id: 'sandeep-bajaj',
    name: 'Dr. Sandeep Bajaj, MD',
    role: 'Clinical Leadership',
    tagline: 'Bringing clinical insight to real-world solutions.',
    icon: Stethoscope,
    image: '/images/team/Sandeep Bajaj, MD.png',
    // Top-Center
    cx: 550,
    cy: 135,
    textSide: 'right',
    badgePos: 'bottom-right',
    spokeControl: { x: 550, y: 230 }
  },
  {
    id: 'satya-thottappillil',
    name: 'Satya Thottappillil',
    role: 'Technology',
    tagline: 'Building the infrastructure for connected care.',
    icon: Monitor,
    image: '/images/team/Satya Thottappillil.png',
    // Top-Left
    cx: 280,
    cy: 210,
    textSide: 'left',
    badgePos: 'bottom-right',
    spokeControl: { x: 390, y: 270 }
  },
  {
    id: 'richard-cairl',
    name: 'Richard Cairl, PhD',
    role: 'Quality & Analytics',
    tagline: 'Turning data into better outcomes.',
    icon: BarChart3,
    image: '/images/team/Richard Cairl.png',
    // Top-Right
    cx: 820,
    cy: 210,
    textSide: 'right',
    badgePos: 'bottom-left',
    spokeControl: { x: 710, y: 270 }
  },
  {
    id: 'vikram-saini',
    name: 'Vikram Saini, MD',
    role: 'Governance & Compliance',
    tagline: 'Ensuring regulatory integrity and trust.',
    icon: Handshake,
    image: '/images/team/Vikram Saini.png',
    // Middle-Right
    cx: 870,
    cy: 380,
    textSide: 'right',
    badgePos: 'bottom-left',
    spokeControl: { x: 720, y: 380 }
  },
  {
    id: 'david-weavil',
    name: 'David Weavil',
    role: 'Strategic Advisory',
    tagline: 'Expanding access to what’s possible.',
    icon: TrendingUp,
    image: '/images/team/David Weavil.png',
    // Bottom-Center
    cx: 550,
    cy: 625,
    textSide: 'right',
    badgePos: 'bottom-right',
    spokeControl: { x: 550, y: 530 }
  },
  {
    id: 'joseph-macau',
    name: 'Joseph Macau, CGMA',
    role: 'Finance & Governance',
    tagline: 'Connecting clinical impact with fiscal sustainability.',
    icon: Users,
    image: '/images/team/Joseph Macau, CGMA.png',
    // Bottom-Left
    cx: 280,
    cy: 550,
    textSide: 'left',
    badgePos: 'bottom-right',
    spokeControl: { x: 390, y: 490 }
  },
  {
    id: 'ganesh-ramachandran',
    name: 'Ganesh Ramachandran',
    role: 'Operations & Service Delivery',
    tagline: 'Ensuring operational discipline in healthtech delivery.',
    icon: Settings,
    image: '/images/team/Ganesh Ramachandran.png',
    // Middle-Left
    cx: 230,
    cy: 380,
    textSide: 'left',
    badgePos: 'bottom-right',
    spokeControl: { x: 380, y: 380 }
  }
];

// Pipeline steps for the bottom card
const pipelineSteps = [
  { label: 'Data', icon: Database },
  { label: 'Intelligence', icon: Search },
  { label: 'People', icon: Users },
  { label: 'Action', icon: Target },
  { label: 'Healthier Outcomes', icon: Heart }
];

export default function MeetTheTeamGallery() {
  const [hoveredId, setHoveredId] = useState(null);
  const [focusedMember, setFocusedMember] = useState(null);

  // Match member data for modal spotlight
  const handleOpenSpotlight = (memberId) => {
    const fullProfile = leadershipMembers.find((m) => m.id === memberId);
    if (fullProfile) {
      setFocusedMember(fullProfile);
    }
  };

  return (
    <section 
      id="meet-the-team"
      className="relative py-20 sm:py-28 bg-[#090514] text-white overflow-hidden"
      aria-label="Meet The Team: The people behind the work"
    >
      {/* Dynamic Cosmic Gradient & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#7b3fc7]/25 via-[#3b82f6]/15 to-transparent blur-[160px] rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#ff7a57]/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 ambient-grid opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b1236]/80 border border-purple-500/30 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md shadow-sm">
            <Users className="w-3.5 h-3.5 text-purple-300" />
            <span>MEET THE TEAM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            The people <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#7b3fc7]">behind the work.</span>
          </h2>

          <p className="text-sm sm:text-base text-purple-200/80 font-normal leading-relaxed">
            Physicians, technologists, healthcare operators, and managed care experts collaborating to build healthcare technology that works in practice.
          </p>
        </div>

        {/* ── DESKTOP: RADIAL CONSTELLATION STAGE (Guaranteed Zero Overlap) ── */}
        <div className="hidden lg:block relative w-full h-[760px] max-w-[1100px] mx-auto select-none">

          {/* SVG Connector Spokes radiating from Central Hub to Satellites */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 1100 760"
            fill="none"
          >
            <defs>
              <linearGradient id="spokeGrad" x1="550" y1="380" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#6366f1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="activeSpokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="40%" stopColor="#c084fc" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ff7a57" stopOpacity="0.8" />
              </linearGradient>
              <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {teamConstellation.map((sat) => {
              const isHovered = hoveredId === sat.id;
              // Smooth bezier curve from center (550, 380) to satellite (sat.cx, sat.cy)
              const d = `M 550 380 Q ${sat.spokeControl.x} ${sat.spokeControl.y} ${sat.cx} ${sat.cy}`;
              
              return (
                <g key={`spoke-${sat.id}`}>
                  {/* Subtle Background Glow Line */}
                  <path
                    d={d}
                    stroke={isHovered ? '#a855f7' : '#7b3fc7'}
                    strokeWidth={isHovered ? '4' : '2'}
                    strokeOpacity={isHovered ? '0.7' : '0.2'}
                    filter="url(#neonGlow)"
                    fill="none"
                  />
                  {/* Crisp Foreground Core Line with Dashes */}
                  <path
                    d={d}
                    stroke={isHovered ? 'url(#activeSpokeGrad)' : 'url(#spokeGrad)'}
                    strokeWidth={isHovered ? '2.5' : '1.5'}
                    strokeDasharray={isHovered ? 'none' : '4 3'}
                    fill="none"
                  />
                  {/* Satellite Connection Anchor Node */}
                  <circle
                    cx={sat.cx}
                    cy={sat.cy}
                    r={isHovered ? '5' : '3.5'}
                    fill={isHovered ? '#ff7a57' : '#a855f7'}
                    filter="url(#neonGlow)"
                  />
                </g>
              );
            })}
          </svg>

          {/* ── CENTER HUB: Large Glowing Guardian Glass Sphere ── */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
            style={{ width: '256px', height: '256px' }}
          >
            {/* Outer Halo Glow */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#7b3fc7]/40 via-[#3b82f6]/30 to-[#a855f7]/40 blur-2xl animate-pulse-subtle pointer-events-none" />

            {/* Glowing Border Rings */}
            <div className="w-full h-full rounded-full p-2 bg-gradient-to-tr from-purple-500/50 via-blue-500/30 to-purple-400/50 border-2 border-purple-400/60 shadow-[0_0_60px_rgba(123,63,199,0.5)]">
              {/* Inner Core */}
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#211545] via-[#140c2e] to-[#0c071d] flex flex-col items-center justify-center text-center p-5 relative overflow-hidden border border-white/20 backdrop-blur-xl">
                {/* Top Glass Reflection */}
                <div className="absolute -top-12 left-4 right-4 h-24 bg-gradient-to-b from-white/20 to-transparent rounded-full pointer-events-none" />

                {/* Guardian Logo (Already contains emblem + "guardian" name) */}
                <div className="mb-2.5 flex items-center justify-center px-4">
                  <img 
                    src="/logos/logo-white.png" 
                    alt="Guardian Health Service" 
                    className="h-9 sm:h-10 w-auto max-w-[170px] object-contain filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.35)]"
                  />
                </div>

                {/* Subtitle */}
                <p className="text-xs text-purple-200/90 font-medium leading-tight">
                  Healthcare Intelligence
                </p>
                <p className="text-[11px] text-purple-200/60 font-normal leading-tight mt-1">
                  for a Healthier Tomorrow
                </p>
              </div>
            </div>
          </div>

          {/* ── SATELLITE NODES: Fixed Avatar Anchor with Outward Text Flow ── */}
          {teamConstellation.map((sat) => {
            const isHovered = hoveredId === sat.id;
            const IconComponent = sat.icon;

            return (
              <div
                key={sat.id}
                onMouseEnter={() => setHoveredId(sat.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleOpenSpotlight(sat.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-30"
                style={{
                  left: `${(sat.cx / 1100) * 100}%`,
                  top: `${(sat.cy / 760) * 100}%`,
                  width: '80px',
                  height: '80px',
                }}
                role="button"
                tabIndex={0}
                aria-label={`View profile for ${sat.name}, ${sat.role}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenSpotlight(sat.id);
                  }
                }}
              >
                {/* 1. Precise Avatar Circle at (cx, cy) */}
                <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                  <div className={`w-20 h-20 rounded-full p-0.5 transition-all duration-300 ${
                    isHovered 
                      ? 'bg-gradient-to-tr from-[#ff7a57] via-[#a855f7] to-[#38bdf8] shadow-[0_0_30px_rgba(168,85,247,0.7)]' 
                      : 'bg-purple-500/40 shadow-[0_0_20px_rgba(123,63,199,0.35)]'
                  }`}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#160d33]">
                      <img
                        src={sat.image}
                        alt={sat.name}
                        className="w-full h-full object-cover object-top filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Overlapping Domain Badge */}
                  <div className={`absolute ${
                    sat.badgePos === 'bottom-left' ? 'bottom-0 left-0 -translate-x-1 translate-y-1' : 'bottom-0 right-0 translate-x-1 translate-y-1'
                  } w-7 h-7 rounded-full bg-[#181133] border border-purple-400/60 shadow-lg flex items-center justify-center text-purple-200 group-hover:bg-[#7b3fc7] group-hover:text-white transition-all duration-200 z-10`}>
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* 2. Text Information Block Anchored Outward from Avatar */}
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 w-48 pointer-events-none transition-all duration-200 ${
                    sat.textSide === 'left' 
                      ? 'right-[calc(100%+14px)] text-right' 
                      : 'left-[calc(100%+14px)] text-left'
                  }`}
                >
                  <h4 className="text-sm font-bold text-white leading-tight group-hover:text-purple-200 transition-colors drop-shadow-sm whitespace-nowrap">
                    {sat.name}
                  </h4>
                  <p className="text-xs font-semibold text-purple-300 leading-tight mt-0.5 whitespace-nowrap">
                    {sat.role}
                  </p>
                  <p className="text-[11px] text-purple-200/70 font-normal leading-snug mt-1">
                    {sat.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── MOBILE / TABLET ADAPTATION (block lg:hidden) ── */}
        <div className="block lg:hidden my-8">
          {/* Mobile Center Guardian Badge */}
          <div className="w-56 h-56 mx-auto rounded-full bg-gradient-to-b from-[#211545] to-[#0c071d] border-2 border-purple-400/50 p-6 flex flex-col items-center justify-center text-center shadow-2xl mb-10">
            <div className="mb-2.5 flex items-center justify-center px-3">
              <img src="/logos/logo-white.png" alt="Guardian" className="h-8 w-auto max-w-[150px] object-contain filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]" />
            </div>
            <p className="text-xs text-purple-200/90 font-medium">Healthcare Intelligence</p>
            <p className="text-[11px] text-purple-200/60 mt-0.5">for a Healthier Tomorrow</p>
          </div>

          {/* 8 Team Member Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teamConstellation.map((sat) => {
              const IconComponent = sat.icon;

              return (
                <button
                  key={`mobile-${sat.id}`}
                  onClick={() => handleOpenSpotlight(sat.id)}
                  className="w-full text-left rounded-2xl bg-white/[0.04] border border-white/10 p-4 hover:bg-white/[0.08] transition-all flex items-center gap-3.5"
                >
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-[#160d33] border-2 border-purple-400/40">
                      <img src={sat.image} alt={sat.name} className="w-full h-full object-cover object-top" loading="lazy" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#181133] border border-purple-400/60 flex items-center justify-center text-purple-200">
                      <IconComponent className="w-3 h-3" />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="text-sm font-bold text-white truncate">{sat.name}</div>
                    <div className="text-xs font-semibold text-purple-300 truncate">{sat.role}</div>
                    <div className="text-[11px] text-purple-200/70 line-clamp-2 mt-0.5">{sat.tagline}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── BOTTOM PATHWAY STRIP: "From insight to impact." ── */}
        <div className="rounded-3xl border border-white/10 bg-[#120a28]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl mt-8 sm:mt-12">
          
          {/* Left: Headline */}
          <div className="text-center lg:text-left shrink-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight">
              From insight<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#7b3fc7]">
                to impact.
              </span>
            </h3>
          </div>

          {/* Center: 5 Pipeline Steps */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-4 overflow-x-auto py-2 w-full lg:w-auto">
            {pipelineSteps.map((step, idx) => {
              const StepIcon = step.icon;

              return (
                <React.Fragment key={step.label}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-b from-[#25174a] to-[#160d33] border border-purple-400/30 flex items-center justify-center text-purple-200 shadow-md group-hover:border-purple-300 group-hover:scale-105 transition-all">
                      <StepIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-purple-200/90 mt-2 whitespace-nowrap">
                      {step.label}
                    </span>
                  </div>

                  {idx < pipelineSteps.length - 1 && (
                    <div className="hidden sm:flex items-center text-purple-400/40 px-1 mb-5">
                      <ChevronsRight className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Right: Closing Credential Statement */}
          <div className="shrink-0 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8 text-center lg:text-left w-full lg:w-auto">
            <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed font-medium">
              Real people.<br />
              Real expertise.<br />
              A healthier tomorrow.
            </p>
            <div className="w-8 h-0.5 bg-[#7b3fc7] mt-2 rounded-full mx-auto lg:mx-0" />
          </div>

        </div>


      </div>

      {/* ── FOCUS STATE SPOTLIGHT MODAL ── */}
      <AnimatePresence>
        {focusedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFocusedMember(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Spotlight Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-gradient-to-br from-[#1b1435] to-[#100b24] border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setFocusedMember(null)}
                aria-label="Close profile"
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                {/* Large Portrait */}
                <div className="w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-t from-[#0c081a] to-white/10 border border-white/20 shrink-0 shadow-xl flex items-end justify-center">
                  <img
                    src={focusedMember.image}
                    alt={focusedMember.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Profile Details */}
                <div className="space-y-4 text-left">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#ff7a57]">
                      {focusedMember.discipline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                      {focusedMember.name}
                    </h3>
                    <p className="text-sm font-medium text-purple-200 mt-0.5">
                      {focusedMember.role}
                    </p>
                    <p className="text-xs text-white/60 font-mono mt-1">
                      {focusedMember.credentials} • {focusedMember.experience}
                    </p>
                  </div>

                  {/* Short Bio */}
                  <p className="text-sm text-purple-100/90 leading-relaxed font-normal">
                    {focusedMember.shortBio}
                  </p>

                  {/* Quote */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs sm:text-sm italic text-purple-100/85 font-serif leading-relaxed">
                      “{focusedMember.quote}”
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
