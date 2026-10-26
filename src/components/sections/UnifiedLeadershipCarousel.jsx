import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Award, 
  ArrowRight, 
  ArrowLeft,
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Sparkles,
  Code2, 
  Database, 
  Layers, 
  CheckCircle2, 
  PenTool, 
  Terminal, 
  Activity, 
  Compass, 
  ShieldCheck, 
  Stethoscope, 
  Monitor, 
  BarChart3, 
  Globe, 
  Workflow, 
  X,
  FileCheck2,
  Cpu
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   1. EXECUTIVE LEADERSHIP TEAM (Slide 1)
   Confirmed verified profiles and portraits
   ───────────────────────────────────────────────────────────── */
export const executiveLeadership = [
  {
    id: 'sandeep-bajaj',
    name: 'Dr. Sandeep Bajaj, MD',
    role: 'Founder & Chief Executive Officer',
    discipline: 'Clinical Vision & Governance',
    image: '/images/team/Sandeep Bajaj, MD.png',
    credentials: 'Board-Certified Interventional Cardiologist & Internist',
    bio: 'Board-certified cardiologist and healthcare operator leading Guardian’s mission to connect clinical insight with frontline action. Guides clinical governance and long-term strategic direction.',
    icon: Stethoscope
  },
  {
    id: 'satya-thottappillil',
    name: 'Satya Thottappillil',
    role: 'Chief Technology Officer',
    discipline: 'Platform & Technology',
    image: '/images/team/Satya Thottappillil.png',
    credentials: 'Enterprise Healthtech Systems Architect',
    bio: 'Specializes in distributed managed care systems and secure cloud pipelines. Directs technology architecture to make complex healthcare data intuitive at point-of-care.',
    icon: Monitor
  },
  {
    id: 'joseph-macau',
    name: 'Joseph Macau, CGMA',
    role: 'Chief Financial Officer',
    discipline: 'Finance & Fiscal Governance',
    image: '/images/team/Joseph Macau, CGMA.png',
    credentials: 'Chartered Global Management Accountant',
    bio: 'Oversees financial architecture, risk modeling, and capital allocation. Secures sustainable economics across risk-bearing healthcare partnerships.',
    icon: BarChart3
  },
  {
    id: 'richard-cairl',
    name: 'Richard Cairl, PhD',
    role: 'VP of Clinical Operations',
    discipline: 'Clinical Systems & Medicare Advantage',
    image: '/images/team/Richard Cairl.png',
    credentials: 'PhD Healthcare Systems Researcher',
    bio: 'Focuses on scaling Medicare Advantage quality performance and structured care interventions. Bridges empirical data with patient-centered community outcomes.',
    icon: Activity
  },
  {
    id: 'ganesh-ramachandran',
    name: 'Ganesh Ramachandran',
    role: 'VP of Operations',
    discipline: 'Operations & Service Delivery',
    image: '/images/team/Ganesh Ramachandran.png',
    credentials: 'Cross-Functional Healthtech Operator',
    bio: 'Directs service delivery, operational discipline, and client success across provider networks. Ensures high-reliability execution across healthcare client deployments.',
    icon: Workflow
  },
  {
    id: 'vikram-saini',
    name: 'Vikram Saini, MD',
    role: 'Director of Legal Affairs & Compliance',
    discipline: 'Governance & Compliance',
    image: '/images/team/Vikram Saini.png',
    credentials: 'Physician & Healthcare Legal Counsel',
    bio: 'Guides healthcare regulatory compliance, HIPAA privacy, and risk contracts. Unites clinical understanding with rigorous legal governance.',
    icon: ShieldCheck
  },
  {
    id: 'david-weavil',
    name: 'David Weavil',
    role: 'Advisor for Growth',
    discipline: 'Growth & Strategic Advisory',
    image: '/images/team/David Weavil.png',
    credentials: 'Diagnostics Industry Leader & Advisor',
    bio: 'Senior healthcare advisor guiding commercial market expansion and strategic partnerships. Helps bridge diagnostic innovation with clinical practice.',
    icon: Compass
  }
];

/* ─────────────────────────────────────────────────────────────
   2. ONSITE TEAM (Slide 2)
   Connecting technology with operations & business needs
   ───────────────────────────────────────────────────────────── */
