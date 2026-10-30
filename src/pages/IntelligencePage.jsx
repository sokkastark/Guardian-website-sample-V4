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
  Share2
} from 'lucide-react';
import { RibbonStepGrid } from '../components/common/RibbonStepCard';

export default function IntelligencePage() {
  const [activeProofTab, setActiveProofTab] = useState('risk-strat');
  const location = useLocation();

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
          SECTION 3: 01 / CLINICAL KNOWLEDGE GRAPH
          ───────────────────────────────────────────────────────────── */}
      <section id="knowledge-graph" className="py-16 sm:py-24 bg-white border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
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

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: 02 / CLINICAL AI & NLP ENGINE
          ───────────────────────────────────────────────────────────── */}
      <section id="ai-nlp" className="py-16 sm:py-24 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Header Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#4f46e5]/10 text-[#4f46e5] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <BrainCircuit className="w-3.5 h-3.5" />
                <span>02 / CLINICAL AI & NLP ENGINE</span>
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
                  <span>Dual CMS-HCC & HEDIS Suspecting</span>
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

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: 03 / PREDICTIVE RISK & ANALYTICS
          ───────────────────────────────────────────────────────────── */}
      <section id="predictive-intelligence" className="py-16 sm:py-24 bg-white border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Header Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#9333ea]/10 text-[#9333ea] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>03 / PREDICTIVE RISK & ANALYTICS</span>
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
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1.5">Population Risk Tiering & Registries</h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    Stratifies attributed beneficiary populations into High, Rising, Moderate, and Low Risk tiers, populating condition registries (CHF, COPD, Diabetes, CKD).
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: 04 / AUTOMATED WORKFLOW DISPATCH
          ───────────────────────────────────────────────────────────── */}
      <section id="intelligent-workflows" className="py-16 sm:py-24 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
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

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: 05 / CLINICIAN GOVERNANCE & OVERSIGHT
          ───────────────────────────────────────────────────────────── */}
      <section id="human-in-the-loop" className="py-16 sm:py-24 bg-white border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Header Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ff7a57]/10 text-[#ea580c] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <UserCheck className="w-3.5 h-3.5" />
                <span>05 / CLINICIAN GOVERNANCE & OVERSIGHT</span>
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
                <span>Explore Quality & Care Gaps in Platform</span>
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

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: LIVE INTELLIGENCE PROOF (GENUINE SCREENSHOTS)
          ───────────────────────────────────────────────────────────── */}
      <section id="proof" className="py-16 sm:py-24 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>LIVE INTELLIGENCE PROOF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Genuine platform interfaces <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">substantiating core capabilities.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Explore how Guardian’s intelligence suite renders clinical evidence directly into clinician workspaces through authentic, production-grade application modules:
            </p>
          </div>

          {/* Interactive Showcase Tabs */}
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
          SECTION 9: ENTERPRISE SAFETY & PROTOCOL GOVERNANCE
          ───────────────────────────────────────────────────────────── */}
      <section id="governance" className="py-16 sm:py-24 bg-white border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#7b3fc7]/20 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>ENTERPRISE SAFETY & PROTOCOL GOVERNANCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                Architected for data integrity, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">privacy safeguards, and clinical trust.</span>
              </h2>

              <p className="text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                Healthcare intelligence must satisfy uncompromising standards of data protection, privacy governance, and algorithmic explainability. Guardian employs strict administrative, technical, and physical safeguards designed to support enterprise compliance:
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1636] mb-1">Encryption In Transit & At Rest</h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      All clinical payloads and patient identifiers are protected via TLS 1.3 in transit and AES-256 encryption at rest, coupled with multi-tenant logical database isolation.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#4f46e5]/10 text-[#4f46e5] flex items-center justify-center shrink-0 mt-0.5">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1636] mb-1">Human Decision Authority</h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Clinical intelligence models operate exclusively as supportive decision aids. Licensed clinicians and certified coders retain final authority to accept, modify, or reject every insight.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ff7a57]/10 text-[#ea580c] flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1636] mb-1">Auditability & HIPAA Safeguards</h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Maintains comprehensive audit logs of all user actions, evidence queries, and review decisions to support healthcare organizations' administrative HIPAA safeguard programs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/company/security-trust"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-md transition-all"
                >
                  <span>Explore Security & Trust Principles</span>
                  <ArrowRight className="w-4 h-4 text-[#ff7a57]" />
                </Link>
              </div>
            </div>

            {/* Right Graphic (Palette Adjusted - Zero Green Accents) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#e9e4f0] group">
                <img 
                  src="/images/clinician-whitecoat.jpg" 
                  alt="Clinician reviewing Guardian Human-in-the-Loop decision support interface" 
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1636]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#7b3fc7] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-[#1c1636] block">Auditable Clinical Evidence</span>
                      <span className="text-[11px] text-[#524b6b]">Governed Human Decisioning</span>
                    </div>
                  </div>
                </div>
              </div>
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
