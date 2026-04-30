import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/">
              <Image src="/logo-light.png" alt="Surg Solutions" width={456} height={257} className="footer-logo" />
            </Link>
            <p>We design and build complete digital growth systems — websites, SEO, ads, and automation — so your business attracts and converts clients predictably.</p>
          </div>

          <nav aria-label="Services links">
            <div className="footer-links">
              <h3>Services</h3>
              <ul>
                <li><Link href="/services/#website-design">Website Design</Link></li>
                <li><Link href="/services/#seo-aeo">SEO &amp; AIO</Link></li>
                <li><Link href="/services/#ads">Google &amp; Meta Ads</Link></li>
                <li><Link href="/services/#automation">Growth Automation</Link></li>
              </ul>
            </div>
          </nav>

          <nav aria-label="Company links">
            <div className="footer-links">
              <h3>Company</h3>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/services">Services</Link></li>
              </ul>
            </div>
          </nav>

          <div className="footer-form">
            <h3>Ready to grow?</h3>
            <p className="footer-wa-desc">The fastest way to start is a direct message. No forms, no funnels.</p>
            <a href="https://wa.link/a2gatg" target="_blank" rel="noopener noreferrer" className="btn btn-primary footer-wa-btn">
              <MessageCircle size={16} aria-hidden="true" /> Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Surg Solutions Ltd. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
