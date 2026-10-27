import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { isParentActive, isChildActive } from '../../config/navigation';

export default function NavDropdown({ item, isScrolled, currentPath }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const parentActive = isParentActive(currentPath, item);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      {/* Top-Level Link */}
      <Link
        to={item.path}
        aria-haspopup={item.children ? 'true' : 'false'}
        aria-expanded={isOpen}
        className={`group inline-flex items-center gap-1 px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3fc7] ${
          parentActive
            ? isScrolled
              ? 'bg-white text-[#7b3fc7] shadow-xs font-semibold'
              : 'bg-white/25 text-white shadow-xs font-semibold'
            : isScrolled
            ? 'text-[#35304c] hover:text-[#7b3fc7] hover:bg-white'
            : 'text-white/90 hover:text-white hover:bg-white/15'
        }`}
      >
        <span>{item.label}</span>
        {item.children && (
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            } ${
              parentActive
                ? isScrolled ? 'text-[#7b3fc7]' : 'text-white'
                : isScrolled ? 'text-[#adabb7] group-hover:text-[#7b3fc7]' : 'text-white/60 group-hover:text-white'
            }`}
          />
        )}
      </Link>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && item.children && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="absolute top-full left-0 mt-2 w-72 max-h-[80vh] overflow-y-auto rounded-2xl bg-white/95 backdrop-blur-xl border border-[#e1e1e5] shadow-xl shadow-[#1c1636]/10 p-2 z-50"
          >
            <div className="flex flex-col gap-0.5">
              {item.children.map((child) => {
                const childActive = isChildActive(currentPath, child.path);
                const isOverview = child.path === item.path;

                return (
                  <React.Fragment key={child.path + child.label}>
                    <Link
                      to={child.path}
                      onClick={() => {
                        setIsOpen(false);
                        if (child.path.includes('#')) {
                          const [targetPath, targetHash] = child.path.split('#');
                          const currentNorm = window.location.pathname.replace(/\/$/, '') || '/';
                          const targetNorm = targetPath.replace(/\/$/, '') || '/';
                          if (currentNorm === targetNorm && targetHash) {
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
                            }, 50);
                          }
                        }
                      }}
                      className={`flex items-center justify-between px-3 py-1.5 rounded-xl text-xs xl:text-sm font-medium transition-all ${
                        childActive
                          ? 'bg-[#f2ecf9] text-[#7b3fc7] font-semibold'
                          : isOverview
                          ? 'text-[#1c1636] hover:bg-[#f8f6fc] hover:text-[#7b3fc7] font-medium border-b border-[#e1e1e5]/60 mb-1 pb-2'
                          : 'text-[#35304c] hover:bg-[#f8f6fc] hover:text-[#7b3fc7]'
                      }`}
                    >
                      <span>{child.label}</span>
                      {isOverview && (
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#adabb7] bg-white px-1.5 py-0.5 rounded border border-[#e1e1e5]">
                          Landing
                        </span>
                      )}
                    </Link>

                    {/* Subchildren (e.g. Patient 360 / PMC) */}
                    {child.subchildren && (
                      <div className="pl-4 pr-1 py-0.5 flex flex-col gap-0.5">
                        {child.subchildren.map((sub) => {
                          const subActive = isChildActive(currentPath, sub.path);
                          return (
                            <Link
                              key={sub.path + sub.label}
                              to={sub.path}
                              onClick={() => setIsOpen(false)}
                              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