export const onsiteTeam = [
  {
    id: 'jairo-rodriguez',
    name: 'Jairo R. Rodriguez',
    role: 'Senior Software Architect Engineer',
    domain: 'Software Architecture & Systems',
    initials: 'JR',
    gradient: 'from-[#7b3fc7] to-[#3b82f6]',
    icon: Cpu,
    bio: 'Designs software architecture and technical solutions to support Guardian’s application ecosystem. Helps maintain scalable systems and translate complex requirements into practical engineering designs.'
  },
  {
    id: 'joshua-chumley',
    name: 'Joshua Chumley',
    role: 'Data Analyst',
    domain: 'Analytics & Healthcare Insights',
    initials: 'JC',
    gradient: 'from-[#3b82f6] to-[#06b6d4]',
    icon: BarChart3,
    bio: 'Analyzes healthcare and operational data to uncover useful insights. Supports data-driven decisions through data interpretation, reporting, and analytical workflows.'
  },
  {
    id: 'jose-santos',
    name: 'Jose Santos',
    role: 'Senior Data Architect',
    domain: 'Data Architecture & Modeling',
    initials: 'JS',
    gradient: 'from-[#06b6d4] to-[#10b981]',
    icon: Database,
    bio: 'Shapes data architecture to support reliable, consistent, and accessible information across systems. Helps establish the foundations for effective data integration and analytics.'
  },
  {
    id: 'jessica-lopez',
    name: 'Jessica Lopez',
    role: 'Director of Healthcare IT Operations',
    domain: 'IT Operations & Delivery',
    initials: 'JL',
    gradient: 'from-[#ec4899] to-[#8b5cf6]',
    icon: Activity,
    bio: 'Coordinates healthcare IT operations and technology delivery. Bridges operational requirements and technical teams to support effective implementation and ongoing service delivery.'
  },
  {
    id: 'carmen-penna',
    name: 'Carmen Penna',
    role: 'Senior Business Analyst',
    domain: 'Business Analysis & Requirements',
    initials: 'CP',
    gradient: 'from-[#f59e0b] to-[#ea580c]',
    icon: Compass,
    bio: 'Translates business and stakeholder requirements into clear functional specifications. Works across teams to align application capabilities with operational needs.'
  },
  {
    id: 'sheila-haley',
    name: 'Sheila R. Haley',
    role: 'Senior Data Management Analyst / Test Specialist',
    domain: 'Data Quality & Verification',
    initials: 'SH',
    gradient: 'from-[#10b981] to-[#3b82f6]',
    icon: FileCheck2,
    bio: 'Supports data quality, management, and application testing. Helps identify inconsistencies and verify that solutions meet expected functional and data requirements.'
  }
];

/* ─────────────────────────────────────────────────────────────
   3. OFFSHORE ENGINEERING & DEVELOPMENT TEAM (On-Demand View)
   The core team building & maintaining Guardian applications
   ───────────────────────────────────────────────────────────── */
