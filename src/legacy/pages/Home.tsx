import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import ProblemSection from '../../components/ProblemSection';
import ServicePillars from '../../components/ServicePillars';
import Methodology from '../../components/Methodology';
import CaseStudyPreview from '../../components/CaseStudyPreview';

import SEO from '../SEO';

export default function Home() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Surg Solutions",
      "url": "https://surgsolutions.online",
      "logo": "https://surgsolutions.online/logo-dark.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+2349079969206",
        "contactType": "customer service"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Surg Solutions | SEO, AIO & Digital Growth Systems",
      "url": "https://surgsolutions.online"
    }
  ];

  return (
    <>
      <SEO 
        title="SEO, AIO & Digital Growth Systems"
        description="ROI-driven search visibility. We deploy data-driven SEO, AIO, and Google Ads strategies to scale B2B enterprises. Dominate your market share."
        canonical="/"
        schema={schema}
      />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <ServicePillars />
      <Methodology />
      <CaseStudyPreview />
    </>
  );
}

