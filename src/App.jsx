import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

function RedirectToSection({ sectionId }) {
  const location = useLocation();
  const search = location.search || '';
  return <Navigate to={`/company${search}#${sectionId}`} replace />;
}

function RedirectToResourceSection({ sectionId }) {
  const location = useLocation();
  const search = location.search || '';
  return <Navigate to={`/resources${search}#${sectionId}`} replace />;
}

function RedirectToDataIntegrationSection({ sectionId }) {
  const location = useLocation();
  const search = location.search || '';
  return <Navigate to={`/data-integration${search}#${sectionId}`} replace />;
}

function RedirectToIntelligenceSection({ sectionId }) {
  const location = useLocation();
  const search = location.search || '';
  return <Navigate to={`/intelligence${search}#${sectionId}`} replace />;
}

function RedirectToSolutionsSection({ sectionId }) {
  const location = useLocation();
  const search = location.search || '';
  return <Navigate to={`/solutions${search}#${sectionId}`} replace />;
}

function RedirectToPlatformSection({ sectionId }) {
  const location = useLocation();
  const search = location.search || '';
  return <Navigate to={`/platform${search}#${sectionId}`} replace />;
}

// Primary Landing & Category Pages
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import PlatformPage from './pages/PlatformPage';
import IntelligencePage from './pages/IntelligencePage';
import DataIntegrationOverviewPage from './pages/DataIntegrationOverviewPage';
import CompanyOverviewPage from './pages/CompanyOverviewPage';
import WhyGuardianPage from './pages/WhyGuardianPage';
import ResourcesPage from './pages/ResourcesPage';

// Audience / Segment Pages
import ServicesPage from './pages/ServicesPage';



