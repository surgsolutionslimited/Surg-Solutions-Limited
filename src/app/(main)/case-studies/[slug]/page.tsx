import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, MessageCircle, CheckCircle2 } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.id === slug)
  if (!cs) return {}
  return {
    title: `${cs.title} | ${cs.industry}`,
    description: `Case study: ${cs.industry} — ${cs.stat} ${cs.statLabel}. Learn how Surg Solutions achieved these results.`,
    alternates: { canonical: `/case-studies/${cs.id}` },
  }
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.id === slug)
  if (!cs) notFound()

  const isRich = !!cs.overview

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: cs.title,
    description: `Case study: ${cs.industry} — ${cs.stat} ${cs.statLabel}.`,
    author: { '@type': 'Organization', name: 'Surg Solutions', url: 'https://surgsolutions.online' },
    publisher: { '@type': 'Organization', name: 'Surg Solutions', url: 'https://surgsolutions.online' },
    url: `https://surgsolutions.online/case-studies/${cs.id}`,
  }

  return (
    <article className="cs-detail-page animate-fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="cs-detail-hero section-dark">
        <div className="container">
          <Link href="/case-studies" className="cs-detail-back">
            <ArrowLeft size={16} aria-hidden="true" /> Back to Case Studies
          </Link>
          <p className="cs-detail-tag" style={{ color: cs.accentColor }}>
            {cs.industry} · {cs.tags.join(' · ')}
          </p>
          <h1 className="cs-detail-title">{cs.title}</h1>
          <div className="cs-detail-stats">
            {cs.stats.map((s) => (
              <div key={s.label} className="cs-detail-stat">
                <div className="cs-detail-stat-num" style={{ color: cs.accentColor }}>{s.num}</div>
                <div className="cs-detail-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-detail-body section section-light">
        <div className="container">
          <div className="cs-detail-content">
            {isRich ? (
              <>
                {cs.overview && (
                  <div className="cs-detail-section">
                    <h2>Overview</h2>
                    <p>{cs.overview}</p>
                  </div>
                )}
                {cs.challenge && cs.challenge.length > 0 && (
                  <div className="cs-detail-section">
                    <h2>The Challenge</h2>
                    <ul className="cs-detail-bullets">
                      {cs.challenge.map((item, i) => (
                        <li key={i}><CheckCircle2 size={15} className="cs-bullet-icon" aria-hidden="true" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {cs.strategicApproach && cs.strategicApproach.length > 0 && (
                  <div className="cs-detail-section">
                    <h2>Strategic Approach</h2>
                    <div className="cs-strategy-list">
                      {cs.strategicApproach.map((step, i) => (
                        <div key={i} className="cs-strategy-item">
                          <div className="cs-strategy-num">{String(i + 1).padStart(2, '0')}</div>
                          <div className="cs-strategy-body">
                            <h3>{step.title}</h3>
                            <ul>{step.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {cs.performanceMetrics && cs.performanceMetrics.length > 0 && (
                  <div className="cs-detail-section">
                    <h2>Performance Snapshot</h2>
                    <div className="cs-metrics-grid">
                      {cs.performanceMetrics.map((m) => (
                        <div key={m.label} className="cs-metric-card">
                          <div className="cs-metric-value" style={{ color: cs.accentColor }}>{m.value}</div>
                          <div className="cs-metric-label">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {cs.aiInsights && cs.aiInsights.length > 0 && (
                  <div className="cs-detail-section">
                    <h2>AI &amp; Performance Insights</h2>
                    <ul className="cs-detail-bullets">
                      {cs.aiInsights.map((item, i) => (
                        <li key={i}><CheckCircle2 size={15} className="cs-bullet-icon" aria-hidden="true" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {cs.businessImpact && cs.businessImpact.length > 0 && (
                  <div className="cs-detail-section">
                    <h2>Business Impact</h2>
                    <ul className="cs-detail-bullets">
                      {cs.businessImpact.map((item, i) => (
                        <li key={i}><CheckCircle2 size={15} className="cs-bullet-icon" aria-hidden="true" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {cs.strategicTakeaway && (
                  <div className="cs-detail-section">
                    <h2>Strategic Takeaway</h2>
                    <p className="cs-takeaway">{cs.strategicTakeaway}</p>
                  </div>
                )}
              </>
            ) : (
              <>
                {cs.problem && (
                  <div className="cs-detail-section"><h2>The Problem</h2><p>{cs.problem}</p></div>
                )}
                {cs.whatWeDid && (
                  <div className="cs-detail-section"><h2>What We Did</h2><p>{cs.whatWeDid}</p></div>
                )}
                {cs.result && (
                  <div className="cs-detail-section"><h2>The Result</h2><p>{cs.result}</p></div>
                )}
                {cs.quote && <blockquote className="cs-detail-quote">{cs.quote}</blockquote>}
              </>
            )}

            <div className="cs-detail-cta">
              <p>Want results like this for your business?</p>
              <a href="https://wa.link/a2gatg" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <MessageCircle size={18} aria-hidden="true" /> Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
