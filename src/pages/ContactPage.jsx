import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  ArrowRight,
  ChevronRight,
  Sparkles,
  Building,
  CheckCircle2,
  Layers,
  HeartPulse
} from 'lucide-react';
import RelatedPlatformModules from '../components/common/RelatedPlatformModules';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const intentParam = searchParams.get('intent');

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    jobTitle: '',
    interest: intentParam === 'demo' ? 'Solutions' : 'Platform',
    message: intentParam === 'demo' ? 'Requesting a product demonstration.' : ''
  });

  useEffect(() => {
    if (intentParam === 'demo') {
      setFormData(prev => ({
        ...prev,
        interest: 'Solutions',
        message: prev.message || 'Requesting a product demonstration.'
      }));
    }
  }, [intentParam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const teams = [
    {
      title: 'Platform & Technology',
      desc: 'Questions about Guardian’s healthcare data platform, interoperability, data integration, data enrichment, information services, or patient intelligence.',
      icon: Layers
    },
    {
      title: 'Solutions',
      desc: 'Explore capabilities for population health, care management, risk adjustment, quality and performance, patient engagement, and analytics & intelligence.',
      icon: Sparkles
    },
    {
      title: 'Services',
      desc: 'Learn about Guardian’s healthcare expertise and operational support, including Account Executives, Risk Coders, Care Managers, and Care Navigators.',
      icon: HeartPulse
    },
    {
      title: 'General & Business Inquiries',
      desc: 'For company information, partnerships, media, or other business-related questions.',
      icon: Building
    }
  ];

  const whatHappensNext = [
    {
      num: '01',
      title: 'Tell us about your needs',
      desc: 'Share your organization, priorities, and the challenge you are trying to address.'
    },
    {
      num: '02',
      title: 'Connect with the right team',
      desc: 'Your inquiry is routed to the appropriate Guardian team.'
    },
    {
      num: '03',
      title: 'Explore the opportunity',
      desc: 'Discuss relevant Guardian capabilities, solutions, services, and next steps.'
    }
  ];

  return (
    <div className="bg-white text-[#35304c] min-h-screen">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-gradient-to-b from-[#120b24] via-[#1a1233] to-[#241744] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[700px] h-[500px] bg-gradient-to-tr from-[#7b3fc7]/25 via-[#9565d2]/15 to-transparent blur-[140px] rounded-full" />
          <div className="absolute bottom-10 right-1/4 w-[550px] h-[380px] bg-[#ff7a57]/15 blur-[140px] rounded-full" />
          <div className="absolute inset-0 ambient-grid opacity-15" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-purple-200/70 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <Link to="/company/about" className="hover:text-white transition-colors">Company</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-white font-semibold">Contact</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6">
              <Mail className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>CONTACT GUARDIAN</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              Let’s talk about what’s next <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">for your organization.</span>
            </h1>

            <p className="text-base sm:text-xl text-purple-100/90 leading-relaxed max-w-3xl mb-10 font-normal">
              Whether you are looking to connect healthcare data, improve care workflows, support quality and risk, or better understand performance, Guardian can help you explore the right path forward.
            </p>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_20px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: CONTACT INTRODUCTION & APPROVED FORM
          ───────────────────────────────────────────────────────────── */}
      <section id="contact-form" className="py-20 sm:py-28 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info & Intro */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
                  Tell Us What You’re Working On
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] leading-tight mb-4">
                  Every healthcare organization has different priorities.
                </h2>
                <p className="text-sm sm:text-base text-[#727272] leading-relaxed">
                  Share a little about your needs and a member of the Guardian team can help connect you with the appropriate solution, platform capability, or service.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1636]">General & Partner Email</h3>
                    <a href="mailto:support@itsguardian.com" className="text-sm text-[#7b3fc7] font-medium hover:underline">
                      support@itsguardian.com
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#fff2ee] text-[#ff7a57] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1636]">Headquarters</h3>
                    <p className="text-sm text-[#35304c]">Guardian Health Service, LLC</p>
                    <p className="text-xs text-[#727272]">Winter Park, Florida</p>
                  </div>
                </div>

                {/* Existing Customer Support Card */}
                <div className="p-6 rounded-2xl bg-[#eae4f4]/60 border border-[#d6cde2]">
                  <h3 className="text-sm font-bold text-[#1c1636] mb-1">Already working with Guardian?</h3>
                  <p className="text-xs text-[#727272] mb-3">
                    For existing customers who need product or operational support, access your secure customer portal.
                  </p>
                  <a
                    href="https://live.itsguardian.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7b3fc7] hover:underline"
                  >
                    <span>Customer Login</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#e1e1e5] p-8 sm:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-[#1c1636] mb-2">How can we help?</h3>
              <p className="text-xs text-[#727272] mb-6">Complete the form below to start the conversation.</p>

              {formSubmitted ? (
                <div className="p-8 text-center bg-[#f2ecf9] rounded-2xl border border-[#7b3fc7]/20">
                  <div className="w-12 h-12 rounded-full bg-[#7b3fc7] text-white flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1c1636] mb-2">Inquiry Received</h4>
                  <p className="text-sm text-[#35304c] max-w-md mx-auto mb-4 leading-relaxed">
                    Thank you for reaching out. Your inquiry has been received. A member of the Guardian team will follow up with you.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-semibold text-[#7b3fc7] hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact Guardian Health Service Form">
                  {/* PHI Warning & Privacy Safeguards Notice (F08 Compliance) */}
                  <div className="p-3 rounded-lg bg-[#f3edf9] border border-[#7b3fc7]/20 text-[11px] text-[#524b6b] leading-relaxed">
                    <span className="font-semibold text-[#7b3fc7]">Privacy Notice: </span>
                    Please do not submit Protected Health Information (PHI) or patient records through this form. Inquiries are governed by Guardian's administrative and technical safeguards.
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="direct-contact-first-name" className="block text-xs font-semibold text-[#1c1636] mb-1.5">First Name *</label>
                      <input
                        id="direct-contact-first-name"
                        type="text"
                        required
                        aria-required="true"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Jane"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e1e1e5] bg-[#f8f6fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
                      />
                    </div>
                    <div>
                      <label htmlFor="direct-contact-last-name" className="block text-xs font-semibold text-[#1c1636] mb-1.5">Last Name *</label>
                      <input
                        id="direct-contact-last-name"
                        type="text"
                        required
                        aria-required="true"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e1e1e5] bg-[#f8f6fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="direct-contact-email" className="block text-xs font-semibold text-[#1c1636] mb-1.5">Work Email *</label>
                      <input
                        id="direct-contact-email"
                        type="email"
                        required
                        aria-required="true"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane.doe@organization.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e1e1e5] bg-[#f8f6fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
                      />
                    </div>
                    <div>
                      <label htmlFor="direct-contact-org" className="block text-xs font-semibold text-[#1c1636] mb-1.5">Organization *</label>
                      <input
                        id="direct-contact-org"
                        type="text"
                        required
                        aria-required="true"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Health System / Plan"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e1e1e5] bg-[#f8f6fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="direct-contact-job-title" className="block text-xs font-semibold text-[#1c1636] mb-1.5">Job Title *</label>
                      <input
                        id="direct-contact-job-title"
                        type="text"
                        required
                        aria-required="true"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        placeholder="Chief Medical Officer / Director"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e1e1e5] bg-[#f8f6fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
                      />
                    </div>
                    <div>
                      <label htmlFor="direct-contact-interest" className="block text-xs font-semibold text-[#1c1636] mb-1.5">I am interested in</label>
                      <select
                        id="direct-contact-interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e1e1e5] bg-[#f8f6fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
                      >
                        <option>Platform</option>
                        <option>Solutions</option>
                        <option>Services</option>
                        <option>Provider solutions</option>
                        <option>Payer solutions</option>
                        <option>Partnership / Business inquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="direct-contact-message" className="block text-xs font-semibold text-[#1c1636] mb-1.5">Message</label>
                    <textarea
                      id="direct-contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share brief details about your organization's goals or questions..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e1e1e5] bg-[#f8f6fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#7b3fc7] hover:bg-[#9565d2] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md shadow-[#7b3fc7]/20 transition-all cursor-pointer"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-[#adabb7] text-center pt-2">
                    Your information matters. We handle healthcare partner inquiries in accordance with our <Link to="/company#security" className="text-[#7b3fc7] underline hover:text-[#5b21b6]">Security &amp; Privacy Safeguards</Link>.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: TALK TO THE RIGHT TEAM
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Routing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
              Start with what you need.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="p-7 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#7b3fc7] flex items-center justify-center mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1c1636] mb-2">{t.title}</h3>
                  <p className="text-xs sm:text-sm text-[#727272] leading-relaxed">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: WHAT HAPPENS NEXT
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#eae4f4]/40 border-b border-[#d6cde2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-2">
              A simple path from conversation to next step.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatHappensNext.map((step) => (
              <div key={step.num} className="p-7 rounded-2xl bg-white border border-[#e1e1e5]">
                <span className="text-xs font-mono font-bold text-[#7b3fc7] block mb-2">{step.num}</span>
                <h3 className="text-base font-bold text-[#1c1636] mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#727272] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4.5: COMPANY SIBLING NAVIGATION
          ───────────────────────────────────────────────────────────── */}
      <RelatedPlatformModules
        modules={[
          { title: 'About Guardian', desc: 'Built from healthcare. Designed for action.', path: '/company/about' },
          { title: 'Leadership', desc: 'People shaping the future of healthcare.', path: '/company/leadership' },
          { title: 'Security & Trust', desc: 'HITRUST & SOC 2 aligned security architecture.', path: '/company/security-trust' },
          { title: 'Careers', desc: 'Building technology-enabled healthcare teams.', path: '/company/careers' }
        ]}
        title="Explore the Guardian Company Family."
        kicker="Company Navigation"
        tagPrefix="COMPANY"
        overviewLink=""
        actionText="Explore"
      />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: FINAL CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8f6fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1c1636] to-[#2d1b54] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                Ready to turn healthcare data into action?
              </h2>
              <p className="text-sm sm:text-base text-purple-100/90 mb-8">
                Tell us where you want to go. We’ll help you explore the technology, solutions, and expertise that can support the journey.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1c1636] font-medium text-sm hover:bg-[#f2ecf9] transition-all"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
