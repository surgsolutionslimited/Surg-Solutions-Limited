import Link from 'next/link'
import { ArrowRight, Globe, Search, TrendingUp, Zap } from 'lucide-react'

const services = [
  {
    id: 'online-presence',
    title: 'Online Presence',
    description: 'Website + Google visibility built to convert visitors into enquiries — your 24/7 sales tool.',
    icon: <Globe size={32} aria-hidden="true" />,
  },
  {
    id: 'search-growth',
    title: 'Search Growth',
    description: 'SEO & AIO so you appear when clients search for your service — on Google and AI tools.',
    icon: <Search size={32} aria-hidden="true" />,
  },
  {
    id: 'paid-acquisition',
    title: 'Paid Acquisition',
    description: 'Google and Meta ad campaigns that bring in qualified leads, managed for results.',
    icon: <TrendingUp size={32} aria-hidden="true" />,
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Lead alerts, review systems, and reporting — running without you so you can focus on the work.',
    icon: <Zap size={32} aria-hidden="true" />,
  },
]

export default function ServicePillars() {
  return (
    <section id="services" className="service-pillars section section-light">
      <div className="container">
        <div className="section-header text-center">
          <h2>What We Build For You</h2>
          <p>Four components. One integrated growth system. Each piece works — and all four work better together.</p>
        </div>
        <div className="pillars-grid">
          {services.map((service) => (
            <article key={service.id} className="pillar-card">
              <div className="pillar-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href="/services" className="pillar-link">
                Learn more <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
