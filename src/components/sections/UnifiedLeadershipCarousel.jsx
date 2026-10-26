import React, { useState, useEffect } from 'react';
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
  FileCheck2,
  Cpu,
  X,
  ArrowUpRight
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   1. EXECUTIVE LEADERSHIP CONSTELLATION (Slide 1)
   Precision coordinates in an 1100 x 760 coordinate system
   ───────────────────────────────────────────────────────────── */
export const executiveConstellation = [
  {
    id: 'sandeep-bajaj',
    name: 'Dr. Sandeep Bajaj, MD',
    role: 'Clinical Leadership',
    discipline: 'Clinical Vision & Governance',
    tagline: 'Bringing clinical insight to real-world solutions.',
    icon: Stethoscope,
    image: '/images/team/Sandeep Bajaj, MD.png',
    credentials: 'Board-Certified Interventional Cardiologist & Internist',
    experience: '35+ Years Healthcare Practice',
    bio: 'Board-certified cardiologist and healthcare operator leading Guardian’s mission to connect clinical insight with frontline action. Guides clinical governance and long-term strategic direction.',
    quote: 'Healthcare technology is only valuable when it serves the clinicians and patients living with its results.',
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
    discipline: 'Platform & Technology',
    tagline: 'Building the infrastructure for connected care.',
    icon: Monitor,
    image: '/images/team/Satya Thottappillil.png',
    credentials: 'Enterprise Healthtech Systems Architect',
    experience: '20+ Years Distributed Systems',
    bio: 'Specializes in distributed managed care systems and secure cloud pipelines. Directs technology architecture to make complex healthcare data intuitive at point-of-care.',
    quote: 'Architecture should make complex health data instantly intuitive at the bedside.',
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
    discipline: 'Clinical Systems & Medicare Advantage',
    tagline: 'Turning data into better outcomes.',
    icon: BarChart3,
    image: '/images/team/Richard Cairl.png',
    credentials: 'PhD Healthcare Systems Researcher',
    experience: '30+ Years Clinical Operations',
    bio: 'Focuses on scaling Medicare Advantage quality performance and structured care interventions. Bridges empirical data with patient-centered community outcomes.',
    quote: 'Sustainable healthcare relies on structured, empathetic community workflows.',
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
    discipline: 'Governance & Compliance',
    tagline: 'Ensuring regulatory integrity and trust.',
    icon: ShieldCheck,
    image: '/images/team/Vikram Saini.png',
    credentials: 'Physician & Healthcare Legal Counsel',
    experience: 'Regulatory Risk & Governance',
    bio: 'Guides healthcare regulatory compliance, HIPAA privacy, and risk contracts. Unites clinical understanding with rigorous legal governance.',
    quote: 'Uncompromising compliance protects both patient trust and organizational health.',
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
    discipline: 'Growth & Strategic Advisory',
    tagline: 'Expanding access to what’s possible.',
    icon: Compass,
    image: '/images/team/David Weavil.png',
    credentials: 'Diagnostics Industry Leader & Advisor',
    experience: '30+ Years Diagnostics Leadership',
    bio: 'Senior healthcare advisor guiding commercial market expansion and strategic partnerships. Helps bridge diagnostic innovation with clinical practice.',
    quote: 'True innovation bridges the gap between laboratory insight and clinic reality.',
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
    discipline: 'Finance & Fiscal Governance',
    tagline: 'Connecting clinical impact with fiscal sustainability.',
    icon: Users,
    image: '/images/team/Joseph Macau, CGMA.png',
    credentials: 'Chartered Global Management Accountant',
    experience: '25+ Years Healthcare Economics',
    bio: 'Oversees financial architecture, risk modeling, and capital allocation. Secures sustainable economics across risk-bearing healthcare partnerships.',
    quote: 'Aligning clinical performance with fiscal viability secures lasting care models.',
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
    discipline: 'Operations & Service Delivery',
    tagline: 'Ensuring operational discipline in healthtech delivery.',
    icon: Workflow,
    image: '/images/team/Ganesh Ramachandran.png',
    credentials: 'Cross-Functional Healthtech Operator',
    experience: '25+ Years Healthtech Interface',
    bio: 'Directs service delivery, operational discipline, and client success across provider networks. Ensures high-reliability execution across healthcare client deployments.',
    quote: 'Rigorous process discipline makes advanced healthcare software truly work.',
    // Middle-Left
    cx: 230,
    cy: 380,
    textSide: 'left',
    badgePos: 'bottom-right',
    spokeControl: { x: 380, y: 380 }
  }
];

