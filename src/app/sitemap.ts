import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://surgsolutions.online'

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/free-audit',
    '/privacy-policy',
    '/terms',
    '/audit',
  ]

  // Map static routes to sitemap entries
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => {
    const isHome = route === ''
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: isHome ? ('weekly' as const) : ('monthly' as const),
      priority: isHome ? 1 : 0.8,
    }
  })

  // Dynamic case studies
  const caseStudies = [
    {
      slug: 'auto-repair',
      priority: 0.8,
    },
    {
      slug: 'health-clinic',
      priority: 0.8,
    },
    {
      slug: 'electrical-trades',
      priority: 0.8,
    },
    {
      slug: 'product-retail',
      priority: 0.8,
    },
    {
      slug: 'fitness',
      priority: 0.8,
    },
    {
      slug: 'bounce-party-nz',
      priority: 0.8,
    },
    {
      slug: 'plumbers-auckland',
      priority: 0.8,
    },
  ]

  const dynamicEntries = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: study.priority,
  }))

  return [...staticEntries, ...dynamicEntries]
}
