import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const [showFloater, setShowFloater] = useState(false);

  // Title mapping for routes and sections (Resolves F14 audit requirement)
  useEffect(() => {
    const titles = {
      '/': 'Guardian Health Service | Healthcare Intelligence',
      '/platform': {
        'population-health': 'Population Health | Guardian Health Service',
        'patient-360': 'Patient 360 & PMC | Guardian Health Service',
        'risk-stratification': 'Risk Stratification | Guardian Health Service',
        'risk-adjustment': 'Risk Adjustment & MRA | Guardian Health Service',
        'quality-care-gaps': 'Quality & Care Gaps | Guardian Health Service',
        'care-management': 'Care Management | Guardian Health Service',
        'transitions-of-care': 'Transitions of Care & ADT | Guardian Health Service',
        'referral-management': 'Referral Management | Guardian Health Service',
        'patient-engagement': 'Patient Engagement | Guardian Health Service',
        'telemedicine': 'Telemedicine Platform | Guardian Health Service',
        'analytics': 'Healthcare Analytics | Guardian Health Service',
        default: 'Platform Modules | Guardian Health Service',
      },
      '/solutions': {
        'aco-vbc': 'ACO & Value-Based Care Solutions | Guardian Health Service',
        'health-plans': 'Health Plan Solutions | Guardian Health Service',
        'cin-providers': 'CIN & Provider Solutions | Guardian Health Service',
        'care-teams': 'Care Management Teams | Guardian Health Service',
        default: 'Solutions for Value-Based Care | Guardian Health Service',
      },
      '/intelligence': {
        'knowledge-graph': 'Clinical Knowledge Graph | Guardian Health Service',
        'ai-nlp': 'Healthcare AI & NLP | Guardian Health Service',
        'predictive-intelligence': 'Predictive Intelligence | Guardian Health Service',
        'intelligent-workflows': 'Intelligent Workflows | Guardian Health Service',
        'human-in-the-loop': 'Human-in-the-Loop Governance | Guardian Health Service',
        default: 'Healthcare Intelligence Engine | Guardian Health Service',
      },
      '/data-integration': {
        'clinical': 'Clinical EHR Integration | Guardian Health Service',
        'claims': 'Claims & Financial Data Integration | Guardian Health Service',
        'hie-adt': 'Real-Time HIE & ADT Streams | Guardian Health Service',
        'labs-pharmacy': 'Diagnostic Labs & Pharmacy Feeds | Guardian Health Service',
        'data-foundation': 'Data Foundation & MPI | Guardian Health Service',
        'apis-mobile': 'Developer APIs & Mobile Interoperability | Guardian Health Service',
        default: 'Healthcare Data & Integration | Guardian Health Service',
      },
      '/company': {
        'about': 'About Guardian | Guardian Health Service',
        'history': 'Our History & Milestones | Guardian Health Service',
        'leadership': 'Executive & Clinical Leadership | Guardian Health Service',
        'security': 'Security, HIPAA & Trust Safeguards | Guardian Health Service',
        'careers': 'Careers & Opportunities | Guardian Health Service',
        'contact': 'Contact Us & Request Demo | Guardian Health Service',
        default: 'Company & Leadership | Guardian Health Service',
      },
      '/resources': {
        'insights': 'Executive Perspectives & Insights | Guardian Health Service',
        'guides': 'Operational Playbooks & Guides | Guardian Health Service',
        'expertise': 'Demonstrated Platform Capabilities | Guardian Health Service',
        default: 'Knowledge & Resource Hub | Guardian Health Service',
      },
      '/why-guardian': 'Why Guardian | Healthcare Intelligence Platform',
    };

    const cleanPath = pathname.replace(/\/$/, '') || '/';
    const cleanHash = hash ? hash.replace('#', '') : null;

    let targetTitle = 'Guardian Health Service | Healthcare Intelligence';
    const routeConfig = titles[cleanPath];

    if (typeof routeConfig === 'string') {
      targetTitle = routeConfig;
    } else if (routeConfig && typeof routeConfig === 'object') {
      if (cleanHash && routeConfig[cleanHash]) {
        targetTitle = routeConfig[cleanHash];
      } else {
        targetTitle = routeConfig.default || targetTitle;
      }
    }

    document.title = targetTitle;
  }, [pathname, hash]);

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

