import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Layers, 
  Database, 
  Sparkles, 
  UserCheck, 
  Workflow, 
  TrendingUp, 
  ArrowRight, 
  Network, 
  Activity, 
  CheckCircle2, 
  Users, 
  FileText, 
  HeartPulse, 
  BarChart3, 
  Target, 
  Zap, 
  Share2, 
  FileCheck, 
  Bell, 
  Video, 
  Award, 
  Clock, 
  MapPin, 
  DollarSign,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import PlatformFeatureInventory from '../components/platform/PlatformFeatureInventory';

export default function PlatformPage() {
  const [stage1Tab, setStage1Tab] = useState(0);
  const [stage2Tab, setStage2Tab] = useState(0);
  const [stage3Tab, setStage3Tab] = useState(0);
  const [stage4Tab, setStage4Tab] = useState(0);
  const [stage1Paused, setStage1Paused] = useState(false);
  const [stage2Paused, setStage2Paused] = useState(false);
  const [stage3Paused, setStage3Paused] = useState(false);
  const [stage4Paused, setStage4Paused] = useState(false);
  const [activePmcDomain, setActivePmcDomain] = useState('Care Gaps');
  const location = useLocation();

  // Auto 15-second carousel timer for all 4 stages (pauses on hover, resets on manual change)
  useEffect(() => {
    if (stage1Paused) return;
    const timer = setInterval(() => {
      setStage1Tab((prev) => (prev + 1) % 3);
    }, 15000);
    return () => clearInterval(timer);
  }, [stage1Paused, stage1Tab]);

  useEffect(() => {
    if (stage2Paused) return;
    const timer = setInterval(() => {
      setStage2Tab((prev) => (prev + 1) % 3);
    }, 15000);
    return () => clearInterval(timer);
  }, [stage2Paused, stage2Tab]);

  useEffect(() => {
    if (stage3Paused) return;
    const timer = setInterval(() => {
      setStage3Tab((prev) => (prev + 1) % 3);
    }, 15000);
    return () => clearInterval(timer);
  }, [stage3Paused, stage3Tab]);

  useEffect(() => {
    if (stage4Paused) return;
    const timer = setInterval(() => {
      setStage4Tab((prev) => (prev + 1) % 2);
    }, 15000);
    return () => clearInterval(timer);
  }, [stage4Paused, stage4Tab]);

  // Mapping from dropdown hashes & aliases to the stage + tab index
  useEffect(() => {
    if (location.hash) {
      const rawHash = location.hash.replace('#', '');
      
      const hashToStageTabMap = {
        // Stage 1: Data & Patient Intelligence (Sections 1, 2, 3)
        'population-health': { stage: 'stage-1', tab: 0, setTab: setStage1Tab },
        'patient-360': { stage: 'stage-1', tab: 1, setTab: setStage1Tab },
        'pmc': { stage: 'stage-1', tab: 1, setTab: setStage1Tab },
        'patient-intelligence': { stage: 'stage-1', tab: 1, setTab: setStage1Tab },
        'risk-stratification': { stage: 'stage-1', tab: 2, setTab: setStage1Tab },

        // Stage 2: Value-Based Performance & Care Delivery (Sections 4, 5, 6)
        'risk-adjustment': { stage: 'stage-2', tab: 0, setTab: setStage2Tab },
        'mra': { stage: 'stage-2', tab: 0, setTab: setStage2Tab },
        'quality-care-gaps': { stage: 'stage-2', tab: 1, setTab: setStage2Tab },
        'quality': { stage: 'stage-2', tab: 1, setTab: setStage2Tab },
        'care-management': { stage: 'stage-2', tab: 2, setTab: setStage2Tab },

        // Stage 3: Care Continuum & Coordination (Sections 7, 8, 9)
        'transitions-of-care': { stage: 'stage-3', tab: 0, setTab: setStage3Tab },
        'transitions-of-care-adt': { stage: 'stage-3', tab: 0, setTab: setStage3Tab },
        'adt': { stage: 'stage-3', tab: 0, setTab: setStage3Tab },
        'referral-management': { stage: 'stage-3', tab: 1, setTab: setStage3Tab },
        'referrals': { stage: 'stage-3', tab: 1, setTab: setStage3Tab },
        'patient-engagement': { stage: 'stage-3', tab: 2, setTab: setStage3Tab },
        'engagement': { stage: 'stage-3', tab: 2, setTab: setStage3Tab },

        // Stage 4: Virtual Care & Executive Intelligence (Sections 10, 11)
        'telemedicine': { stage: 'stage-4', tab: 0, setTab: setStage4Tab },
        'virtual-care': { stage: 'stage-4', tab: 0, setTab: setStage4Tab },
        'analytics': { stage: 'stage-4', tab: 1, setTab: setStage4Tab },

        // Top level anchors
        'six-pillars': { stage: 'pillars', tab: null, setTab: null },
        'pillars': { stage: 'pillars', tab: null, setTab: null }
      };

      const targetInfo = hashToStageTabMap[rawHash];
      if (targetInfo && targetInfo.setTab) {
        targetInfo.setTab(targetInfo.tab);
      }

      // Smooth scroll to the target stage container
      const timer = setTimeout(() => {
        const targetElementId = targetInfo ? targetInfo.stage : rawHash;
        const el = document.getElementById(rawHash) || document.getElementById(targetElementId);
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

  // Six Value Pillars
  const sixPillars = [
    {
      id: 'connect',
      num: '01',
      title: 'Connect',
      subtitle: 'Bring healthcare data together.',
      desc: 'Connect information across EHRs, claims feeds, HIE networks, pharmacy systems, and ADT feeds.',
      icon: Network,
      frameColor: 'bg-gradient-to-br from-[#4f46e5] via-[#6366f1] to-[#7b3fc7]',
      accentColor: 'text-[#4f46e5]',
      badgeColor: 'bg-[#4f46e5] text-white',
      color: 'bg-[#eef2ff] text-[#4f46e5] border-[#c7d2fe]',
      targetAnchor: '#population-health',
      items: ['EHR Systems', 'Claims Data', 'HIE Networks', 'Payer Feeds', 'Labs & Pharmacy', 'ADT Alerts']
    },
    {
      id: 'understand',
      num: '02',
      title: 'Understand',
      subtitle: 'Create a longitudinal view.',
      desc: 'Transform connected records into clinical context to understand the complete patient journey.',
      icon: UserCheck,
      frameColor: 'bg-gradient-to-br from-[#7b3fc7] via-[#9333ea] to-[#a855f7]',
      accentColor: 'text-[#7b3fc7]',
      badgeColor: 'bg-[#7b3fc7] text-white',
      color: 'bg-[#f3e8ff] text-[#7b3fc7] border-[#e9d5ff]',
      targetAnchor: '#patient-360',
      items: ['Patient Master Chart', 'Cohort Analytics', '13 Clinical Domains', 'Clinical History', 'Claims Trends']
    },
    {
      id: 'identify',
      num: '03',
      title: 'Identify',
      subtitle: 'Find patients needing attention.',
      desc: 'Organize healthcare records to detect risk tiers, care gaps, quality opportunities, and utilization trends.',
      icon: Target,
      frameColor: 'bg-gradient-to-br from-[#9333ea] via-[#7c3aed] to-[#4f46e5]',
      accentColor: 'text-[#9333ea]',
      badgeColor: 'bg-[#9333ea] text-white',
      color: 'bg-[#faf5ff] text-[#9333ea] border-[#e9d5ff]',
      targetAnchor: '#risk-stratification',
      items: ['Risk Stratification', 'HEDIS Care Gaps', 'High-Utilizer Alerts', 'Dual CMS-HCC MRA', 'Readmission Risk']
    },
    {
      id: 'manage',
      num: '04',
      title: 'Manage',
      subtitle: 'Coordinate individualized care.',
      desc: 'Put intelligence directly into care team workflows for care planning, outreach, and documentation.',
      icon: Workflow,
      frameColor: 'bg-gradient-to-br from-[#ea580c] via-[#f97316] to-[#ff7a57]',
      accentColor: 'text-[#ea580c]',
      badgeColor: 'bg-[#ea580c] text-white',
      color: 'bg-[#fff7ed] text-[#ea580c] border-[#fed7aa]',
      targetAnchor: '#care-management',
      items: ['Care Management', 'Individual Care Plans', '150+ Assessments', 'CCM / TCM Protocols', 'Worklists']
    },
    {
      id: 'engage',
      num: '05',
      title: 'Engage',
      subtitle: 'Connect patients and providers.',
      desc: 'Empower patients and clinicians with digital communication, specialist referrals, and virtual visits.',
      icon: Activity,
      frameColor: 'bg-gradient-to-br from-[#ff7a57] via-[#f97316] to-[#ea580c]',
      accentColor: 'text-[#ea580c]',
      badgeColor: 'bg-[#ea580c] text-white',
      color: 'bg-[#fff7ed] text-[#ea580c] border-[#fed7aa]',
      targetAnchor: '#patient-engagement',
      items: ['Specialist Geo-Mapping', 'DSM Referrals', 'Automated Reminders', 'Telemedicine Visits', 'Intake Forms']
    },
    {
      id: 'measure',
      num: '06',
      title: 'Measure',
      subtitle: 'Track performance and value.',
      desc: 'Measure real-world impact across quality scores, utilization tracking, financial trends, and outcomes.',
      icon: BarChart3,
      frameColor: 'bg-gradient-to-br from-[#1c1636] via-[#2e1065] to-[#7b3fc7]',
      accentColor: 'text-[#7b3fc7]',
      badgeColor: 'bg-[#1c1636] text-white',
      color: 'bg-[#f2ecf9] text-[#7b3fc7] border-[#ded7ea]',
      targetAnchor: '#analytics',
      items: ['Quality Performance', 'Financial Reporting', 'PMPM / PMPY Trends', 'RAF Score Trajectories', 'KPI Dashboards']
    }
  ];

  // 13 Core Clinical Domains from Product Profile 6.0 Page 5
  const pmcDomains = [
    { name: 'Diagnoses', detail: 'ICD-10 & Chronic Conditions' },
    { name: 'Medications', detail: 'Active Rx & Adherence Gaps' },
    { name: 'Vitals', detail: 'BP, BMI, SpO2 & Trend Charts' },
    { name: 'Lab Results', detail: 'HbA1c, Lipid & Panel History' },
    { name: 'Procedures', detail: 'Surgical & Clinical Log' },
    { name: 'Care Gaps', detail: 'HEDIS & Preventive Gaps' },
    { name: 'MRA Gaps', detail: 'HCC Suspecting & Recapture' },
    { name: 'Risk Scores', detail: 'CMS-HCC RAF & Readmission' },
    { name: 'Encounters', detail: 'Inpatient, Outpatient & ER Logs' },
    { name: 'ADT Alerts', detail: 'Real-Time Hospital Admissions' },
    { name: 'HIE Search', detail: 'Regional Document Exchange' },
    { name: 'DSM Notes', detail: 'Direct Secure Messaging' },
    { name: 'Scales & Forms', detail: '150+ Standardized Scales' }
  ];

  // Stage 1 Tab metadata
  const stage1Tabs = [
    { id: 'population-health', badge: '01 / Population Health', title: 'Population Health & Cohorts' },
    { id: 'patient-360', badge: '02 / Patient 360', title: 'Patient 360 & Patient Master Chart' },
    { id: 'risk-stratification', badge: '03 / Risk Stratification', title: 'Risk Stratification' },
  ];

  // Stage 2 Tab metadata
  const stage2Tabs = [
    { id: 'risk-adjustment', badge: '04 / Risk Adjustment', title: 'Risk Adjustment & MRA' },
    { id: 'quality-care-gaps', badge: '05 / Quality & Gaps', title: 'Quality & Care Gaps' },
    { id: 'care-management', badge: '06 / Care Management', title: 'Care Management & Protocols' },
  ];

  // Stage 3 Tab metadata
  const stage3Tabs = [
    { id: 'transitions-of-care', badge: '07 / Transitions & ADT', title: 'Transitions of Care & ADT' },
    { id: 'referral-management', badge: '08 / Referral Mgmt', title: 'Referral Management & Directory' },
    { id: 'patient-engagement', badge: '09 / Patient Engagement', title: 'Patient Engagement & Outreach' },
  ];

  // Stage 4 Tab metadata
  const stage4Tabs = [
    { id: 'telemedicine', badge: '10 / Telemedicine', title: 'Telemedicine & Virtual Care' },
    { id: 'analytics', badge: '11 / Analytics & KPI', title: 'Analytics & Reporting' },
  ];

  return (
    <div className="bg-white text-[#35304c] min-h-screen">

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO (PANORAMIC COMMAND CENTER HERO)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full pt-32 sm:pt-40 pb-16 sm:pb-24 bg-[#0d1527] text-white overflow-hidden border-b border-[#1c1636]">
        
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img 
            src="/images/platform-hero-banner.jpg" 
            alt="Guardian Health Platform Command & Intelligence Center" 
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/98 via-[#0d1527]/85 to-[#0d1527]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1527]/90 via-transparent to-[#0d1527]" />
          
          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[450px] bg-[#7b3fc7]/25 blur-[160px] rounded-full" />
          <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-[#4f46e5]/20 blur-[140px] rounded-full" />
          <div className="absolute inset-0 ambient-grid opacity-15" />
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
                <Layers className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>THE GUARDIAN PLATFORM</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                One connected view of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">healthcare.</span>
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-2xl mb-8 font-normal">
                Guardian brings together the data, intelligence, and workflows required to move from population insight to patient action. Our platform combines connected healthcare records, risk stratification, clinical intelligence, and care management in one unified solution.
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
                  href="#pillars"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300 whitespace-nowrap shrink-0"
                >
                  <span>Explore Platform Modules</span>
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
                      <span className="text-[10px] text-purple-200 font-mono ml-2">guardian.platform-suite</span>
                    </div>
                    <span className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#7b3fc7] text-white border border-purple-300/50 font-bold">
                      Unified Suite
                    </span>
                  </div>

                  <div className="relative rounded-md overflow-hidden bg-white border border-[#e9e4f0] shadow-md">
                    <img 
                      src="/images/appliction images/Main Platform Dashboard.png" 
                      alt="Guardian Population Health Platform Dashboard" 
                      className="w-full h-auto object-contain filter brightness-[1.04] contrast-[1.02]"
                    />
                  </div>

                  <p className="text-[11px] text-purple-200/75 text-center mt-2 leading-relaxed italic">
                    *Illustrative sample demonstration data. Module records and metrics are for demonstration purposes only.
                  </p>

                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-purple-200 font-mono px-1 font-medium">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57]" /> 12 Integrated Modules
                    </span>
                    <span className="text-purple-300 font-bold">End-to-End VBC Engine</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE SIX VALUE PILLARS (#pillars)
          ───────────────────────────────────────────────────────────── */}
      <section id="pillars" className="py-16 sm:py-24 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>THE SIX PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
              One platform. The complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">value-based care lifecycle.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Guardian connects six interconnected pillars that carry clinical information from ecosystem data feeds toward frontline patient care and measured contract performance:
            </p>
          </div>

          {/* 6 Pillars Horizontal Grid on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 lg:gap-4 xl:gap-5">
            {sixPillars.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className={`p-2.5 sm:p-3 rounded-[1.8rem] ${pillar.frameColor} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative group`}
                >
                  <div className="w-14 h-2 bg-white rounded-b-lg mx-auto -mt-2.5 sm:-mt-3 mb-2 shadow-2xs" />

                  <div className="bg-white rounded-[1.3rem] p-4 flex flex-col justify-between h-full border border-black/5 shadow-2xs">
                    <div>
                      <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#f0ebf8]">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${pillar.color} shadow-2xs shrink-0`}>
                            <PillarIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className={`text-[9px] font-mono font-bold uppercase tracking-widest ${pillar.accentColor} block`}>
                              PILLAR {pillar.num}
                            </span>
                            <h3 className="text-sm font-extrabold text-[#1c1636] leading-tight">
                              {pillar.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <p className={`text-[11px] font-bold ${pillar.accentColor} mb-1 leading-snug`}>
                        {pillar.subtitle}
                      </p>
                      <p className="text-[11px] text-[#524b6b] leading-relaxed mb-3 font-normal">
                        {pillar.desc}
                      </p>

                      <div className="pt-2 border-t border-[#f0ebf8] space-y-1">
                        {pillar.items.slice(0, 4).map((item, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-[10.5px] text-[#1c1636]">
                            <CheckCircle2 className={`w-3 h-3 ${pillar.accentColor} shrink-0 mt-0.5`} />
                            <span className="font-medium text-[#2d2744] leading-tight truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#f0ebf8]">
                      <a
                        href={pillar.targetAnchor}
                        className={`inline-flex items-center gap-1 text-[11px] font-bold ${pillar.accentColor} hover:opacity-80 transition-opacity`}
                      >
                        <span>Explore Section</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="w-14 h-2 bg-white rounded-t-lg mx-auto -mb-2.5 sm:-mb-3 mt-2 shadow-2xs" />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CAROUSEL STAGE 1: DATA & PATIENT INTELLIGENCE
          Contains Modules:
          - 01 / Population Health & Cohorts (#population-health)
          - 02 / Patient 360 & Patient Master Chart (#patient-360)
          - 03 / Risk Stratification (#risk-stratification)
          ───────────────────────────────────────────────────────────── */}
      <section 
        id="stage-1" 
        onMouseEnter={() => setStage1Paused(true)}
        onMouseLeave={() => setStage1Paused(false)}
        className="py-16 sm:py-24 bg-white border-b border-[#e9e4f0] scroll-mt-24 relative"
      >
        {/* Invisible anchor target points for header dropdown links */}
        <div id="population-health" className="absolute top-0 left-0 -mt-24 pointer-events-none" />
        <div id="patient-360" className="absolute top-0 left-0 -mt-24 pointer-events-none" />
        <div id="risk-stratification" className="absolute top-0 left-0 -mt-24 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Carousel Stage Header & Controller */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-10 pb-6 border-b border-[#e9e4f0]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#7b3fc7]" />
                <span>STAGE 01 • DATA &amp; PATIENT INTELLIGENCE</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1c1636]">
                {stage1Tabs[stage1Tab].title}
              </h2>
            </div>

            {/* Stage Tabs & Slide Navigation */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* 15-second Auto-Change Visual Indicator */}
              <div 
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#faf8fd] border border-[#e5deee] text-[11px] font-mono text-[#716b89]"
                title={stage1Paused ? "Auto-play paused on hover" : "Auto-advancing every 15s"}
              >
                <Clock className="w-3 h-3 text-[#7b3fc7]" />
                <div className="w-12 h-1 bg-[#e5deee] rounded-full overflow-hidden">
                  <motion.div
                    key={`p1-${stage1Tab}-${stage1Paused}`}
                    initial={{ width: '0%' }}
                    animate={{ width: stage1Paused ? '0%' : '100%' }}
                    transition={{ duration: stage1Paused ? 0 : 15, ease: 'linear' }}
                    className="h-full bg-[#7b3fc7] rounded-full"
                  />
                </div>
                <span>15s</span>
              </div>

              <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#faf8fd] border border-[#e5deee] gap-1 shadow-2xs">
                {stage1Tabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setStage1Tab(idx)}
                    className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      stage1Tab === idx
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
                  onClick={() => setStage1Tab((prev) => (prev > 0 ? prev - 1 : stage1Tabs.length - 1))}
                  aria-label="Previous capability"
                  className="w-8 h-8 rounded-xl bg-[#faf8fd] border border-[#e5deee] hover:border-[#7b3fc7] text-[#524b6b] hover:text-[#7b3fc7] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-[#716b89] px-1">
                  {stage1Tab + 1}/{stage1Tabs.length}
                </span>
                <button
                  onClick={() => setStage1Tab((prev) => (prev < stage1Tabs.length - 1 ? prev + 1 : 0))}
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
            {stage1Tab === 0 && (
              <motion.div
                key="stage1-0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#7b3fc7]/10 text-[#7b3fc7] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <Users className="w-3.5 h-3.5" />
                    <span>01 / POPULATION HEALTH &amp; COHORTS</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Turn complex population data into <span className="text-[#7b3fc7]">actionable clinical cohorts.</span>
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Guardian harmonizes cross-payer claims feeds, multi-EHR clinical encounters, and lab results into unified population registries. Clinical teams can segment panels by chronic disease state, risk trajectory, or utilization frequency to launch targeted interventions.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-1.5 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#7b3fc7]" />
                      <span>Cardiometabolic &amp; Chronic Registries</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Dynamic condition filtering across hypertension, diabetes, CHF, COPD, and obesity, tracking longitudinal biomarker changes (HbA1c, BP, eGFR) over time.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <Database className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Multi-Source Data Ingestion</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Harmonizes multi-practice EHRs, medical and pharmacy claims, and lab results into unified longitudinal records with Master Patient Indexing (MPI).
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <Target className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Cohort Segmentation Builder</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Customizable cohort queries combining demographic markers, chronic diagnoses, risk scores, and recent utilization triggers.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Biomarker Risk Surveillance</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Tracks patient-level and panel-level lab trend movements, highlighting rising-risk patients with uncontrolled clinical values.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <Zap className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Targeted Campaign Routing</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Directly routes identified cohorts to care management queues, automated screening reminders, or Remote Patient Monitoring (RPM) programs.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {stage1Tab === 1 && (
              <motion.div
                key="stage1-1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl bg-[#120b24] text-white p-6 sm:p-10 border border-white/15 relative overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 pointer-events-none z-0">
                  <div className="absolute top-1/3 left-1/3 w-[600px] h-[450px] bg-[#7b3fc7]/25 blur-[160px] rounded-full" />
                  <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#4f46e5]/20 blur-[140px] rounded-full" />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-5 border border-white/15">
                      <UserCheck className="w-3.5 h-3.5 text-[#ff7a57]" />
                      <span>02 / PATIENT 360 &amp; PATIENT MASTER CHART</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
                      13 core clinical domains synthesized into one <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">longitudinal chart.</span>
                    </h3>

                    <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed mb-6 font-normal">
                      The <strong>Patient Master Chart (PMC)</strong> serves as Guardian’s definitive longitudinal clinical repository across 13 core domains, while <strong>Patient 360°</strong> acts as the dynamic, real-time intelligence cockpit delivering point-of-care decision support.
                    </p>

                    <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs font-mono text-purple-200 mb-6">
                      PMC: Longitudinal Clinical Repository • Patient 360°: Point-of-Care Cockpit
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold text-purple-200">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff7a57]" /> Master Patient Index (MPI)
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff7a57]" /> Cross-EHR Deduplication
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="relative rounded-2xl bg-[#1a1233] border border-white/20 shadow-2xl p-3 overflow-hidden">
                      <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-t-xl border-b border-white/10 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                          <span className="text-[11px] text-purple-200 font-mono ml-2">patient360.itsguardian.com</span>
                        </div>
                        <span className="text-[10px] px-2.5 py-0.5 rounded bg-[#7b3fc7] text-white font-mono font-bold">
                          Active: {activePmcDomain}
                        </span>
                      </div>

                      <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0]">
                        <img 
                          src="/images/appliction images/ui-patient-360.png" 
                          alt="Guardian Patient Master Chart 360° View" 
                          className="w-full h-auto object-contain max-h-[440px] block"
                        />
                      </div>

                      {/* Interactive PMC Domain Tabs */}
                      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-1.5 text-[9.5px] font-mono text-center">
                        {pmcDomains.map((dom) => (
                          <button
                            key={dom.name}
                            onClick={() => setActivePmcDomain(dom.name)}
                            className={`p-1.5 rounded transition-all cursor-pointer ${
                              activePmcDomain === dom.name
                                ? 'bg-[#7b3fc7] text-white font-bold border border-[#9565d2]'
                                : 'bg-white/5 border border-white/10 text-purple-200 hover:bg-white/10'
                            }`}
                          >
                            {dom.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-purple-300/70 leading-relaxed italic text-right mt-2">
                      *Illustrative sample demonstration data. Module records and metrics are for demonstration purposes only.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {stage1Tab === 2 && (
              <motion.div
                key="stage1-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#4f46e5]/10 text-[#4f46e5] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <Target className="w-3.5 h-3.5" />
                    <span>03 / RISK STRATIFICATION</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Identify rising-risk patients before <span className="text-[#4f46e5]">acute escalation occurs.</span>
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Guardian’s risk stratification models evaluate historical claims trends, inpatient and ER admission notifications, and longitudinal clinical markers to segment attributed panels into High Risk, Rising Risk, Moderate Risk, and Low Risk tiers.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-1.5 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#4f46e5]" />
                      <span>Predictive Utilization Indicators</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Highlights 30-day post-discharge readmission probability and emergency department high-utilizer patterns to direct care management interventions where they matter most.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                        <Target className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Population Risk Tiering</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Automated stratification of patient panels into distinct risk cohorts, alerting care teams to rising-risk patients trending toward high utilization.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">ED High-Utilizer Detection</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Identifies repetitive emergency department patterns and ambulatory care-sensitive conditions to trigger preventive primary care outreach.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                        <HeartPulse className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">30-Day Readmission Indicators</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Evaluates post-discharge clinical markers, prior hospitalizations, and medication changes to flag patients benefiting from immediate TCM follow-up.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                        <Activity className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Condition Registry Integration</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Automatically populates chronic condition registries (CHF, COPD, Diabetes, CKD) with risk-weighted patient lists for ongoing clinical monitoring.
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
          CAROUSEL STAGE 2: VALUE-BASED PERFORMANCE & CARE DELIVERY
          Contains Modules:
          - 04 / Risk Adjustment & MRA (#risk-adjustment)
          - 05 / Quality & Care Gaps (#quality-care-gaps)
          - 06 / Care Management (#care-management)
          ───────────────────────────────────────────────────────────── */}
      <section 
        id="stage-2" 
        onMouseEnter={() => setStage2Paused(true)}
        onMouseLeave={() => setStage2Paused(false)}
        className="py-16 sm:py-24 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24 relative"
      >
        {/* Invisible anchor target points for header dropdown links */}
        <div id="risk-adjustment" className="absolute top-0 left-0 -mt-24 pointer-events-none" />
        <div id="quality-care-gaps" className="absolute top-0 left-0 -mt-24 pointer-events-none" />
        <div id="care-management" className="absolute top-0 left-0 -mt-24 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Carousel Stage Header & Controller */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-10 pb-6 border-b border-[#e9e4f0]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9333ea]/10 text-[#9333ea] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5 text-[#9333ea]" />
                <span>STAGE 02 • PERFORMANCE &amp; CARE DELIVERY</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1c1636]">
                {stage2Tabs[stage2Tab].title}
              </h2>
            </div>

            {/* Stage Tabs & Slide Navigation */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* 15-second Auto-Change Visual Indicator */}
              <div 
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white border border-[#e5deee] text-[11px] font-mono text-[#716b89]"
                title={stage2Paused ? "Auto-play paused on hover" : "Auto-advancing every 15s"}
              >
                <Clock className="w-3 h-3 text-[#9333ea]" />
                <div className="w-12 h-1 bg-[#e5deee] rounded-full overflow-hidden">
                  <motion.div
                    key={`p2-${stage2Tab}-${stage2Paused}`}
                    initial={{ width: '0%' }}
                    animate={{ width: stage2Paused ? '0%' : '100%' }}
                    transition={{ duration: stage2Paused ? 0 : 15, ease: 'linear' }}
                    className="h-full bg-[#9333ea] rounded-full"
                  />
                </div>
                <span>15s</span>
              </div>

              <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-[#e5deee] gap-1 shadow-2xs">
                {stage2Tabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setStage2Tab(idx)}
                    className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      stage2Tab === idx
                        ? 'bg-[#9333ea] text-white shadow-xs'
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
                  onClick={() => setStage2Tab((prev) => (prev > 0 ? prev - 1 : stage2Tabs.length - 1))}
                  aria-label="Previous capability"
                  className="w-8 h-8 rounded-xl bg-white border border-[#e5deee] hover:border-[#9333ea] text-[#524b6b] hover:text-[#9333ea] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-[#716b89] px-1">
                  {stage2Tab + 1}/{stage2Tabs.length}
                </span>
                <button
                  onClick={() => setStage2Tab((prev) => (prev < stage2Tabs.length - 1 ? prev + 1 : 0))}
                  aria-label="Next capability"
                  className="w-8 h-8 rounded-xl bg-white border border-[#e5deee] hover:border-[#9333ea] text-[#524b6b] hover:text-[#9333ea] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Slide Content */}
          <AnimatePresence mode="wait">
            {stage2Tab === 0 && (
              <motion.div
                key="stage2-0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#9333ea]/10 text-[#9333ea] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <Award className="w-3.5 h-3.5" />
                    <span>04 / RISK ADJUSTMENT &amp; MRA</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Dual-engine CMS-HCC suspecting with <span className="text-[#9333ea]">verbatim source citations.</span>
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Medicare Advantage plans and risk-bearing provider organizations must maintain accurate, audit-ready clinical documentation. Guardian evaluates unstructured progress notes, discharge summaries, and lab reports across concurrent CMS-HCC V24 and V28 models.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-white border border-[#e9e4f0] mb-6 shadow-2xs">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-1.5 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#9333ea]" />
                      <span>Auditable Evidence Trails</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Every suspecting recommendation pairs with verbatim chart note snippets, encounter dates, and page numbers for certified coder validation in dedicated review cockpits.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#9333ea]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#9333ea] flex items-center justify-center mb-3 shadow-2xs">
                        <Award className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Dual CMS-HCC (V24 &amp; V28) Models</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Evaluates prospective chronic condition suspecting simultaneously across legacy V24 and current V28 models to guide transition planning.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#9333ea]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#9333ea] flex items-center justify-center mb-3 shadow-2xs">
                        <FileText className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Sentence-Level Chart Citations</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Attaches exact progress note text and lab values to suspecting findings, eliminating black-box recommendations and streamlining chart review.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#9333ea]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#9333ea] flex items-center justify-center mb-3 shadow-2xs">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Coder Chart Review Cockpit</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Dedicated workspace for certified risk coders and clinical documentation specialists to accept, modify, or dismiss suspecting findings with full audit logging.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#9333ea]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#9333ea] flex items-center justify-center mb-3 shadow-2xs">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Prospective RAF Score Projections</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Projects expected risk adjustment factor (RAF) score trajectories based on condition recapture and documented clinical complexity.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {stage2Tab === 1 && (
              <motion.div
                key="stage2-1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ea580c]/10 text-[#ea580c] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <Target className="w-3.5 h-3.5" />
                    <span>05 / QUALITY &amp; CARE GAPS</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Automate HEDIS, MIPS, and MSSP care gap closure <span className="text-[#ea580c]">at the point of care.</span>
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Closing clinical quality gaps requires continuous surveillance rather than end-of-year manual chart chasing. Guardian monitors NCQA HEDIS, CMS MIPS, and MSSP quality measures year-round, delivering point-of-care alerts to clinicians during scheduled encounters.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-white border border-[#e9e4f0] mb-6 shadow-2xs">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-1.5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ea580c]" />
                      <span>Point-of-Care Encounter Alerts</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Surfaces open preventive screenings, diabetes lab tests, and medication adherence gaps directly into physician workflows during patient visits for same-day closure.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <Award className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Year-Round HEDIS Surveillance</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Automated rules engine continuously evaluating attributed panels against NCQA HEDIS technical specifications to track measure compliance.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <Zap className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Point-of-Care EHR Notifications</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Embedded alerts delivered into physician scheduling views and encounter charts, enabling immediate ordering of outstanding preventive measures.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <Users className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Multichannel Patient Reminders</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Automated SMS and email reminders to schedule outstanding mammograms, colorectal screenings, eye exams, and annual wellness visits.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Closed-Loop Quality Auditing</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Complete audit logging of all gap closures, provider sign-offs, and documentation notes ready for annual health plan and CMS audit submissions.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {stage2Tab === 2 && (
              <motion.div
                key="stage2-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ff7a57]/10 text-[#ea580c] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <HeartPulse className="w-3.5 h-3.5 text-[#ff7a57]" />
                    <span>06 / CARE MANAGEMENT</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Centralize clinical worklists, assessment scales, and <span className="text-[#ea580c]">care plans.</span>
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Frontline care teams need dedicated tools that coordinate interventions across disciplines. Guardian combines an extensive library of 150+ validated clinical assessment scales, an individualized care plan builder, and protocol automation for Medicare clinical programs.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-white border border-[#e9e4f0] mb-6 shadow-2xs">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-1.5 flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-[#ea580c]" />
                      <span>Program Protocol Automation</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Automated qualification and task routing supporting Chronic Care Management (CCM), Transitional Care Management (TCM), and Remote Patient Monitoring (RPM).
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ff7a57]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <Award className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">150+ Standardized Assessment Scales</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Extensive library of validated clinical, behavioral, and SDoH scales (e.g. PHQ-9, GAD-7, PRAPARE, Katz ADL) with automated longitudinal scoring.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ff7a57]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <FileText className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Personal Care Plan Builder</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Interactive care plan construction supporting patient-centered measurable goals, barrier identification, intervention schedules, and progress tracking.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ff7a57]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <Workflow className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Protocol Rules Automation</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Automated rules matching patients to CCM, TCM, RPM, and Principal Care Management (PCM) criteria, initiating compliant intervention tasks.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ff7a57]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <Users className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Multidisciplinary Workspaces</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Shared workspaces connecting nurses, care navigators, and account executives with role-based task delegation and encounter logging.
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
          CAROUSEL STAGE 3: CARE CONTINUUM & NETWORK COORDINATION
          Contains Modules:
          - 07 / Transitions of Care & ADT (#transitions-of-care)
          - 08 / Referral Management & Directory (#referral-management)
          - 09 / Patient Engagement (#patient-engagement)
          ───────────────────────────────────────────────────────────── */}
      <section 
        id="stage-3" 
        onMouseEnter={() => setStage3Paused(true)}
        onMouseLeave={() => setStage3Paused(false)}
        className="py-16 sm:py-24 bg-white border-b border-[#e9e4f0] scroll-mt-24 relative"
      >
        {/* Invisible anchor target points for header dropdown links */}
        <div id="transitions-of-care" className="absolute top-0 left-0 -mt-24 pointer-events-none" />
        <div id="referral-management" className="absolute top-0 left-0 -mt-24 pointer-events-none" />
        <div id="patient-engagement" className="absolute top-0 left-0 -mt-24 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Carousel Stage Header & Controller */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-10 pb-6 border-b border-[#e9e4f0]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <Network className="w-3.5 h-3.5 text-[#7b3fc7]" />
                <span>STAGE 03 • CONTINUUM &amp; COORDINATION</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1c1636]">
                {stage3Tabs[stage3Tab].title}
              </h2>
            </div>

            {/* Stage Tabs & Slide Navigation */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* 15-second Auto-Change Visual Indicator */}
              <div 
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#faf8fd] border border-[#e5deee] text-[11px] font-mono text-[#716b89]"
                title={stage3Paused ? "Auto-play paused on hover" : "Auto-advancing every 15s"}
              >
                <Clock className="w-3 h-3 text-[#7b3fc7]" />
                <div className="w-12 h-1 bg-[#e5deee] rounded-full overflow-hidden">
                  <motion.div
                    key={`p3-${stage3Tab}-${stage3Paused}`}
                    initial={{ width: '0%' }}
                    animate={{ width: stage3Paused ? '0%' : '100%' }}
                    transition={{ duration: stage3Paused ? 0 : 15, ease: 'linear' }}
                    className="h-full bg-[#7b3fc7] rounded-full"
                  />
                </div>
                <span>15s</span>
              </div>

              <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#faf8fd] border border-[#e5deee] gap-1 shadow-2xs">
                {stage3Tabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setStage3Tab(idx)}
                    className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      stage3Tab === idx
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
                  onClick={() => setStage3Tab((prev) => (prev > 0 ? prev - 1 : stage3Tabs.length - 1))}
                  aria-label="Previous capability"
                  className="w-8 h-8 rounded-xl bg-[#faf8fd] border border-[#e5deee] hover:border-[#7b3fc7] text-[#524b6b] hover:text-[#7b3fc7] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-[#716b89] px-1">
                  {stage3Tab + 1}/{stage3Tabs.length}
                </span>
                <button
                  onClick={() => setStage3Tab((prev) => (prev < stage3Tabs.length - 1 ? prev + 1 : 0))}
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
            {stage3Tab === 0 && (
              <motion.div
                key="stage3-0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#7b3fc7]/10 text-[#7b3fc7] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <Bell className="w-3.5 h-3.5" />
                    <span>07 / TRANSITIONS OF CARE &amp; ADT</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Real-time hospital admission and discharge alerts to <span className="text-[#7b3fc7]">prevent readmissions.</span>
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Post-discharge care transitions represent the highest-risk window for clinical decompensation and costly hospital readmissions. Guardian captures emergency department and inpatient admission, discharge, and transfer (ADT) event notifications in real time.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-1.5 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#7b3fc7]" />
                      <span>30-Day TCM Outreach Window</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Automatically initiates the 30-day Transitional Care Management (TCM) workflow upon inpatient discharge, scheduling 48-hour follow-up calls and PCP appointments.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <Bell className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Real-Time ADT Alert Ingestion</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Live ingestion of hospital admission, discharge, and transfer alerts across regional HIEs and direct hospital interfaces.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <Clock className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">30-Day TCM Window Tracking</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Standardized compliance countdown enforcing 48-hour post-discharge contact and 7-to-14 day clinical encounter scheduling.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <HeartPulse className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Medication Reconciliation</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Structured reconciliation cockpits comparing inpatient discharge orders against historical ambulatory medication profiles.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Readmission Analytics</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Organizational scorecards tracking 30-day all-cause readmission rates, discharge dispositions, and avoidable emergency visits.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {stage3Tab === 1 && (
              <motion.div
                key="stage3-1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#4f46e5]/10 text-[#4f46e5] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <Share2 className="w-3.5 h-3.5" />
                    <span>08 / REFERRAL MANAGEMENT</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Curb out-of-network leakage with specialist geo-mapping and <span className="text-[#4f46e5]">closed-loop routing.</span>
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Out-of-network specialist referrals drive up contract costs and fracture clinical continuity. Guardian enables primary care clinicians to locate in-network specialists by clinical specialty and zip code, dispatch Direct Secure Messaging (DSM) orders, and close referral loops.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-1.5 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#4f46e5]" />
                      <span>Specialist Geo-Mapping Directory</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Interactive provider geo-mapping and taxonomy search filtering by provider name, specialty, accepted insurance plans, and proximity to the patient.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Network Specialist Directory</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Searchable provider directory enabling primary care teams to locate preferred in-network specialists with real-time distance calculation.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Electronic DSM Referral Dispatch</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Automated electronic referral creation using native Direct Secure Messaging, attaching clinical summaries, lab reports, and chart notes.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Closed-Loop Status Tracking</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        End-to-end status visibility (Pending, Scheduled, Completed), retrieving specialist consultation notes back into Patient 360 to close loops.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#4f46e5]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#4f46e5] flex items-center justify-center mb-3 shadow-2xs">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Network Retention Analytics</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Measures referral volume, turnaround times, and in-network vs. out-of-network leakage rates across practice locations.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {stage3Tab === 2 && (
              <motion.div
                key="stage3-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ea580c]/10 text-[#ea580c] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <Users className="w-3.5 h-3.5" />
                    <span>09 / PATIENT ENGAGEMENT</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Empower patients with <span className="text-[#ea580c]">multichannel communication and outreach.</span>
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Value-based healthcare success relies on sustained patient participation between clinical visits. Guardian automates personalized communication across SMS, email, and care coordinator queues—improving appointment adherence and closing preventive care gaps.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-1.5 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#ea580c]" />
                      <span>Personalized Campaign Automation</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Automated appointment reminders, preventive screening alerts, and chronic condition check-ins tailored to patient language preference and clinical risk tier.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <Bell className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Automated SMS &amp; Email Reminders</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Reduces no-show rates with automated, two-way appointment reminders and rescheduling prompts delivered directly to patient mobile devices.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <FileText className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Digital Intake &amp; Assessments</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Paperless pre-visit intake forms, PHQ-9 depression screeners, and SDoH surveys completed on mobile devices before clinical encounters.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <HeartPulse className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Patient Education Library</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Condition-specific educational materials on diabetes management, hypertension, and medication adherence shared directly via secure portal links.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#ea580c]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Outreach Campaign Logging</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Tracks patient outreach attempts, confirmation statuses, and barrier notes within Patient 360 for care team visibility.
                      </p>
                    </div>
                  </div>

                  {/* Product Screenshot Proof */}
                  <div className="mt-6 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] p-3 shadow-xs overflow-hidden">
                    <div className="flex items-center justify-between px-3 py-1.5 bg-white rounded-lg border-b border-[#e9e4f0] mb-2 text-xs font-mono text-[#524b6b]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c] inline-block" />
                        <span className="ml-2 font-semibold text-[#1c1636]">engagement.itsguardian.com — Multichannel Triage &amp; Intake</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#ea580c]/10 text-[#ea580c] font-bold">Automated Queue</span>
                    </div>
                    <div className="relative rounded-lg overflow-hidden border border-[#e9e4f0] bg-white">
                      <img 
                        src="/images/product-ui/ui-er-rpm-triage.png" 
                        alt="Guardian Patient Engagement and Triage Queue Interface" 
                        className="w-full h-auto object-cover max-h-[320px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CAROUSEL STAGE 4: VIRTUAL CARE & EXECUTIVE INTELLIGENCE
          Contains Modules:
          - 10 / Telemedicine & Virtual Care (#telemedicine)
          - 11 / Analytics & Reporting (#analytics)
          ───────────────────────────────────────────────────────────── */}
      <section 
        id="stage-4" 
        onMouseEnter={() => setStage4Paused(true)}
        onMouseLeave={() => setStage4Paused(false)}
        className="py-16 sm:py-24 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24 relative"
      >
        {/* Invisible anchor target points for header dropdown links */}
        <div id="telemedicine" className="absolute top-0 left-0 -mt-24 pointer-events-none" />
        <div id="analytics" className="absolute top-0 left-0 -mt-24 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Carousel Stage Header & Controller */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-10 pb-6 border-b border-[#e9e4f0]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7a57]/10 text-[#ea580c] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <Video className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>STAGE 04 • VIRTUAL DELIVERY &amp; EXECUTIVE ANALYTICS</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1c1636]">
                {stage4Tabs[stage4Tab].title}
              </h2>
            </div>

            {/* Stage Tabs & Slide Navigation */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* 15-second Auto-Change Visual Indicator */}
              <div 
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white border border-[#e5deee] text-[11px] font-mono text-[#716b89]"
                title={stage4Paused ? "Auto-play paused on hover" : "Auto-advancing every 15s"}
              >
                <Clock className="w-3 h-3 text-[#ea580c]" />
                <div className="w-12 h-1 bg-[#e5deee] rounded-full overflow-hidden">
                  <motion.div
                    key={`p4-${stage4Tab}-${stage4Paused}`}
                    initial={{ width: '0%' }}
                    animate={{ width: stage4Paused ? '0%' : '100%' }}
                    transition={{ duration: stage4Paused ? 0 : 15, ease: 'linear' }}
                    className="h-full bg-[#ea580c] rounded-full"
                  />
                </div>
                <span>15s</span>
              </div>

              <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-[#e5deee] gap-1 shadow-2xs">
                {stage4Tabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setStage4Tab(idx)}
                    className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      stage4Tab === idx
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
                  onClick={() => setStage4Tab((prev) => (prev > 0 ? prev - 1 : stage4Tabs.length - 1))}
                  aria-label="Previous capability"
                  className="w-8 h-8 rounded-xl bg-white border border-[#e5deee] hover:border-[#ea580c] text-[#524b6b] hover:text-[#ea580c] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-[#716b89] px-1">
                  {stage4Tab + 1}/{stage4Tabs.length}
                </span>
                <button
                  onClick={() => setStage4Tab((prev) => (prev < stage4Tabs.length - 1 ? prev + 1 : 0))}
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
            {stage4Tab === 0 && (
              <motion.div
                key="stage4-0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ff7a57]/10 text-[#ea580c] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <Video className="w-3.5 h-3.5 text-[#ff7a57]" />
                    <span>10 / TELEMEDICINE &amp; VIRTUAL CARE</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Integrated browser-based video visits <span className="text-[#ea580c]">connected to the chart.</span>
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Virtual care is an essential component of comprehensive care coordination and post-discharge follow-up. Guardian’s integrated telemedicine module requires no external app downloads, running securely through standard web browsers while connected directly to the Patient Master Chart.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-white border border-[#e9e4f0] mb-6 shadow-2xs">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-1.5 flex items-center gap-2">
                      <Video className="w-4 h-4 text-[#ea580c]" />
                      <span>Zero-Install WebRTC Video</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Patients join secure virtual visits with a single SMS link click on iOS, Android, or desktop browsers, eliminating technology barriers for elderly and rural beneficiaries.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ff7a57]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <Video className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Browser-Based WebRTC Visits</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Encrypted, zero-download video visits accessible via mobile or desktop browsers, delivering HD video and clear two-way audio.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ff7a57]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <FileText className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">In-Visit Clinical Charting</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Clinicians document progress notes, review active care gaps, and update problem lists side-by-side with the live video consultation stream.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ff7a57]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <Users className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Multi-Participant Consults</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Supports inviting family caregivers, medical interpreters, and specialist physicians directly into the virtual exam room.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#ff7a57]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#ea580c] flex items-center justify-center mb-3 shadow-2xs">
                        <Clock className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Post-Discharge TCM Visits</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Facilitates required 7-day and 14-day transitional care follow-up visits when transportation or mobility barriers prevent in-person clinic visits.
                      </p>
                    </div>
                  </div>

                  {/* Product Screenshot Proof */}
                  <div className="mt-6 rounded-2xl bg-white border border-[#e9e4f0] p-3 shadow-xs overflow-hidden">
                    <div className="flex items-center justify-between px-3 py-1.5 bg-[#faf8fd] rounded-lg border-b border-[#e9e4f0] mb-2 text-xs font-mono text-[#524b6b]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c] inline-block" />
                        <span className="ml-2 font-semibold text-[#1c1636]">telemed.itsguardian.com — Virtual Clinical Consultation</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#ff7a57]/10 text-[#ea580c] font-bold">WebRTC Active</span>
                    </div>
                    <div className="relative rounded-lg overflow-hidden border border-[#e9e4f0] bg-white">
                      <img 
                        src="/images/product-ui/ui-telemedicine.png" 
                        alt="Guardian Telemedicine and Virtual Care Consultation Interface" 
                        className="w-full h-auto object-cover max-h-[380px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {stage4Tab === 1 && (
              <motion.div
                key="stage4-1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#7b3fc7]/10 text-[#7b3fc7] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>11 / ANALYTICS &amp; REPORTING</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                    Executive analytics, financial tracking, and <span className="text-[#7b3fc7]">KPI cockpits.</span>
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                    Managing value-based care contracts requires transparency across clinical quality, financial expenditure, and operational throughput. Guardian delivers real-time KPI surveillance, PMPM expenditure trend analysis, and executive cockpits across multiple health plan contracts.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-white border border-[#e9e4f0] shadow-2xs">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1636] mb-1.5 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#7b3fc7]" />
                      <span>Financial Benchmark Surveillance</span>
                    </h4>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      Monitors Per Member Per Month (PMPM) expenditure trajectories against contract benchmarks across inpatient, outpatient, and pharmacy claims.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Executive Dashboards</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        High-level cockpits summarizing contract performance, attribution roster changes, and quality score trajectories for executive leadership.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <DollarSign className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">PMPM / PMPY Analytics</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Granular cost category breakdown analyzing medical expenditure trends, pharmacy utilization, and risk-adjusted shared savings performance.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <Award className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Quality Measure Scorecards</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Practice and provider-level scorecards tracking HEDIS, MIPS, and ACO measure performance against regional and national benchmarks.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#e9e4f0] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all">
                      <div className="w-9 h-9 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[#7b3fc7] flex items-center justify-center mb-3 shadow-2xs">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">Utilization Trend Tracking</h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        Monitors hospital admissions per thousand, emergency visit rates, and specialist referral patterns across primary care clinic locations.
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
          SECTION 5: COMPLETE FEATURE INVENTORY DIRECTORY
          Searchable Directory across 17 categories / 241 features
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#e9e4f0] scroll-mt-24">
        <PlatformFeatureInventory />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: FINAL EXECUTIVE CTA (#contact)
          ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#faf8fd] scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#1c1636] via-[#2d1b54] to-[#0d1527] text-white shadow-2xl relative overflow-hidden border border-white/10">
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7b3fc7]/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4f46e5]/25 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>EXPERIENCE THE GUARDIAN PLATFORM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                See how Guardian connects your healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">data, intelligence, and care teams.</span>
              </h2>

              <p className="text-sm sm:text-base text-purple-100/90 mb-8 leading-relaxed font-normal">
                Discover how our unified value-based care platform can help your organization connect records, improve clinical quality scores, and excel under risk contracts.
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
                  to="/solutions"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-xs sm:text-sm hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300"
                >
                  <span>Explore Solutions</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
