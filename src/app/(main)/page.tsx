import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import WhyNow from '@/components/WhyNow'
import TrustBar from '@/components/TrustBar'
import ProblemSection from '@/components/ProblemSection'
import PromiseBand from '@/components/PromiseBand'
import ServicePillars from '@/components/ServicePillars'
import Methodology from '@/components/Methodology'
import CaseStudyPreview from '@/components/CaseStudyPreview'
import RiskReversal from '@/components/RiskReversal'
import BonusStack from '@/components/BonusStack'

export const metadata: Metadata = {
  title: 'Growth Systems for Local Businesses | AI Search + SEO + Ads | Surg Solutions',
  description: 'Be found on Google AND in ChatGPT, Claude, Perplexity, and Gemini. We build complete growth systems for local service businesses — with a 90-day lead guarantee.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://surgsolutions.online/',
    title: 'Growth Systems for Local Businesses | AI Search + SEO + Ads | Surg Solutions',
    description: 'Be found on Google AND in ChatGPT, Claude, Perplexity, and Gemini. We build complete growth systems for local service businesses — with a 90-day lead guarantee.',
    images: [{ url: '/logo-dark.png' }],
  },
}

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Surg Solutions',
    url: 'https://surgsolutions.online',
    logo: 'https://surgsolutions.online/logo-dark.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+2349079969206',
      contactType: 'customer service',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Growth Systems for Local Businesses | AI Search + SEO + Ads | Surg Solutions',
    url: 'https://surgsolutions.online',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <WhyNow />
      <TrustBar />
      <ProblemSection />
      <PromiseBand />
      <ServicePillars />
      <Methodology />
      <CaseStudyPreview />
      <RiskReversal />
      <BonusStack />
    </>
  )
}