export const offshoreTeam = [
  {
    id: 'raghavendra-tg',
    name: 'Raghavendra TG',
    role: 'Engineering Manager',
    domain: 'Engineering Leadership & Execution',
    initials: 'RT',
    gradient: 'from-[#8b5cf6] to-[#6366f1]',
    icon: Workflow,
    bio: 'Leads engineering execution across Guardian’s software development initiatives. Coordinates technical delivery and helps align engineering priorities with product and business objectives.'
  },
  {
    id: 'rajiv-jose',
    name: 'Rajiv Jose',
    role: 'Senior Technical Lead',
    domain: 'Technical Governance & Quality',
    initials: 'RJ',
    gradient: 'from-[#6366f1] to-[#3b82f6]',
    icon: Terminal,
    bio: 'Guides technical implementation and supports engineering decisions across development projects. Helps maintain code quality, consistency, and reliable delivery.'
  },
  {
    id: 'abinash-mishra',
    name: 'Abinash Mishra',
    role: 'Senior Software Engineer',
    domain: 'Application Engineering',
    initials: 'AM',
    gradient: 'from-[#3b82f6] to-[#0ea5e9]',
    icon: Code2,
    bio: 'Develops and enhances Guardian’s software applications and platform capabilities. Contributes to implementing features, resolving technical issues, and improving application reliability.'
  },
  {
    id: 'balaji-devendiran',
    name: 'Balaji Devendiran',
    role: 'Senior SQL Developer',
    domain: 'Database & Query Optimization',
    initials: 'BD',
    gradient: 'from-[#0ea5e9] to-[#10b981]',
    icon: Database,
    bio: 'Develops and optimizes database queries, stored procedures, and data operations. Helps ensure efficient data access and reliable database performance.'
  },
  {
    id: 'yashwanth-kumar',
    name: 'Yashwanth Vittal Kumar',
    role: 'Software Developer',
    domain: 'Feature & Component Development',
    initials: 'YK',
    gradient: 'from-[#10b981] to-[#14b8a6]',
    icon: Code2,
    bio: 'Builds and maintains application features and software components. Contributes to implementing product requirements and improving existing functionality.'
  },
  {
    id: 'suhil-mushtaq',
    name: 'Suhil Mushtaq',
    role: 'Technical Lead',
    domain: 'Architecture & Development',
    initials: 'SM',
    gradient: 'from-[#f59e0b] to-[#ea580c]',
    icon: Layers,
    bio: 'Coordinates technical implementation and guides development activities within the team. Helps resolve complex technical challenges and maintain consistent engineering standards.'
  },
  {
    id: 'nalamati-lakshmi',
    name: 'Nalamati Vara Lakshmi',
    role: 'Senior Tester Engineer',
    domain: 'Quality Assurance & Testing',
    initials: 'NL',
    gradient: 'from-[#ec4899] to-[#f43f5e]',
    icon: CheckCircle2,
    bio: 'Tests application functionality and verifies that software behaves as expected. Identifies defects and supports the delivery of dependable software releases.'
  },
  {
    id: 'apoorva-sm',
    name: 'Apoorva SM',
    role: 'Engineering Operation Coordinator',
    domain: 'Engineering Operations & Alignment',
    initials: 'AS',
    gradient: 'from-[#a855f7] to-[#ec4899]',
    icon: Activity,
    bio: 'Coordinates engineering activities and supports the smooth execution of development operations. Helps maintain alignment across tasks, teams, and delivery processes.'
  },
  {
    id: 'darshan-umesha',
    name: 'Darshan Umesha',
    role: 'Junior Software Developer',
    domain: 'Application Development & Support',
    initials: 'DU',
    gradient: 'from-[#06b6d4] to-[#3b82f6]',
    icon: Terminal,
    bio: 'Contributes to application development, feature implementation, and software maintenance. Works with the engineering team to improve existing functionality and deliver product enhancements.'
  },
  {
    id: 'sokkanathan-k',
    name: 'Sokkanathan K',
    role: 'Senior Designer',
    domain: 'UI/UX & Healthcare Design',
    initials: 'SK',
    gradient: 'from-[#ff7a57] to-[#ec4899]',
    icon: PenTool,
    bio: 'Designs user experiences and interfaces for Guardian’s healthcare applications. Collaborates with product and engineering teams to turn complex healthcare workflows into clear, usable experiences.'
  }
];