/* ─────────────────────────────────────────────────────────────
   2. ONSITE TEAM (Slide 2)
   ───────────────────────────────────────────────────────────── */
export const onsiteTeam = [
  {
    id: 'jairo-rodriguez',
    name: 'Jairo R. Rodriguez',
    role: 'Senior Software Architect Engineer',
    domain: 'Software Architecture & Systems',
    image: '/images/team/onsite/Jairo Rodriguez.png',
    initials: 'JR',
    bio: 'Designs software architecture and technical solutions to support Guardian’s application ecosystem. Helps maintain scalable systems and translate complex requirements into practical engineering designs.'
  },
  {
    id: 'joshua-chumley',
    name: 'Joshua Chumley',
    role: 'Data Analyst',
    domain: 'Analytics & Healthcare Insights',
    image: '/images/team/onsite/Joshua Chumley.jpg',
    initials: 'JC',
    bio: 'Analyzes healthcare and operational data to uncover useful insights. Supports data-driven decisions through data interpretation, reporting, and analytical workflows.'
  },
  {
    id: 'jose-santos',
    name: 'Jose Santos',
    role: 'Senior Data Architect',
    domain: 'Data Architecture & Modeling',
    image: null,
    initials: 'JS',
    bio: 'Shapes data architecture to support reliable, consistent, and accessible information across systems. Helps establish the foundations for effective data integration and analytics.'
  },
  {
    id: 'jessica-lopez',
    name: 'Jessica Lopez',
    role: 'Director of Healthcare IT Operations',
    domain: 'IT Operations & Delivery',
    image: '/images/team/onsite/Jessica Lopez.jpg',
    initials: 'JL',
    bio: 'Coordinates healthcare IT operations and technology delivery. Bridges operational requirements and technical teams to support effective implementation and ongoing service delivery.'
  },
  {
    id: 'carmen-penna',
    name: 'Carmen Penna',
    role: 'Senior Business Analyst',
    domain: 'Business Analysis & Requirements',
    image: '/images/team/onsite/Carmen Penna.jpg',
    initials: 'CP',
    bio: 'Translates business and stakeholder requirements into clear functional specifications. Works across teams to align application capabilities with operational needs.'
  },
  {
    id: 'sheila-haley',
    name: 'Sheila R. Haley',
    role: 'Senior Data Management Analyst / Test Specialist',
    domain: 'Data Quality & Verification',
    image: '/images/team/onsite/Sheila Haley.jpg',
    initials: 'SH',
    bio: 'Supports data quality, management, and application testing. Helps identify inconsistencies and verify that solutions meet expected functional and data requirements.'
  }
];

/* ─────────────────────────────────────────────────────────────
   3. OFFSHORE ENGINEERING & DEVELOPMENT TEAM (On-Demand View)
   ───────────────────────────────────────────────────────────── */
