import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background-pattern" aria-hidden="true" />
      <div className="container hero-container">
        <div className="hero-content text-center animate-fade-in">
          <p className="hero-badge">Growth Systems &amp; Automation</p>
          <h1>
            Stop Chasing Clients.<br />
            <span className="text-gradient">Build the System That Brings Them to You.</span>
          </h1>
          <p>
            We design and build complete digital growth systems — websites, SEO, ads, and automation — so your business attracts and converts clients predictably, without the manual hustle.
          </p>
          <div className="hero-actions">
            <Link href="/audit" className="btn btn-primary">
              Get Free Growth Audit <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/case-studies" className="btn btn-outline">
              See Our Work <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
