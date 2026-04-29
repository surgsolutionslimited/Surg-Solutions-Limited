'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Link
      href="/audit"
      className={`floating-cta ${visible ? 'floating-cta--visible' : ''}`}
      aria-label="Get Free Growth Audit"
    >
      <ArrowRight size={22} aria-hidden="true" />
      <span className="floating-cta-label">Get Free Growth Audit</span>
    </Link>
  )
}