export const offshoreTeam = [
  {
    id: 'raghavendra-tg',
    name: 'Raghavendra TG',
    role: 'Engineering Manager',
    domain: 'Engineering Leadership',
    image: '/images/team/offshore/Raghavendra TG.png',
    initials: 'RT',
    tagline: 'Engineering Leadership & Delivery',
    bio: 'Leads engineering execution across Guardian’s software development initiatives. Coordinates technical delivery and helps align engineering priorities with product and business objectives.'
  },
  {
    id: 'rajiv-jose',
    name: 'Rajiv Jose',
    role: 'Senior Technical Lead',
    domain: 'Technical Governance',
    image: '/images/team/offshore/Rajiv.png',
    initials: 'RJ',
    tagline: 'Quality & Architectural Oversight',
    bio: 'Guides technical implementation and supports engineering decisions across development projects. Helps maintain code quality, consistency, and reliable delivery.'
  },
  {
    id: 'abinash-mishra',
    name: 'Abinash Mishra',
    role: 'Senior Software Engineer',
    domain: 'Application Engineering',
    image: '/images/team/offshore/Abinash Mishra.png',
    initials: 'AM',
    tagline: 'Platform & Feature Development',
    bio: 'Develops and enhances Guardian’s software applications and platform capabilities. Contributes to implementing features, resolving technical issues, and improving application reliability.'
  },
  {
    id: 'balaji-devendiran',
    name: 'Balaji Devendiran',
    role: 'Senior SQL Developer',
    domain: 'Database & Data Operations',
    image: '/images/team/offshore/Balaji D.png',
    initials: 'BD',
    tagline: 'Query & Schema Optimization',
    bio: 'Develops and optimizes database queries, stored procedures, and data operations. Helps ensure efficient data access and reliable database performance.'
  },
  {
    id: 'yashwanth-kumar',
    name: 'Yashwanth Vittal Kumar',
    role: 'Software Developer',
    domain: 'Feature Engineering',
    image: '/images/team/offshore/Yashwanth V.png',
    initials: 'YK',
    tagline: 'Component & Systems Development',
    bio: 'Builds and maintains application features and software components. Contributes to implementing product requirements and improving existing functionality.'
  },
  {
    id: 'suhil-mushtaq',
    name: 'Suhil Mushtaq',
    role: 'Technical Lead',
    domain: 'Architecture & Development',
    image: '/images/team/offshore/Suhail Mushtaq.png',
    initials: 'SM',
    tagline: 'Full-Stack Architecture & Standards',
    bio: 'Coordinates technical implementation and guides development activities within the team. Helps resolve complex technical challenges and maintain consistent engineering standards.'
  },
  {
    id: 'nalamati-lakshmi',
    name: 'Nalamati Vara Lakshmi',
    role: 'Senior Tester Engineer',
    domain: 'Quality Assurance & Testing',
    image: null,
    initials: 'NL',
    tagline: 'Quality Assurance & Automated Testing',
    bio: 'Tests application functionality and verifies that software behaves as expected. Identifies defects and supports the delivery of dependable software releases.'
  },
  {
    id: 'apoorva-sm',
    name: 'Apoorva SM',
    role: 'Engineering Operation Coordinator',
    domain: 'Engineering Operations',
    image: null,
    initials: 'AS',
    tagline: 'Operational Execution & Tracking',
    bio: 'Coordinates engineering activities and supports the smooth execution of development operations. Helps maintain alignment across tasks, teams, and delivery processes.'
  },
  {
    id: 'darshan-umesha',
    name: 'Darshan Umesha',
    role: 'Junior Software Developer',
    domain: 'Application Development',
    image: '/images/team/offshore/Darshan U.png',
    initials: 'DU',
    tagline: 'Application Support & Enhancements',
    bio: 'Contributes to application development, feature implementation, and software maintenance. Works with the engineering team to improve existing functionality and deliver product enhancements.'
  },
  {
    id: 'sokkanathan-k',
    name: 'Sokkanathan K',
    role: 'Senior Designer',
    domain: 'UI/UX & Product Design',
    image: '/images/team/offshore/Sokkanathan K.png',
    initials: 'SK',
    tagline: 'Healthcare Experience & Interface Systems',
    bio: 'Designs user experiences and interfaces for Guardian’s healthcare applications. Collaborates with product and engineering teams to turn complex healthcare workflows into clear, usable experiences.'
  }
];

