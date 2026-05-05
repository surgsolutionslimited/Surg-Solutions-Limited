import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, Search, TrendingUp, Zap, CheckCircle2, Shield, Unlock, Calendar, ArrowRight } from 'lucide-react'
import ServicesFAQ from '@/components/ServicesFAQ'

export const metadata: Metadata = {
  title: 'Services & Pricing | Growth Systems for Local Businesses | Surg Solutions',
  description: 'Three growth system tiers — Starter, Standard, Advanced — built for local service businesses. Lead guarantee, 30-day live, and you own everything we build. Book the free audit.',
  alternates: { canonical: '/services' },
}

const services = [
  {
    id: 'website-design',
    icon: <Globe size={36} aria-hidden="true" />,
    title: 'Website Design & Development',
    desc: 'Your website is the asset every other system feeds. We build fast, mobile-first, conversion-focused websites that turn visitors into booked enquiries — not digital brochures that sit and look pretty.',
    tags: ['Conversion-focused', 'Mobile-first', 'WhatsApp-integrated', 'Owned by you forever'],
  },
  {
    id: 'seo-aeo',
    icon: <Search size={36} aria-hidden="true" />,
    title: 'SEO & Answer Engine Optimisation',
    desc: 'When a customer in your area Googles your service — or asks ChatGPT, Claude, Perplexity, or Gemini for a recommendation — your business shows up. We engineer your visibility across both traditional search and AI answer engines.',
    tags: ['Local SEO', 'AI search visibility', 'Google Business Profile', 'Entity authority'],
  },
  {
    id: 'ads',
    icon: <TrendingUp size={36} aria-hidden="true" />,
    title: 'Google Ads & Meta Ads',
    desc: 'Paid traffic is the fastest lever in your growth system. We set up and run campaigns that put your business in front of people actively searching for what you offer — and we optimise them weekly so cost-per-lead drops as the system matures.',
    tags: ['Google Search Ads', 'Meta Ads', 'Weekly optimisation', 'Landing pages built-in'],
  },
  {
    id: 'automation',
    icon: <Zap size={36} aria-hidden="true" />,
    title: 'Growth Automation',
    desc: 'A lead that waits 10 minutes for a reply is a lead you\'ve lost. Our automations respond instantly, route enquiries to the right place, and turn happy customers into 5-star reviews — all without you lifting a finger.',
    tags: ['Instant lead reply', 'Review engine', 'Lead routing', 'Performance dashboard'],
  },
]

const tiers = [
  {
    id: 'starter',
    tag: 'For solo operators & small local businesses',
    name: 'Starter',
    summary: 'Get found. Stop being invisible.',
    priceLabel: 'From ₦450,000 setup',
    priceMeta: 'Ongoing monthly retainer · Minimum term: 6 months',
    footnote: null,
    featured: false,
    ribbon: null,
    items: [
      '5-page conversion-optimised website',
      'Local SEO + AEO foundation',
      'Google Business Profile optimisation',
      'WhatsApp instant-reply automation',
      '2 SEO/AEO articles per month',
      'Monthly performance email',
      'Email support',
    ],
    guarantee: 'Live in 30 days or setup refunded',
    cta: 'Start with Starter',
    href: '/audit?tier=starter',
  },
  {
    id: 'standard',
    tag: 'For growing local businesses ready to scale',
    name: 'Standard',
    summary: 'The full growth system. Leads coming in every week.',
    priceLabel: 'Custom pricing',
    priceMeta: 'Tailored to your industry and goals · Minimum term: 6 months',
    footnote: 'Recommended ad spend paid directly to Google/Meta — discussed on your audit call.',
    featured: true,
    ribbon: 'Most Popular',
    items: [
      'Everything in Starter, plus:',
      '10-page custom conversion-optimised website',
      'Advanced SEO + ongoing AEO authority building',
      'Google Ads + Meta Ads — full setup & management',
      '4 SEO/AEO articles per month + 90-day content calendar',
      'Full WhatsApp + SMS automation pack',
      'Automated Review Engine',
      'Live performance dashboard',
      'Monthly strategy call',
      'WhatsApp priority support',
    ],
    guarantee: 'Lead Guarantee — work free until target hit',
    cta: 'Choose Standard',
    href: '/audit?tier=standard',
  },
  {
    id: 'advanced',
    tag: 'For multi-location operators & market leaders',
    name: 'Advanced',
    summary: 'Dominate your market across every channel.',
    priceLabel: 'Custom pricing',
    priceMeta: 'Multi-location & enterprise scope · Minimum term: 12 months',
    footnote: 'Premium tier with limited capacity — application reviewed within 48 hours.',
    featured: false,
    ribbon: null,
    items: [
      'Everything in Standard, plus:',
      'Unlimited-page custom website (multi-location architecture)',
      'Premium SEO + digital PR + premium AEO authority signals',
      'Multi-channel ads (Google + Meta + YouTube/TikTok)',
      '8 articles + 2 long-form thought leadership pieces per month',
      'Weekly AI visibility monitoring',
      'Monthly competitor intelligence report',
      'Full CRM integration + multi-step nurture sequences',
      'Monthly strategy call with the founder personally',
      'Quarterly deep-dive planning session',
      'Dedicated WhatsApp line',
    ],
    guarantee: 'Premium Lead Guarantee — work free + 50% refund if missed',
    cta: 'Apply for Advanced',
    href: '/audit?tier=advanced',
  },
]

