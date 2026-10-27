import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  Clock, 
  Mail, 
  MapPin, 
  Send, 
  Code2, 
  BarChart3 
} from 'lucide-react';

import InfographicMilestoneTimeline from '../components/common/InfographicMilestoneTimeline';
import UnifiedLeadershipCarousel from '../components/sections/UnifiedLeadershipCarousel';
import SecurityTrustCarousel from '../components/sections/SecurityTrustCarousel';

function CountUpNumber({ target, prefix = '', suffix = '', duration = 3500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 2.8);
      const currentCount = Math.floor(easeOutProgress * target);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function CompanyOverviewPage() {
  const [searchParams] = useSearchParams();
  const intentParam = searchParams.get('intent');

  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(() => ({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    jobTitle: '',
    interest: intentParam === 'demo' ? 'Solutions / Demo' : intentParam === 'careers' ? 'Careers' : 'Platform',
    message: intentParam === 'demo' ? 'Requesting a product demonstration.' : intentParam === 'careers' ? 'Inquiring about career opportunities with Guardian.' : ''
  }));

  useEffect(() => {
    if (intentParam === 'demo') {
      setFormData(prev => ({
        ...prev,
        interest: 'Solutions / Demo',
        message: prev.message || 'Requesting a product demonstration.'
      }));
    } else if (intentParam === 'careers') {
      setFormData(prev => ({
        ...prev,
        interest: 'Careers',
        message: prev.message || 'Inquiring about career opportunities with Guardian.'
      }));
    }
  }, [intentParam]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Section: Careers Disciplines
  const careerDisciplines = [
    {
      icon: Code2,
      title: 'Technology & Engineering',
      desc: 'Engineering scalable healthcare data pipelines, real-time ADT event handlers, clinical knowledge graphs, and intuitive clinician interfaces.',
      highlights: ['Distributed Healthtech Systems', 'FHIR R4 / HL7 Data Engineering', 'Secure Cloud Architecture']
    },
    {
      icon: BarChart3,
      title: 'Risk Adjustment & Operations',
      desc: 'Supporting risk coding accuracy, quality performance monitoring, managed care analytics, and healthcare partner client success.',
      highlights: ['HCC Risk Adjustment & Coding', 'Quality & Star Ratings Surveillance', 'Value-Based Account Operations']
    }
  ];

  const candidateSteps = [
    {
      step: '01',
      title: 'Explore Disciplines',
      desc: 'Review Guardian’s primary organizational areas across healthcare technology, data systems, and value-based operations.'
    },
    {
      step: '02',
      title: 'Submit Inquiry',
      desc: 'Reach out to our team with your background, experience, and area of interest in technology-enabled healthcare.'
    },
    {
      step: '03',
      title: 'Team Interview',
      desc: 'Discuss your experience, technical skills, and alignment with Guardian’s healthcare action mission.'
    },
    {
      step: '04',
      title: 'Join Guardian',
      desc: 'Collaborate with cross-functional healthcare technology and operations teams building the future of value-based care.'
    }
  ];


  return (
    <div className="bg-white text-[#35304c] min-h-screen">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: ABOUT GUARDIAN (#about)
          ───────────────────────────────────────────────────────────── */}
      <section id="about" className="scroll-mt-24 relative w-full pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#0d1527] text-white overflow-hidden border-b border-[#1c1636]">
        
        {/* Full-Bleed Background Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img 
            src="/images/experience-doctor.jpg" 
            alt="Guardian Healthcare clinical team and leadership" 
            className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/95 via-[#0d1527]/75 to-[#0d1527]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1527]/80 via-transparent to-[#0d1527]" />
          
          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[450px] bg-[#7b3fc7]/35 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#ff7a57]/30 blur-[140px] rounded-full pointer-events-none" />
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
                <Building2 className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>ABOUT GUARDIAN HEALTHCARE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                Built from healthcare experience. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">Driven by human impact.</span>
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-2xl mb-8 font-normal">
                Guardian brings clinical domain expertise, connected healthcare data technology, and operational care services together to help healthcare organizations turn complex information into meaningful patient and financial action.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0 group"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ff7a57]" />
                </a>

                <a
                  href="#history"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300 whitespace-nowrap shrink-0"
                >
                  <span>Explore Our Story</span>
                </a>
              </div>
            </motion.div>

            {/* Right Compact Floating Live Credentials Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative group lg:scale-108 transition-transform duration-300">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#7b3fc7]/50 via-[#8b5cf6]/40 to-[#ff7a57]/40 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative rounded-2xl bg-[#1a1233]/90 border border-white/25 backdrop-blur-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-lg border border-white/10 mb-3.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                      <span className="text-[10px] text-purple-300 font-mono ml-2">company.itsguardian.com</span>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60">
                      Enterprise Credentials
                    </span>
                  </div>

                  <div className="space-y-3 text-white">
                    <div className="p-4 rounded-xl bg-white/12 border border-white/20 flex items-center justify-between shadow-md">
                      <div>
                        <span className="text-[10px] font-mono text-purple-200 block uppercase tracking-wider">Shared Savings Delivered</span>
                        <span className="text-2xl font-extrabold text-[#ff7a57] font-mono">
                          <CountUpNumber target={100000000} prefix="$" suffix="+" duration={3500} />
                        </span>
                      </div>
                      <Award className="w-7 h-7 text-[#ff7a57]" />
                    </div>

                    <div className="p-4 rounded-xl bg-white/12 border border-white/20 flex items-center justify-between shadow-md">
                      <div>
                        <span className="text-[10px] font-mono text-purple-200 block uppercase tracking-wider">Connected Patient Records</span>
                        <span className="text-2xl font-extrabold text-[#10b981] font-mono">
                          <CountUpNumber target={10000000} suffix="+" duration={3200} />
                        </span>
                      </div>
                      <ShieldCheck className="w-7 h-7 text-[#10b981]" />
                    </div>
                  </div>

                  <div className="mt-3.5 flex items-center justify-between text-[11px] text-purple-200 font-mono px-1">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57]" /> CMS MIPS Registry Architecture
                    </span>
                    <span className="text-purple-300 font-medium">Zero-Trust Security Controls</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: OUR HISTORY (#history)
          Condensed Decade Milestone Timeline
          ───────────────────────────────────────────────────────────── */}
      <section id="history" className="scroll-mt-24 py-12 sm:py-18 bg-[#faf8fd] border-b border-[#e9e4f0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-2.5 border border-[#7b3fc7]/20 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>OUR JOURNEY &amp; MILESTONES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              A decade of innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">in value-based care.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed">
              Key milestones in Guardian’s development and healthcare data connectivity:
            </p>
          </div>

          <InfographicMilestoneTimeline />

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: LEADERSHIP & TEAM (#leadership)
          Executive Leadership Prominence + Wider Team Constellation
          ───────────────────────────────────────────────────────────── */}
      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: LEADERSHIP & TEAM (#leadership)
          Unified Dark Carousel: Executive, Onsite & Offshore Engineering
          ───────────────────────────────────────────────────────────── */}
      <UnifiedLeadershipCarousel />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: SECURITY & TRUST (#security)
          Interactive 4-Slide Left/Right Carousel
          ───────────────────────────────────────────────────────────── */}
      <section id="security" className="scroll-mt-24 py-20 sm:py-28 bg-[#faf8fc] border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 text-[#059669] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#10b981]/20 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
              <span>ENTERPRISE TRUST INFRASTRUCTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Security, privacy &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#0d9488] to-[#0284c7]">healthcare compliance.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Healthcare data requires uncompromising protection. Explore Guardian’s zero-trust architectural safeguards, cryptographic controls, and healthcare framework alignments across 4 interactive modules:
            </p>
          </div>

          {/* Interactive 4-Slide Horizontal Carousel */}
          <SecurityTrustCarousel />

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: CAREERS (#careers)
          Team Disciplines & Candidate Journey
          ───────────────────────────────────────────────────────────── */}
      <section id="careers" className="scroll-mt-24 py-20 sm:py-28 bg-white border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a57]/10 text-[#ea580c] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#ff7a57]/20 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>CAREERS &amp; CULTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Building the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#ea580c] to-[#ff7a57] inline-block whitespace-nowrap">technology-enabled care.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Guardian brings together software engineers, risk coders, and healthcare leaders working together to turn complex health data into actionable patient care.
            </p>
          </div>

          {/* 2 Core Disciplines (Compact Height) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
            {careerDisciplines.map((d, idx) => {
              const Icon = d.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#faf8fd] border border-[#e1e1e5] shadow-xs hover:border-[#7b3fc7]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon and Heading side-by-side */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center shrink-0 shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1c1636]">{d.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#554e6d] leading-relaxed mb-4 font-normal">
                      {d.desc}
                    </p>
                  </div>

                  {/* Highlights placed horizontally side-by-side (one next to one) */}
                  <div className="pt-3.5 border-t border-[#f0ecf6] flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2">
                    {d.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-[#1c1636] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7b3fc7] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Candidate Journey Pathway */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#faf8fd] border border-[#e1e1e5]">
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#7b3fc7] font-bold block mb-1">
                Candidate Process
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636]">
                How we connect with future team members.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {candidateSteps.map((s) => (
                <div key={s.step} className="p-5 rounded-2xl bg-white border border-[#e1e1e5]/80 shadow-2xs">
                  <span className="font-mono text-xs font-bold text-[#7b3fc7] bg-[#f2ecf9] px-2.5 py-1 rounded-md mb-3 inline-block">
                    {s.step}
                  </span>
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1.5">{s.title}</h4>
                  <p className="text-xs text-[#554e6d] leading-relaxed font-normal">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#e9e4f0] flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#554e6d] font-normal">
                Interested in shaping healthcare delivery? Share your background with our team.
              </p>
              <a
                href="#contact"
                onClick={() => {
                  setFormData(prev => ({ ...prev, interest: 'Careers' }));
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#7b3fc7] hover:bg-[#9565d2] text-white text-xs font-semibold shadow-sm transition-all"
              >
                <span>Submit Career Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: CONTACT (#contact)
          Preserved Form, ?intent=demo Handling, Office & Routing
          ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-24 py-20 sm:py-28 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Mail className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>START A CONVERSATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Connect with Guardian or <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">schedule a platform demo.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Whether you are looking to connect clinical data, evaluate population health workflows, or request a tailored platform walkthrough, our team is ready to assist.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Office & What Happens Next */}
            <div className="lg:col-span-5 space-y-7">
              <div className="p-7 rounded-3xl bg-white border border-[#e1e1e5] shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Guardian Healthcare Headquarters</h3>
                    <span className="text-xs text-[#8e8a9f]">Corporate Offices</span>
                  </div>
                </div>
                <p className="text-sm text-[#524b6b] leading-relaxed mb-4">
                  Winter Park, Florida, United States
                </p>
                <div className="pt-3 border-t border-[#f0ecf6] flex items-center gap-2 text-xs text-[#7b3fc7] font-semibold">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@itsguardian.com" className="hover:underline">info@itsguardian.com</a>
                </div>
              </div>

              {/* What Happens Next Process */}
              <div className="p-7 rounded-3xl bg-white border border-[#e1e1e5] shadow-sm">
                <h4 className="text-sm font-bold text-[#1c1636] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#7b3fc7]" />
                  <span>What Happens Next</span>
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-[#7b3fc7] bg-[#f2ecf9] px-2 py-0.5 rounded">01</span>
                    <div>
                      <h5 className="text-xs font-bold text-[#1c1636]">Tell us about your organization</h5>
                      <p className="text-xs text-[#524b6b] leading-relaxed">Share your healthcare priorities, active patient panels, or challenges.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-[#7b3fc7] bg-[#f2ecf9] px-2 py-0.5 rounded">02</span>
                    <div>
                      <h5 className="text-xs font-bold text-[#1c1636]">Route to the right specialist</h5>
                      <p className="text-xs text-[#524b6b] leading-relaxed">Your request is directed to clinical, integration, or solution leads.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-[#7b3fc7] bg-[#f2ecf9] px-2 py-0.5 rounded">03</span>
                    <div>
                      <h5 className="text-xs font-bold text-[#1c1636]">Consultation &amp; Demo</h5>
                      <p className="text-xs text-[#524b6b] leading-relaxed">Review tailored platform workflows, risk models, and integration scopes.</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            {/* Right Column: Working Contact & Demo Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#e1e1e5] p-8 sm:p-10 shadow-sm">
              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#10b981]/10 text-[#10b981] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1c1636] mb-3">Thank you for connecting with Guardian</h3>
                  <p className="text-sm text-[#524b6b] max-w-md mx-auto mb-8 leading-relaxed font-normal">
                    Your inquiry has been received. Our team will review your organization’s request and follow up directly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        organization: '',
                        jobTitle: '',
                        interest: 'Platform',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-[#7b3fc7] bg-[#f2ecf9] hover:bg-[#e9def7] transition-colors cursor-pointer"
                  >
                    Submit another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#f0ecf6]">
                    <h3 className="text-lg font-bold text-[#1c1636]">
                      {intentParam === 'demo' ? 'Request a Customized Demonstration' : 'Send an Inquiry to Guardian'}
                    </h3>
                    <span className="text-[11px] font-mono text-[#8e8a9f]">* Required fields</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1c1636] mb-1.5">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Jane"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e1e1e5] bg-[#f8f6fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1c1636] mb-1.5">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e1e1e5] bg-[#f8f6fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1c1636] mb-1.5">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane.doe@organization.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e1e1e5] bg-[#f8f6fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1c1636] mb-1.5">Organization *</label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Health System / Plan / ACO"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e1e1e5] bg-[#f8f6fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1c1636] mb-1.5">Job Title *</label>
                      <input
                        type="text"
                        required
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        placeholder="Chief Medical Officer / VP"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e1e1e5] bg-[#f8f6fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1c1636] mb-1.5">Area of Interest</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e1e1e5] bg-[#f8f6fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
                      >
                        <option>Solutions / Demo</option>
                        <option>Platform</option>
                        <option>Healthcare Services</option>
                        <option>Provider Solutions</option>
                        <option>Health Plan Solutions</option>
                        <option>Careers</option>
                        <option>Partnership / Business Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1c1636] mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your organization's goals, timelines, or questions..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e1e1e5] bg-[#f8f6fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#7b3fc7] hover:bg-[#9565d2] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md shadow-[#7b3fc7]/20 transition-all cursor-pointer"
                  >
                    <span>{intentParam === 'demo' ? 'Submit Demo Request' : 'Send Inquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-[#adabb7] text-center pt-2">
                    Your information is protected. We handle all healthcare partner communications with confidentiality.
                  </p>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: FINAL EXECUTIVE CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-[#faf8fd]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#1c1636] via-[#2d1b54] to-[#0d1527] text-white shadow-2xl relative overflow-hidden border border-white/10">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7b3fc7]/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff7a57]/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6">
                <Building2 className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>PARTNER WITH GUARDIAN</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                Build a clearer path from <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">healthcare data to action.</span>
              </h2>

              <p className="text-sm sm:text-base text-purple-100/90 mb-8 leading-relaxed font-normal">
                Discover how Guardian helps health plans, ACOs, CINs, and care management teams deliver measurable clinical and financial outcomes.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7b3fc7] text-white font-semibold text-xs sm:text-sm hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <span>Talk to Guardian</span>
                  <ArrowRight className="w-4 h-4 text-[#ff7a57]" />
                </a>
                
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
