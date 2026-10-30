import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Database, 
  Network, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Lock, 
  Cpu, 
  Server, 
  Activity, 
  Layers, 
  Zap, 
  Radio, 
  FileCode, 
  Smartphone, 
  Globe,
  Search,
  Workflow,
  Share2,
  KeyRound,
  FileCheck2,
  LineChart,
  Stethoscope,
  Pill,
  Clock,
  Calendar
} from 'lucide-react';
import { RibbonStepGrid } from '../components/common/RibbonStepCard';

export default function DataIntegrationOverviewPage() {
  const [activeTab, setActiveTab] = useState('clinical-integration');
  const location = useLocation();

  // Smooth hash scrolling for direct links and dropdown navigation
  useEffect(() => {
    if (location.hash) {
      const rawHash = location.hash.replace('#', '');
      const aliasMap = {
        'clinical-integration': 'clinical',
        'claims-integration': 'claims',
        'labs-pharmacy-other': 'labs-pharmacy'
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
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [location.hash, location.pathname]);

  // ─────────────────────────────────────────────────────────────
  // 5-STAGE INTEROPERABILITY PIPELINE (BRAND PALETTE)
  // ─────────────────────────────────────────────────────────────
  const pipelineSteps = [
    {
      num: '01',
      label: 'INGEST',
      title: 'Multi-Source Feed Ingestion',
      desc: 'Connect ambulatory EHRs, 837/835 EDI claims, regional HIE feeds, ADT event streams, diagnostic labs, and CMS CCLF/BCDA files.',
      ribbonBg: 'bg-[#7b3fc7]',
      foldColor: '#582799',
      numberColor: 'text-[#582799]'
    },
    {
      num: '02',
      label: 'PARSE & MAP',
      title: 'Format Parsing & MPI Matching',
      desc: 'Parse FHIR R4, HL7 v2, and C-CDA payloads with deterministic and probabilistic Master Patient Index (MPI) identity resolution.',
      ribbonBg: 'bg-[#4f46e5]',
      foldColor: '#3730a3',
      numberColor: 'text-[#3730a3]'
    },
    {
      num: '03',
      label: 'NORMALIZE',
      title: 'Semantic Code Standardization',
      desc: 'Standardize disparate vendor codes into canonical ICD-10, CPT, LOINC, and RxNorm clinical terminologies.',
      ribbonBg: 'bg-[#9333ea]',
      foldColor: '#6b21a8',
      numberColor: 'text-[#6b21a8]'
    },
    {
      num: '04',
      label: 'ENRICH',
      title: 'Longitudinal Record Synthesis',
      desc: 'Synthesize data into unified Patient Master Charts (PMC), risk stratification models, and quality care gap engines.',
      ribbonBg: 'bg-[#ea580c]',
      foldColor: '#9a3412',
      numberColor: 'text-[#9a3412]'
    },
    {
      num: '05',
      label: 'DELIVER',
      title: 'Workflow & API Delivery',
      desc: 'Expose real-time data to care manager workspaces, point-of-care alerts, and developer REST/FHIR APIs.',
      ribbonBg: 'bg-[#ff7a57]',
      foldColor: '#c2410c',
      numberColor: 'text-[#c2410c]'
    }
  ];

  // ─────────────────────────────────────────────────────────────
  // UI PROOF APPLICATION SHOWCASE (GENUINE APPLICATION VIEWS)
  // ─────────────────────────────────────────────────────────────
  const uiShowcase = [
    {
      id: 'clinical-integration',
      title: 'Real-Time ADT Alert Ingestion',
      path: '/platform/transitions-of-care-adt',
      desc: 'Live streaming of emergency department visits and hospital discharge alerts across regional HIEs.',
      image: '/images/appliction images/ui-adt-notifications.png',
      highlights: ['Real-Time ADT Streaming', 'Regional HIE Ingestion', 'Discharge Alerting']
    },
    {
      id: 'claims-integration',
      title: 'Patient 360 & Claims Aggregation',
      path: '/platform/patient-intelligence/patient-360',
      desc: 'Synthesized longitudinal chart connecting clinical EHR records with payer 837/835 claims lines.',
      image: '/images/appliction images/ui-patient-360.png',
      highlights: ['Claims & Clinical Mesh', 'MPI Matching', 'Cost Trajectory']
    },
    {
      id: 'hie-adt',
      title: 'Population Data Ingestion Engine',
      path: '/platform/population-health',
      desc: 'Multi-source ingestion pipeline aggregating CCLF, BCDA, and ambulatory EHR feeds into cohort analytics.',
      image: '/images/appliction images/ui-pop-health-analytics.png',
      highlights: ['Multi-Source Ingestion', 'Terminology Normalization', 'Cohort Builder']
    },
    {
      id: 'apis-mobile',
      title: 'Referral & Network Integration',
      path: '/platform/referral-management',
      desc: 'Specialist referral routing and prior authorization tracking integrated via secure REST APIs.',
      image: '/images/appliction images/ui-referral-manager.png',
      highlights: ['RESTful & FHIR APIs', 'In-Network Routing', 'Webhooks Engine']
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
            src="/images/platform-hero-banner.jpg" 
            alt="Guardian Data & Integration Ingestion Infrastructure" 
            className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/95 via-[#0d1527]/80 to-[#0d1527]/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1527]/80 via-transparent to-[#0d1527]" />
          
          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[450px] bg-[#7b3fc7]/30 blur-[140px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#ff7a57]/20 blur-[120px] rounded-full" />
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
                <Database className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>GUARDIAN DATA &amp; INTEGRATION SUITE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                Connecting the healthcare ecosystem across <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">EHRs, claims, HIEs, and APIs.</span>
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-2xl mb-8 font-normal">
                Guardian brings disparate healthcare data streams together—normalizing clinical records, claims feeds, HL7/FHIR feeds, and lab results into a single, real-time operational foundation for value-based care.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/company?intent=demo#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0 group"
                >
                  <span>Request an Integration Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ff7a57]" />
                </Link>

                <a
                  href="#pipeline"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300 whitespace-nowrap shrink-0"
                >
                  <span>Explore Ingestion Pipeline</span>
                </a>
              </div>
            </motion.div>

            {/* Right Compact Floating Live Dashboard Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-5 hidden lg:block transform lg:scale-108 transition-transform duration-300"
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#7b3fc7]/40 to-[#ff7a57]/30 rounded-3xl blur-2xl opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative rounded-2xl bg-[#1a1233]/95 border border-white/30 backdrop-blur-xl p-3 shadow-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-[#120b24] rounded-lg border-b border-white/15 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff7a57]/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#7b3fc7]/80 inline-block" />
                      <span className="text-[10px] text-purple-200 font-mono ml-2">data.itsguardian.com</span>
                    </div>
                    <span className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#7b3fc7] text-white font-bold">
                      Integration Pipeline
                    </span>
                  </div>

                  <div className="relative rounded-md overflow-hidden bg-white border border-[#e9e4f0] shadow-md">
                    <img 
                      src="/images/appliction images/ui-adt-notifications.png" 
                      alt="Guardian Real-Time ADT & Data Integration Suite" 
                      className="w-full h-auto object-contain filter brightness-[1.06] contrast-[1.03]"
                    />
                  </div>

                  <p className="text-xs text-purple-200/70 text-center mt-2 leading-relaxed italic">
                    *Illustrative sample demonstration data. Module records and metrics are for demonstration purposes only.
                  </p>

                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-purple-200 font-mono px-1 font-medium">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57]" /> Standardized Exchange Protocols
                    </span>
                    <span className="text-purple-300 font-bold">Multi-Source Ingestion</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE INTEROPERABILITY PIPELINE (INFOGRAPHIC PATHWAY)
          ───────────────────────────────────────────────────────────── */}
      <section id="pipeline" className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0] relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>THE INTEROPERABILITY PIPELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
              From fragmented feeds to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">synchronized data foundation.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#524b6b] leading-relaxed">
              Guardian’s ingestion engine transforms siloed healthcare data streams into a unified longitudinal record across 5 automated stages:
            </p>
          </div>

          {/* Infographic Connected 3D Folded Ribbon Pathway */}
          <div className="relative pt-2">
            <RibbonStepGrid steps={pipelineSteps} />
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: #clinical (01 / CLINICAL INTEGRATION)
          ───────────────────────────────────────────────────────────── */}
      <section id="clinical" className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#7b3fc7]/20 shadow-2xs">
                <Network className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>01 / CLINICAL EHR INTEGRATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                Bi-directional clinical data exchange across <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">disparate EHR platforms.</span>
              </h2>

              <p className="text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                Connect ambulatory and acute EHR systems across hospital networks, independent practices, and specialized clinics. Ingest clinical encounters, problem lists, vital signs, and discharge summaries with write-back capabilities directly into clinician workflows.
              </p>

              <div className="p-4 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] mb-6 space-y-2.5">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#7b3fc7]">
                  Supported Standards &amp; Formats
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-[#1c1636]">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#e9e4f0] font-mono font-medium">C-CDA XML</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#e9e4f0] font-mono font-medium">FHIR R4</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#e9e4f0] font-mono font-medium">Direct Messaging (DSM)</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#e9e4f0] font-mono font-medium">LOINC / SNOMED</span>
                </div>
              </div>

              <Link
                to="/platform/patient-intelligence/patient-360"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#7b3fc7] hover:text-[#9565d2] transition-colors group"
              >
                <span>Explore Longitudinal Patient Master Chart</span>
                <ArrowRight className="w-4 h-4 text-[#ff7a57] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Capability Cards (2x2 Grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-3">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">Multi-EHR Feed Connectivity</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Connect disparate ambulatory and acute EHR platforms into a single unified clinical integration network across multi-practice systems.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-3">
                  <FileCode className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">C-CDA &amp; FHIR Ingestion</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Ingest and parse structured C-CDA XML documents, CCD summaries, FHIR R4 resources, and clinical notes in real time.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-3">
                  <Share2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">Direct Secure Messaging (DSM)</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Automated DSM protocol integration for securely transmitting and receiving patient summary documents and referral packets.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-3">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">Point-of-Care Write-Back</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Route validated care plans, suspected risk conditions, and quality care gap alerts back into clinician EHR encounter workflows.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: #claims (02 / CLAIMS INTEGRATION)
          ───────────────────────────────────────────────────────────── */}
      <section id="claims" className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a57]/10 text-[#ea580c] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#ff7a57]/20 shadow-2xs">
                <FileText className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>02 / PAYER CLAIMS &amp; FINANCIAL FEEDS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                Ingest 837/835 claims, CMS CCLF files, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a57] via-[#ea580c] to-[#7b3fc7]">payer remittance feeds.</span>
              </h2>

              <p className="text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                Aggregate historical and ongoing medical, pharmacy, and institutional claims files. Ingest CMS Bulk BCDA and CCLF 1–9 files to reconstruct complete patient utilization histories, calculate PMPM/PMPY expenditure trajectories, and reconcile multi-payer attribution rosters.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#e9e4f0] mb-6 space-y-2.5">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Supported Claims Standards
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-[#1c1636]">
                  <span className="px-2.5 py-1 rounded-md bg-[#faf8fd] border border-[#e9e4f0] font-mono font-medium">CMS CCLF 1–9</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#faf8fd] border border-[#e9e4f0] font-mono font-medium">EDI 837P / 837I</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#faf8fd] border border-[#e9e4f0] font-mono font-medium">EDI 835 Remittance</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#faf8fd] border border-[#e9e4f0] font-mono font-medium">CMS BCDA Bulk Data</span>
                </div>
              </div>

              <Link
                to="/platform/analytics"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#ea580c] hover:text-[#c2410c] transition-colors group"
              >
                <span>Explore Financial Analytics Cockpit</span>
                <ArrowRight className="w-4 h-4 text-[#ff7a57] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Capability Cards (2x2 Grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#ff7a57]/10 text-[#ea580c] flex items-center justify-center mb-3">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">CMS CCLF &amp; BCDA Feed Ingestion</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Automated parsing of monthly CMS CCLF files and API-based Bulk BCDA data for Medicare Advantage and MSSP ACO surveillance.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#ff7a57]/10 text-[#ea580c] flex items-center justify-center mb-3">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">EDI 837 / 835 Processing</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Automated processing of professional (837P) and institutional (837I) claims feeds paired with payment remittance advice.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#ff7a57]/10 text-[#ea580c] flex items-center justify-center mb-3">
                  <LineChart className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">PMPM / PMPY Cost Analytics</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Synthesize multi-payer claims into Per Member Per Month financial baselines, medical loss trends, and risk cost trajectories.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#ff7a57]/10 text-[#ea580c] flex items-center justify-center mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">Attribution Roster Matching</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Reconcile payer attribution rosters against live clinical encounters to track assigned patient panel changes continuously.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: #hie-adt (03 / HIE & ADT EVENT MONITORING)
          ───────────────────────────────────────────────────────────── */}
      <section id="hie-adt" className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4f46e5]/10 text-[#4f46e5] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#4f46e5]/20 shadow-2xs">
                <Radio className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>03 / REAL-TIME HIE &amp; ADT EVENT STREAMING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                Real-time hospital event notifications for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#7b3fc7] to-[#ff7a57]">acute admissions and discharges.</span>
              </h2>

              <p className="text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                Stream event notifications from regional Health Information Exchanges (HIEs), hospital networks, and emergency departments. Automatically detect acute inpatient admissions and ER visits to trigger timely 48-hour clinical outreach and 30-day transition-of-care protocols.
              </p>

              <div className="p-4 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] mb-6 space-y-2.5">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#4f46e5]">
                  HL7 v2 ADT Specifications
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-[#1c1636]">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#e9e4f0] font-mono font-medium">A01 Inpatient Admission</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#e9e4f0] font-mono font-medium">A03 Hospital Discharge</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#e9e4f0] font-mono font-medium">A08 Patient Update</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#e9e4f0] font-mono font-medium">Regional HIE Feeds</span>
                </div>
              </div>

              <Link
                to="/platform/transitions-of-care-adt"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#4f46e5] hover:text-[#7b3fc7] transition-colors group"
              >
                <span>Explore Transitions-of-Care (TOC) Protocols</span>
                <ArrowRight className="w-4 h-4 text-[#ff7a57] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Capability Cards (2x2 Grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#4f46e5]/10 text-[#4f46e5] flex items-center justify-center mb-3">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">Real-Time HL7 v2 ADT Ingestion</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Instant parsing of acute hospital Admit, Discharge, and Transfer feeds directly into active patient queues.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#4f46e5]/10 text-[#4f46e5] flex items-center justify-center mb-3">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">Regional HIE Interoperability</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Connect with regional health information exchanges to capture out-of-network utilization across non-affiliated health systems.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#4f46e5]/10 text-[#4f46e5] flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">ED High-Utilizer Event Triggers</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Automated alert logic that flags frequent emergency department visits to redirect patients to primary care resources.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#4f46e5]/10 text-[#4f46e5] flex items-center justify-center mb-3">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">30-Day TCM Workflow Automation</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Automatically trigger medication reconciliation and primary care follow-up visit scheduling upon hospital discharge.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: #labs-pharmacy (04 / LABS, PHARMACY & SUPPLEMENTAL)
          ───────────────────────────────────────────────────────────── */}
      <section id="labs-pharmacy" className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#7b3fc7]/20 shadow-2xs">
                <Pill className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>04 / DIAGNOSTIC LABS, PHARMACY &amp; RPM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                Connect diagnostic lab feeds, pharmacy fill records, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#9333ea] to-[#4f46e5]">clinical assessments.</span>
              </h2>

              <p className="text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                Standardize incoming laboratory test results, pharmacy dispensing history, and validated clinical assessment scales directly into the patient longitudinal health record. Monitor ongoing medication adherence trends and remote patient monitoring readings continuously.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#e9e4f0] mb-6 space-y-2.5">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#7b3fc7]">
                  Standardized Clinical Terminologies
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-[#1c1636]">
                  <span className="px-2.5 py-1 rounded-md bg-[#faf8fd] border border-[#e9e4f0] font-mono font-medium">LOINC Test Codes</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#faf8fd] border border-[#e9e4f0] font-mono font-medium">RxNorm CUIs</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#faf8fd] border border-[#e9e4f0] font-mono font-medium">150+ Assessment Scales</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#faf8fd] border border-[#e9e4f0] font-mono font-medium">Biometric RPM Feeds</span>
                </div>
              </div>

              <Link
                to="/platform/care-management"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#7b3fc7] hover:text-[#9565d2] transition-colors group"
              >
                <span>Explore Care Management Applications</span>
                <ArrowRight className="w-4 h-4 text-[#ff7a57] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Capability Cards (2x2 Grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-3">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">LOINC-Standardized Lab Ingestion</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Harmonize disparate reference lab results, HbA1c panels, and creatinine trends to standard LOINC terminologies.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-3">
                  <Pill className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">RxNorm Pharmacy &amp; Adherence Feeds</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Track pharmacy dispensing claims and calculate Proportion of Days Covered (PDC) medication adherence metrics.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-3">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">150+ Standardized Assessment Scales</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Ingest standardized assessment scales (PHQ-9, GAD-7, Morse Fall, SDOH) directly into multi-disciplinary care plans.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">Biometric RPM Device Ingestion</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Continuous ingestion of cellular blood pressure cuffs, glucometers, and weight scale readings into patient profiles.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: #data-foundation (05 / DATA FOUNDATION & LONGITUDINAL MESH)
          ───────────────────────────────────────────────────────────── */}
      <section id="data-foundation" className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1636] text-white text-xs font-semibold tracking-wider uppercase mb-4 shadow-2xs">
                <Server className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>05 / DATA FOUNDATION &amp; LONGITUDINAL MESH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                Enterprise longitudinal data architecture with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c1636] via-[#4f46e5] to-[#7b3fc7]">robust security and tenant isolation.</span>
              </h2>

              <p className="text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                The core operational data layer featuring deterministic and probabilistic Master Patient Indexing (MPI), a canonical Patient Master Chart unifying 13 clinical domains, multi-tenant row-level isolation, and complete audit trail lineage.
              </p>

              <div className="p-4 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] mb-6 space-y-2.5">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1c1636]">
                  Data Foundation Components
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-[#1c1636]">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#e9e4f0] font-mono font-medium">Deterministic &amp; Probabilistic MPI</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#e9e4f0] font-mono font-medium">13-Domain Clinical Schema</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#e9e4f0] font-mono font-medium">Row-Level Tenant Isolation</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#e9e4f0] font-mono font-medium">AES-256 / TLS 1.3 Encryption</span>
                </div>
              </div>

              <Link
                to="/company#security"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#7b3fc7] hover:text-[#9565d2] transition-colors group"
              >
                <span>Explore Security &amp; Compliance Specifications</span>
                <ArrowRight className="w-4 h-4 text-[#ff7a57] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Capability Cards (2x2 Grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-3">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">Master Patient Indexing (MPI)</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Deterministic and probabilistic identity resolution algorithms that eliminate duplicate medical records across fragmented networks.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">Patient Master Chart (PMC) Model</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Unified canonical data model synthesizing 13 clinical domains (demographics, encounters, meds, labs, gaps) into a single timeline.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-3">
                  <KeyRound className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">Multi-Tenant Isolation &amp; RBAC</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Granular row-level data segregation preventing cross-organization leakage with strict role-based access control policies.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">Data Lineage &amp; Audit Logging</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Complete provenance tracking for every clinical data point, documenting original source feeds, transformation history, and access logs.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: #apis-mobile (06 / APIS & MOBILE INTEGRATION)
          ───────────────────────────────────────────────────────────── */}
      <section id="apis-mobile" className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a57]/10 text-[#ea580c] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#ff7a57]/20 shadow-2xs">
                <Smartphone className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>06 / DEVELOPER APIS &amp; MOBILE CONNECTORS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                Secure RESTful APIs, FHIR endpoints, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a57] via-[#f97316] to-[#7b3fc7]">real-time event webhooks.</span>
              </h2>

              <p className="text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                Equip technical teams with standardized FHIR R4 interfaces, webhook subscriptions, and scheduling connectors to integrate Guardian intelligence into third-party portals, mobile apps, and clinical systems.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#e9e4f0] mb-6 space-y-2.5">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Developer &amp; Integration Specs
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-[#1c1636]">
                  <span className="px-2.5 py-1 rounded-md bg-[#faf8fd] border border-[#e9e4f0] font-mono font-medium">RESTful FHIR R4 APIs</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#faf8fd] border border-[#e9e4f0] font-mono font-medium">Real-Time Event Webhooks</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#faf8fd] border border-[#e9e4f0] font-mono font-medium">Mobile Patient SDKs</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#faf8fd] border border-[#e9e4f0] font-mono font-medium">EMR Scheduling Connectors</span>
                </div>
              </div>

              <Link
                to="/platform/patient-engagement"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#ea580c] hover:text-[#c2410c] transition-colors group"
              >
                <span>Explore Patient Engagement Connectors</span>
                <ArrowRight className="w-4 h-4 text-[#ff7a57] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Capability Cards (2x2 Grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#ff7a57]/10 text-[#ea580c] flex items-center justify-center mb-3">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">Standardized FHIR R4 Endpoints</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Secure RESTful query endpoints supporting standard FHIR R4 resources (Patient, Condition, Observation, Encounter).</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#ff7a57]/10 text-[#ea580c] flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">Real-Time Webhook Subscriptions</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Event-driven webhook engine notifying downstream clinical platforms immediately upon acute ADT alerts or gap closures.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#ff7a57]/10 text-[#ea580c] flex items-center justify-center mb-3">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">Mobile Engagement &amp; Portals</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Connect external patient portals, SMS communication channels, and remote digital intake tools directly to Guardian.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#ff7a57]/10 text-[#ea580c] flex items-center justify-center mb-3">
                  <Calendar className="w-5 h-5 text-[#ea580c]" />
                </div>
                <h3 className="text-base font-extrabold text-[#1c1636] mb-1.5">EMR Scheduling Connectors</h3>
                <p className="text-xs text-[#524b6b] leading-relaxed">Bi-directional scheduling connectors enabling automated patient appointment booking directly within host EMR systems.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: #proof (INTEROPERABILITY UI PROOF & DEMONSTRATION)
          ───────────────────────────────────────────────────────────── */}
      <section id="proof" className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>INTEROPERABILITY PROOF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Enterprise connectors processing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">millions of records daily.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Discover how Guardian’s Data &amp; Integration connectors surface real-time events and longitudinal patient records in live clinical interfaces:
            </p>
          </div>

          {/* Interactive Showcase Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Selector Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {uiShowcase.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'bg-white border-[#7b3fc7] border-l-4 border-l-[#7b3fc7] shadow-lg -translate-x-1 ring-1 ring-[#7b3fc7]/15' 
                        : 'bg-white/65 border-[#e9e4f0] hover:bg-white hover:border-[#7b3fc7]/40 hover:shadow-xs'
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
                      <Link 
                        to={item.path}
                        className="text-[11px] font-bold text-[#7b3fc7] hover:underline flex items-center gap-0.5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>View</span>
                        <ChevronRight className="w-3 h-3 text-[#ff7a57]" />
                      </Link>
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
                              ? 'bg-[#7b3fc7]/10 text-[#7b3fc7] border-[#7b3fc7]/20' 
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

            {/* Right Display (Stitched to Top) */}
            <div className="lg:col-span-7 lg:sticky lg:top-24 self-start">
              <div className="relative rounded-2xl bg-[#1c1636] p-3.5 border border-[#2e1065] shadow-2xl overflow-hidden transition-all duration-300">
                {/* Browser / Application Window Top Bar */}
                <div className="flex items-center justify-between px-3 py-2.5 bg-[#120b24] rounded-xl border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff7a57]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7b3fc7]/80 inline-block" />
                    <span className="text-[11px] text-purple-200 font-mono ml-2 font-semibold truncate max-w-[200px] sm:max-w-none">
                      {uiShowcase.find(m => m.id === activeTab)?.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to={uiShowcase.find(m => m.id === activeTab)?.path || '#'}
                      className="text-[10px] font-mono font-bold text-purple-200 hover:text-white px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition-colors hidden sm:inline-flex items-center gap-1"
                    >
                      <span>Explore Page</span>
                      <ChevronRight className="w-3 h-3 text-[#ff7a57]" />
                    </Link>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#7b3fc7] text-white font-medium">
                      Live Connector Proof
                    </span>
                  </div>
                </div>

                {/* Image Viewport (Top Anchored, Smooth Crossfade) */}
                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0] shadow-inner">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeTab}
                      src={uiShowcase.find(m => m.id === activeTab)?.image || '/images/appliction images/ui-adt-notifications.png'}
                      alt={`${uiShowcase.find(m => m.id === activeTab)?.title} Interface Proof`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="w-full h-auto object-contain max-h-[520px] block"
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* Demonstration Data Disclaimer */}
              <p className="text-xs text-[#716b89] leading-relaxed italic text-right mt-2.5">
                *Illustrative sample demonstration data. Module records and metrics are for demonstration purposes only.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11: #contact (FINAL EXECUTIVE CTA)
          ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-white to-[#faf8fd] scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#1c1636] via-[#2d1b54] to-[#0d1527] text-white shadow-2xl relative overflow-hidden border border-white/10">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7b3fc7]/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff7a57]/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6">
                <Database className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>UNIFY YOUR DATA ECOSYSTEM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                Turn fragmented healthcare data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">real-time clinical action.</span>
              </h2>

              <p className="text-sm sm:text-base text-purple-100/90 mb-8 leading-relaxed font-normal">
                Discover how Guardian's Data &amp; Integration connectors synthesize EHRs, claims, and ADT feeds into a unified operational foundation.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/company?intent=demo#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7b3fc7] text-white font-semibold text-xs sm:text-sm hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <span>Request an Integration Demo</span>
                  <ArrowRight className="w-4 h-4 text-[#ff7a57]" />
                </Link>
                
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-xs sm:text-sm hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300"
                >
                  <span>Explore Platform Capabilities</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
