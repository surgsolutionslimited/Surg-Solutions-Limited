import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProblemSection from '../components/ProblemSection';
import ServicePillars from '../components/ServicePillars';
import Methodology from '../components/Methodology';
import CaseStudyPreview from '../components/CaseStudyPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <ServicePillars />
      <Methodology />
      <CaseStudyPreview />
    </>
  );
}

