import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Clock, 
  BookOpen, 
  FileText, 
  Lightbulb 
} from 'lucide-react';

export default function ResourcesSection() {
  const resources = [
    {
      type: 'EVALUATION FRAMEWORK',
      typeColor: '#7b3fc7',
      typeBg: '#f3edf9',
      readTime: '5 min read',
      image: '/images/challenge/doctor-coat.jpg',
      title: 'Improving HCC Gap Closure Through Targeted Outreach',
      desc: 'Operational framework for improving RAF accuracy and closing care gaps through targeted clinical workflows.',
      linkText: 'Explore evaluation framework',
      linkHref: '/resources#expertise',
    },
    {
      type: 'INSIGHT',
      typeColor: '#ff7a57',
      typeBg: '#fff2ee',
      readTime: '5 min read',
      image: '/images/case-study-ed.webp',
      title: 'Turning Fragmented Data Into Actionable Intelligence',
      desc: 'Key strategies for unifying clinical, claims, and patient data to drive value-based care.',
      linkText: 'Read insight',
      linkHref: '/resources#insights',
    },
    {
      type: 'OPERATIONAL GUIDE',
      typeColor: '#38bdf8',
      typeBg: '#f0f9ff',
      readTime: '5 min read',
      image: '/images/care-team-collaboration.jpg',
      title: 'A Practical Guide to Value-Based Care Readiness',
      desc: 'Steps healthcare organizations can take to prepare for success in value-based programs.',
      linkText: 'Explore readiness guide',
      linkHref: '/resources#guides',
    },
  ];

  return (
    <section 
      id="resources" 
      className="relative py-24 sm:py-28 lg:py-32 bg-white text-[#1c1636] overflow-hidden select-none border-t border-[#f0edf7]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[650px] h-[500px] bg-[#7b3fc7]/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ─────────────────────────────────────────────────────────────
            HEADER ROW: Title, Subtitle & "View all resources ->"
            ───────────────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3edf9] border border-[#7b3fc7]/25 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b3fc7] animate-pulse" />
              <span>RESOURCES & INSIGHTS</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1c1636] leading-[1.15] mb-4">
              See healthcare data{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#9333ea] to-[#ff7a57]">
                in action.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed font-normal">
              Explore our latest case studies, insights, and guides to learn how organizations are using Guardian to improve care, performance, and outcomes.
            </p>
          </motion.div>

          {/* View All Link */}
          <Link
            to="/resources"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#7b3fc7] hover:text-[#9333ea] group shrink-0"
          >
            <span>View all resources</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3 CARDS GRID
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {resources.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
              className="group rounded-3xl bg-white border border-[#ede7f6] hover:border-[#7b3fc7]/40 shadow-[0_8px_30px_rgba(28,22,54,0.06)] hover:shadow-[0_16px_48px_rgba(123,63,199,0.12)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Photo */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-[#faf8fd]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span 
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase shadow-xs"
                    style={{ backgroundColor: item.typeBg, color: item.typeColor }}
                  >
                    {item.type}
                  </span>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[10px] font-medium">
                    <Clock className="w-3 h-3" />
                    <span>{item.readTime}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1c1636] group-hover:text-[#7b3fc7] transition-colors leading-snug mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-4 border-t border-[#f0edf7] flex items-center justify-between">
                  <Link
                    to={item.linkHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7b3fc7] group-hover:text-[#9333ea] transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
