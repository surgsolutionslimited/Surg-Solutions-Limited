export interface StrategicPoint {
  title: string;
  bullets: string[];
}

export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  stat: string;
  statLabel: string;
  accentColor: string;
  tags: string[];
  stats: { num: string; label: string }[];
  // Simple format (existing)
  problem?: string;
  whatWeDid?: string;
  result?: string;
  quote?: string;
  // Rich format (new)
  overview?: string;
  challenge?: string[];
  strategicApproach?: StrategicPoint[];
  performanceMetrics?: { label: string; value: string }[];
  aiInsights?: string[];
  businessImpact?: string[];
  strategicTakeaway?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'auto-repair',
    industry: 'Auto repair',
    title: 'From 8 to 624 Google visitors in 6 months',
    stat: '+7,700%',
    statLabel: 'Organic traffic growth',
    accentColor: '#0F6E56',
    tags: ['SEO', 'Local search'],
    problem:
      'Only 8 visitors from Google in 6 months. Despite years in business and great service, the company was completely invisible online and relying entirely on referrals.',
    whatWeDid:
      'Technical SEO audit, local keyword targeting, Google Business Profile optimisation, content improvements, and site health fixes that took the score from below 50 to 82/100.',
    result:
      '624 monthly visitors from Google. Multiple page 1 rankings for competitive local keywords. Leads coming through daily without any ad spend.',
    quote: '"Amazing work! Still very happy and getting quite a lot of leads coming through." — Ryan W., MD',
    stats: [
      { num: '+7,700%',  label: 'Traffic growth' },
      { num: '82/100',   label: 'Site health' },
      { num: '6 months', label: 'Timeline' },
    ],
  },
  {
    id: 'health-clinic',
    industry: 'Health clinic',
    title: 'Page 2 to Page 1 in 3 months',
    stat: '+17%',
    statLabel: 'Organic traffic growth',
    accentColor: '#3C3489',
    tags: ['SEO', 'Content'],
    problem:
      'Stuck on page 2 for their main service keywords, the clinic was losing potential clients to lower-quality competitors ranking above them.',
    whatWeDid:
      "Keyword gap analysis, on-page content restructuring, internal linking improvements, and targeting high-intent search terms that weren't being addressed.",
    result:
      'Reached page 1 for their primary service keywords within 3 months. Organic traffic grew by 17% in the same period, with a consistent upward trend continuing beyond the initial engagement.',
    stats: [
      { num: '+17%',     label: 'Traffic growth' },
      { num: 'Page 1',   label: 'Search ranking' },
      { num: '3 months', label: 'Timeline' },
    ],
  },
  {
    id: 'electrical-trades',
    industry: 'Electrical trades',
    title: '94/100 site health, zero errors, +18 positions',
    stat: '+18 pos',
    statLabel: 'Average ranking improvement',
    accentColor: '#BA7517',
    tags: ['SEO', 'Technical'],
    problem:
      'A technically broken website with crawl errors, slow page speed, and duplicate content issues that were suppressing rankings across the board.',
    whatWeDid:
      "Full technical SEO overhaul: fixed 200+ errors, resolved duplicate meta issues, improved Core Web Vitals, and restructured the site's URL architecture for clarity.",
    result:
      'Site health improved from 61 to 94/100. Zero remaining errors. Across tracked keywords, the site gained an average of +18 positions on Google — multiple terms moving from page 3 to page 1.',
    stats: [
      { num: '94/100',   label: 'Site health' },
      { num: '+18 pos',  label: 'Avg. ranking gain' },
      { num: '0',        label: 'Errors remaining' },
    ],
  },
  {
    id: 'product-retail',
    industry: 'Product / retail',
    title: 'Page 2 to Page 1, 3,490 clicks in 6 months',
    stat: '91/100',
    statLabel: 'Site health score',
    accentColor: '#0F6E56',
    tags: ['SEO', 'E-commerce'],
    problem:
      'An e-commerce brand ranking on page 2 for their core product terms, losing significant click share to page 1 competitors. Traffic was flat over 6 months.',
    whatWeDid:
      'Product page optimisation, structured data implementation, category page content strategy, and a site health improvement programme that resolved crawl inefficiencies.',
    result:
      'Reached page 1 for primary product terms. Site health improved to 91/100. 3,490 organic clicks generated in the following 6 months — up from near-zero organic performance.',
    stats: [
      { num: '91/100',  label: 'Site health' },
      { num: '3,490',   label: 'Organic clicks (6mo)' },
      { num: 'Page 1',  label: 'Search ranking' },
    ],
  },
  {
    id: 'fitness',
    industry: 'Multi-location fitness',
    title: 'Position 32 to 13 — biggest ranking jump in the account',
    stat: '32 → 13',
    statLabel: 'Google position improvement',
    accentColor: '#3C3489',
    tags: ['SEO', 'Local search'],
    problem:
      'A multi-location fitness business with inconsistent local presence across locations, and a primary service keyword stuck in position 32 — too far down to generate meaningful traffic.',
    whatWeDid:
      'Local landing page optimisation for each location, Google Business Profile management across all branches, citation building, and targeted on-page improvements for the underperforming keyword.',
    result:
      'The target keyword jumped from position 32 to 13 — the biggest single-keyword gain across the entire account. Local traffic increased across all locations with improved map pack visibility.',
    stats: [
      { num: '32 → 13',  label: 'Google position' },
      { num: 'All',      label: 'Locations improved' },
      { num: 'Map pack', label: 'Visibility gained' },
    ],
  },
  {
    id: 'bounce-party-nz',
    industry: 'Event rental · Auckland, NZ',
    title: '~3x ROAS in 90 days for a niche rental business',
    stat: '~3x ROAS',
    statLabel: 'Achieved within 90 days',
    accentColor: '#0891B2',
    tags: ['Google Ads', 'AIO', 'Lead Generation'],
    stats: [
      { num: '3,000+',     label: 'Clicks' },
      { num: '68.77',      label: 'Conversions' },
      { num: 'NZ$70.53',   label: 'Cost per conversion' },
    ],
    overview:
      'Bounce Party NZ is a niche event rental company operating in Auckland, New Zealand, specialising in bouncy castle rentals. The objective was not just to increase traffic — but to build a predictable demand generation system aligned with modern AI-driven search behaviour.',
    challenge: [
      'Low-intent traffic diluting conversion rates',
      'High competition within a localised service market',
      'Lack of structured data signals for both ad platforms and AI-driven search engines',
    ],
    strategicApproach: [
      {
        title: 'High-Intent Query Mapping (AIO Layer)',
        bullets: [
          'Aligned campaigns with how AI systems interpret commercial intent — "bouncy castle hire Auckland", "bouncy castle rental near me"',
          'Strong alignment with transactional search intent',
          'Increased likelihood of being surfaced in AI-generated recommendations',
        ],
      },
      {
        title: 'Entity Reinforcement',
        bullets: [
          'Strengthened core business entities: Service (Bouncy Castle Rentals), Location (Auckland), Intent (Event-based bookings)',
          'Improved how AI models categorise and retrieve the business in relevant contexts',
        ],
      },
      {
        title: 'Campaign Structuring for Signal Clarity',
        bullets: [
          'SKAG-based architecture with tight keyword clustering',
          'Improved CTR, Quality Score, and data clarity for machine learning systems',
        ],
      },
      {
        title: 'Geo & Context Precision',
        bullets: [
          'Hyper-local suburb targeting with exclusion of irrelevant regions',
          'Created clean geographic signals for both ad optimisation and AI-driven local recommendations',
        ],
      },
      {
        title: 'Mobile-First Behavioural Alignment',
        bullets: [
          '72%+ of conversions came from mobile',
          'Bids and UX optimised for mobile-first journeys, aligned with AI-observed user behaviour patterns',
        ],
      },
      {
        title: 'Conversion Signal Feedback Loop',
        bullets: [
          'Tracked booking actions and form submissions',
          'Fed high-quality conversion data back into ad algorithms and AI learning systems',
        ],
      },
    ],
    performanceMetrics: [
      { label: 'Timeline',             value: 'Feb 1 – May 5, 2025' },
      { label: 'Clicks',               value: '3,000+' },
      { label: 'Conversions',          value: '68.77' },
      { label: 'Impressions',          value: '19,700+' },
      { label: 'Ad Spend',             value: 'NZD $4,850' },
      { label: 'Cost Per Conversion',  value: 'NZD $70.53' },
      { label: 'Peak CTR',             value: '20.87%' },
    ],
    aiInsights: [
      'Location-based queries produced stronger AI alignment and higher conversions',
      'Mobile-first behaviour matched AI-predicted user patterns',
      'Clean keyword intent improved both ad performance and AI retrievability',
    ],
    businessImpact: [
      '~3x ROAS within 90 days',
      'Established a predictable, AI-aligned lead generation system',
      'Increased both conversion efficiency and search visibility quality',
    ],
    strategicTakeaway:
      'Modern growth is no longer just about running ads. It\'s about building systems that align with human intent, feed machine learning models, and position your brand for AI-driven discovery. This is the foundation of Answer Engine Optimization (AIO).',
  },
  {
    id: 'plumbers-auckland',
    industry: 'Local plumbing · Auckland, NZ',
    title: '28 qualified leads in 30 days at NZ$41.79 per lead',
    stat: '28 leads',
    statLabel: 'In 30 days',
    accentColor: '#0F6E56',
    tags: ['Google Ads', 'AIO', 'Lead Generation'],
    stats: [
      { num: '28',         label: 'Conversions in 30 days' },
      { num: 'NZ$41.79',   label: 'Cost per lead' },
      { num: '19.2%',      label: 'Conversion rate' },
    ],
    overview:
      'Plumbers Auckland is a local service provider offering residential and emergency plumbing services. The objective was to build a high-conversion lead system while improving how the business is interpreted and surfaced by AI-driven search engines.',
    challenge: [
      'Intense competition in local search results',
      'Low conversion efficiency from previous campaigns',
      'Weak alignment with AI-understood service intent',
    ],
    strategicApproach: [
      {
        title: 'Intent-Based Query Structuring',
        bullets: [
          'Focused on urgency-driven queries: "emergency plumber Auckland", "blocked drain repair"',
          'These queries match real-world urgency signals and align with AI models prioritising problem-solution searches',
        ],
      },
      {
        title: 'Service + Location Entity Clarity',
        bullets: [
          'Reinforced core entities: Service (Plumbing — Emergency + Residential), Location (Auckland)',
          'Improved local search relevance and AI categorisation accuracy',
        ],
      },
      {
        title: 'Smart Campaign Optimisation',
        bullets: [
          'Responsive search ads with bid adjustments during peak hours',
          'Audience exclusions to create clean, high-quality training data for ad algorithms',
        ],
      },
      {
        title: 'Mobile-First Conversion Capture',
        bullets: [
          '+25% bid adjustment for mobile',
          'Optimised for call-based conversions, aligned with how users interact with urgent services',
        ],
      },
      {
        title: 'Conversion Intelligence System',
        bullets: [
          'Tracked phone calls and form submissions',
          'Feeding real conversion signals back into Google\'s learning systems and AI-driven ranking layers',
        ],
      },
    ],
    performanceMetrics: [
      { label: 'Timeline',            value: 'Apr 7 – May 6, 2025' },
      { label: 'Clicks',              value: '146' },
      { label: 'Conversions',         value: '28' },
      { label: 'Impressions',         value: '4,050' },
      { label: 'Ad Spend',            value: 'NZ$1,170' },
      { label: 'Cost Per Conversion', value: 'NZ$41.79' },
      { label: 'CTR',                 value: '3.6%' },
    ],
    aiInsights: [
      'Urgency-based queries aligned strongly with AI retrieval patterns',
      'Mobile users dominated conversions, consistent with AI-predicted behaviour models',
      'Location-modified keywords improved both CTR and AI visibility',
    ],
    businessImpact: [
      '28 qualified leads in 30 days',
      'Lower CPA with higher intent quality',
      'Built a scalable, AI-aligned lead generation engine',
    ],
    strategicTakeaway:
      'Local service growth today depends on capturing real-time intent, structuring data for machine understanding, and feeding systems with conversion-quality signals. This is how businesses move from visibility to AI recommendation — the core of AIO (Answer Engine Optimization).',
  },
];
