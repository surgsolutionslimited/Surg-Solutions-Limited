import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomCTA from './components/BottomCTA';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Services from './pages/Services';
import FreeAudit from './pages/FreeAudit';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/free-audit" element={<FreeAudit />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <BottomCTA />
        <Footer />
        <FloatingCTA />
      </div>
    </BrowserRouter>
  );
}

export default App;

