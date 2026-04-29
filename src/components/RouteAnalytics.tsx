'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const GA_MEASUREMENT_ID = 'G-DDG09DGYGP'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

export default function RouteAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hasTrackedInitialLoad = useRef(false)

  useEffect(() => {
    if (!hasTrackedInitialLoad.current) {
      hasTrackedInitialLoad.current = true
      return
    }

    const queryString = searchParams.toString()
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname

    window.gtag?.('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
    })
    window.fbq?.('track', 'PageView')
  }, [pathname, searchParams])

  return null
}
