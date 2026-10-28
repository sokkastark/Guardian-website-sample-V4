import React from 'react';
import Hero from '../components/hero/Hero';
import DataChallenge from '../components/sections/DataChallenge';
import GuardianJourney from '../components/journey/GuardianJourney';
import PlatformSection from '../components/sections/PlatformSection';
import PeopleTechnology from '../components/sections/PeopleTechnology';
import SolutionsSection from '../components/sections/SolutionsSection';
import AudienceSwitcher from '../components/sections/AudienceSwitcher';
import ImpactSection from '../components/sections/ImpactSection';
import TrustSection from '../components/sections/TrustSection';

export default function HomePage() {
  return (
    <>
      {/* Section 01: Interactive Hero with Layered Mouse Parallax */}
      <Hero />

      {/* Section 02: The Healthcare Data Challenge */}
      <DataChallenge />

      {/* Section 03: The Guardian Journey (Connect -> Understand -> Identify -> Act -> Outcome) */}
      <GuardianJourney />

      {/* Section 04: Guardian Platform (6 Connected Capabilities) */}
      <PlatformSection />

      {/* Section 05: People + Technology (4 Operational Service Roles) */}
      <PeopleTechnology />

      {/* Section 06: Healthcare Solutions (6 Value-Based Care Modules) */}
      <SolutionsSection />

      {/* Section 07: Who We Serve (Providers & Payers Interactive Switcher) */}
      <AudienceSwitcher />

      {/* Section 08: Impact (Proven Clinical & Operational Delivery) */}
      <ImpactSection />

      {/* Section 09: Trust & Certifications (CMS MIPS, HITRUST, CareQuality) */}
      <TrustSection />
    </>
  );
}
