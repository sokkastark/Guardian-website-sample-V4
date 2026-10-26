import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUp, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ─────────────────────────────────────────────────────────────
  // LIGHT FOOTER CONCEPT (FOR HOME PAGE)
  // ─────────────────────────────────────────────────────────────
  if (isHomePage) {
    return (
      <footer className="relative bg-gradient-to-b from-white via-[#f8f6fc] to-[#f2ecf9]/50 pt-12 pb-12 border-t border-[#e1e1e5] text-[#35304c] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Brand & Location Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-10 border-b border-[#e1e1e5]/60 gap-4">
            <div className="space-y-1.5">
              <Link
                to="/"
                onClick={() => {
                  if (window.location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="inline-block"
                aria-label="Guardian Health Service Home"
              >
                <img
                  src="/logos/Logo.webp"
                  alt="Guardian Health Service"
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/logos/logo-black.webp';
                  }}
                />
              </Link>
              <p className="text-xs text-[#727272] font-normal">
                Technology enabled, integrated care.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#727272]">
              <a
                href="mailto:support@itsguardian.com"
                className="inline-flex items-center gap-1.5 hover:text-[#7b3fc7] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span className="font-medium text-[#1c1636]">support@itsguardian.com</span>
              </a>
              <span className="text-[#adabb7]">•</span>
              <div className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#7b3fc7]" />
                <span>Winter Park, Florida</span>
              </div>
              <span className="text-[#adabb7]">•</span>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 text-[#7b3fc7] hover:text-[#9565d2] transition-colors focus:outline-none font-medium cursor-pointer"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 5 Balanced Secondary Navigation Columns */}
          <nav aria-label="Footer Secondary Navigation" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-14">
            
            {/* 01 — PLATFORM */}
            <div className="space-y-3.5">
              <h3 className="text-[#adabb7] font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <span className="text-[#7b3fc7] font-mono text-xs">01 —</span>
                <span>PLATFORM</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-[13px]">
                <li>
                  <Link to="/platform" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Platform Overview
                  </Link>
                </li>
                <li>
                  <Link to="/platform/population-health" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Population Health
                  </Link>
                </li>
                <li>
                  <Link to="/platform/analytics" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/platform/patient-intelligence" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Patient Intelligence
                  </Link>
                </li>
                <li>
                  <Link to="/platform/risk-adjustment" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Risk Adjustment / MRA
                  </Link>
                </li>
              </ul>
            </div>

            {/* 02 — SOLUTIONS */}
            <div className="space-y-3.5">
              <h3 className="text-[#adabb7] font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <span className="text-[#7b3fc7] font-mono text-xs">02 —</span>
                <span>SOLUTIONS</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-[13px]">
                <li>
                  <Link to="/solutions" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Solutions Overview
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/aco-value-based-care" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    ACO & Value-Based Care
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/health-plans" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Health Plans
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/cin-provider-organizations" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    CIN & Provider Orgs
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/care-management-teams" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Care Teams
                  </Link>
                </li>
              </ul>
            </div>

            {/* 03 — DATA & INTELLIGENCE */}
            <div className="space-y-3.5">
              <h3 className="text-[#adabb7] font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <span className="text-[#7b3fc7] font-mono text-xs">03 —</span>
                <span>DATA & AI</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-[13px]">
                <li>
                  <Link to="/intelligence" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Intelligence Overview
                  </Link>
                </li>
                <li>
                  <Link to="/intelligence/ai" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    AI & Predictive
                  </Link>
                </li>
                <li>
                  <Link to="/data-integration" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Data & Integration
                  </Link>
                </li>
                <li>
                  <Link to="/data-integration/clinical-integration" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Clinical Integration
                  </Link>
                </li>
                <li>
                  <Link to="/data-integration/data-foundation" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Data Foundation
                  </Link>
                </li>
              </ul>
            </div>

            {/* 04 — RESOURCES */}
            <div className="space-y-3.5">
              <h3 className="text-[#adabb7] font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <span className="text-[#7b3fc7] font-mono text-xs">04 —</span>
                <span>RESOURCES</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-[13px]">
                <li>
                  <Link to="/resources" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Resources Overview
                  </Link>
                </li>
                <li>
                  <Link to="/resources/insights" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link to="/resources/case-studies" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/resources/guides" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Guides
                  </Link>
                </li>
              </ul>
            </div>

            {/* 05 — COMPANY */}
            <div className="space-y-3.5">
              <h3 className="text-[#adabb7] font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <span className="text-[#7b3fc7] font-mono text-xs">05 —</span>
                <span>COMPANY</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-[13px]">
                <li>
                  <Link to="/company#about" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    About Guardian
                  </Link>
                </li>
                <li>
                  <Link to="/company#leadership" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link to="/company#security" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Security & Trust
                  </Link>
                </li>
                <li>
                  <Link to="/company#careers" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/company#contact" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

          </nav>

          {/* Bottom Legal / Footer Bar */}
          <div className="pt-8 border-t border-[#e1e1e5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#727272]">
            <p className="font-normal">
              © Guardian Health Service, LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <Link to="/company#security" className="hover:text-[#7b3fc7] transition-colors">
                Security & Trust
              </Link>
              <span className="text-[#d6cde2]">|</span>
              <Link to="/company#careers" className="hover:text-[#7b3fc7] transition-colors">
                Careers
              </Link>
              <span className="text-[#d6cde2]">|</span>
              <a
                href="https://live.itsguardian.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7b3fc7] transition-colors inline-flex items-center gap-1"
              >
                <span>Login</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>

        </div>
      </footer>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // DARK FOOTER SETUP WITH HIGHLY VISIBLE HEALTHCARE TEAM IMAGE
  // ─────────────────────────────────────────────────────────────
  return (
    <footer className="relative bg-[#0b0819] text-white text-xs pt-16 pb-12 overflow-hidden border-t border-[#1c1636]">
      
      {/* Right Flank Blended Healthcare Team Spotlight Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0 opacity-25 hidden md:block">
        <img 
          src="/images/footer-people-bg.jpg" 
          alt="" 
          className="w-full h-full object-cover object-left-top filter brightness-110 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0819] via-[#0b0819]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0819] via-transparent to-[#0b0819]" />
      </div>

      {/* Ambient Radial Lighting FX */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-[#7b3fc7]/20 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-[#ff7a57]/15 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Brand & Location Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-10 border-b border-white/10 gap-4">
          <div className="space-y-1.5">
            <Link
              to="/"
              onClick={() => {
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-block"
              aria-label="Guardian Health Service Home"
            >
              <img
                src="/logos/logo-white.png"
                alt="Guardian Health Service"
                className="h-8 w-auto object-contain brightness-110"
                onError={(e) => {
                  e.currentTarget.src = '/logos/Logo.webp';
                  e.currentTarget.className = 'h-8 w-auto object-contain brightness-0 invert';
                }}
              />
            </Link>
            <p className="text-xs text-purple-200/70 font-normal">
              Technology enabled, integrated care.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-purple-200/70">
            <a
              href="mailto:support@itsguardian.com"
              className="inline-flex items-center gap-1.5 hover:text-[#ff7a57] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span className="font-medium text-purple-100">support@itsguardian.com</span>
            </a>
            <span className="text-purple-400/40">•</span>
            <div className="inline-flex items-center gap-1.5 text-purple-200">
              <MapPin className="w-3.5 h-3.5 text-[#7b3fc7]" />
              <span>Winter Park, Florida</span>
            </div>
            <span className="text-purple-400/40">•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#ff7a57] hover:text-white transition-colors focus:outline-none font-medium cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 5 Secondary Navigation Columns (Clean & Open Layout) */}
        <nav aria-label="Footer Secondary Navigation" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-14">
          
          {/* 01 — PLATFORM */}
          <div className="space-y-3.5">
            <h3 className="text-purple-300 font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
              <span className="text-[#ff7a57] font-mono text-xs">01 —</span>
              <span>PLATFORM</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link to="/platform" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Platform Overview
                </Link>
              </li>
              <li>
                <Link to="/platform/population-health" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Population Health
                </Link>
              </li>
              <li>
                <Link to="/platform/analytics" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/platform/patient-intelligence" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Patient Intelligence
                </Link>
              </li>
              <li>
                <Link to="/platform/risk-adjustment" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Risk Adjustment / MRA
                </Link>
              </li>
            </ul>
          </div>

          {/* 02 — SOLUTIONS */}
          <div className="space-y-3.5">
            <h3 className="text-purple-300 font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
              <span className="text-[#ff7a57] font-mono text-xs">02 —</span>
              <span>SOLUTIONS</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link to="/solutions" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Solutions Overview
                </Link>
              </li>
              <li>
                <Link to="/solutions/aco-value-based-care" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  ACO & Value-Based Care
                </Link>
              </li>
              <li>
                <Link to="/solutions/health-plans" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Health Plans
                </Link>
              </li>
              <li>
                <Link to="/solutions/cin-provider-organizations" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  CIN & Provider Orgs
                </Link>
              </li>
              <li>
                <Link to="/solutions/care-management-teams" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Care Teams
                </Link>
              </li>
            </ul>
          </div>

          {/* 03 — DATA & INTELLIGENCE */}
          <div className="space-y-3.5">
            <h3 className="text-purple-300 font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
              <span className="text-[#ff7a57] font-mono text-xs">03 —</span>
              <span>DATA & AI</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link to="/intelligence" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Intelligence Overview
                </Link>
              </li>
              <li>
                <Link to="/intelligence/ai" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  AI & Predictive
                </Link>
              </li>
              <li>
                <Link to="/data-integration" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Data & Integration
                </Link>
              </li>
              <li>
                <Link to="/data-integration/clinical-integration" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Clinical Integration
                </Link>
              </li>
              <li>
                <Link to="/data-integration/data-foundation" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Data Foundation
                </Link>
              </li>
            </ul>
          </div>

          {/* 04 — RESOURCES */}
          <div className="space-y-3.5">
            <h3 className="text-purple-300 font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
              <span className="text-[#ff7a57] font-mono text-xs">04 —</span>
              <span>RESOURCES</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link to="/resources" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Resources Overview
                </Link>
              </li>
              <li>
                <Link to="/resources/insights" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/resources/case-studies" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources/guides" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* 05 — COMPANY */}
          <div className="space-y-3.5">
            <h3 className="text-purple-300 font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
              <span className="text-[#ff7a57] font-mono text-xs">05 —</span>
              <span>COMPANY</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link to="/company/about" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  About Guardian
                </Link>
              </li>
              <li>
                <Link to="/company/leadership" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/company/security-trust" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Security & Trust
                </Link>
              </li>
              <li>
                <Link to="/company/careers" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/company/contact" className="text-purple-100/90 hover:text-white transition-colors font-medium block py-0.5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </nav>

        {/* Bottom Legal / Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-200/60">
          <p className="font-normal">
            © Guardian Health Service, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link to="/company/security-trust" className="hover:text-[#ff7a57] transition-colors">
              Security & Trust
            </Link>
            <span className="text-purple-400/40">|</span>
            <Link to="/company/careers" className="hover:text-[#ff7a57] transition-colors">
              Careers
            </Link>
            <span className="text-purple-400/40">|</span>
            <a
              href="https://live.itsguardian.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff7a57] transition-colors inline-flex items-center gap-1"
            >
              <span>Login</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