const compareRows = [
  { label: 'Best for', starter: 'Solo / small operators', standard: 'Growing local businesses', advanced: 'Multi-location / market leaders' },
  { label: 'Website', starter: '5 pages', standard: '10 pages custom', advanced: 'Unlimited custom' },
  { label: 'SEO depth', starter: 'Local foundation', standard: 'Full SEO + link-building', advanced: 'Premium + digital PR' },
  { label: 'AEO depth', starter: 'Foundation', standard: 'Ongoing authority', advanced: 'Premium entity dominance' },
  { label: 'Articles / month', starter: '2', standard: '4 + content calendar', advanced: '8 + 2 thought leadership' },
  { label: 'Paid ads', starter: '—', standard: 'Google + Meta', advanced: 'Google + Meta + YouTube/TikTok' },
  { label: 'Automation', starter: 'Basic WhatsApp', standard: 'Full pack', advanced: 'Advanced multi-channel' },
  { label: 'Review Engine', starter: 'Basic', standard: 'Full automated', advanced: 'Multi-platform' },
  { label: 'Strategy calls', starter: 'Email support', standard: 'Monthly', advanced: 'Monthly with founder + quarterly deep-dive' },
  { label: 'Reporting', starter: 'Monthly email', standard: 'Live dashboard', advanced: 'Live dashboard + weekly summary' },
  { label: 'Lead Guarantee', starter: '—', standard: '✓ Work free until target hit', advanced: '✓ Work free + 50% refund' },
  { label: 'Live in 30 days', starter: '✓', standard: '✓', advanced: '✓' },
  { label: 'You own everything', starter: '✓', standard: '✓', advanced: '✓' },
  { label: 'Setup', starter: 'From ₦450,000', standard: 'On enquiry', advanced: 'On application' },
  { label: 'Monthly retainer', starter: 'Included in proposal', standard: 'Included in proposal', advanced: 'Included in proposal' },
  { label: 'Minimum term', starter: '6 months', standard: '6 months', advanced: '12 months' },
]

const bonuses = [
  { item: 'AI Visibility Audit — your business + top 3 competitors across ChatGPT, Claude, Perplexity, Gemini', value: '₦150,000' },
  { item: '90-Day Content & AEO Entity Calendar', value: '₦200,000' },
  { item: 'WhatsApp + SMS Lead-Response Automation Pack', value: '₦120,000' },
  { item: 'Google Business Profile Domination Setup', value: '₦100,000' },
  { item: 'Competitor Teardown Report', value: '₦80,000' },
  { item: 'Review Engine — automated 5-star review collection', value: '₦100,000' },
  { item: '6 × Monthly Strategy Calls', value: '₦300,000' },
]

const riskCards = [
  {
    icon: <Shield size={32} aria-hidden="true" />,
    title: 'Lead Guarantee (Standard & Advanced)',
    body: "If our system doesn't hit agreed lead targets in 90 days, we keep working free until it does. You pay for outcomes, not activity.",
  },
  {
    icon: <Unlock size={32} aria-hidden="true" />,
    title: 'You Own Everything',
    body: 'Website, content, ad accounts, automations, customer data — all yours, forever. Walk away anytime and take it all. No agency lock-in.',
  },
  {
    icon: <Calendar size={32} aria-hidden="true" />,
    title: 'Live in 30 Days or Refund',
    body: 'Your system goes live within 30 days of project start. If we miss it, your setup fee is refunded — and we still finish the build at no extra cost.',
  },
]

