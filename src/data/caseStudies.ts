export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  stat: string;
  statLabel: string;
  accentColor: string;
  tags: string[];
  problem: string;
  whatWeDid: string;
  result: string;
  quote?: string;
  stats: { num: string; label: string }[];
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
      { num: '+7,700%', label: 'Traffic growth' },
      { num: '82/100',  label: 'Site health' },
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
      "Stuck on page 2 for their main service keywords, the clinic was losing potential clients to lower-quality competitors ranking above them.",
    whatWeDid:
      "Keyword gap analysis, on-page content restructuring, internal linking improvements, and targeting high-intent search terms that weren't being addressed.",
    result:
      'Reached page 1 for their primary service keywords within 3 months. Organic traffic grew by 17% in the same period, with a consistent upward trend continuing beyond the initial engagement.',
    stats: [
      { num: '+17%',    label: 'Traffic growth' },
      { num: 'Page 1',  label: 'Search ranking' },
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
      { num: '94/100',  label: 'Site health' },
      { num: '+18 pos', label: 'Avg. ranking gain' },
      { num: '0',       label: 'Errors remaining' },
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
];
