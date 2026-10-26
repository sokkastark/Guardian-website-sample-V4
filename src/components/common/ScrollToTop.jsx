import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const [showFloater, setShowFloater] = useState(false);

  // 1. Handle route and hash changes with sticky-header offset
  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const scrollToElement = () => {
        const element = document.getElementById(targetId);
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

      // Try immediately, or retry on next animation frame after component render
      if (!scrollToElement()) {
        const timer = setTimeout(scrollToElement, 100);
        return () => clearTimeout(timer);
      }
    } else {
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname, hash]);

  // 2. Track scroll position for floating back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloater(true);
      } else {
        setShowFloater(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {showFloater && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#7b3fc7] hover:bg-[#6833ab] text-white font-semibold text-xs sm:text-sm shadow-[0_8px_25px_rgba(123,63,199,0.45)] border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
        >
          <span>Back to top</span>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

