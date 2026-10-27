import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  Server, 
  UserCheck, 
  Eye, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Shield, 
  Sparkles,
  Layers,
  Database,
  Play,
  Pause
} from 'lucide-react';
import { RibbonStepGrid } from '../common/RibbonStepCard';

const securitySlides = [
  {
    id: 'frameworks',
    number: '01',
    tabTitle: 'Framework Alignment',
    badge: 'SECURITY & GOVERNANCE',
    title: 'Healthcare Framework & Regulatory Alignment',
    description: 'Guardian’s platform architecture is engineered to uphold rigorous healthcare privacy, security controls, and standardized clinical exchange protocols.',
    icon: ShieldCheck,
    accentColor: 'from-[#059669] to-[#10b981]',
    badgeBg: 'bg-[#10b981]/10 text-[#059669] border-[#10b981]/25',
    items: [
      {
        title: 'HIPAA Privacy & Security Safeguards',
        desc: 'Comprehensive administrative, physical, and technical controls aligned with HIPAA Privacy and Security Rules governing all Protected Health Information (PHI).'
      },
      {
        title: 'CMS MIPS Quality Registry Architecture',
        desc: 'Infrastructure designed to support official CMS MIPS performance measure calculation, clinical data aggregation, and registry submission requirements.'
      },
      {
        title: 'Interoperability Standards Alignment',
        desc: 'National data exchange interoperability supporting CareQuality and eHealth Exchange protocols, FHIR R4 APIs, and HL7 v2.x clinical feeds.'
      },
      {
        title: 'HITRUST & SOC 2 Control Objectives',
        desc: 'System architecture structured around HITRUST Common Security Framework (CSF) baseline controls and SOC 2 Type II trust criteria for data integrity.'
      }
    ],
    verifiedNote: 'Controls engineered to healthcare specifications. Formal third-party attestation status is verified annually per compliance governance.'
  },
  {
    id: 'encryption',
    number: '02',
    tabTitle: 'Data Protection & Encryption',
    badge: 'CRYPTOGRAPHIC DEFENSE',
    title: 'End-to-End Encryption & Cryptographic Protection',
    description: 'Multi-layer cryptographic protections safeguard patient health records across every stage of the data lifecycle, from transit to storage.',
    icon: Lock,
    accentColor: 'from-[#7b3fc7] to-[#9333ea]',
    badgeBg: 'bg-[#7b3fc7]/10 text-[#7b3fc7] border-[#7b3fc7]/25',
    items: [
      {
        title: 'AES-256 Encryption at Rest',
        desc: 'Standardized AES-256 encryption protects stored patient records, operational databases, and analytical partitions at rest.'
      },
      {
        title: 'Encrypted Data in Transit',
        desc: 'Industry-standard Transport Layer Security (TLS) safeguards API calls, ADT feed ingestion, and user browser sessions from interception.'
      },
      {
        title: 'Cryptographic Key Management',
        desc: 'Dedicated key separation practices and automated rotation protocols isolate cryptographic access across clinical tenant databases.'
      },
      {
        title: 'Automated PHI De-Identification',
        desc: 'Automated redaction pipelines aligned with HIPAA Safe Harbor de-identification standards protect data used for analytics and benchmarking.'
      }
    ],
    verifiedNote: 'Encryption algorithms and cipher suites follow established enterprise healthcare data protection practices.'
  },
  {
    id: 'isolation',
    number: '03',
    tabTitle: 'Tenant Isolation & Access Control',
    badge: 'ACCESS & GOVERNANCE',
    title: 'Logical Tenant Isolation & Granular Identity Control',
    description: 'Structural boundaries and granular identity verification prevent cross-organizational data exposure and enforce need-to-know access.',
    icon: UserCheck,
    accentColor: 'from-[#4f46e5] to-[#6366f1]',
    badgeBg: 'bg-[#4f46e5]/10 text-[#4f46e5] border-[#4f46e5]/25',
    items: [
      {
        title: 'Multi-Tenant Data Partitioning',
        desc: 'Logical boundary controls isolate records between health plans, ACOs, and CINs, preventing unauthorized cross-tenant data access.'
      },
      {
        title: 'Role-Based Access Control (RBAC)',
        desc: 'Granular role profiles ensure clinicians, care coordinators, risk coders, and administrators access only permissible patient charts and domains.'
      },
      {
        title: 'MFA & Enterprise SSO Integration',
        desc: 'Multi-Factor Authentication (MFA) and enterprise Single Sign-On (SSO) integration options for clinical identity management.'
      },
      {
        title: 'Comprehensive Compliance Audit Logging',
        desc: 'Time-stamped audit logs record queries, chart access, exports, and administrative actions for security governance and review.'
      }
    ],
    verifiedNote: 'Access policies and session management enforce zero-trust principles across clinical interfaces and backend services.'
  },
  {
    id: 'pipeline',
    number: '04',
    tabTitle: 'Secure Processing Pipeline',
    badge: 'PIPELINE ARCHITECTURE',
    title: '5-Stage Secure Healthcare Data Processing Pipeline',
    description: 'Every clinical feed, claims batch, and ADT alert traverses an isolated, validated data processing pathway before reaching frontline users.',
    icon: Database,
    accentColor: 'from-[#ff7a57] to-[#ea580c]',
    badgeBg: 'bg-[#ff7a57]/10 text-[#ea580c] border-[#ff7a57]/25',
    isPipeline: true,
    steps: [
      {
        num: '01',
        label: 'INGESTION',
        title: 'Secure Dropzone Ingestion',
        desc: 'Encrypted data streams (EHR, Claims, ADT) ingested with cryptographic checksum verification.',
        ribbonBg: 'bg-[#10b981]',
        foldColor: '#047857',
        numberColor: 'text-[#047857]'
      },
      {
        num: '02',
        label: 'ISOLATION',
        title: 'Multi-Tenant Partitioning',
        desc: 'Clinical records routed to organization-specific logical partitions with strict boundary controls.',
        ribbonBg: 'bg-[#0284c7]',
        foldColor: '#0369a1',
        numberColor: 'text-[#0369a1]'
      },
      {
        num: '03',
        label: 'ACCESS',
        title: 'Identity & RBAC Verification',
        desc: 'SSO and user authentication verify role permissions before rendering patient master charts.',
        ribbonBg: 'bg-[#7b3fc7]',
        foldColor: '#4c1d95',
        numberColor: 'text-[#4c1d95]'
      },
      {
        num: '04',
        label: 'AUDIT',
        title: 'Continuous Compliance Logging',
        desc: 'Chart reads, searches, and care plan updates recorded to compliance audit logs.',
        ribbonBg: 'bg-[#f97316]',
        foldColor: '#c2410c',
        numberColor: 'text-[#c2410c]'
      },
      {
        num: '05',
        label: 'GOVERNANCE',
        title: 'Clinical Data Quality Control',
        desc: 'Standardized CMS MIPS calculation and interoperable CareQuality exchange under strict governance.',
        ribbonBg: 'bg-[#ec4899]',
        foldColor: '#be185d',
        numberColor: 'text-[#be185d]'
      }
    ],
    verifiedNote: 'Pipeline operations maintain continuous automated integrity checking across all stages.'
  }
];

