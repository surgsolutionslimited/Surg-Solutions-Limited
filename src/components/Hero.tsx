import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background-pattern" aria-hidden="true" />
      <div className="container hero-container">
        <div className="hero-content text-center animate-fade-in">
          <p className="hero-badge">Growth Systems for Local Service Businesses</p>
          <h1>
            Your customers now ask AI for recommendations.<br />
            <span className="text-gradient">Make sure they hear about you — not your competitor.</span>
          </h1>
          <p>
            We build complete growth systems — websites, AI-era search, paid ads, and automation — that get local service businesses found on Google AND inside ChatGPT, Claude, Perplexity, and Gemini. So qualified leads come to you, predictably, every month.
          </p>
          <div className="hero-actions">
            <Link href="/audit" className="btn btn-primary">
              Get My Free AI Visibility Audit <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/case-studies" className="btn btn-outline">
              See Real Client Results <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <p className="hero-trust-strip">Live in 30 days &middot; Lead guarantee included &middot; You own everything we build</p>
        </div>
      </div>
    </section>
  )
}
