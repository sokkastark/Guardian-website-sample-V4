import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  FileText, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  HeartPulse,
  CheckCircle2, 
  Lock, 
  TrendingUp, 
  Workflow, 
  Target, 
  Database, 
  Layers, 
  Building2, 
  UserCheck, 
  Zap, 
  MapPin, 
  Award, 
  BarChart3, 
  DollarSign, 
  Share2, 
  FileCheck, 
  Bell 
} from 'lucide-react';
import { RibbonStepGrid } from '../components/common/RibbonStepCard';

export default function SolutionsPage() {
  const [activeProofTab, setActiveProofTab] = useState('executive');
  const location = useLocation();

  // Smooth hash scrolling for direct links and dropdown navigation
  useEffect(() => {
    if (location.hash) {
      const rawHash = location.hash.replace('#', '');
      const aliasMap = {
        'aco-value-based-care': 'aco-vbc',
        'aco': 'aco-vbc',
        'health-plans': 'health-plans',
        'payers': 'health-plans',
        'cin-provider-organizations': 'cin-providers',
        'cin': 'cin-providers',
        'providers': 'cin-providers',
        'care-management-teams': 'care-teams',
        'care-management': 'care-teams',
        'care-teams': 'care-teams'
      };
      const targetId = aliasMap[rawHash] || rawHash;

      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const headerOffset = 90;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = Math.max(0, elementPosition - headerOffset);
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  // Shared 5-Step Value Continuum Pathway (Guardian brand palette: purple, indigo, violet, warm orange, coral - ZERO green)
  const progressionSteps = [
    { 
      num: '01', 
      label: 'CONNECT', 
      title: 'EHR & Claims Ingestion',
      desc: 'Bring data together across multi-EHRs, claims feeds, HIE connections, and pharmacy feeds.',
      ribbonBg: 'bg-[#7b3fc7]',
      foldColor: '#5b21b6',
      numberColor: 'text-[#5b21b6]'
    },
    { 
      num: '02', 
      label: 'UNDERSTAND', 
      title: 'Longitudinal Context',
      desc: 'Synthesize raw feeds into longitudinal patient charts, risk stratification, and cohort registries.',
      ribbonBg: 'bg-[#4f46e5]',
      foldColor: '#3730a3',
      numberColor: 'text-[#3730a3]'
    },
    { 
      num: '03', 
      label: 'PRIORITIZE', 
      title: 'Risk & Gap Identification',
      desc: 'Surface rising-risk beneficiaries, HEDIS care gaps, and prospective CMS-HCC suspecting opportunities.',
      ribbonBg: 'bg-[#9333ea]',
      foldColor: '#6b21a8',
      numberColor: 'text-[#6b21a8]'
    },
    { 
      num: '04', 
      label: 'ACT', 
      title: 'Coordinated Workflows',
      desc: 'Equip multidisciplinary teams with automated task queues, care plans, and point-of-care alerts.',
      ribbonBg: 'bg-[#ea580c]',
      foldColor: '#9a3412',
      numberColor: 'text-[#9a3412]'
    },
    { 
      num: '05', 
      label: 'MEASURE', 
      title: 'Clinical & Financial Impact',
      desc: 'Track quality measure improvements, PMPM expenditure trends, and shared savings benchmarks.',
      ribbonBg: 'bg-[#ff7a57]',
      foldColor: '#c2410c',
      numberColor: 'text-[#c2410c]'
    }
  ];

  // Interactive Live Proof Application Interfaces
  const uiShowcase = [
    {
      id: 'executive',
      title: 'Executive Population Suite',
      subtitle: 'Value-Based Contract & Attribution Cockpit',
      desc: 'Executive cockpit synthesizing attributed beneficiary panels, PMPM expenditure trends, CMS CCLF feeds, and risk performance across multiple value-based contracts.',
      image: '/images/appliction images/Main Platform Dashboard.png',
      badge: 'ACO & Executive View',
      highlights: ['Beneficiary Attribution', 'PMPM Cost Trajectory', 'Cross-Payer Scorecards']
    },
    {
      id: 'pophealth',
      title: 'Cohort Risk & Utilization',
      subtitle: 'Risk Stratification & Registry Builder',
      desc: 'Multi-variable population health stratification surfacing high-utilizer patient panels, acute admission trends, and condition registries across primary care sites.',
      image: '/images/appliction images/ui-pop-health-analytics.png',
      badge: 'Health Plan Analytics',
      highlights: ['30-Day Readmission Risk', 'ED High-Utilizer Tagging', 'Chronic Disease Registries']
    },
    {
      id: 'caremgmt',
      title: 'Care Management Cockpit',
      subtitle: 'Multidisciplinary Worklists & Protocols',
      desc: 'Dedicated care coordination interface with 150+ standardized assessment instruments, personalized care plan builder, and real-time ADT event notifications.',
      image: '/images/appliction images/ui-care-management.png',
      badge: 'Care Team Workspace',
      highlights: ['150+ Assessment Scales', 'Personal Care Plan Builder', 'ADT Trigger Routing']
    },
    {
      id: 'referrals',
      title: 'Specialist Referral Dispatch',
      subtitle: 'Provider Geo-Mapping & Closed-Loop Tracking',
      desc: 'Clinically Integrated Network (CIN) specialist search directory, in-network geo-mapping, Direct Secure Messaging (DSM) integration, and closed-loop consult status tracking.',
      image: '/images/appliction images/ui-referral-manager.png',
      badge: 'CIN Provider Directory',
      highlights: ['Network Geo-Mapping', 'DSM Electronic Dispatch', 'Closed-Loop Loop Closure']
    }
  ];

  return (
    <div className="bg-white text-[#35304c] min-h-screen">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO (PANORAMIC CORPORATE HERO BANNER)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#0d1527] text-white overflow-hidden border-b border-[#1c1636]">
        
        {/* Full-Bleed Background Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img 
            src="/images/who-we-serve-doctor.jpg" 
            alt="Healthcare professionals using Guardian platform solutions" 
            className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/92 via-[#0d1527]/80 to-[#0d1527]/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1527]/85 via-transparent to-[#0d1527]" />
          
          {/* Ambient Lighting Accents (Brand Palette: Purple, Indigo, Coral - Zero Green) */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[450px] bg-[#7b3fc7]/25 blur-[140px] rounded-full" />
          <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-[#4f46e5]/20 blur-[130px] rounded-full" />
          <div className="absolute inset-0 ambient-grid opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>GUARDIAN HEALTHCARE SOLUTIONS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                Built for the work healthcare organizations <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">need to get done.</span>
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-2xl mb-8 font-normal">
                Guardian brings connected healthcare data, clinical intelligence, specialized technology, and operational services together to empower health plans, ACOs, CINs, and care management teams to move from fragmented insight to synchronized action.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/company?intent=demo#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0 group"
                >
                  <span>Request a Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ff7a57]" />
                </Link>

                <a
                  href="#continuum"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300 whitespace-nowrap shrink-0"
                >
                  <span>Explore Solution Areas</span>
                </a>
              </div>
            </motion.div>

            {/* Right Compact Floating Live Dashboard Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-5 hidden lg:block transform lg:scale-105 transition-transform duration-300"
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#7b3fc7]/40 via-[#4f46e5]/30 to-[#ff7a57]/20 rounded-3xl blur-2xl opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative rounded-2xl bg-[#1a1233]/95 border border-white/30 backdrop-blur-xl p-3 shadow-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-[#120b24] rounded-lg border-b border-white/15 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/90 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/90 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block" />
                      <span className="text-[10px] text-purple-200 font-mono ml-2">guardian.solutions</span>
                    </div>
                    <span className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#7b3fc7] text-white border border-purple-300/50 font-bold">
                      Enterprise Suite
                    </span>
                  </div>

                  <div className="relative rounded-md overflow-hidden bg-white border border-[#e9e4f0] shadow-md">
                    <img 
                      src="/images/appliction images/Main Platform Dashboard.png" 
                      alt="Guardian Population Health & Solutions Dashboard" 
                      className="w-full h-auto object-contain filter brightness-[1.04] contrast-[1.02]"
                    />
                  </div>

                  <p className="text-[11px] text-purple-200/75 text-center mt-2 leading-relaxed italic">
                    *Illustrative sample demonstration data. Module records and metrics are for demonstration purposes only.
                  </p>

                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-purple-200 font-mono px-1 font-medium">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57]" /> 4 Core Stakeholder Solutions
                    </span>
                    <span className="text-purple-300 font-bold">VBC & CIN Orchestration</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE HEALTHCARE REALITY & VALUE CONTINUUM (#continuum)
          ───────────────────────────────────────────────────────────── */}
      <section id="continuum" className="py-16 sm:py-24 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>THE HEALTHCARE REALITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
              Healthcare has no shortage of data. The challenge is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">turning it into action.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Healthcare teams manage risk, close care gaps, improve quality, coordinate care, and track financial performance—often across disconnected EHRs and manual spreadsheets. Guardian solutions bridge that gap with a connected 5-step pathway:
            </p>
          </div>

          {/* Infographic Connected 3D Folded Ribbon Pathway (Guardian Brand Palette) */}
          <div className="relative pt-2">
            <RibbonStepGrid steps={progressionSteps} />
          </div>

          {/* Quick-Jump Section Anchor Pills */}
          <div className="mt-10 pt-8 border-t border-[#e9e4f0] flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-mono font-bold uppercase tracking-wider text-[#716b89]">Explore Stakeholder Solutions:</span>
            <div className="flex flex-wrap items-center gap-2">
              <a href="#aco-vbc" className="px-3 py-1.5 rounded-full bg-white border border-[#e9e4f0] text-[#35304c] font-medium hover:border-[#7b3fc7] hover:text-[#7b3fc7] transition-colors">
                01. ACO & Value-Based Care
              </a>
              <a href="#health-plans" className="px-3 py-1.5 rounded-full bg-white border border-[#e9e4f0] text-[#35304c] font-medium hover:border-[#4f46e5] hover:text-[#4f46e5] transition-colors">
                02. Health Plans & Payers
              </a>
              <a href="#cin-providers" className="px-3 py-1.5 rounded-full bg-white border border-[#e9e4f0] text-[#35304c] font-medium hover:border-[#9333ea] hover:text-[#9333ea] transition-colors">
                03. CIN & Provider Orgs
              </a>
              <a href="#care-teams" className="px-3 py-1.5 rounded-full bg-white border border-[#e9e4f0] text-[#35304c] font-medium hover:border-[#ea580c] hover:text-[#ea580c] transition-colors">
                04. Care Management Teams
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: 01 / ACO & VALUE-BASED CARE (#aco-vbc)
          ───────────────────────────────────────────────────────────── */}
      <section id="aco-vbc" className="py-16 sm:py-24 bg-white border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Header Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#7b3fc7]/10 text-[#7b3fc7] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>01 / ACO & VALUE-BASED CARE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                Maximize shared savings and risk performance across <span className="text-[#7b3fc7]">value-based contracts.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                Accountable Care Organizations face the dual pressure of controlling total cost of care while achieving stringent quality scores. Guardian consolidates CMS CCLF and BCDA feeds with clinical EHR records to give ACO leadership complete visibility into attributed panels, baseline expenditure trends, and medical loss ratios.
              </p>
              
              <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#7b3fc7]" />
                  <span>Contract Financial Analytics</span>
                </h4>
                <p className="text-xs text-[#524b6b] leading-relaxed">
                  Monitors Per Member Per Month (PMPM) and Per Member Per Year (PMPY) expenditure trends against benchmark targets to track financial performance across risk-bearing arrangements.
                </p>
              </div>

              <Link
                to="/platform/population-health"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#7b3fc7] hover:text-[#5b21b6] transition-colors group"
              >
                <span>Explore Population Health in Platform</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 4 Capability Cards Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">CCLF & BCDA Attribution Analytics</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Automated ingestion of CMS CCLF files and BCDA FHIR APIs for accurate beneficiary roster matching and primary care attribution across network practices.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">PMPM / PMPY Cost Tracking</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Continuous expenditure tracking across inpatient, outpatient, and pharmacy claims categories to identify cost drivers and shared savings opportunities.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                    <Target className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">MSSP Quality Measure Management</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Continuous monitoring of Medicare Shared Savings Program (MSSP) quality metrics, screening gaps, and point-of-care clinician alerts during encounters.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                    <Bell className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">High-Cost Utilization & ADT Alerts</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Real-time hospital admission, discharge, and transfer alerts paired with 30-day post-discharge transition tracking to curb preventable readmissions.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: 02 / HEALTH PLANS & PAYERS (#health-plans)
          ───────────────────────────────────────────────────────────── */}
      <section id="health-plans" className="py-16 sm:py-24 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Header Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#4f46e5]/10 text-[#4f46e5] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>02 / HEALTH PLANS & PAYERS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                Drive HEDIS Star ratings and compliant risk adjustment <span className="text-[#4f46e5]">at scale.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                Medicare Advantage and commercial health plans must coordinate quality closure with accurate, audit-ready clinical documentation. Guardian links plan claims feeds with clinical EHR notes to automate care gap surveillance, monitor Star Ratings, and support compliant CMS-HCC risk adjustment under V24 and V28 models.
              </p>
              
              <div className="p-4 rounded-xl bg-white border border-[#e9e4f0] mb-6 shadow-2xs">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#4f46e5]" />
                  <span>Dual-Engine Suspecting & Quality</span>
                </h4>
                <p className="text-xs text-[#524b6b] leading-relaxed">
                  Evaluates historical encounter records and clinical narrative notes across CMS-HCC V24 & V28 models, surfacing prospective recapture opportunities with verbatim source citations.
                </p>
              </div>

              <Link
                to="/platform/risk-adjustment"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#4f46e5] hover:text-[#3730a3] transition-colors group"
              >
                <span>Explore Risk Adjustment in Platform</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 4 Capability Cards Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                    <Award className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">CMS Star Ratings & HEDIS Surveillance</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Year-round tracking of NCQA HEDIS quality measures and projected CMS Star Ratings performance across Medicare Advantage and commercial plan books.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Dual-Engine CMS-HCC V24 & V28 Models</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Calculates prospective RAF scores concurrently under legacy V24 and current V28 models, identifying documentation gaps with sentence-level citations.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Provider Network Scorecards</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Shares objective quality performance scorecards, open care gap rosters, and documentation accuracy indicators with contracted provider networks.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                    <Database className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Claims & Clinical Data Integration</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Ingests 837 claims, 835 remittances, pharmacy encounter files, and multi-EHR clinical feeds into a unified member database with Master Patient Indexing.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: 03 / CIN & PROVIDER ORGANIZATIONS (#cin-providers)
          ───────────────────────────────────────────────────────────── */}
      <section id="cin-providers" className="py-16 sm:py-24 bg-white border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Header Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#9333ea]/10 text-[#9333ea] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <Building2 className="w-3.5 h-3.5" />
                <span>03 / CLINICALLY INTEGRATED NETWORKS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                Enable clinical integration, specialist alignment, and <span className="text-[#9333ea]">network retention.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                Clinically Integrated Networks (CINs) bring independent and employed medical groups together to negotiate risk contracts and coordinate patient care. Guardian links heterogeneous EMR systems across participant sites, providing a unified Patient Master Chart and closed-loop specialist referral routing.
              </p>
              
              <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-2 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-[#9333ea]" />
                  <span>Closed-Loop Referral Coordination</span>
                </h4>
                <p className="text-xs text-[#524b6b] leading-relaxed">
                  Enables primary care providers to locate in-network specialists by specialty and zip code, dispatch Direct Secure Messaging (DSM) referrals, and automatically file consult notes back to the chart.
                </p>
              </div>

              <Link
                to="/platform/referral-management"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#9333ea] hover:text-[#6b21a8] transition-colors group"
              >
                <span>Explore Referral Management in Platform</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 4 Capability Cards Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#9333ea]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#9333ea] flex items-center justify-center mb-3 shadow-2xs">
                    <Database className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Multi-Practice EMR Connectivity</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Connects disparate ambulatory EMRs (Epic, Athena, eCW, NextGen) into a single network infrastructure while maintaining tenant isolation between practice sites.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#9333ea]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#9333ea] flex items-center justify-center mb-3 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Specialist Geo-Mapping Directory</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Interactive provider geo-mapping and taxonomy search enabling PCPs to locate in-network specialists filtered by clinical subspecialty, accepted insurances, and distance.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#9333ea]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#9333ea] flex items-center justify-center mb-3 shadow-2xs">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Direct Secure Messaging (DSM)</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Automated electronic referral creation via native Direct Secure Messaging addresses, attaching clinical summaries, progress notes, and lab PDFs.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#9333ea]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#9333ea] flex items-center justify-center mb-3 shadow-2xs">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Closed-Loop Consult Tracking</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Real-time status tracking from order creation through specialist appointment completion, automatically filing consultation notes in Patient 360 to close loops.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: 04 / CARE MANAGEMENT TEAMS (#care-teams)
          ───────────────────────────────────────────────────────────── */}
      <section id="care-teams" className="py-16 sm:py-24 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Header Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ea580c]/10 text-[#ea580c] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <HeartPulse className="w-3.5 h-3.5" />
                <span>04 / CARE MANAGEMENT TEAMS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                Supercharge care team productivity, patient engagement, and <span className="text-[#ea580c]">outreach.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                Care managers and clinical navigators are the heartbeat of value-based healthcare delivery. Guardian eliminates manual spreadsheet tracking by centralizing real-time ADT event queues, validated assessment scales, and individualized care plans into a single interdisciplinary workspace.
              </p>
              
              <div className="p-4 rounded-xl bg-white border border-[#e9e4f0] mb-6 shadow-2xs">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-2 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#ea580c]" />
                  <span>Program Protocol Automation</span>
                </h4>
                <p className="text-xs text-[#524b6b] leading-relaxed">
                  Automated enrollment qualification and intervention scheduling supporting Chronic Care Management (CCM), Transitional Care Management (TCM), and Remote Patient Monitoring (RPM).
                </p>
              </div>

              <Link
                to="/platform/care-management"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#ea580c] hover:text-[#9a3412] transition-colors group"
              >
                <span>Explore Care Management in Platform</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 4 Capability Cards Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                    <Bell className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Real-Time ADT Queue Prioritization</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Emergency and inpatient ADT alerts route unassigned attributed patients directly into clinical queues, prioritized dynamically by clinical risk tier.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                    <Award className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">150+ Standardized Assessment Scales</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Extensive library of validated clinical, behavioral, and SDoH scales (e.g. PHQ-9, GAD-7, PRAPARE, Katz ADL) with automated longitudinal scoring.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Personal Care Plan Builder</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Interactive care plan construction supporting patient-centered measurable goals, barrier identification, intervention schedules, and progress tracking.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Interdisciplinary Care Workspaces</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Shared workspaces connecting nurses, care coordinators, and account managers with role-based task delegation and multi-channel patient outreach logging.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: LIVE SOLUTION PROOF (#proof)
          ───────────────────────────────────────────────────────────── */}
      <section id="proof" className="py-16 sm:py-24 bg-white border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>LIVE APPLICATION PROOF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Genuine platform interfaces <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">powering daily healthcare delivery.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Explore how Guardian’s solution modules deliver actionable insights directly into executive, analytic, clinical, and network workflows:
            </p>
          </div>

          {/* Interactive Capability Showcase Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Selector Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {uiShowcase.map((item) => {
                const isActive = activeProofTab === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveProofTab(item.id)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'bg-white border-[#7b3fc7] border-l-4 border-l-[#7b3fc7] shadow-lg -translate-x-1 ring-1 ring-[#7b3fc7]/15' 
                        : 'bg-[#faf8fd]/80 border-[#e9e4f0] hover:bg-white hover:border-[#7b3fc7]/40 hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#7b3fc7] animate-pulse" />
                        )}
                        <h3 className={`text-base font-extrabold ${isActive ? 'text-[#7b3fc7]' : 'text-[#1c1636]'}`}>
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#716b89] uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#524b6b] leading-relaxed mb-3 font-normal">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.highlights.map((h, i) => (
                        <span 
                          key={i} 
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded border transition-colors ${
                            isActive 
                              ? 'bg-[#f2ecf9] text-[#7b3fc7] border-[#7b3fc7]/30' 
                              : 'bg-white text-[#524b6b] border-gray-200'
                          }`}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Genuine Screenshot Viewport (Stitched to Top) */}
            <div className="lg:col-span-7 lg:sticky lg:top-24 self-start">
              <div className="relative rounded-2xl bg-[#1c1636] p-3.5 border border-[#2e1065] shadow-2xl overflow-hidden transition-all duration-300">
                {/* Application Window Top Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-xl border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block" />
                    <span className="text-[11px] text-purple-200 font-mono ml-2 font-semibold truncate max-w-[200px] sm:max-w-none">
                      {uiShowcase.find(m => m.id === activeProofTab)?.subtitle}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#7b3fc7] text-white font-medium">
                    Verified Application UI
                  </span>
                </div>

                {/* Genuine Product Image Viewport */}
                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0] shadow-inner">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeProofTab}
                      src={uiShowcase.find(m => m.id === activeProofTab)?.image}
                      alt={`${uiShowcase.find(m => m.id === activeProofTab)?.title} Platform Interface Demonstration`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="w-full h-auto object-contain max-h-[500px] block"
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* Required Technical Demonstration Disclaimer */}
              <p className="text-xs text-[#716b89] leading-relaxed italic text-right mt-2.5">
                *Illustrative sample demonstration data. Module records and metrics are for demonstration purposes only.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: FINAL EXECUTIVE CTA (#contact)
          ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-[#faf8fd] to-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#1c1636] via-[#2d1b54] to-[#0d1527] text-white shadow-2xl relative overflow-hidden border border-white/10">
            
            {/* Ambient Lighting (Guardian Brand Palette - Zero Green) */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7b3fc7]/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4f46e5]/25 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>TRANSFORM VBC OPERATIONS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                Turn complex healthcare data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">decisive clinical action.</span>
              </h2>

              <p className="text-sm sm:text-base text-purple-100/90 mb-8 leading-relaxed font-normal">
                Discover how Guardian helps your health plan, ACO, CIN, or care management team connect disparate records, empower frontline providers, and deliver measurable performance outcomes.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/company?intent=demo#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7b3fc7] text-white font-semibold text-xs sm:text-sm hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <span>Request a Custom Demo</span>
                  <ArrowRight className="w-4 h-4 text-[#ff7a57]" />
                </Link>
                
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-xs sm:text-sm hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300"
                >
                  <span>Explore the Platform</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