export default function UnifiedLeadershipCarousel() {
  // Current active slide: 0 = Executive Leadership (Radial Constellation), 1 = Onsite Team, 2 = Offshore Team (On Demand)
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [hoveredConstellationId, setHoveredConstellationId] = useState(null);
  const [focusedMember, setFocusedMember] = useState(null);

  // Auto-rotation interval: 12 seconds per slide (pauses when hovering on cards or paused via button)
  useEffect(() => {
    if (isPaused || isCardHovered) return;

    const intervalTime = activeSlide === 2 ? 15000 : 12000;

    const timer = setInterval(() => {
      setActiveSlide((prev) => {
        if (prev === 0) return 1;
        if (prev === 1) return 0;
        // If currently on offshore (2), auto-return to Executive (0)
        return 0;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeSlide, isPaused, isCardHovered]);

  const handleNext = () => {
    if (activeSlide === 2) {
      setActiveSlide(0);
    } else {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }
  };

  const handlePrev = () => {
    if (activeSlide === 2) {
      setActiveSlide(1);
    } else {
      setActiveSlide((prev) => (prev === 1 ? 0 : 1));
    }
  };

  const openOffshoreView = () => {
    setActiveSlide(2);
  };

  const returnFromOffshore = () => {
    setActiveSlide(1);
  };

  return (
    <section 
      id="leadership" 
      className="relative py-20 sm:py-28 bg-[#090514] text-white overflow-hidden scroll-mt-20"
      aria-label="Leadership & Team Organization"
    >
      {/* ── AMBIENT BACKGROUND GLOWS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[650px] h-[650px] bg-[#7b3fc7]/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-[#3b82f6]/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] bg-[#ff7a57]/8 rounded-full blur-[140px]" />
        <div className="absolute inset-0 ambient-grid opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ── SECTION HEADER (Left-aligned to match other sections) ── */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-left">
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
          
          {/* Slide Indicator Tabs (No scrollbar) */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Tab 0: Executive (Radial Constellation) */}
            <button
              onClick={() => setActiveSlide(0)}
              className={`relative overflow-hidden px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeSlide === 0
                  ? 'bg-gradient-to-r from-[#7b3fc7] to-[#6366f1] text-white shadow-md'
                  : 'text-purple-200/70 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Executive Leadership</span>
              
              {/* Smooth Animated Timer Bar */}
              {activeSlide === 0 && !isPaused && !isCardHovered && (
                <motion.div 
                  key="bar-0"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 12, ease: 'linear' }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/70" 
                />
              )}
            </button>

            {/* Tab 1: Onsite Team */}
            <button
              onClick={() => setActiveSlide(1)}
              className={`relative overflow-hidden px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeSlide === 1
                  ? 'bg-gradient-to-r from-[#7b3fc7] to-[#6366f1] text-white shadow-md'
                  : 'text-purple-200/70 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Onsite Team</span>

              {/* Smooth Animated Timer Bar */}
              {activeSlide === 1 && !isPaused && !isCardHovered && (
                <motion.div 
                  key="bar-1"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 12, ease: 'linear' }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/70" 
                />
              )}
            </button>

            {/* Tab 2 (Shown when Offshore active) */}
            {activeSlide === 2 && (
              <div className="relative overflow-hidden flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff7a57] to-[#ec4899] text-white text-xs sm:text-sm font-semibold shadow-md animate-in fade-in duration-300">
                <Code2 className="w-3.5 h-3.5" />
                <span>Offshore Engineering &amp; Development</span>

                {/* Smooth Animated Timer Bar for Offshore */}
                {!isPaused && !isCardHovered && (
                  <motion.div 
                    key="bar-2"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 15, ease: 'linear' }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/70" 
                  />
                )}
              </div>
            )}
          </div>

          {/* Steppers & Controls */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-purple-200 hover:text-white transition-all cursor-pointer"
              title={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
              aria-label={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>

            {/* Previous Slide */}
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-purple-200 hover:text-white transition-all cursor-pointer"
              title="Previous slide"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Slide */}
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-purple-200 hover:text-white transition-all cursor-pointer"
              title="Next slide"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* ── CAROUSEL SLIDES CONTAINER (Hovering on cards/constellation pauses auto-rotation) ── */}
        <div 
          className="relative min-h-[580px]"
          onMouseEnter={() => setIsCardHovered(true)}
          onMouseLeave={() => setIsCardHovered(false)}
        >
          <AnimatePresence mode="wait">
            
            {/* ══════════════════════════════════════════════════════════════
                SLIDE 1: EXECUTIVE LEADERSHIP (RADIAL CONSTELLATION)
                ══════════════════════════════════════════════════════════════ */}
            {activeSlide === 0 && (
              <motion.div
                key="slide-executive-constellation"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {/* Slide Subheader */}
                <div className="mb-6 border-b border-white/10 pb-4 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Executive Leadership
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-200/70 mt-0.5">
                    Click any leader to view full clinical and operational credentials.
                  </p>
                </div>

                {/* ── DESKTOP: RADIAL CONSTELLATION STAGE (1100 x 760) ── */}
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

                    {executiveConstellation.map((sat) => {
                      const isHovered = hoveredConstellationId === sat.id;
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

                        {/* Guardian Logo */}
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
                  {executiveConstellation.map((sat) => {
                    const isHovered = hoveredConstellationId === sat.id;
                    const IconComponent = sat.icon;

                    return (
                      <div
                        key={sat.id}
                        onMouseEnter={() => {
                          setHoveredConstellationId(sat.id);
                          setIsCardHovered(true);
                        }}
                        onMouseLeave={() => {
                          setHoveredConstellationId(null);
                          setIsCardHovered(false);
                        }}
                        onClick={() => setFocusedMember(sat)}
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
                            setFocusedMember(sat);
                          }
                        }}
                      >
                        {/* Avatar Circle at (cx, cy) */}
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

                          {/* Domain Badge */}
                          <div className={`absolute ${
                            sat.badgePos === 'bottom-left' ? 'bottom-0 left-0 -translate-x-1 translate-y-1' : 'bottom-0 right-0 translate-x-1 translate-y-1'
                          } w-7 h-7 rounded-full bg-[#181133] border border-purple-400/60 shadow-lg flex items-center justify-center text-purple-200 group-hover:bg-[#7b3fc7] group-hover:text-white transition-all duration-200 z-10`}>
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Text Information Block Anchored Outward from Avatar */}
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
                  {/* Center Badge */}
                  <div className="w-56 h-56 mx-auto rounded-full bg-gradient-to-b from-[#211545] to-[#0c071d] border-2 border-purple-400/50 p-6 flex flex-col items-center justify-center text-center shadow-2xl mb-8">
                    <div className="mb-2.5 flex items-center justify-center px-3">
                      <img src="/logos/logo-white.png" alt="Guardian" className="h-8 w-auto max-w-[150px] object-contain filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]" />
                    </div>
                    <p className="text-xs text-purple-200/90 font-medium">Healthcare Intelligence</p>
                    <p className="text-[11px] text-purple-200/60 mt-0.5">for a Healthier Tomorrow</p>
                  </div>

                  {/* 7 Team Member Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {executiveConstellation.map((sat) => {
                      const IconComponent = sat.icon;
                      return (
                        <button
                          key={`mobile-${sat.id}`}
                          onClick={() => setFocusedMember(sat)}
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
                <div className="mb-6 border-b border-white/10 pb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Onsite Team
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-200/70 mt-0.5 max-w-3xl">
                    The team connecting Guardian’s technology with healthcare operations and business needs. Working closely with stakeholders, they guide technical direction, analyze requirements, and help ensure solutions meet real-world expectations.
                  </p>
                </div>

                {/* 6 Onsite Capsule Cards (Dark Mode Pill Style) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mb-8">
                  {onsiteTeam.map((member) => (
                    <div
                      key={member.id}
                      onClick={() => setFocusedMember({
                        ...member,
                        discipline: member.domain,
                        experience: 'Onsite Team',
                        credentials: member.domain
                      })}
                      className="group cursor-pointer rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-400/50 backdrop-blur-xl shadow-lg hover:shadow-[0_12px_32px_rgba(123,63,199,0.25)] hover:-translate-y-0.5 transition-all duration-300 p-2.5 sm:p-3.5 flex items-center justify-between gap-3 sm:gap-4"
                    >
                      {/* Left Circular Portrait */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full shrink-0 overflow-hidden p-0.5 bg-gradient-to-tr from-[#7b3fc7] via-[#a855f7] to-[#ff7a57] shadow-md group-hover:scale-105 transition-transform duration-300">
                        <div className="w-full h-full rounded-full overflow-hidden bg-[#160d33] flex items-center justify-center">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-top rounded-full"
                              loading="lazy"
                            />
                          ) : (
                            <span className="font-extrabold text-base sm:text-lg text-white tracking-wider">
                              {member.initials}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Middle Content Body */}
                      <div className="flex-1 min-w-0 pr-1">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <h4 className="text-sm sm:text-base font-extrabold text-white group-hover:text-purple-200 transition-colors truncate">
                            {member.name}
                          </h4>
                          <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-[#ff7a57] bg-[#ff7a57]/15 border border-[#ff7a57]/30 px-2.5 py-0.5 rounded-full shrink-0">
                            {member.domain}
                          </span>
                        </div>

                        <p className="text-xs font-semibold text-purple-300 mb-1 truncate">
                          {member.role}
                        </p>

                        <p className="text-[11px] sm:text-xs text-purple-200/75 line-clamp-2 leading-relaxed font-normal">
                          {member.bio}
                        </p>
                      </div>

                      {/* Far Right Arrow Circle */}
                      <div className="hidden sm:flex w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 group-hover:bg-[#7b3fc7] group-hover:border-purple-400 text-purple-300 group-hover:text-white items-center justify-center shrink-0 mr-2 transition-all duration-200 shadow-sm">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
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
                {/* Offshore Header with Clean Return Button */}
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
                    className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-semibold text-white transition-all shadow-md self-start sm:self-center cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Return to Onsite Team</span>
                  </button>
                </div>

                {/* 10 Offshore Vertical Portrait Cards (Dark Mode) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                  {offshoreTeam.map((member) => (
                    <div
                      key={member.id}
                      onClick={() => setFocusedMember({
                        ...member,
                        discipline: member.domain,
                        experience: 'Offshore Engineering',
                        credentials: member.domain
                      })}
                      className="group cursor-pointer rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-400/50 backdrop-blur-xl shadow-lg hover:shadow-[0_16px_36px_rgba(123,63,199,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                    >
                      <div>
                        {/* Top Portrait Photo Container */}
                        <div className="relative w-full aspect-[4/4.5] overflow-hidden bg-gradient-to-t from-[#1b1435] via-[#2a1d4a] to-[#3a2768] flex items-center justify-center">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#241747] to-[#120a2a] p-4 text-center">
                              <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center font-extrabold text-2xl text-purple-200 shadow-md mb-2">
                                {member.initials}
                              </div>
                              <span className="text-[10px] text-purple-300 font-medium uppercase tracking-wider">{member.domain}</span>
                            </div>
                          )}

                          {/* Gradient bottom shadow overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                          {/* Top-Left Pill Badge */}
                          <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/45 backdrop-blur-md text-white/90 border border-white/20 text-[9px] font-bold uppercase tracking-wider z-10">
                            {member.id === 'raghavendra-tg' ? 'LEADERSHIP' : 'ENGINEERING'}
                          </span>

                          {/* Discipline Badge Overlaid at Bottom of Photo */}
                          <div className="absolute bottom-2.5 left-3.5 right-3.5 z-10">
                            <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#ff7a57] block truncate">
                              {member.domain}
                            </span>
                          </div>
                        </div>

                        {/* Card Content Body */}
                        <div className="p-4 sm:p-5">
                          <h4 className="text-sm sm:text-base font-extrabold text-white group-hover:text-purple-200 transition-colors leading-snug">
                            {member.name}
                          </h4>
                          <p className="text-xs font-semibold text-purple-300 mt-1 leading-tight">
                            {member.role}
                          </p>

                          <p className="text-[11px] sm:text-xs text-purple-200/75 mt-2 line-clamp-2 leading-relaxed font-normal">
                            {member.bio}
                          </p>
                        </div>
                      </div>

                      {/* Footer Callout */}
                      <div className="px-4 sm:px-5 pb-4 pt-0">
                        <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold text-purple-300">
                          <span className="text-[10.5px] text-purple-200/60 font-normal truncate max-w-[130px]">
                            {member.tagline}
                          </span>
                          <div className="w-6 h-6 rounded-full bg-white/[0.06] border border-white/10 group-hover:bg-[#7b3fc7] group-hover:text-white flex items-center justify-center transition-colors text-purple-300 shrink-0">
                            <ArrowUpRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

      {/* ── FOCUS STATE SPOTLIGHT MODAL (When clicking any leader in constellation) ── */}
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
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                {/* Large Portrait */}
                <div className="w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-t from-[#0c081a] to-white/10 border border-white/20 shrink-0 shadow-xl flex items-center justify-center">
                  {focusedMember.image ? (
                    <img
                      src={focusedMember.image}
                      alt={focusedMember.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#150c2e] font-extrabold text-4xl text-purple-200">
                      {focusedMember.initials}
                    </div>
                  )}
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

                  {/* Bio */}
                  <p className="text-sm text-purple-100/90 leading-relaxed font-normal">
                    {focusedMember.bio}
                  </p>

                  {/* Quote */}
                  {focusedMember.quote && (
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-xs sm:text-sm italic text-purple-100/85 font-serif leading-relaxed">
                        “{focusedMember.quote}”
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
