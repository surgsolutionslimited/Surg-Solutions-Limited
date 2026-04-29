'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

declare global {
  interface Window { fbq?: (...args: unknown[]) => void }
}

export default function AuditLandingPage() {
  const router = useRouter()

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Audit Landing Page',
        content_type: 'funnel_page',
        value: 0,
        currency: 'USD',
      })
    }
  }, [])

  function handleYes() {
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', { content_name: 'Audit Qualification - Qualified Lead' })
      window.fbq('trackCustom', 'QualifiedLead', { ad_spend_range: 'inquired' })
    }
    sessionStorage.setItem('auditQualified', 'true')
    router.push('/audit/apply')
  }

  function handleNo() {
    if (window.fbq) {
      window.fbq('trackCustom', 'UnqualifiedLead', { reason: 'not_running_ads' })
    }
    router.push('/audit/thank-you')
  }

  return (
    <div className="audit-landing">
      <div className="audit-card">
        <h1>Is Your Business Currently Running Paid Ads?</h1>
        <p className="audit-subheadline">
          Answer one quick question so we can show you the most relevant information.
        </p>
        <div className="audit-choices">
          <button className="btn btn-primary" onClick={handleYes}>
            Yes — I&apos;m running ads
          </button>
          <button className="btn btn-outline" onClick={handleNo}>
            No — not yet
          </button>
        </div>
      </div>
    </div>
  )
}
