import Link from 'next/link'
import { SearchIcon, LightbulbIcon, RocketIcon, BarChart3Icon } from 'lucide-react'

const steps = [
  { num: '01', title: 'Discovery & Audit', desc: 'We map your current situation, identify growth gaps, and define the system to build.', icon: <SearchIcon size={24} aria-hidden="true" /> },
  { num: '02', title: 'System Blueprint', desc: 'A clear plan covering your website, search presence, ad strategy, and automations.', icon: <LightbulbIcon size={24} aria-hidden="true" /> },
  { num: '03', title: 'Build & Launch', desc: 'We build everything — website, campaigns, integrations — and go live together.', icon: <RocketIcon size={24} aria-hidden="true" /> },
  { num: '04', title: 'Optimise & Scale', desc: 'Ongoing performance monitoring, reporting, and scaling what works for predictable growth.', icon: <BarChart3Icon size={24} aria-hidden="true" /> },
]

export default function Methodology() {
  return (
    <section id="process" className="methodology section section-gray">
      <div className="container">
        <div className="methodology-grid">
          <div className="methodology-content">
            <h2>The Surg Solutions Methodology</h2>
            <p className="methodology-subtitle">We don&apos;t guess. We engineer growth using a battle-tested framework that replaces manual work with predictable systems.</p>
            <ol className="methodology-steps">
              {steps.map((step) => (
                <li key={step.num} className="methodology-step">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-text">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="methodology-cta">
              <Link href="/case-studies" className="btn btn-secondary">See Our Results</Link>
            </div>
          </div>
          <div className="methodology-visual" aria-hidden="true">
            <div className="visual-card">
              <div className="visual-chart">
                <div className="bar bar-1" />
                <div className="bar bar-2" />
                <div className="bar bar-3" />
                <div className="bar bar-4" />
                <div className="chart-line" />
              </div>
              <div className="visual-overlay">
                <h4>Hours Saved</h4>
                <span>Automated per Week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
