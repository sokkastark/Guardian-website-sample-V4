import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigationConfig, isParentActive, isChildActive } from '../../config/navigation';
import NavDropdown from './NavDropdown';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileAccordion = (label) => {
    setExpandedMobile((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/95 backdrop-blur-md border-b border-[#e1e1e5] shadow-sm shadow-[#1c1636]/5'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Guardian Brand Logo -> Links to / */}
          <Link
            to="/"
            onClick={() => {
              closeMobileMenu();
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3fc7] rounded-lg p-1"
            aria-label="Guardian Health Service Homepage"
          >
            <div className="relative h-9 sm:h-10 w-auto flex items-center">
              <img
                src={isScrolled ? '/logos/Logo.webp' : '/logos/logo-white.png'}
                alt="Guardian Health Service"
                className="h-8 sm:h-9 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/logos/Logo.webp';
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <nav
            className={`hidden lg:flex items-center gap-1 xl:gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-[#f2ecf9]/80 border border-[#e1e1e5] backdrop-blur-md'
                : 'bg-white/15 border border-white/25 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.2)]'
            }`}
            aria-label="Main Desktop Navigation"
          >
            {navigationConfig.map((item) => (
              <NavDropdown
                key={item.label}
                item={item}
                isScrolled={isScrolled}
                currentPath={location.pathname + location.hash}
              />
            ))}
          </nav>

          {/* Action CTAs: Request a Demo + Login ↗ */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/company?intent=demo#contact"
              className={`px-4 py-2 text-xs lg:text-sm font-medium transition-colors rounded-full ${
                location.pathname === '/company' && location.hash === '#contact'
                  ? 'text-[#7b3fc7] font-semibold bg-white/10'
                  : isScrolled
                  ? 'text-[#35304c] hover:text-[#7b3fc7]'
                  : 'text-white hover:text-purple-200'
              }`}
            >
              Request a Demo
            </Link>

            <a
              href="https://live.itsguardian.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs lg:text-sm font-medium text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_14px_rgba(123,63,199,0.3)] hover:shadow-[0_6px_20px_rgba(123,63,199,0.4)] transition-all duration-300 active:scale-95"
            >
              <span>Login</span>
              <span className="text-xs font-light">↗</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-[#1c1636] hover:text-[#7b3fc7] hover:bg-[#f2ecf9]'
                  : 'text-white hover:text-purple-200 hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Accordion Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-[#e1e1e5] shadow-xl px-4 sm:px-6 py-5 overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-1.5">
              {navigationConfig.map((item) => {
                const parentActive = isParentActive(location.pathname + location.hash, item);
                const isExpanded = !!expandedMobile[item.label];

                return (
                  <div key={item.label} className="border-b border-[#e1e1e5]/40 pb-1 last:border-b-0">
                    <div className="flex items-center justify-between">
                      {/* Tapping label navigates to page */}
                      <Link
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={`flex-1 py-2 text-base font-medium rounded-lg px-2 transition-colors ${
                          parentActive
                            ? 'text-[#7b3fc7] font-semibold bg-[#f2ecf9]'
                            : 'text-[#1c1636] hover:text-[#7b3fc7]'
                        }`}
                      >
                        {item.label}
                      </Link>

                      {/* Tapping chevron toggles sub-links */}
                      {item.children && (
                        <button
                          type="button"
                          onClick={() => toggleMobileAccordion(item.label)}
                          aria-expanded={isExpanded}
                          className="p-2 rounded-lg text-[#adabb7] hover:text-[#7b3fc7] hover:bg-[#f8f6fc] cursor-pointer"
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-[#7b3fc7]' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Child Accordion List */}
                    <AnimatePresence>
                      {isExpanded && item.children && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 pr-2 py-1 flex flex-col gap-1 overflow-hidden"
                        >
                          {item.children.map((child) => {
                            const childActive = isChildActive(location.pathname + location.hash, child.path);
                            return (
                              <React.Fragment key={child.path + child.label}>
                                <Link
                                  to={child.path}
                                  onClick={() => {
                                    closeMobileMenu();
                                    if (child.path.includes('#')) {
                                      const [targetPath, targetHash] = child.path.split('#');
                                      if (window.location.pathname === targetPath && targetHash) {
                                        setTimeout(() => {
                                          const el = document.getElementById(targetHash);
                                          if (el) {
                                            const offset = 90;
                                            const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
                                            window.scrollTo({
                                              top: Math.max(0, elementPosition - offset),
                                              behavior: 'smooth'
                                            });
                                          }
                                        }, 60);
                                      }
                                    }
                                  }}
                                  className={`py-1.5 px-3 rounded-lg text-sm transition-colors ${
                                    childActive
                                      ? 'bg-[#f2ecf9] text-[#7b3fc7] font-semibold'
                                      : 'text-[#727272] hover:text-[#7b3fc7] hover:bg-[#f8f6fc]'
                                  }`}
                                >
                                  {child.label}
                                </Link>

                                {child.subchildren && (
                                  <div className="pl-4 flex flex-col gap-1">
                                    {child.subchildren.map((sub) => {
                                      const subActive = isChildActive(location.pathname, sub.path);
                                      return (
                                        <Link
                                          key={sub.path + sub.label}
                                          to={sub.path}
                                          onClick={closeMobileMenu}
                                          className={`py-1 px-3 rounded-lg text-xs transition-colors flex items-center gap-1.5 ${
                                            subActive
                                              ? 'bg-[#f2ecf9] text-[#7b3fc7] font-semibold'
                                              : 'text-[#727272] hover:text-[#7b3fc7] hover:bg-[#f8f6fc]'
                                          }`}
                                        >
                                          <span className="text-[#adabb7]">↳</span>
                                          <span>{sub.label}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                )}
                              </React.Fragment>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Mobile Action CTAs */}
              <div className="pt-4 border-t border-[#e1e1e5] flex flex-col gap-2.5 mt-2">
                <Link
                  to="/company/contact?intent=demo"
                  onClick={closeMobileMenu}
                  className="w-full text-center py-2.5 rounded-full font-medium text-sm text-[#35304c] hover:bg-[#f2ecf9] border border-[#e1e1e5]"
                >
                  Request a Demo
                </Link>
                <a
                  href="https://live.itsguardian.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-medium text-sm text-white bg-[#7b3fc7] shadow-md shadow-[#7b3fc7]/20"
                >
                  <span>Login</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
