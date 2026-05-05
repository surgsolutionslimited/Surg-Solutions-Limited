'use client'
import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function BottomCTA() {
  const pathname = usePathname()
  if (pathname === '/services' || pathname === '/services/') return null
  return (
    <section className="bottom-cta section-dark">
      <div className="container bottom-cta-container">
        <div className="bottom-cta-content text-center animate-fade-in">
          <h2>Ready to stop being invisible in AI search?</h2>
          <p>In 30 minutes we&apos;ll audit your visibility across Google and the major AI engines, show you exactly where you&apos;re losing customers to competitors, and walk you through what your growth system would look like. No pitch. No pressure.</p>
          <div className="bottom-cta-actions">
            <Link href="/audit" className="btn btn-primary">
              Book My Free Audit Call <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <a href="https://wa.link/a2gatg" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              <MessageCircle size={20} aria-hidden="true" /> Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
