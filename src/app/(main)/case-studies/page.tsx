import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'

export const metadata: Metadata = {
  title: 'SEO & Client Case Studies',
  description: 'Every case study is a real growth story with real numbers. See how we help service businesses scale their organic and paid traffic.',
  alternates: { canonical: '/case-studies' },
}

export default function CaseStudiesPage() {
  return (
    <div className="case-studies-page animate-fade-in">
      <section className="cs-page-header section-dark text-center">
        <div className="container">
          <h1>Real Results. Real Businesses.</h1>
          <p>Every case study below is a real growth story — with real numbers. No vanity metrics, no vague claims.</p>
        </div>
      </section>

      <section className="cs-page-content section section-gray">
        <div className="container">
          <div className="cs-grid-real">
            {caseStudies.map((cs) => (
              <Link key={cs.id} href={`/case-studies/${cs.id}`} className="cs-card-real">
                <span className="cs-card-industry" style={{ color: cs.accentColor }}>{cs.industry}</span>
                <h2 className="cs-card-title">{cs.title}</h2>
                <div className="cs-card-divider" aria-hidden="true" />
                <div className="cs-card-stat" style={{ color: cs.accentColor }}>{cs.stat}</div>
                <div className="cs-card-stat-label">{cs.statLabel}</div>
                <div className="cs-card-tags">
                  {cs.tags.map((t) => <span key={t} className="cs-card-tag">{t}</span>)}
                </div>
                <div className="cs-card-arrow">
                  Read case study <ArrowRight size={14} aria-hidden="true" />
                </div>
              </Link>
            ))}
            <div className="cs-card-placeholder">
              <span>More case studies coming soon</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