export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-[#35304c] flex flex-col selection:bg-[#f2ecf9] selection:text-[#7b3fc7]">
        {/* Sticky Global Navigation */}
        <Header />

        {/* Dynamic Route View */}
        <main className="flex-1">
          <Routes>
            {/* ── TOP-LEVEL CANONICAL HUB ROUTES ── */}
            <Route path="/" element={<HomePage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/intelligence" element={<IntelligencePage />} />
            <Route path="/data-integration" element={<DataIntegrationOverviewPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/company" element={<CompanyOverviewPage />} />

            {/* ── PLATFORM CONSOLIDATED SECTION REDIRECTS ── */}
            <Route path="/platform/population-health" element={<RedirectToPlatformSection sectionId="population-health" />} />
            <Route path="/platform/analytics" element={<RedirectToPlatformSection sectionId="analytics" />} />
            <Route path="/platform/patient-intelligence" element={<RedirectToPlatformSection sectionId="patient-360" />} />
            <Route path="/platform/patient-intelligence/patient-360" element={<RedirectToPlatformSection sectionId="patient-360" />} />
            <Route path="/platform/risk-stratification" element={<RedirectToPlatformSection sectionId="risk-stratification" />} />
            <Route path="/platform/risk-adjustment" element={<RedirectToPlatformSection sectionId="risk-adjustment" />} />
            <Route path="/platform/quality-care-gaps" element={<RedirectToPlatformSection sectionId="quality-care-gaps" />} />
            <Route path="/platform/care-management" element={<RedirectToPlatformSection sectionId="care-management" />} />
            <Route path="/platform/transitions-of-care-adt" element={<RedirectToPlatformSection sectionId="transitions-of-care" />} />
            <Route path="/platform/referral-management" element={<RedirectToPlatformSection sectionId="referral-management" />} />
            <Route path="/platform/patient-engagement" element={<RedirectToPlatformSection sectionId="patient-engagement" />} />
            <Route path="/platform/telemedicine" element={<RedirectToPlatformSection sectionId="telemedicine" />} />

            {/* ── SOLUTIONS CONSOLIDATED SECTION REDIRECTS ── */}
            <Route path="/solutions/aco-value-based-care" element={<RedirectToSolutionsSection sectionId="aco-vbc" />} />
            <Route path="/solutions/health-plans" element={<RedirectToSolutionsSection sectionId="health-plans" />} />
            <Route path="/solutions/cin-provider-organizations" element={<RedirectToSolutionsSection sectionId="cin-providers" />} />
            <Route path="/solutions/care-management-teams" element={<RedirectToSolutionsSection sectionId="care-teams" />} />

            {/* ── INTELLIGENCE CONSOLIDATED SECTION REDIRECTS ── */}
            <Route path="/intelligence/clinical-knowledge-graph" element={<RedirectToIntelligenceSection sectionId="knowledge-graph" />} />
            <Route path="/intelligence/ai" element={<RedirectToIntelligenceSection sectionId="ai-nlp" />} />
            <Route path="/intelligence/predictive-intelligence" element={<RedirectToIntelligenceSection sectionId="predictive-intelligence" />} />
            <Route path="/intelligence/intelligent-workflows" element={<RedirectToIntelligenceSection sectionId="intelligent-workflows" />} />
            <Route path="/intelligence/human-in-the-loop" element={<RedirectToIntelligenceSection sectionId="human-in-the-loop" />} />

            {/* ── DATA & INTEGRATION CONSOLIDATED SECTION REDIRECTS ── */}
            <Route path="/data-integration/clinical-integration" element={<RedirectToDataIntegrationSection sectionId="clinical" />} />
            <Route path="/data-integration/claims-integration" element={<RedirectToDataIntegrationSection sectionId="claims" />} />
            <Route path="/data-integration/hie-adt" element={<RedirectToDataIntegrationSection sectionId="hie-adt" />} />
            <Route path="/data-integration/labs-pharmacy-other" element={<RedirectToDataIntegrationSection sectionId="labs-pharmacy" />} />
            <Route path="/data-integration/data-foundation" element={<RedirectToDataIntegrationSection sectionId="data-foundation" />} />
            <Route path="/data-integration/apis-mobile" element={<RedirectToDataIntegrationSection sectionId="apis-mobile" />} />

            {/* ── RESOURCES CONSOLIDATED SECTION REDIRECTS ── */}
            <Route path="/resources/insights" element={<RedirectToResourceSection sectionId="insights" />} />
            <Route path="/resources/guides" element={<RedirectToResourceSection sectionId="guides" />} />
            <Route path="/resources/case-studies" element={<RedirectToResourceSection sectionId="expertise" />} />
            <Route path="/resources/webinars" element={<RedirectToResourceSection sectionId="expertise" />} />
            <Route path="/resources/product-tours" element={<RedirectToResourceSection sectionId="expertise" />} />
            <Route path="/resources/videos" element={<RedirectToResourceSection sectionId="expertise" />} />

            {/* ── COMPANY CONSOLIDATED SECTION REDIRECTS ── */}
            <Route path="/company/about" element={<RedirectToSection sectionId="about" />} />
            <Route path="/company/approach" element={<RedirectToSection sectionId="history" />} />
            <Route path="/company/history" element={<RedirectToSection sectionId="history" />} />
            <Route path="/company/leadership" element={<RedirectToSection sectionId="leadership" />} />
            <Route path="/company/security-trust" element={<RedirectToSection sectionId="security" />} />
            <Route path="/company/careers" element={<RedirectToSection sectionId="careers" />} />
            <Route path="/company/contact" element={<RedirectToSection sectionId="contact" />} />

            {/* ── LEGACY REDIRECTS (APPROVED MIGRATION MATRIX) ── */}
            <Route path="/contact" element={<RedirectToSection sectionId="contact" />} />
            <Route path="/solutions/analytics-intelligence" element={<Navigate to="/platform/analytics" replace />} />
            <Route path="/solutions/population-health" element={<Navigate to="/platform/population-health" replace />} />
            <Route path="/solutions/care-management" element={<Navigate to="/platform/care-management" replace />} />
            <Route path="/solutions/risk-adjustment" element={<Navigate to="/platform/risk-adjustment" replace />} />
            <Route path="/solutions/quality-performance" element={<Navigate to="/platform/quality-care-gaps" replace />} />
            <Route path="/solutions/patient-engagement" element={<Navigate to="/platform/patient-engagement" replace />} />
            <Route path="/platform/data-integration" element={<RedirectToDataIntegrationSection sectionId="data-foundation" />} />
            <Route path="/platform/data-enrichment" element={<RedirectToDataIntegrationSection sectionId="claims" />} />
            <Route path="/platform/information-services" element={<RedirectToDataIntegrationSection sectionId="clinical" />} />
            <Route path="/who-we-serve" element={<Navigate to="/solutions" replace />} />
            <Route path="/who-we-serve/payers" element={<RedirectToSolutionsSection sectionId="health-plans" />} />
            <Route path="/who-we-serve/providers" element={<RedirectToSolutionsSection sectionId="cin-providers" />} />
            <Route path="/services" element={<RedirectToSolutionsSection sectionId="care-teams" />} />
            <Route path="/services/account-executives" element={<RedirectToSolutionsSection sectionId="care-teams" />} />
            <Route path="/services/risk-coders" element={<Navigate to="/platform/risk-adjustment" replace />} />
            <Route path="/services/care-managers" element={<RedirectToSolutionsSection sectionId="care-teams" />} />
            <Route path="/services/care-navigators" element={<RedirectToSolutionsSection sectionId="care-teams" />} />
            <Route path="/why-guardian" element={<Navigate to="/company" replace />} />
            <Route path="/why-guardian/about" element={<RedirectToSection sectionId="about" />} />
            <Route path="/why-guardian/our-story" element={<RedirectToSection sectionId="history" />} />
            <Route path="/why-guardian/healthcare-expertise" element={<RedirectToSection sectionId="about" />} />
            <Route path="/why-guardian/leadership" element={<RedirectToSection sectionId="leadership" />} />
            <Route path="/why-guardian/certifications-trust" element={<RedirectToSection sectionId="security" />} />
            <Route path="/careers" element={<RedirectToSection sectionId="careers" />} />

            {/* Fallback Catch-All Redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