export default function ServicesPage() {
  return (
    <div className="services-page animate-fade-in">

      {/* ── Hero ── */}
      <section className="svc-hero section-dark text-center">
        <div className="container">
          <h1>
            Everything Your Business Needs to<br />
            <span className="text-gradient">Grow Online — In One Place.</span>
          </h1>
          <p className="svc-hero-subtitle">
            We don&apos;t sell individual services. We build complete growth systems — structured in three tiers so you can pick the right level for where your business is today.
          </p>
        </div>
      </section>

      {/* ── Four service components ── */}
      <section className="svc-list section section-light">
        <div className="container">
          <div className="svc-items">
            {services.map((svc, idx) => (
              <article key={svc.id} className={`svc-item ${idx % 2 === 1 ? 'svc-item--reverse' : ''}`}>
                <div className="svc-item-icon-wrap">
                  <div className="svc-item-icon">{svc.icon}</div>
                </div>
                <div className="svc-item-content">
                  <h2 id={svc.id}>{svc.title}</h2>
                  <p>{svc.desc}</p>
                  <div className="svc-tags">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="svc-tag">
                        <CheckCircle2 size={13} aria-hidden="true" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tier cards ── */}
      <section className="tier-section section section-gray">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '3.5rem' }}>
            <h2>Choose your growth tier</h2>
            <p>Every tier delivers a complete growth system — Foundation, Visibility, Acquisition, Conversion. The difference is depth, channel breadth, and the strength of your lead guarantee.</p>
          </div>
          <div className="tier-cards">
            {tiers.map((tier) => (
              <article key={tier.id} className={`tier-card${tier.featured ? ' tier-card--featured' : ''}`}>
                {tier.ribbon && <div className="tier-ribbon">{tier.ribbon}</div>}
                <p className="tier-tag">{tier.tag}</p>
                <h3 className="tier-name">{tier.name}</h3>
                <p className="tier-summary">{tier.summary}</p>
                <div className="tier-price-block">
                  <span className="tier-price-label">{tier.priceLabel}</span>
                  <span className="tier-price-meta">{tier.priceMeta}</span>
                  {tier.id === 'standard' && <span className="tier-popular-note">Most clients invest in this tier.</span>}
                  {tier.id === 'advanced' && <span className="tier-popular-note">By application only.</span>}
                </div>
                <ul className="tier-list">
                  {tier.items.map((item) => (
                    <li key={item} className={item.endsWith(':') ? 'tier-list-header' : ''}>
                      {!item.endsWith(':') && <CheckCircle2 size={15} aria-hidden="true" />}
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="tier-guarantee-chip">
                  <CheckCircle2 size={15} aria-hidden="true" /> {tier.guarantee}
                </div>
                <Link href={tier.href} className={`btn ${tier.featured ? 'btn-primary' : 'btn-secondary'} tier-cta`}>
                  {tier.cta} <ArrowRight size={16} aria-hidden="true" />
                </Link>
                {tier.footnote && <p className="tier-footnote">{tier.footnote}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="comparison-section section section-light">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <h2>Compare tiers side-by-side</h2>
          </div>
          <div className="comparison-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Starter</th>
                  <th className="comparison-col--featured">Standard ⭐</th>
                  <th>Advanced</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'comparison-row--stripe' : ''}>
                    <td className="comparison-label">{row.label}</td>
                    <td>{row.starter}</td>
                    <td className="comparison-col--featured">{row.standard}</td>
                    <td>{row.advanced}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Bonus stack ── */}
      <section className="svc-bonus section section-gray">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
            <h2>Included with every Standard &amp; Advanced system — at no extra cost</h2>
            <p>Most agencies charge separately for each of these. We include them.</p>
          </div>
          <div className="bonus-table" role="table" aria-label="Included bonuses">
            <div className="bonus-row bonus-row-header" role="row">
              <span role="columnheader">Inclusion</span>
              <span role="columnheader">Standalone Value</span>
            </div>
            {bonuses.map((b) => (
              <div key={b.item} className="bonus-row" role="row">
                <span className="bonus-item" role="cell">
                  <span className="bonus-check" aria-hidden="true">&#10003;</span> {b.item}
                </span>
                <span className="bonus-value" role="cell">{b.value}</span>
              </div>
            ))}
          </div>
          <p className="bonus-total">Total bonus value: ₦1,050,000+ — included free.</p>
        </div>
      </section>

      {/* ── Risk reversal ── */}
      <section className="risk-reversal section section-light">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <h2>Why working with us is risk-free</h2>
          </div>
          <div className="risk-cards">
            {riskCards.map((card) => (
              <article key={card.title} className="risk-card">
                <div className="risk-card-icon">{card.icon}</div>
                <h3 className="risk-card-title">{card.title}</h3>
                <p className="risk-card-body">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <ServicesFAQ />

    </div>
  )
}
