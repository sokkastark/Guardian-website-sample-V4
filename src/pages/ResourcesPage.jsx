import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Lightbulb, 
  Workflow, 
  Search, 
  TrendingUp,
  Layers,
  Compass,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

export default function ResourcesPage() {
  const location = useLocation();

  // Carousel State for "Explore Guardian's Expertise"
  const [activeCategory, setActiveCategory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Scroll to anchor on load or hash change with header offset
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      
      // Auto-switch carousel tab if an expertise sub-anchor was targeted
      if (targetId === 'applications') setActiveCategory(0);
      else if (targetId === 'technical-insights') setActiveCategory(1);
      else if (targetId === 'capabilities') setActiveCategory(2);

      const scrollToElement = () => {
        const element = document.getElementById(targetId) || document.getElementById('expertise');
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = Math.max(0, elementPosition - headerOffset);
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          return true;
        }
        return false;
      };

      if (!scrollToElement()) {
        const timer = setTimeout(scrollToElement, 120);
        return () => clearTimeout(timer);
      }
    }
  }, [location.hash, location.pathname]);

  const categories = [
    {
      id: 'applications',
      title: 'Real-World Applications',
      count: '2 Workflows',
      icon: TrendingUp,
      subtitle: 'How healthcare organizations deploy Guardian capabilities to resolve data fragmentation and transition-of-care friction.'
    },
    {
      id: 'technical-insights',
      title: 'Technical Insights',
      count: '2 Briefings',
      icon: Cpu,
      subtitle: 'Architectural briefs detailing Guardian’s longitudinal schema, FHIR R4 interoperability layer, and risk suspecting algorithms.'
    },
    {
      id: 'capabilities',
      title: 'Platform Capabilities',
      count: '3 Modules',
      icon: Workflow,
      subtitle: 'Direct links to explore Guardian’s live software modules and clinician interfaces.'
    }
  ];

  // 10-second auto-rotation for the expertise carousel
  useEffect(() => {
    if (isPaused || isHovered) return;

    const timer = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [isPaused, isHovered, categories.length]);

  const handleNext = () => {
    setActiveCategory((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <div className="bg-white text-[#35304c] min-h-screen">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO (PANORAMIC CORPORATE HERO BANNER)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#0d1527] text-white overflow-hidden border-b border-[#1c1636]">
        
        {/* Full-Bleed Background Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img 
            src="/images/clinician-whitecoat.jpg" 
            alt="Healthcare professionals engaging with Guardian knowledge resources" 
            className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/95 via-[#0d1527]/80 to-[#0d1527]/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1527]/80 via-transparent to-[#0d1527]" />
          
          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[450px] bg-[#7b3fc7]/30 blur-[140px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#ff7a57]/25 blur-[120px] rounded-full" />
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
                <BookOpen className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>GUARDIAN KNOWLEDGE & RESOURCE HUB</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                Ideas, evidence, and guidance for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">value-based healthcare leaders.</span>
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-2xl mb-8 font-normal">
                Explore healthcare insights, operational playbooks, and verified platform capabilities designed to help health systems, ACOs, and health plans move from data to outcome.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#insights"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0 group"
                >
                  <span>Explore Knowledge Centers</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ff7a57]" />
                </a>

                <Link
                  to="/company?intent=demo#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300 whitespace-nowrap shrink-0"
                >
                  <span>Talk to Guardian</span>
                </Link>
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
                      <span className="text-[10px] text-purple-200 font-mono ml-2">resources.itsguardian.com</span>
                    </div>
                    <span className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#7b3fc7] text-white border border-purple-300/50 font-bold">
                      Knowledge Hub
                    </span>
                  </div>

                  <div className="relative rounded-md overflow-hidden bg-white border border-[#e9e4f0] p-4 text-[#1c1636] shadow-md">
                    <span className="text-[10px] font-mono font-bold text-[#7b3fc7] uppercase tracking-wider block mb-1">
                      Featured Operational Framework
                    </span>
                    <h3 className="text-base font-extrabold mb-2 text-[#1c1636]">
                      CMS-HCC Risk Adjustment & V28 Transition Framework
                    </h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed mb-3 font-normal">
                      Structured guidelines for risk coding and care teams navigating dual V24/V28 model transitions and ethical documentation.
                    </p>
                    <a 
                      href="#guides" 
                      className="flex items-center justify-between text-[11px] font-bold text-[#7b3fc7] pt-2 border-t border-[#f0ebf8] hover:text-[#9565d2] transition-colors"
                    >
                      <span>Jump to Operational Guides</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-purple-200 font-mono px-1 font-medium">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57]" /> Curated Knowledge Centers
                    </span>
                    <span className="text-purple-300 font-bold">Updated Regularly</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: #insights (EXECUTIVE PERSPECTIVES & INDUSTRY INSIGHTS)
          ───────────────────────────────────────────────────────────── */}
      <section id="insights" className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>01 / EXECUTIVE PERSPECTIVES & INDUSTRY INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Perspectives shaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">healthcare intelligence.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed font-normal">
              Source-grounded analysis of healthcare data interoperability, clinical decision support, and risk adjustment integrity across value-based networks:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* Topic 1 */}
            <div className="p-7 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7b3fc7] px-2.5 py-1 rounded bg-[#7b3fc7]/10">
                    Interoperability & Data
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#1c1636] mb-2 leading-snug">
                  Connecting Fragmented Healthcare Data Across Networks
                </h3>
                <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-5 font-normal">
                  How multi-EHR aggregation, C-CDA parsing, and sub-second Master Patient Indexing (MPI) establish a unified longitudinal patient chart across siloed providers.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2 text-xs text-[#35304c]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7b3fc7] shrink-0 mt-0.5" />
                    <span>Multi-EHR terminology normalization (LOINC, RxNorm, ICD-10)</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#35304c]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7b3fc7] shrink-0 mt-0.5" />
                    <span>Resolving duplicate identities via deterministic and probabilistic MPI</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#e9e4f0] flex items-center justify-between">
                <Link to="/data-integration" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7b3fc7] hover:underline">
                  <span>Explore Data Integration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] font-mono text-[#8e8a9f]">Perspective Brief</span>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="p-7 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7b3fc7] px-2.5 py-1 rounded bg-[#7b3fc7]/10">
                    Clinical Intelligence
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#1c1636] mb-2 leading-snug">
                  Contextual Clinical Intelligence at the Point of Care
                </h3>
                <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-5 font-normal">
                  How knowledge graph engines and predictive modeling convert disparate clinical signals into actionable point-of-care alerts during clinician patient encounters.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2 text-xs text-[#35304c]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7b3fc7] shrink-0 mt-0.5" />
                    <span>Surfacing prospective HCC documentation suspecting at point of care</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#35304c]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7b3fc7] shrink-0 mt-0.5" />
                    <span>Automated HEDIS and MIPS care gap identification</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#e9e4f0] flex items-center justify-between">
                <Link to="/intelligence" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7b3fc7] hover:underline">
                  <span>Explore Intelligence Engine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] font-mono text-[#8e8a9f]">Perspective Brief</span>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="p-7 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7b3fc7] px-2.5 py-1 rounded bg-[#7b3fc7]/10">
                    Care Coordination
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#1c1636] mb-2 leading-snug">
                  Closing the 30-Day Window Following Hospital Discharge
                </h3>
                <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-5 font-normal">
                  How real-time hospital admission, discharge, and transfer (ADT) event streams enable rapid care manager engagement and avoidable readmission prevention.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2 text-xs text-[#35304c]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7b3fc7] shrink-0 mt-0.5" />
                    <span>Automated 48-hour post-discharge outreach triggers</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#35304c]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7b3fc7] shrink-0 mt-0.5" />
                    <span>Standardized clinical assessment scales across multidisciplinary teams</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#e9e4f0] flex items-center justify-between">
                <Link to="/platform/transitions-of-care-adt" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7b3fc7] hover:underline">
                  <span>Explore TOC Workflows</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] font-mono text-[#8e8a9f]">Perspective Brief</span>
              </div>
            </div>

            {/* Topic 4 */}
            <div className="p-7 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7b3fc7] px-2.5 py-1 rounded bg-[#7b3fc7]/10">
                    Risk Performance
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#1c1636] mb-2 leading-snug">
                  Navigating Dual CMS-HCC V24 and V28 Model Transitions
                </h3>
                <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-5 font-normal">
                  Strategic considerations for ACOs, CINs, and Medicare Advantage plans managing risk score integrity and documentation accuracy during CMS model phase-in.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2 text-xs text-[#35304c]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7b3fc7] shrink-0 mt-0.5" />
                    <span>Benchmarking prospective RAF scores against historical baselines</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#35304c]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7b3fc7] shrink-0 mt-0.5" />
                    <span>Maintaining ethical clinical documentation integrity</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#e9e4f0] flex items-center justify-between">
                <Link to="/platform/risk-adjustment" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7b3fc7] hover:underline">
                  <span>Explore Risk Adjustment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] font-mono text-[#8e8a9f]">Perspective Brief</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: #guides (IMPLEMENTATION GUIDES)
          ───────────────────────────────────────────────────────────── */}
      <section id="guides" className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <BookOpen className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>02 / PRACTICAL OPERATIONAL PLAYBOOKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Actionable frameworks for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">clinical & operational teams.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed font-normal">
              Structured operational reference guides for risk coders, care coordinators, and clinical leaders navigating complex workflows:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* Guide 1 */}
            <div className="p-7 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7b3fc7] px-2.5 py-1 rounded bg-[#7b3fc7]/10 inline-block mb-3">
                  Playbook 01 // Data Architecture
                </span>
                <h3 className="text-xl font-extrabold text-[#1c1636] mb-2 leading-snug">
                  Healthcare Data Integration Readiness Framework
                </h3>
                <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-5 font-normal">
                  Step-by-step methodology for evaluating organization-wide EMR instances, 837/835 EDI claims data, CMS CCLF files, and real-time ADT event streams.
                </p>
                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-5 space-y-2 text-xs">
                  <div className="font-bold text-[#1c1636] text-[11px] uppercase tracking-wide">Key Focus Areas:</div>
                  <div className="text-[#524b6b]">• Establishing Master Patient Indexing (MPI) deduplication rules</div>
                  <div className="text-[#524b6b]">• Standardizing multi-EHR clinical feeds to canonical schemas</div>
                  <div className="text-[#524b6b]">• Validating claims and encounter data completeness</div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#f0ebf8] flex items-center justify-between">
                <Link to="/data-integration/data-foundation" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7b3fc7] hover:text-[#9565d2] hover:underline">
                  <span>View Data Foundation Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] font-mono text-[#8e8a9f]">Implementation Manual</span>
              </div>
            </div>

            {/* Guide 2 */}
            <div className="p-7 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7b3fc7] px-2.5 py-1 rounded bg-[#7b3fc7]/10 inline-block mb-3">
                  Playbook 02 // Risk & Compliance
                </span>
                <h3 className="text-xl font-extrabold text-[#1c1636] mb-2 leading-snug">
                  CMS-HCC Risk Adjustment & Coding Integrity Playbook
                </h3>
                <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-5 font-normal">
                  Practical guide for coding teams and clinical managers configuring prospective and retrospective chart audits, suspecting rules, and documentation workflows.
                </p>
                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-5 space-y-2 text-xs">
                  <div className="font-bold text-[#1c1636] text-[11px] uppercase tracking-wide">Key Focus Areas:</div>
                  <div className="text-[#524b6b]">• Aligning dual CMS-HCC V24 and V28 risk model suspecting rules</div>
                  <div className="text-[#524b6b]">• Setting up risk coder chart audit protocols and queues</div>
                  <div className="text-[#524b6b]">• Maintaining audit trails for clinical documentation integrity</div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#f0ebf8] flex items-center justify-between">
                <Link to="/platform/risk-adjustment" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7b3fc7] hover:text-[#9565d2] hover:underline">
                  <span>View Risk Workflows</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] font-mono text-[#8e8a9f]">Implementation Manual</span>
              </div>
            </div>

            {/* Guide 3 */}
            <div className="p-7 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7b3fc7] px-2.5 py-1 rounded bg-[#7b3fc7]/10 inline-block mb-3">
                  Playbook 03 // Care Management
                </span>
                <h3 className="text-xl font-extrabold text-[#1c1636] mb-2 leading-snug">
                  Multidisciplinary Care Coordination & Assessment Manual
                </h3>
                <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-5 font-normal">
                  Framework for deploying standardized care plans, assessment scale libraries, and multidisciplinary task routing across CCM, TCM, RPM, and PCM programs.
                </p>
                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-5 space-y-2 text-xs">
                  <div className="font-bold text-[#1c1636] text-[11px] uppercase tracking-wide">Key Focus Areas:</div>
                  <div className="text-[#524b6b]">• Deploying 150+ validated clinical assessment scales</div>
                  <div className="text-[#524b6b]">• Individualized care plan templates with goal tracking</div>
                  <div className="text-[#524b6b]">• Interdisciplinary task queues and care coordinator alerts</div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#f0ebf8] flex items-center justify-between">
                <Link to="/platform/care-management" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7b3fc7] hover:text-[#9565d2] hover:underline">
                  <span>View Care Management</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] font-mono text-[#8e8a9f]">Implementation Manual</span>
              </div>
            </div>

            {/* Guide 4 */}
            <div className="p-7 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7b3fc7] px-2.5 py-1 rounded bg-[#7b3fc7]/10 inline-block mb-3">
                  Playbook 04 // Care Transitions
                </span>
                <h3 className="text-xl font-extrabold text-[#1c1636] mb-2 leading-snug">
                  Transition of Care (TOC) & Real-Time ADT Protocol
                </h3>
                <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-5 font-normal">
                  Standardized operational protocol for receiving real-time hospital event notifications and initiating 48-hour clinical outreach to prevent avoidable readmissions.
                </p>
                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-5 space-y-2 text-xs">
                  <div className="font-bold text-[#1c1636] text-[11px] uppercase tracking-wide">Key Focus Areas:</div>
                  <div className="text-[#524b6b]">• Ingesting HL7 v2 ADT event streams (A01, A03, A08)</div>
                  <div className="text-[#524b6b]">• Triggering 48-hour post-discharge medication reconciliation</div>
                  <div className="text-[#524b6b]">• Closed-loop PCP follow-up visit scheduling</div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#f0ebf8] flex items-center justify-between">
                <Link to="/platform/transitions-of-care-adt" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7b3fc7] hover:text-[#9565d2] hover:underline">
                  <span>View TOC Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] font-mono text-[#8e8a9f]">Implementation Manual</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: #expertise (EXPLORE GUARDIAN'S EXPERTISE - 3 CAROUSEL SLIDES)
          ───────────────────────────────────────────────────────────── */}
      <section id="expertise" className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>03 / EXPLORE GUARDIAN'S EXPERTISE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight leading-tight">
              Demonstrated capabilities across <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">clinical &amp; technical domains.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed mt-2 font-normal">
              A consolidated look into how Guardian's architecture, platform tools, and integration workflows address healthcare challenges in practice:
            </p>
          </div>

          {/* Carousel Slide Area with Interactive Pause */}
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative min-h-[380px]"
          >
            <AnimatePresence mode="wait">
              {/* ── Slide 0: Real-World Applications ── */}
              {activeCategory === 0 && (
                <motion.div
                  key="slide-applications"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-7"
                >
                  {/* Application 1 */}
                  <div className="p-8 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#ea580c] px-2.5 py-1 rounded bg-[#ff7a57]/10">
                          Data Ingestion &amp; Identity
                        </span>
                        <span className="text-[11px] font-mono text-[#8e8a9f]">Application 01</span>
                      </div>
                      <h4 className="text-xl font-extrabold text-[#1c1636] mb-2 leading-snug">
                        Multi-Source Clinical &amp; Claims Integration
                      </h4>
                      <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-6 font-normal">
                        Connecting disparate EMR charts, 837/835 EDI claims, CMS CCLF files, and HL7 ADT streams into a unified longitudinal repository with deterministic Master Patient Indexing (MPI).
                      </p>
                      <div className="space-y-2.5 mb-6 text-xs text-[#35304c]">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c] shrink-0 mt-0.5" />
                          <span>Harmonizing multi-vendor clinical terminologies</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c] shrink-0 mt-0.5" />
                          <span>Cross-referencing attributed patient rosters</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-[#e9e4f0] flex items-center justify-between">
                      <Link to="/data-integration/data-foundation" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea580c] hover:underline">
                        <span>Explore Data Foundation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[10px] font-mono text-[#8e8a9f]">Integration Workflow</span>
                    </div>
                  </div>

                  {/* Application 2 */}
                  <div className="p-8 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#ea580c] px-2.5 py-1 rounded bg-[#ff7a57]/10">
                          Care Transitions
                        </span>
                        <span className="text-[11px] font-mono text-[#8e8a9f]">Application 02</span>
                      </div>
                      <h4 className="text-xl font-extrabold text-[#1c1636] mb-2 leading-snug">
                        Acute Event Detection &amp; 30-Day Transition-of-Care (TOC)
                      </h4>
                      <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-6 font-normal">
                        Automated hospital discharge alerting triggering immediate 48-hour clinical outreach, medication reconciliation, and PCP follow-up to reduce avoidable readmissions.
                      </p>
                      <div className="space-y-2.5 mb-6 text-xs text-[#35304c]">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c] shrink-0 mt-0.5" />
                          <span>Real-time hospital discharge alerting</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c] shrink-0 mt-0.5" />
                          <span>Closed-loop primary care follow-up scheduling</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-[#e9e4f0] flex items-center justify-between">
                      <Link to="/platform/transitions-of-care-adt" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea580c] hover:underline">
                        <span>Explore TOC Protocol</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[10px] font-mono text-[#8e8a9f]">Clinical Protocol</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── Slide 1: Technical Insights ── */}
              {activeCategory === 1 && (
                <motion.div
                  key="slide-technical"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-7"
                >
                  {/* Technical 1 */}
                  <div className="p-8 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4f46e5] px-2.5 py-1 rounded bg-[#4f46e5]/10">
                          System Schema
                        </span>
                        <span className="text-[11px] font-mono text-[#8e8a9f]">Briefing 01</span>
                      </div>
                      <h4 className="text-xl font-extrabold text-[#1c1636] mb-2 leading-snug">
                        Patient Master Chart (PMC) Longitudinal Architecture
                      </h4>
                      <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-5 font-normal">
                        Technical breakdown of Guardian's multi-tenant longitudinal data schema, FHIR R4 interoperability layer, and deterministic identity deduplication.
                      </p>
                      <div className="p-3.5 rounded-xl bg-white border border-[#e9e4f0] text-xs text-[#524b6b] space-y-1.5 mb-6 font-mono">
                        <div>• Schema: 13 Unified Clinical Domains</div>
                        <div>• Protocol: FHIR R4 &amp; HL7 v2 Messaging</div>
                        <div>• Identity: Deterministic &amp; Probabilistic MPI</div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-[#e9e4f0] flex items-center justify-between">
                      <Link to="/data-integration/apis-mobile" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4f46e5] hover:underline">
                        <span>View API Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[10px] font-mono text-[#8e8a9f]">Architectural Brief</span>
                    </div>
                  </div>

                  {/* Technical 2 */}
                  <div className="p-8 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4f46e5] px-2.5 py-1 rounded bg-[#4f46e5]/10">
                          Risk Intelligence
                        </span>
                        <span className="text-[11px] font-mono text-[#8e8a9f]">Briefing 02</span>
                      </div>
                      <h4 className="text-xl font-extrabold text-[#1c1636] mb-2 leading-snug">
                        Dual CMS-HCC Risk Suspecting &amp; Model Evolution
                      </h4>
                      <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-5 font-normal">
                        Technical review of prospective and retrospective suspecting algorithms across dual CMS-HCC V24 and V28 risk models and audit trail logs.
                      </p>
                      <div className="p-3.5 rounded-xl bg-white border border-[#e9e4f0] text-xs text-[#524b6b] space-y-1.5 mb-6 font-mono">
                        <div>• Scope: Dual V24 &amp; V28 Model Phase-In</div>
                        <div>• Engine: Prospective &amp; Retrospective</div>
                        <div>• Audit: Complete Clinical Evidence Trails</div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-[#e9e4f0] flex items-center justify-between">
                      <Link to="/platform/risk-stratification" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4f46e5] hover:underline">
                        <span>View Risk Engine Overview</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[10px] font-mono text-[#8e8a9f]">Algorithm Review</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── Slide 2: Platform Capabilities ── */}
              {activeCategory === 2 && (
                <motion.div
                  key="slide-capabilities"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {/* Capability 1 */}
                  <div className="p-7 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        <Search className="w-5 h-5 text-[#7b3fc7]" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#7b3fc7] uppercase tracking-wider block mb-1">
                        Patient Longitudinal View
                      </span>
                      <h4 className="text-lg font-extrabold text-[#1c1636] mb-2 leading-tight">
                        Patient 360 Master Chart
                      </h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed mb-5 font-normal">
                        Explore how 13 clinical domains consolidate EHR charts, claims, lab trends, and active medications into a single longitudinal timeline.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#e9e4f0]">
                      <Link to="/platform/patient-intelligence/patient-360" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7b3fc7] hover:text-[#9565d2] hover:underline">
                        <span>Explore Patient 360</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#ff7a57]" />
                      </Link>
                    </div>
                  </div>

                  {/* Capability 2 */}
                  <div className="p-7 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        <CheckCircle2 className="w-5 h-5 text-[#7b3fc7]" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#7b3fc7] uppercase tracking-wider block mb-1">
                        Quality Performance
                      </span>
                      <h4 className="text-lg font-extrabold text-[#1c1636] mb-2 leading-tight">
                        Quality Care Gaps Cockpit
                      </h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed mb-5 font-normal">
                        Automated HEDIS and MIPS care gap surveillance with point-of-care alert integration and provider performance scorecards.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#e9e4f0]">
                      <Link to="/platform/quality-care-gaps" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7b3fc7] hover:text-[#9565d2] hover:underline">
                        <span>Explore Care Gaps</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#ff7a57]" />
                      </Link>
                    </div>
                  </div>

                  {/* Capability 3 */}
                  <div className="p-7 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        <Workflow className="w-5 h-5 text-[#7b3fc7]" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#7b3fc7] uppercase tracking-wider block mb-1">
                        Care Coordination
                      </span>
                      <h4 className="text-lg font-extrabold text-[#1c1636] mb-2 leading-tight">
                        Multidisciplinary Care Management
                      </h4>
                      <p className="text-xs text-[#524b6b] leading-relaxed mb-5 font-normal">
                        Standardized care plan generator utilizing 150+ validated clinical assessment scales, multidisciplinary task queues, and alert routing.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#e9e4f0]">
                      <Link to="/platform/care-management" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7b3fc7] hover:text-[#9565d2] hover:underline">
                        <span>Explore Care Management</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#ff7a57]" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Carousel Pagination Dots & Footer Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-[#e9e4f0]">
            <div className="flex items-center gap-2">
              {categories.map((cat, idx) => (
                <button
                  key={`dot-${cat.id}`}
                  onClick={() => setActiveCategory(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${cat.title}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeCategory === idx 
                      ? 'w-8 bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]' 
                      : 'w-2 bg-[#e9e4f0] hover:bg-[#7b3fc7]/40'
                  }`}
                />
              ))}
              <span className="text-xs font-mono text-[#8e8a9f] ml-3">
                Section 0{activeCategory + 1} of 0{categories.length} — <span className="text-[#1c1636] font-semibold">{categories[activeCategory].title}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#1c1636] hover:text-[#7b3fc7] hover:border-[#7b3fc7]/40 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
                aria-label="Previous Section"
                title="Previous Section"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#1c1636] hover:text-[#7b3fc7] hover:border-[#7b3fc7]/40 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
                aria-label={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
                title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 fill-current text-[#7b3fc7]" /> : <Pause className="w-3.5 h-3.5 fill-current text-[#7b3fc7]" />}
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-xl bg-white border border-[#e9e4f0] text-[#1c1636] hover:text-[#7b3fc7] hover:border-[#7b3fc7]/40 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
                aria-label="Next Section"
                title="Next Section"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: FINAL EXECUTIVE CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-[#faf8fd]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#1c1636] via-[#2d1b54] to-[#0d1527] text-white shadow-2xl relative overflow-hidden border border-white/10">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7b3fc7]/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff7a57]/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6">
                <BookOpen className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>EXPLORE HEALTHCARE PRIORITIES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                Have a healthcare challenge <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">worth exploring?</span>
              </h2>

              <p className="text-sm sm:text-base text-purple-100/90 mb-8 leading-relaxed font-normal">
                Connect with Guardian's clinical and technology experts to discover how our platform and services address your value-based care priorities.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/company?intent=demo#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7b3fc7] text-white font-semibold text-xs sm:text-sm hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <span>Talk to Guardian</span>
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