export default function UnifiedLeadershipCarousel() {
  // Current active slide: 0 = Executive Leadership, 1 = Onsite Team, 2 = Offshore Team (On Demand)
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [timerProgress, setTimerProgress] = useState(0);

  const ROTATION_SECONDS = 15;
  const timerRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // Auto-rotation logic
  useEffect(() => {
    // If on offshore view (slide 2), or user paused, or user hovered: freeze rotation
    if (activeSlide === 2 || isPaused || isHovered) {
      clearInterval(progressIntervalRef.current);
      return;
    }

    setTimerProgress(0);
    const stepTime = 100; // update progress every 100ms
    const totalSteps = (ROTATION_SECONDS * 1000) / stepTime;

    progressIntervalRef.current = setInterval(() => {
      setTimerProgress((prev) => {
        if (prev >= 100) {
          // Advance slide between 0 and 1
          setActiveSlide((curr) => (curr === 0 ? 1 : 0));
          return 0;
        }
        return prev + (100 / totalSteps);
      });
    }, stepTime);

    return () => clearInterval(progressIntervalRef.current);
  }, [activeSlide, isPaused, isHovered]);

  const handleNext = () => {
    if (activeSlide === 2) {
      setActiveSlide(1);
    } else {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }
    setTimerProgress(0);
  };

  const handlePrev = () => {
    if (activeSlide === 2) {
      setActiveSlide(1);
    } else {
      setActiveSlide((prev) => (prev === 1 ? 0 : 1));
    }
    setTimerProgress(0);
  };

  const openOffshoreView = () => {
    setActiveSlide(2);
    setTimerProgress(0);
  };

  const returnFromOffshore = () => {
    setActiveSlide(1);
    setTimerProgress(0);
  };

  return (
    <section 
      id="leadership" 
      className="relative py-20 sm:py-28 bg-[#090514] text-white overflow-hidden scroll-mt-20"
      aria-label="Leadership & Team Organization"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── AMBIENT BACKGROUND GLOWS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[650px] h-[650px] bg-[#7b3fc7]/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-[#3b82f6]/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] bg-[#ff7a57]/8 rounded-full blur-[140px]" />
        <div className="absolute inset-0 ambient-grid opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ── SECTION HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1338] border border-purple-500/30 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md shadow-xs">
            <Users className="w-3.5 h-3.5 text-purple-300" />
            <span>LEADERSHIP &amp; TEAM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            The people behind{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#ff7a57]">
              every breakthrough.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-purple-200/80 font-normal leading-relaxed">
            Physicians, technologists, healthcare operators, and software engineers collaborating across continents to build healthcare technology that works in practice.
          </p>
        </div>

        {/* ── CAROUSEL CONTROLS BAR ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 sm:p-2.5 rounded-2xl bg-[#140c2c]/80 border border-white/10 backdrop-blur-xl mb-8 shadow-xl">
          
          {/* Slide Indicator Tabs */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {/* Tab 0: Executive */}
            <button
              onClick={() => { setActiveSlide(0); setTimerProgress(0); }}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeSlide === 0
                  ? 'bg-gradient-to-r from-[#7b3fc7] to-[#6366f1] text-white shadow-md'
                  : 'text-purple-200/70 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Executive Leadership</span>
              <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px] font-bold">7</span>
              
              {/* Active Tab Progress Indicator */}
              {activeSlide === 0 && !isPaused && !isHovered && (
                <div 
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-white/60 rounded-full transition-all duration-100" 
                  style={{ width: `${timerProgress}%` }}
                />
              )}
            </button>

            {/* Tab 1: Onsite Team */}
            <button
              onClick={() => { setActiveSlide(1); setTimerProgress(0); }}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeSlide === 1
                  ? 'bg-gradient-to-r from-[#7b3fc7] to-[#6366f1] text-white shadow-md'
                  : 'text-purple-200/70 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Onsite Team</span>
              <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px] font-bold">6</span>

              {/* Active Tab Progress Indicator */}
              {activeSlide === 1 && !isPaused && !isHovered && (
                <div 
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-white/60 rounded-full transition-all duration-100" 
                  style={{ width: `${timerProgress}%` }}
                />
              )}
            </button>

            {/* Tab 2 (Shown when Offshore active) */}
            {activeSlide === 2 && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff7a57] to-[#ec4899] text-white text-xs sm:text-sm font-semibold shadow-md animate-in fade-in duration-300">
                <Code2 className="w-3.5 h-3.5" />
                <span>Offshore Engineering &amp; Development</span>
                <span className="px-1.5 py-0.2 rounded-full bg-white/25 text-[10px] font-bold">10</span>
              </div>
            )}
          </div>

          {/* Steppers & Controls */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            {/* Offshore Return Shortcut if active */}
            {activeSlide === 2 ? (
              <button
                onClick={returnFromOffshore}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all shadow-sm"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Onsite</span>
              </button>
            ) : (
              <>
                {/* Play/Pause Toggle */}
                <button
                  onClick={() => setIsPaused((prev) => !prev)}
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-purple-200 hover:text-white transition-all"
                  title={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
                  aria-label={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                </button>

                {/* Previous Slide */}
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-purple-200 hover:text-white transition-all"
                  title="Previous slide"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Next Slide */}
                <button
                  onClick={handleNext}
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-purple-200 hover:text-white transition-all"
                  title="Next slide"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

        </div>

        {/* ── CAROUSEL SLIDES CONTAINER ── */}
        <div className="relative min-h-[580px]">
          <AnimatePresence mode="wait">
            
            {/* ══════════════════════════════════════════════════════════════
                SLIDE 1: EXECUTIVE LEADERSHIP (7 PROFILES)
                ══════════════════════════════════════════════════════════════ */}
            {activeSlide === 0 && (
              <motion.div
                key="slide-executive"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {/* Slide Subheader */}
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Executive Leadership
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-200/70 mt-0.5">
                      The leaders guiding Guardian’s vision, strategy, and clinical-operational alignment.
                    </p>
                  </div>
                  <div className="text-xs text-purple-300/80 font-medium bg-[#1e1338] px-3 py-1 rounded-full border border-purple-500/20 self-start sm:self-auto">
                    Slide 1 of 2 • Auto-rotates every 15s
                  </div>
                </div>

                {/* 7 Executive Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {executiveLeadership.map((member) => {
                    const RoleIcon = member.icon;
                    return (
                      <div
                        key={member.id}
                        className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-500/40 p-5 transition-all duration-300 flex flex-col justify-between shadow-lg"
                      >
                        <div>
                          {/* Avatar & Discipline Tag */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="relative shrink-0">
                              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#180f33] border-2 border-purple-400/30 group-hover:border-purple-400 transition-colors shadow-md">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                                  loading="lazy"
                                />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#181036] border border-purple-400/50 flex items-center justify-center text-purple-200 group-hover:bg-[#7b3fc7] group-hover:text-white transition-colors shadow-xs">
                                <RoleIcon className="w-3 h-3" />
                              </div>
                            </div>

                            <div className="min-w-0">
                              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full mb-1">
                                {member.discipline}
                              </span>
                              <h4 className="text-sm font-bold text-white group-hover:text-purple-200 transition-colors leading-tight">
                                {member.name}
                              </h4>
                              <p className="text-xs font-semibold text-purple-300/90 leading-tight mt-0.5">
                                {member.role}
                              </p>
                            </div>
                          </div>

                          {/* Credentials */}
                          <div className="text-[11px] text-purple-200/60 font-medium mb-3 pb-3 border-b border-white/[0.06] flex items-center gap-1.5">
                            <Award className="w-3 h-3 text-[#ff7a57] shrink-0" />
                            <span className="truncate">{member.credentials}</span>
                          </div>

                          {/* 2-Line Concise Bio */}
                          <p className="text-xs text-purple-200/75 leading-relaxed font-normal">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ══════════════════════════════════════════════════════════════
                SLIDE 2: ONSITE TEAM (6 PROFILES + OFFSHORE BUTTON)
                ══════════════════════════════════════════════════════════════ */}
            {activeSlide === 1 && (
              <motion.div
                key="slide-onsite"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {/* Slide Subheader */}
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Onsite Team
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-200/70 mt-0.5 max-w-3xl">
                      The team connecting Guardian’s technology with healthcare operations and business needs. Working closely with stakeholders, they guide technical direction, analyze requirements, and help ensure solutions meet real-world expectations.
                    </p>
                  </div>
                  <div className="text-xs text-purple-300/80 font-medium bg-[#1e1338] px-3 py-1 rounded-full border border-purple-500/20 self-start sm:self-auto shrink-0">
                    Slide 2 of 2 • Auto-rotates every 15s
                  </div>
                </div>

                {/* 6 Onsite Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                  {onsiteTeam.map((member) => {
                    const RoleIcon = member.icon;
                    return (
                      <div
                        key={member.id}
                        className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-500/40 p-5 transition-all duration-300 flex flex-col justify-between shadow-lg"
                      >
                        <div>
                          {/* Monogram Avatar & Domain Tag */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="relative shrink-0">
                              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.gradient} p-0.5 shadow-md`}>
                                <div className="w-full h-full rounded-2xl bg-[#130a2a] flex items-center justify-center font-bold text-base text-white tracking-wider">
                                  {member.initials}
                                </div>
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#181036] border border-purple-400/50 flex items-center justify-center text-purple-200 group-hover:bg-[#7b3fc7] group-hover:text-white transition-colors shadow-xs">
                                <RoleIcon className="w-3 h-3" />
                              </div>
                            </div>

                            <div className="min-w-0">
                              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full mb-1 truncate max-w-full">
                                {member.domain}
                              </span>
                              <h4 className="text-sm font-bold text-white group-hover:text-purple-200 transition-colors leading-tight">
                                {member.name}
                              </h4>
                              <p className="text-xs font-semibold text-purple-300/90 leading-tight mt-0.5">
                                {member.role}
                              </p>
                            </div>
                          </div>

                          {/* 2-Line Concise Bio */}
                          <p className="text-xs text-purple-200/75 leading-relaxed font-normal">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* ── BOTTOM-RIGHT OFFSHORE TEAM TRIGGER CALLOUT ── */}
                <div className="rounded-2xl bg-gradient-to-r from-[#1d1238] via-[#241347] to-[#1d1238] border border-purple-400/30 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                  <div className="flex items-center gap-3.5 text-center sm:text-left">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff7a57] to-[#ec4899] flex items-center justify-center text-white shrink-0 shadow-md">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        Looking for the core engineering powerhouse?
                      </h4>
                      <p className="text-xs text-purple-200/70 mt-0.5">
                        Explore Guardian’s Offshore Engineering &amp; Development Team building and maintaining our healthcare platform.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={openOffshoreView}
                    className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff7a57] via-[#ea580c] to-[#ff7a57] text-white text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg hover:shadow-[0_0_25px_rgba(255,122,87,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Explore Offshore Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ══════════════════════════════════════════════════════════════
                ON-DEMAND VIEW: OFFSHORE ENGINEERING & DEVELOPMENT TEAM (10)
                ══════════════════════════════════════════════════════════════ */}
            {activeSlide === 2 && (
              <motion.div
                key="slide-offshore"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Offshore Header with Back Button */}
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-500/20 pb-4 bg-purple-950/20 p-4 rounded-2xl border">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#ff7a57]/15 text-[#ff7a57] text-[10px] font-bold tracking-wider uppercase mb-1.5 border border-[#ff7a57]/30">
                      <Code2 className="w-3 h-3" />
                      <span>CORE ENGINEERING POWERHOUSE</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Offshore Engineering &amp; Development Team
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-200/80 mt-1 max-w-3xl leading-relaxed">
                      <strong className="text-white font-semibold">The team behind every Guardian application.</strong> From application architecture and software development to data engineering, testing, and deployment support, our offshore team builds and maintains the technology that powers Guardian’s healthcare platform.
                    </p>
                  </div>

                  <button
                    onClick={returnFromOffshore}
                    className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-semibold text-white transition-all shadow-md self-start sm:self-center"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Return to Onsite Team</span>
                  </button>
                </div>

                {/* 10 Offshore Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
                  {offshoreTeam.map((member) => {
                    const RoleIcon = member.icon;
                    return (
                      <div
                        key={member.id}
                        className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-400/50 p-4 transition-all duration-300 flex flex-col justify-between shadow-md"
                      >
                        <div>
                          {/* Monogram Avatar & Domain Tag */}
                          <div className="flex items-center gap-3 mb-3">
                            <div className="relative shrink-0">
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${member.gradient} p-0.5 shadow-sm`}>
                                <div className="w-full h-full rounded-xl bg-[#140b2a] flex items-center justify-center font-bold text-sm text-white">
                                  {member.initials}
                                </div>
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#181036] border border-purple-400/50 flex items-center justify-center text-purple-200 group-hover:bg-[#7b3fc7] group-hover:text-white transition-colors">
                                <RoleIcon className="w-2.5 h-2.5" />
                              </div>
                            </div>

                            <div className="min-w-0">
                              <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-200 transition-colors leading-tight truncate">
                                {member.name}
                              </h4>
                              <p className="text-[11px] font-semibold text-purple-300 leading-tight mt-0.5 truncate">
                                {member.role}
                              </p>
                              <span className="inline-block text-[9px] font-medium text-purple-200/60 uppercase tracking-wider truncate max-w-full">
                                {member.domain}
                              </span>
                            </div>
                          </div>

                          {/* 2-Line Bio */}
                          <p className="text-[11px] text-purple-200/75 leading-relaxed font-normal">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Return Button */}
                <div className="text-center pt-2">
                  <button
                    onClick={returnFromOffshore}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-semibold text-purple-200 hover:text-white transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Executive &amp; Onsite Carousel</span>
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* ── CONNECTING NARRATIVE BANNER: "One Team. Connected Expertise." ── */}
        <div className="rounded-3xl border border-white/10 bg-[#120a28]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl mt-12 sm:mt-16">
          
          {/* Left: Headline */}
          <div className="text-center lg:text-left shrink-0 max-w-xs">
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-300 mb-1 block">
              COLLABORATIVE DELIVERY MODEL
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
              One Team.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#ff7a57]">
                Connected Expertise.
              </span>
            </h3>
          </div>

          {/* Center: Connecting Message */}
          <div className="text-xs sm:text-sm text-purple-200/85 leading-relaxed text-center lg:text-left max-w-2xl border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8">
            <p className="mb-2">
              The onsite team connects healthcare needs, business priorities, and technical direction. The offshore engineering team turns those requirements into working software, developing and maintaining the applications and technology that power Guardian.
            </p>
            <p className="text-purple-300 font-medium">
              Together, they bring clinical understanding, engineering expertise, and product design into one coordinated development process.
            </p>
          </div>

          {/* Right: Closing Credential Badge */}
          <div className="shrink-0 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8 text-center lg:text-left w-full lg:w-auto">
            <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed font-semibold">
              Real people.<br />
              Real expertise.<br />
              A healthier tomorrow.
            </p>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#7b3fc7] to-[#ff7a57] mt-2 rounded-full mx-auto lg:mx-0" />
          </div>

        </div>

      </div>
    </section>
  );
}
