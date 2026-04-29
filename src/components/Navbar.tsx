'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="navbar navbar-light">
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo">
          <Image src="/logo-dark.png" alt="Surg Solutions" width={417} height={224} priority />
        </Link>

        <nav className={`navbar-links ${isOpen ? 'open' : ''}`} aria-label="Main navigation">
          <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" className={pathname.startsWith('/services') ? 'active' : ''} onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/case-studies" className={pathname.startsWith('/case-studies') ? 'active' : ''} onClick={() => setIsOpen(false)}>Case Studies</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={() => setIsOpen(false)}>About</Link>
          <div className="navbar-cta-mobile">
            <Link href="/audit" className="btn btn-primary navbar-cta-btn" onClick={() => setIsOpen(false)}>
              Get Free Growth Audit
            </Link>
          </div>
        </nav>

        <div className="navbar-cta-desktop">
          <Link href="/audit" className="btn btn-primary navbar-cta-btn">
            Get Free Growth Audit
          </Link>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  )
}
