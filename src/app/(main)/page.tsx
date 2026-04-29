import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProblemSection from '@/components/ProblemSection'
import ServicePillars from '@/components/ServicePillars'
import Methodology from '@/components/Methodology'
import CaseStudyPreview from '@/components/CaseStudyPreview'

export const metadata: Metadata = {
  title: 'SEO, AIO & Digital Growth Systems',
  description: 'ROI-driven search visibility. We deploy data-driven SEO, AIO, and Google Ads strategies to scale service businesses. Dominate your market share.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://surgsolutions.online/',
    title: 'Surg Solutions | SEO, AIO & Digital Growth Systems',
    description: 'ROI-driven search visibility. We deploy data-driven SEO, AIO, and Google Ads strategies to scale service businesses.',
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
    name: 'Surg Solutions | SEO, AIO & Digital Growth Systems',
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
      <TrustBar />
      <ProblemSection />
      <ServicePillars />
      <Methodology />
      <CaseStudyPreview />
    </>
  )
}
