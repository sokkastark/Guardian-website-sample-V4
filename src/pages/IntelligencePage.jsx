import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  BrainCircuit, 
  Network, 
  FileText, 
  TrendingUp, 
  Workflow, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Eye, 
  Cpu, 
  Target, 
  UserCheck, 
  Activity,
  Zap,
  Database,
  FileCode,
  Search,
  FileSearch,
  Award,
  AlertTriangle,
  BarChart3,
  Bell,
  FileCheck,
  Share2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { RibbonStepGrid } from '../components/common/RibbonStepCard';

export default function IntelligencePage() {
  const [intelStage1Tab, setIntelStage1Tab] = useState(0);
  const [intelStage1Paused, setIntelStage1Paused] = useState(false);
  const [intelStage2Tab, setIntelStage2Tab] = useState(0);
  const [intelStage2Paused, setIntelStage2Paused] = useState(false);
  const [activeProofIdx, setActiveProofIdx] = useState(0);
  const [proofPaused, setProofPaused] = useState(false);
  const location = useLocation();

  // Auto 15-second carousel timer for Live Intelligence Proof (pauses on hover, resets on manual change)
  useEffect(() => {
    if (proofPaused) return;
    const timer = setInterval(() => {
      setActiveProofIdx((prev) => (prev + 1) % 4);
    }, 15000);
    return () => clearInterval(timer);
  }, [proofPaused, activeProofIdx]);

  // Auto 15-second timer for Carousel Stage 1 (Knowledge Graph, AI & NLP, Predictive Risk)
  useEffect(() => {
    if (intelStage1Paused) return;
    const timer = setInterval(() => {
      setIntelStage1Tab((prev) => (prev + 1) % 3);
    }, 15000);
    return () => clearInterval(timer);
  }, [intelStage1Paused, intelStage1Tab]);

  // Auto 15-second timer for Carousel Stage 2 (Intelligent Workflows, Human-in-the-Loop)
  useEffect(() => {
    if (intelStage2Paused) return;
    const timer = setInterval(() => {
      setIntelStage2Tab((prev) => (prev + 1) % 2);
    }, 15000);
    return () => clearInterval(timer);
  }, [intelStage2Paused, intelStage2Tab]);

  // Smooth hash scrolling for direct links and dropdown navigation
  useEffect(() => {
    if (location.hash) {
      const rawHash = location.hash.replace('#', '');
      const aliasMap = {
        'clinical-knowledge-graph': 'knowledge-graph',
        'ai': 'ai-nlp',
        'nlp': 'ai-nlp',
        'predictive': 'predictive-intelligence',
        'workflows': 'intelligent-workflows',
        'hitl': 'human-in-the-loop',
        'clinical-governance': 'governance'
      };
      const targetId = aliasMap[rawHash] || rawHash;

      // Automatically switch to the matching tab in Carousel Stage 1 or 2
      if (targetId === 'knowledge-graph') {
        setIntelStage1Tab(0);
      } else if (targetId === 'ai-nlp') {
        setIntelStage1Tab(1);
      } else if (targetId === 'predictive-intelligence') {
        setIntelStage1Tab(2);
      } else if (targetId === 'intelligent-workflows') {
        setIntelStage2Tab(0);
      } else if (targetId === 'human-in-the-loop') {
        setIntelStage2Tab(1);
      }

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
      }, 60);

      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  // Shared 5-stage Intelligence Continuum (Guardian brand palette: purple, indigo, violet, warm orange, coral - ZERO green)
  const continuumSteps = [
    {
      num: '01',
      label: 'KNOWLEDGE GRAPH',
      title: 'Semantic Data Mesh',
      desc: 'Link diagnoses, medications, labs, encounters, and social factors into a unified relational graph.',
      ribbonBg: 'bg-[#7b3fc7]',
      foldColor: '#5b21b6',
      numberColor: 'text-[#5b21b6]'
    },
    {
      num: '02',
      label: 'AI & NLP ENGINE',
      title: 'Clinical Document Extraction',
      desc: 'Extract clinical concepts, recognize contextual negations, and suspect risk conditions with source citations.',
      ribbonBg: 'bg-[#4f46e5]',
      foldColor: '#3730a3',
      numberColor: 'text-[#3730a3]'
    },
    {
      num: '03',
      label: 'PREDICTIVE RISK',
      title: 'Risk Stratification & Forecasting',
      desc: 'Identify 30-day readmission risk indicators, ED utilization trends, and prospective RAF score trajectories.',
      ribbonBg: 'bg-[#9333ea]',
      foldColor: '#6b21a8',
      numberColor: 'text-[#6b21a8]'
    },
    {
      num: '04',
      label: 'INTELLIGENT WORKFLOWS',
      title: 'Automated Action Dispatch',
      desc: 'Deliver point-of-care care gap notifications, evidence-based care plans, and automated task routing.',
      ribbonBg: 'bg-[#ea580c]',
      foldColor: '#9a3412',
      numberColor: 'text-[#9a3412]'
    },
    {
      num: '05',
      label: 'HUMAN-IN-THE-LOOP',
      title: 'Clinician Governance',
      desc: 'Keep care teams in complete control with transparent evidence citations and clinician validation cockpits.',
      ribbonBg: 'bg-[#ff7a57]',
      foldColor: '#c2410c',
      numberColor: 'text-[#c2410c]'
    }
  ];

  // Interactive Live Proof Application Interfaces
  const uiShowcase = [
    {
      id: 'risk-strat',
      title: 'AI Suspecting & Risk Stratification',
      subtitle: 'CMS-HCC Suspecting & Evidence Review',
      desc: 'Dual-engine CMS-HCC (V24 & V28) prospective suspecting dashboard displaying suspected chronic conditions alongside sentence-level chart note citations.',
      image: '/images/appliction images/ui-risk-stratification.png',
      badge: 'Risk Adjustment Cockpit',
      highlights: ['CMS-HCC V24 & V28 Suspecting', 'Sentence-Level Citations', 'Clinician Validation Workflow']
    },
    {
      id: 'quality-manager',
      title: 'Quality Care Gap Automation',
      subtitle: 'HEDIS & Measure Performance',
      desc: 'Point-of-care care gap identification and automated task routing to close preventive and chronic care gaps across attributed patient panels.',
      image: '/images/appliction images/ui-quality-manager.png',
      badge: 'Quality Cockpit',
      highlights: ['HEDIS Measure Tracking', 'Automated Care Gap Alerts', 'Closed-Loop Documentation']
    },
    {
      id: 'patient-360',
      title: 'Longitudinal Patient 360',
      subtitle: 'Unified Relational Graph Mesh',
      desc: 'Chronological timeline synthesizing multi-EHR clinical encounters, medical claims, pharmacy fills, lab trends, and social risk determinants into one master chart.',
      image: '/images/appliction images/ui-patient-360.png',
      badge: 'Semantic Graph View',
      highlights: ['Master Patient Index (MPI)', 'Cross-EHR Normalization', 'SDoH Risk Integration']
    },
    {
      id: 'referral-manager',
      title: 'Referral & Care Dispatch',
      subtitle: 'Interdisciplinary Task Routing',
      desc: 'Intelligent workflow routing directing transitions-of-care alerts, post-discharge follow-ups, and specialist referral coordination.',
      image: '/images/appliction images/ui-referral-manager.png',
      badge: 'Workflow Dispatch',
      highlights: ['ADT Trigger Response', 'Specialist Geo-Routing', 'Care Navigator Queues']
    }
  ];

  // Stage 1 Tab metadata (Knowledge Graph, AI & NLP, Predictive Risk)
  const intelStage1Tabs = [
    { id: 'knowledge-graph', badge: '01 / Knowledge Graph', title: 'Clinical Knowledge Graph & Semantic Data Mesh' },
    { id: 'ai-nlp', badge: '02 / AI & NLP Engine', title: 'Specialized Healthcare AI & Clinical NLP Engine' },
    { id: 'predictive-intelligence', badge: '03 / Predictive Intelligence', title: 'Predictive Intelligence & Risk Stratification' },
  ];

  // Stage 2 Tab metadata (Intelligent Workflows, Human-in-the-Loop)
  const intelStage2Tabs = [
    { id: 'intelligent-workflows', badge: '04 / Intelligent Workflows', title: 'Intelligent Workflows & Clinical Coordination' },
    { id: 'human-in-the-loop', badge: '05 / Human-in-the-Loop', title: 'Governed Human-in-the-Loop Architecture' },
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
            src="/images/people-technology-bg.jpg" 
            alt="Guardian Intelligence & Clinical Knowledge Mesh" 
            className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/92 via-[#0d1527]/80 to-[#0d1527]/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1527]/85 via-transparent to-[#0d1527]" />
          
          {/* Ambient Lighting Accents (Brand Palette: Purple, Indigo, Coral - Zero Green) */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[450px] bg-[#7b3fc7]/25 blur-[140px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#4f46e5]/20 blur-[130px] rounded-full" />
          <div className="absolute inset-0 ambient-grid opacity-25" />
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
                <BrainCircuit className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>GUARDIAN INTELLIGENCE SUITE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                Clinical context, predictive insight, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">intelligent workflows.</span>
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-2xl mb-8 font-normal">
                Guardian bridges the gap between raw healthcare records and clinical decisions. Our clinical knowledge graph, specialized NLP engine, predictive risk models, and human-in-the-loop architecture convert fragmented data into transparent, auditable clinical support.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/company?intent=demo#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0 group"
                >
                  <span>Request an AI Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ff7a57]" />
                </Link>

                <a
                  href="#continuum"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300 whitespace-nowrap shrink-0"
                >
                  <span>Explore Intelligence Continuum</span>
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
                      <span className="text-[10px] text-purple-200 font-mono ml-2">guardian.clinical-ai</span>
                    </div>
                    <span className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#7b3fc7] text-white border border-purple-300/50 font-bold">
                      Risk Adjustment & Suspecting
                    </span>
                  </div>

                  <div className="relative rounded-md overflow-hidden bg-white border border-[#e9e4f0] shadow-md">
                    <img 
                      src="/images/appliction images/ui-risk-stratification.png" 
                      alt="Guardian Intelligence & Predictive AI Engine Demonstration" 
                      className="w-full h-auto object-contain filter brightness-[1.04] contrast-[1.02]"
                    />
                  </div>

                  <p className="text-[11px] text-purple-200/75 text-center mt-2 leading-relaxed italic">
                    *Illustrative sample demonstration data. Module records and metrics are for demonstration purposes only.
                  </p>

                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-purple-200 font-mono px-1 font-medium">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57]" /> Human-in-the-Loop Governance
                    </span>
                    <span className="text-purple-300 font-bold">Auditable Evidence Trails</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE INTELLIGENCE CONTINUUM (SHARED 5-STAGE VISUAL)
          ───────────────────────────────────────────────────────────── */}
      <section id="continuum" className="py-16 sm:py-24 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>THE INTELLIGENCE CONTINUUM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
              From disconnected data to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">synchronized clinical action.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Guardian’s intelligence suite operates as an integrated five-stage continuum. Each capability builds directly upon the previous stage to deliver transparent, auditable decision support without black-box automation:
            </p>
          </div>

          {/* Connected 3D Folded Ribbon Pathway (Guardian Brand Palette) */}
          <div className="relative pt-2">
            <RibbonStepGrid steps={continuumSteps} />
          </div>


        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CAROUSEL STAGE 1: CLINICAL KNOWLEDGE & PREDICTIVE AI
          Contains Modules:
          - 01 / Clinical Knowledge Graph (#knowledge-graph)
          - 02 / Specialized Healthcare AI & NLP (#ai-nlp)
          - 03 / Predictive Intelligence & Risk Stratification (#predictive-intelligence)
          ───────────────────────────────────────────────────────────── */}
      <section 
        id="intel-stage-1" 
        onMouseEnter={() => setIntelStage1Paused(true)}
        onMouseLeave={() => setIntelStage1Paused(false)}
        className="py-16 sm:py-24 bg-white border-b border-[#e9e4f0] scroll-mt-24 relative"
      >
        {/* Invisible anchor target points for header dropdown links */}
        <div id="knowledge-graph" className="absolute top-0 left-0 -mt-24 pointer-events-none" />
        <div id="ai-nlp" className="absolute top-0 left-0 -mt-24 pointer-events-none" />
        <div id="predictive-intelligence" className="absolute top-0 left-0 -mt-24 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Carousel Stage Header & Controller */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-10 pb-6 border-b border-[#e9e4f0]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#7b3fc7]" />
                <span>INTELLIGENCE STAGE 01 • KNOWLEDGE MESH &amp; PREDICTIVE AI</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1c1636]">
                {intelStage1Tabs[intelStage1Tab].title}
              </h2>
            </div>

            {/* Stage Tabs & Slide Navigation */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* 15-second Auto-Change Visual Indicator */}
              <div 
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#faf8fd] border border-[#e5deee] text-[11px] font-mono text-[#716b89]"
                title={intelStage1Paused ? "Auto-play paused on hover" : "Auto-advancing every 15s"}
              >
                <Clock className="w-3 h-3 text-[#7b3fc7]" />
                <div className="w-12 h-1 bg-[#e5deee] rounded-full overflow-hidden">
                  <motion.div
                    key={`intel1-${intelStage1Tab}-${intelStage1Paused}`}
                    initial={{ width: '0%' }}
                    animate={{ width: intelStage1Paused ? '0%' : '100%' }}
                    transition={{ duration: intelStage1Paused ? 0 : 15, ease: 'linear' }}
                    className="h-full bg-[#7b3fc7] rounded-full"
                  />
                </div>
                <span>15s</span>
              </div>

              <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#faf8fd] border border-[#e5deee] gap-1 shadow-2xs">
                {intelStage1Tabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setIntelStage1Tab(idx)}
                    className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      intelStage1Tab === idx
                        ? 'bg-[#7b3fc7] text-white shadow-xs'
                        : 'text-[#524b6b] hover:text-[#1c1636] hover:bg-white'
                    }`}
                  >
                    {tab.badge}
                  </button>
                ))}
              </div>

              {/* Prev / Next Chevrons */}
              <div className="inline-flex items-center gap-1.5">
                <button
                  onClick={() => setIntelStage1Tab((prev) => (prev > 0 ? prev - 1 : intelStage1Tabs.length - 1))}
                  aria-label="Previous capability"
                  className="w-8 h-8 rounded-xl bg-[#faf8fd] border border-[#e5deee] hover:border-[#7b3fc7] text-[#524b6b] hover:text-[#7b3fc7] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-[#716b89] px-1">
                  {intelStage1Tab + 1}/{intelStage1Tabs.length}
                </span>
                <button
                  onClick={() => setIntelStage1Tab((prev) => (prev < intelStage1Tabs.length - 1 ? prev + 1 : 0))}
                  aria-label="Next capability"
                  className="w-8 h-8 rounded-xl bg-[#faf8fd] border border-[#e5deee] hover:border-[#7b3fc7] text-[#524b6b] hover:text-[#7b3fc7] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Slide Content */}
          <AnimatePresence mode="wait">
            {intelStage1Tab === 0 && (
              <motion.div
                key="intelStage1-0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                {/* Header Column */}
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#7b3fc7]/10 text-[#7b3fc7] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <Network className="w-3.5 h-3.5" />
                    <span>01 / CLINICAL KNOWLEDGE GRAPH</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Connect diagnoses, labs, Rx, and social factors into a <span className="text-[#7b3fc7]">unified relational graph.</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Disparate EHR systems, claims processors, and diagnostic feeds use incompatible coding schemas and fragmented patient records. The Clinical Knowledge Graph resolves these silos through probabilistic Master Patient Indexing (MPI) and terminology harmonization.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-2 flex items-center gap-2">
                      <Database className="w-4 h-4 text-[#7b3fc7]" />
                      <span>Semantic Normalization Standards</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Maps local hospital and clinical terms directly to national standards including ICD-10-CM, CPT/HCPCS, LOINC, and RxNorm to enable longitudinal cohort evaluation.
                    </p>
                  </div>

                  <Link
                    to="/platform/patient-360"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#7b3fc7] hover:text-[#5b21b6] transition-colors group"
                  >
                    <span>View Patient 360 Knowledge Mesh in Platform</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* 4 Capability Cards Grid */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <Search className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Master Patient Indexing (MPI)</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Probabilistic matching algorithms deduplicate patient identity records across multiple EHRs, labs, and health plan claims feeds into a single master chart.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <FileCode className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Standard Terminology Mapping</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Standardizes non-standard local lab codes and clinical terms to LOINC, RxNorm, and ICD-10-CM hierarchies for consistent downstream clinical reasoning.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <Activity className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Chronological Timeline Synthesis</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Synthesizes years of encounters, medication changes, and lab results into an interactive chronological timeline reflecting disease progression over time.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">SDoH Social Risk Factor Mesh</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Integrates PRAPARE assessments, ICD-10 Z-codes, and area-level social vulnerability indicators directly into the clinical relationship graph.
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {intelStage1Tab === 1 && (
              <motion.div
                key="intelStage1-1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                {/* Header Column */}
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#4f46e5]/10 text-[#4f46e5] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <BrainCircuit className="w-3.5 h-3.5" />
                    <span>02 / CLINICAL AI &amp; NLP ENGINE</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Extract clinical nuance from unstructured notes with <span className="text-[#4f46e5]">verified evidence trails.</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Up to 80% of critical healthcare documentation resides in unstructured physician progress notes, consult letters, and discharge summaries. Guardian’s clinical NLP engine extracts actionable suspecting insights while guarding against hallucination through contextual negation analysis.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-white border border-[#e9e4f0] mb-6 shadow-2xs">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-2 flex items-center gap-2">
                      <FileSearch className="w-4 h-4 text-[#4f46e5]" />
                      <span>Dual CMS-HCC &amp; HEDIS Suspecting</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Evaluates historical claims and clinical notes concurrently across CMS-HCC V24 and V28 models, surfacing potential uncaptured conditions and screening gaps for human review.
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
                        <FileText className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Unstructured Document Parsing</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Parses C-CDA narratives, physician progress notes, and scanned PDF diagnostic reports using specialized medical terminology tokenizers.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                        <Search className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Contextual Negation Detection</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Identifies clinical qualifiers, family history references, and negative assertions (e.g., "patient denies chest pain") to eliminate false suspecting alerts.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                        <Award className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Dual-Model CMS-HCC Suspecting</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Screens for prospective chronic condition risk flags under both CMS-HCC V24 and V28 models, ensuring complete documentation compliance during model transitions.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                        <FileSearch className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Sentence-Level Source Citations</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Attaches direct chart note text snippets, encounter dates, and page numbers to every suspecting recommendation for 100% auditable coder verification.
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {intelStage1Tab === 2 && (
              <motion.div
                key="intelStage1-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                {/* Header Column */}
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#9333ea]/10 text-[#9333ea] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>03 / PREDICTIVE RISK &amp; ANALYTICS</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Identify emerging clinical risk before <span className="text-[#9333ea]">acute escalation occurs.</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Predictive risk models evaluate multi-year claims trends, recent ADT hospital notifications, and lab marker trajectories to stratify attributed populations into actionable risk tiers—allowing clinical teams to intervene proactively.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#9333ea]" />
                      <span>Verified Risk Indicators</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Focuses on validated predictive indicators including 30-day post-discharge readmission probability, emergency department high-utilization patterns, and longitudinal RAF trajectory modeling.
                    </p>
                  </div>

                  <Link
                    to="/platform/risk-stratification"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#9333ea] hover:text-[#6b21a8] transition-colors group"
                  >
                    <span>View Risk Stratification in Platform</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* 4 Capability Cards Grid */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#9333ea]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#9333ea] flex items-center justify-center mb-3 shadow-2xs">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">30-Day Readmission Risk Indicators</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Evaluates post-discharge clinical markers, prior hospitalizations, and medication reconciliation gaps to identify patients benefiting from immediate TCM outreach.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#9333ea]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#9333ea] flex items-center justify-center mb-3 shadow-2xs">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">ED High-Utilizer Trend Identification</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Statistical models identify recurrent emergency department utilization patterns and ambulatory care-sensitive conditions to target care navigation resources.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#9333ea]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#9333ea] flex items-center justify-center mb-3 shadow-2xs">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Prospective RAF Score Trajectories</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Projects expected risk adjustment factor (RAF) changes over time based on historical condition recurrence and current clinical documentation completeness.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#9333ea]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#9333ea] flex items-center justify-center mb-3 shadow-2xs">
                        <Target className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Population Risk Tiering &amp; Registries</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Stratifies attributed beneficiary populations into High, Rising, Moderate, and Low Risk tiers, populating condition registries (CHF, COPD, Diabetes, CKD).
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CAROUSEL STAGE 2: WORKFLOW DISPATCH & CLINICAL GOVERNANCE
          Contains Modules:
          - 04 / Automated Workflow Dispatch (#intelligent-workflows)
          - 05 / Clinician Governance & Oversight (#human-in-the-loop)
          ───────────────────────────────────────────────────────────── */}
      <section 
        id="intel-stage-2" 
        onMouseEnter={() => setIntelStage2Paused(true)}
        onMouseLeave={() => setIntelStage2Paused(false)}
        className="py-16 sm:py-24 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24 relative"
      >
        {/* Invisible anchor target points for header dropdown links */}
        <div id="intelligent-workflows" className="absolute top-0 left-0 -mt-24 pointer-events-none" />
        <div id="human-in-the-loop" className="absolute top-0 left-0 -mt-24 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Carousel Stage Header & Controller */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-10 pb-6 border-b border-[#e9e4f0]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>INTELLIGENCE STAGE 02 • WORKFLOW DISPATCH &amp; CLINICIAN GOVERNANCE</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1c1636]">
                {intelStage2Tabs[intelStage2Tab].title}
              </h2>
            </div>

            {/* Stage Tabs & Slide Navigation */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* 15-second Auto-Change Visual Indicator */}
              <div 
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white border border-[#e5deee] text-[11px] font-mono text-[#716b89]"
                title={intelStage2Paused ? "Auto-play paused on hover" : "Auto-advancing every 15s"}
              >
                <Clock className="w-3 h-3 text-[#ea580c]" />
                <div className="w-12 h-1 bg-[#e5deee] rounded-full overflow-hidden">
                  <motion.div
                    key={`intel2-${intelStage2Tab}-${intelStage2Paused}`}
                    initial={{ width: '0%' }}
                    animate={{ width: intelStage2Paused ? '0%' : '100%' }}
                    transition={{ duration: intelStage2Paused ? 0 : 15, ease: 'linear' }}
                    className="h-full bg-[#ea580c] rounded-full"
                  />
                </div>
                <span>15s</span>
              </div>

              <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-[#e5deee] gap-1 shadow-2xs">
                {intelStage2Tabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setIntelStage2Tab(idx)}
                    className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      intelStage2Tab === idx
                        ? 'bg-[#ea580c] text-white shadow-xs'
                        : 'text-[#524b6b] hover:text-[#1c1636] hover:bg-[#faf8fd]'
                    }`}
                  >
                    {tab.badge}
                  </button>
                ))}
              </div>

              {/* Prev / Next Chevrons */}
              <div className="inline-flex items-center gap-1.5">
                <button
                  onClick={() => setIntelStage2Tab((prev) => (prev > 0 ? prev - 1 : intelStage2Tabs.length - 1))}
                  aria-label="Previous capability"
                  className="w-8 h-8 rounded-xl bg-white border border-[#e5deee] hover:border-[#ea580c] text-[#524b6b] hover:text-[#ea580c] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-[#716b89] px-1">
                  {intelStage2Tab + 1}/{intelStage2Tabs.length}
                </span>
                <button
                  onClick={() => setIntelStage2Tab((prev) => (prev < intelStage2Tabs.length - 1 ? prev + 1 : 0))}
                  aria-label="Next capability"
                  className="w-8 h-8 rounded-xl bg-white border border-[#e5deee] hover:border-[#ea580c] text-[#524b6b] hover:text-[#ea580c] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Slide Content */}
          <AnimatePresence mode="wait">
            {intelStage2Tab === 0 && (
              <motion.div
                key="intelStage2-0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                {/* Header Column */}
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ea580c]/10 text-[#ea580c] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <Workflow className="w-3.5 h-3.5" />
                    <span>04 / AUTOMATED WORKFLOW DISPATCH</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Translate analytics into automated, <span className="text-[#ea580c]">role-based care team action.</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Predictive insights are only valuable when delivered directly into clinical workflows. Guardian automatically routes prioritized tasks to care managers, navigators, and physicians based on configurable clinical protocols.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-white border border-[#e9e4f0] mb-6 shadow-2xs">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#ea580c]" />
                      <span>Evidence-Based Protocol Triggers</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Automated routing evaluates rules for Chronic Care Management (CCM), Transitional Care Management (TCM), and Remote Patient Monitoring (RPM) to trigger compliant care plans.
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
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Point-of-Care Gap Notifications</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Surfaces actionable HEDIS/MSSP care gap alerts directly in clinician EHR views during scheduled patient visits, enabling same-day clinical closure.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <Workflow className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Role-Based Task Dispatch</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Automatically routes outreach tasks, post-discharge calls, and barrier resolutions directly into care manager and navigator work queues based on risk priority.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <Zap className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Care Plan Protocol Automation</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Initiates standardized care plan templates and intervention schedules mapped to standardized clinical assessment instruments (e.g. PHQ-9, GAD-7, Morse Fall).
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Closed-Loop Resolution Auditing</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Tracks clinical action completion through status changes (Pending, In Progress, Completed), updating patient longitudinal charts with closed-loop audit trails.
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {intelStage2Tab === 1 && (
              <motion.div
                key="intelStage2-1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                {/* Header Column */}
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ff7a57]/10 text-[#ea580c] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>05 / CLINICIAN GOVERNANCE &amp; OVERSIGHT</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Keep licensed clinicians in complete control of <span className="text-[#ea580c]">every clinical decision.</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Guardian firmly rejects autonomous or black-box clinical decision-making. Every software suspecting finding and risk indicator is paired with verbatim clinical citations and presented in professional review cockpits where humans retain sole decision authority.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
                      <span>Clinician Decision Authority</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Physicians, care managers, and certified risk coders review cited evidence side-by-side with one-click Accept, Modify, or Reject actions. No clinical chart is modified autonomously.
                    </p>
                  </div>

                  <Link
                    to="/platform/quality-care-gaps"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#ea580c] hover:text-[#c2410c] transition-colors group"
                  >
                    <span>Explore Quality &amp; Care Gaps in Platform</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* 4 Capability Cards Grid */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#ff7a57]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Clinician Review Cockpit</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Dedicated review interfaces present suspecting findings side-by-side with original medical chart text, empowering clinicians to validate or dismiss insights rapidly.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#ff7a57]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <Eye className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Verifiable Evidence Citations</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Direct chart note snippets, lab values, and diagnostic dates accompany every insight, eliminating black-box opacity and establishing clinical trust.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#ff7a57]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <Lock className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Role-Based Access Control (RBAC)</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Granular permission matrices ensure care managers, certified risk coders, physicians, and compliance officers access only appropriate workflows and data sets.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#ff7a57]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Immutable Audit Logging</h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Every clinician review action, acceptance, modification, and timestamp is permanently logged in audit trails prepared for health plan and CMS compliance reviews.
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: LIVE INTELLIGENCE PROOF (GENUINE SCREENSHOTS CAROUSEL)
          ───────────────────────────────────────────────────────────── */}
      <section 
        id="proof" 
        onMouseEnter={() => setProofPaused(true)}
        onMouseLeave={() => setProofPaused(false)}
        className="py-16 sm:py-24 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header & Carousel Controller */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-10 pb-6 border-b border-[#e9e4f0]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>LIVE INTELLIGENCE PROOF</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-2 leading-tight">
                Genuine platform interfaces <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">substantiating core capabilities.</span>
              </h2>
              <p className="text-sm text-[#524b6b] leading-relaxed">
                Explore how Guardian’s intelligence suite renders clinical evidence directly into clinician workspaces through authentic, production-grade application modules:
              </p>
            </div>

            {/* Carousel Slide Controls */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* 15-second Auto-Change Visual Indicator */}
              <div 
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white border border-[#e5deee] text-[11px] font-mono text-[#716b89]"
                title={proofPaused ? "Auto-play paused on hover" : "Auto-advancing every 15s"}
              >
                <Clock className="w-3 h-3 text-[#7b3fc7]" />
                <div className="w-12 h-1 bg-[#e5deee] rounded-full overflow-hidden">
                  <motion.div
                    key={`intel-proof-timer-${activeProofIdx}-${proofPaused}`}
                    initial={{ width: '0%' }}
                    animate={{ width: proofPaused ? '0%' : '100%' }}
                    transition={{ duration: proofPaused ? 0 : 15, ease: 'linear' }}
                    className="h-full bg-[#7b3fc7] rounded-full"
                  />
                </div>
                <span>15s</span>
              </div>

              {/* Prev / Next Chevrons & Counter */}
              <div className="inline-flex items-center gap-1.5">
                <button
                  onClick={() => setActiveProofIdx((prev) => (prev > 0 ? prev - 1 : uiShowcase.length - 1))}
                  aria-label="Previous interface"
                  className="w-8 h-8 rounded-xl bg-white border border-[#e5deee] hover:border-[#7b3fc7] text-[#524b6b] hover:text-[#7b3fc7] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-[#716b89] px-1">
                  {activeProofIdx + 1}/{uiShowcase.length}
                </span>
                <button
                  onClick={() => setActiveProofIdx((prev) => (prev < uiShowcase.length - 1 ? prev + 1 : 0))}
                  aria-label="Next interface"
                  className="w-8 h-8 rounded-xl bg-white border border-[#e5deee] hover:border-[#7b3fc7] text-[#524b6b] hover:text-[#7b3fc7] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Showcase Tabs & Viewport */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Selector Cards */}
            <div className="lg:col-span-5 space-y-3">
              {uiShowcase.map((item, idx) => {
                const isActive = activeProofIdx === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveProofIdx(idx)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-white border-[#7b3fc7] border-l-4 border-l-[#7b3fc7] shadow-lg -translate-x-1 ring-1 ring-[#7b3fc7]/15' 
                        : 'bg-white/70 border-[#e9e4f0] hover:bg-white hover:border-[#7b3fc7]/40 hover:shadow-xs'
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
                              : 'bg-gray-100 text-[#524b6b] border-gray-200'
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
                      {uiShowcase[activeProofIdx]?.subtitle}
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
                      key={uiShowcase[activeProofIdx]?.id}
                      src={uiShowcase[activeProofIdx]?.image}
                      alt={`${uiShowcase[activeProofIdx]?.title} Platform Interface Demonstration`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
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
          SECTION 10: FINAL EXECUTIVE CTA
          ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#faf8fd] scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#1c1636] via-[#2d1b54] to-[#0d1527] text-white shadow-2xl relative overflow-hidden border border-white/10">
            
            {/* Ambient Lighting (Guardian Brand Palette - Zero Green) */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7b3fc7]/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4f46e5]/25 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6">
                <BrainCircuit className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>UNLEASH CLINICAL INTELLIGENCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                Turn complex healthcare records into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">actionable clinical insight.</span>
              </h2>

              <p className="text-sm sm:text-base text-purple-100/90 mb-8 leading-relaxed font-normal">
                Discover how Guardian’s Clinical Knowledge Graph and AI engine transform disparate patient records into transparent, auditable decision support for your clinical and quality teams.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/company?intent=demo#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7b3fc7] text-white font-semibold text-xs sm:text-sm hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <span>Request an AI Demo</span>
                  <ArrowRight className="w-4 h-4 text-[#ff7a57]" />
                </Link>
                
                <Link
                  to="/data-integration"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-xs sm:text-sm hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300"
                >
                  <span>Explore Data Integration</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
