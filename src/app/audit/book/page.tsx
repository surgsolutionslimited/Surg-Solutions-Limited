'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'

declare global {
  interface Window { fbq?: (...args: unknown[]) => void }
}

export default function AuditBookPage() {
  const router = useRouter()
  const [ready] = useState(() => typeof window !== 'undefined' && !!sessionStorage.getItem('auditFormComplete'))

  useEffect(() => {
    if (!ready) {
      router.replace('/audit')
      return
    }
    if (window.fbq) {
      window.fbq('track', 'ViewContent', { content_name: 'Calendar Booking Page', content_type: 'funnel_page' })
    }

    function handleMessage(e: MessageEvent) {
      if (e.data && e.data.event === 'calendly.event_scheduled') {
        if (window.fbq) {
          window.fbq('track', 'Purchase', { content_name: 'Strategy Call Booked' })
          window.fbq('trackCustom', 'CallBooked', { conversion_type: 'strategy_call' })
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [ready, router])

  if (!ready) return null

  return (
    <div className="audit-book">
      <div className="audit-book-container">
        <h1>You&apos;re One Step Away — Book Your Free Strategy Session</h1>
        <p className="audit-book-intro">
          Pick a time that works for you. This is a 30-minute call where we&apos;ll look at your current setup, identify exactly where growth is leaking, and show you what a complete system would look like for your business.
        </p>
        <div className="calendly-wrapper">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/surgsolutionslimited/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </div>
  )
}
