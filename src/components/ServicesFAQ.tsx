'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "Why don't you publish full pricing?",
    a: "Because every business is different. Pricing depends on your industry, target lead volume, ad spend appetite, and current digital foundation. A clinic in Abuja and a multi-branch auto chain need very different systems — and very different budgets. The free audit is where we figure out what fits and quote you a clear, fixed monthly retainer.",
  },
  {
    q: "What's the difference between the tiers?",
    a: "Starter is for businesses still relying on referrals — it gets you found. Standard adds paid ads, deeper content, and a lead guarantee — most clients sit here. Advanced is for ambitious operators who want market dominance across every digital surface.",
  },
  {
    q: "Why is there a setup fee and a monthly retainer?",
    a: "The setup fee builds your asset — the website, SEO foundation, automations. You keep this forever, even if you cancel. The monthly retainer is the engine — content, ad management, optimisation, strategy — that drives leads in continuously.",
  },
  {
    q: "Do I have to commit to ad spend?",
    a: "For Standard and Advanced, yes. Ads are the fuel that accelerates your system. Recommended ad spend is paid directly to Google and Meta — we'll discuss the right starting budget for your industry on the audit call.",
  },
  {
    q: "Can I cancel anytime?",
    a: "After your minimum term, yes — month-to-month, no penalty. You keep everything we built.",
  },
  {
    q: "What happens if you don't deliver?",
    a: "Standard and Advanced come with a Lead Guarantee — if we miss the agreed target by day 90, we keep working free until we hit it. Setup fees are refunded if your system isn't live in 30 days.",
  },
  {
    q: "Do you work with my industry?",
    a: "We work best with local service businesses doing ₦20M+ annual revenue — auto, trades, clinics, law firms, dentists, salons, restaurants. If you're outside that, mention it on the audit call and we'll tell you honestly whether we're the right fit.",
  },
  {
    q: "What if my business is too small for Standard?",
    a: "Start with Starter. Most clients move up to Standard within 3–6 months once their foundation is producing leads. There's no penalty for upgrading.",
  },
]

export default function ServicesFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="svc-faq section section-light">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${open === i ? ' faq-item--open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <ChevronDown size={20} className="faq-chevron" aria-hidden="true" />
              </button>
              {open === i && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
