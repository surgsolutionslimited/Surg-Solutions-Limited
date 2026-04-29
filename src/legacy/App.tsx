import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import MainLayout from './layouts/MainLayout';
import FunnelLayout from './layouts/FunnelLayout';

import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Services from './pages/Services';
import FreeAudit from './pages/FreeAudit';
import About from './pages/About';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

import AuditLanding from './pages/audit/AuditLanding';
import AuditApply from './pages/audit/AuditApply';
import AuditBook from './pages/audit/AuditBook';
import AuditThankYou from './pages/audit/AuditThankYou';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/free-audit" element={<FreeAudit />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<FunnelLayout />}>
          <Route path="/audit" element={<AuditLanding />} />
          <Route path="/audit/apply" element={<AuditApply />} />
          <Route path="/audit/book" element={<AuditBook />} />
          <Route path="/audit/thank-you" element={<AuditThankYou />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