export default function SecurityTrustCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const currentSlide = securitySlides[currentIndex];
  const Icon = currentSlide.icon;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % securitySlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + securitySlides.length) % securitySlides.length);
  }, []);

  const goToSlide = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Auto-rotation: 10 seconds per slide (pauses on user hover or manual pause)
  useEffect(() => {
    if (isPaused || isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % securitySlides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [isPaused, isHovered, currentIndex]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <div className="w-full">
      {/* ── Top Slide Tabs Bar ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#e9e4f0]">
        <div className="flex flex-wrap items-center gap-2">
          {securitySlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              className={`relative overflow-hidden px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                idx === currentIndex
                  ? 'bg-[#1c1636] text-white shadow-sm'
                  : 'bg-[#faf8fd] text-[#524b6b] hover:text-[#1c1636] hover:bg-[#ede8f5] border border-[#e5deef]'
              }`}
              aria-label={`Go to slide ${idx + 1}: ${slide.tabTitle}`}
              aria-selected={idx === currentIndex}
              role="tab"
            >
              <span className="font-mono text-[10px] opacity-75">{slide.number}</span>
              <span>{slide.tabTitle}</span>

              {/* 10s Animated Progress Timer Bar on Active Tab */}
              {idx === currentIndex && !isPaused && !isHovered && (
                <motion.div
                  key={`timer-tab-${currentIndex}`}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 10, ease: 'linear' }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#10b981] via-[#7b3fc7] to-[#ff7a57]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Carousel Controls: Counter, Pause/Play, Prev, Next */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-xs font-bold text-[#8e8a9f] mr-1">
            0{currentIndex + 1} / 0{securitySlides.length}
          </span>
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="w-9 h-9 rounded-full bg-white border border-[#e1e1e5] hover:border-[#7b3fc7] text-[#1c1636] hover:text-[#7b3fc7] flex items-center justify-center transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95"
            aria-label={isPaused ? "Resume auto rotation" : "Pause auto rotation"}
            title={isPaused ? "Resume auto rotation (10s)" : "Pause auto rotation"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 fill-current ml-0.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={prevSlide}
            className="w-9 h-9 rounded-full bg-white border border-[#e1e1e5] hover:border-[#7b3fc7] text-[#1c1636] hover:text-[#7b3fc7] flex items-center justify-center transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95"
            aria-label="Previous security topic"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="w-9 h-9 rounded-full bg-white border border-[#e1e1e5] hover:border-[#7b3fc7] text-[#1c1636] hover:text-[#7b3fc7] flex items-center justify-center transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95"
            aria-label="Next security topic"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Animated Slide Deck (Pauses auto-rotation on hover) ── */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden min-h-[460px] rounded-3xl bg-gradient-to-br from-[#120b24] via-[#1a1233] to-[#241744] text-white p-6 sm:p-10 border border-white/15 shadow-2xl"
      >
        {/* Background glow illumination */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7b3fc7]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#10b981]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 ambient-grid opacity-10 pointer-events-none" />

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative z-10"
          >
            {/* Header of Active Slide */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-purple-200 text-[11px] font-semibold tracking-wider uppercase mb-3 backdrop-blur-md">
                  <Icon className="w-3.5 h-3.5 text-[#ff7a57]" />
                  <span>{currentSlide.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {currentSlide.title}
                </h3>
              </div>
              <span className="font-mono text-xs font-bold text-purple-300 bg-white/10 px-3 py-1 rounded-full border border-white/15 self-start sm:self-auto">
                TOPIC 0{currentIndex + 1} OF 0{securitySlides.length}
              </span>
            </div>

            <p className="text-sm sm:text-base text-purple-100/90 max-w-3xl mb-8 leading-relaxed font-normal">
              {currentSlide.description}
            </p>

            {/* Slide Content: Standard 4-Card Grid or Pipeline */}
            {currentSlide.isPipeline ? (
              <div className="pt-2">
                <RibbonStepGrid steps={currentSlide.steps} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {currentSlide.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 sm:p-6 rounded-2xl bg-white/8 hover:bg-white/12 border border-white/15 backdrop-blur-md transition-all duration-300 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#7b3fc7]/40 border border-[#7b3fc7]/60 flex items-center justify-center shrink-0 mt-0.5 text-purple-200">
                        <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Verification Footer Note */}
            <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between text-xs text-purple-200/80 font-mono">
              <span className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#10b981]" />
                <span>{currentSlide.verifiedNote}</span>
              </span>
              <span className="text-[11px] text-purple-300/70 hidden sm:inline">
                Use &larr; &rarr; arrows to navigate
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Slide Progress Dot Indicators ── */}
      <div className="flex items-center justify-center gap-2.5 mt-5">
        {securitySlides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(idx)}
            aria-label={`Jump to slide ${idx + 1}`}
            className={`relative overflow-hidden transition-all duration-300 cursor-pointer rounded-full ${
              idx === currentIndex
                ? 'w-10 h-2 bg-[#7b3fc7]'
                : 'w-2 h-2 bg-[#d1cadb] hover:bg-[#adabb7]'
            }`}
          >
            {idx === currentIndex && !isPaused && !isHovered && (
              <motion.div
                key={`dot-timer-${currentIndex}`}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 10, ease: 'linear' }}
                className="absolute inset-0 bg-white/70"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
