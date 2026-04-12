import { useState, useRef, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import './CaseStudies.css';

interface CaseStudy {
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

const caseStudies: CaseStudy[] = [
  {
    id: 'auto-repair',
    industry: 'Auto repair',
    title: 'From 8 to 624 Google visitors in 6 months',
    stat: '+7,700%',
    statLabel: 'Organic traffic growth',
    accentColor: '#0F6E56',
    tags: ['SEO', 'Local search'],
    problem: 'Only 8 visitors from Google in 6 months. Despite years in business and great service, the company was completely invisible online and relying entirely on referrals.',
    whatWeDid: 'Technical SEO audit, local keyword targeting, Google Business Profile optimisation, content improvements, and site health fixes that took the score from below 50 to 82/100.',
    result: '624 monthly visitors from Google. Multiple page 1 rankings for competitive local keywords. Leads coming through daily without any ad spend.',
    quote: '"Amazing work! Still very happy and getting quite a lot of leads coming through." — Ryan W., MD',
    stats: [
      { num: '+7,700%', label: 'Traffic growth' },
      { num: '82/100', label: 'Site health' },
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
    problem: 'Stuck on page 2 for their main service keywords, the clinic was losing potential clients to lower-quality competitors ranking above them.',
    whatWeDid: 'Keyword gap analysis, on-page content restructuring, internal linking improvements, and targeting high-intent search terms that weren\'t being addressed.',
    result: 'Reached page 1 for their primary service keywords within 3 months. Organic traffic grew by 17% in the same period, with a consistent upward trend continuing beyond the initial engagement.',
    stats: [
      { num: '+17%', label: 'Traffic growth' },
      { num: 'Page 1', label: 'Search ranking' },
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
    problem: 'A technically broken website with crawl errors, slow page speed, and duplicate content issues that were suppressing rankings across the board.',
    whatWeDid: 'Full technical SEO overhaul: fixed 200+ errors, resolved duplicate meta issues, improved Core Web Vitals, and restructured the site\'s URL architecture for clarity.',
    result: 'Site health improved from 61 to 94/100. Zero remaining errors. Across tracked keywords, the site gained an average of +18 positions on Google — multiple terms moving from page 3 to page 1.',
    stats: [
      { num: '94/100', label: 'Site health' },
      { num: '+18 pos', label: 'Avg. ranking gain' },
      { num: '0', label: 'Errors remaining' },
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
    problem: 'An e-commerce brand ranking on page 2 for their core product terms, losing significant click share to page 1 competitors. Traffic was flat over 6 months.',
    whatWeDid: 'Product page optimisation, structured data implementation, category page content strategy, and a site health improvement programme that resolved crawl inefficiencies.',
    result: 'Reached page 1 for primary product terms. Site health improved to 91/100. 3,490 organic clicks generated in the following 6 months — up from near-zero organic performance.',
    stats: [
      { num: '91/100', label: 'Site health' },
      { num: '3,490', label: 'Organic clicks (6mo)' },
      { num: 'Page 1', label: 'Search ranking' },
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
    problem: 'A multi-location fitness business with inconsistent local presence across locations, and a primary service keyword stuck in position 32 — too far down to generate meaningful traffic.',
    whatWeDid: 'Local landing page optimisation for each location, Google Business Profile management across all branches, citation building, and targeted on-page improvements for the underperforming keyword.',
    result: 'The target keyword jumped from position 32 to 13 — the biggest single-keyword gain across the entire account. Local traffic increased across all locations with improved map pack visibility.',
    stats: [
      { num: '32 → 13', label: 'Google position' },
      { num: 'All', label: 'Locations improved' },
      { num: 'Map pack', label: 'Visibility gained' },
    ],
  },
];

export default function CaseStudies() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Scroll modal to top and lock body scroll whenever a study is opened
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
      // Reset the modal's own scroll position to the very top
      requestAnimationFrame(() => {
        if (modalRef.current) modalRef.current.scrollTop = 0;
      });
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <div className="case-studies-page animate-fade-in">

      {/* Hero */}
      <section className="cs-page-header section-dark text-center">
        <div className="container">
          <h1>Real Results. Real Businesses.</h1>
          <p>Every case study below is a real growth story — with real numbers. No vanity metrics, no vague claims.</p>
        </div>
      </section>

      {/* Grid */}
      <section className="cs-page-content section section-gray">
        <div className="container">
          <div className="cs-grid-real">
            {caseStudies.map((cs) => (
              <button
                key={cs.id}
                className="cs-card-real"
                onClick={() => setSelected(cs)}
                aria-label={`View case study: ${cs.title}`}
              >
                <span className="cs-card-industry" style={{ color: cs.accentColor }}>
                  {cs.industry}
                </span>
                <h3 className="cs-card-title">{cs.title}</h3>
                <div className="cs-card-divider" />
                <div className="cs-card-stat" style={{ color: cs.accentColor }}>{cs.stat}</div>
                <div className="cs-card-stat-label">{cs.statLabel}</div>
                <div className="cs-card-tags">
                  {cs.tags.map((t) => <span key={t} className="cs-card-tag">{t}</span>)}
                </div>
              </button>
            ))}
            <div className="cs-card-placeholder">
              <span>More case studies coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="cs-modal-overlay" onClick={() => setSelected(null)} role="dialog" aria-modal="true">
          <div className="cs-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
            <button className="cs-modal-close" onClick={() => setSelected(null)} aria-label="Close">
              <X size={20} />
            </button>

            <div className="cs-modal-tag" style={{ color: selected.accentColor }}>
              {selected.industry} · {selected.tags.join(' & ')}
            </div>
            <h2 className="cs-modal-title">{selected.title}</h2>

            <div className="cs-modal-stats">
              {selected.stats.map((s) => (
                <div key={s.label} className="cs-modal-stat">
                  <div className="cs-modal-stat-num" style={{ color: selected.accentColor }}>{s.num}</div>
                  <div className="cs-modal-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="cs-modal-divider" />

            <div className="cs-modal-section">
              <h4>The problem</h4>
              <p>{selected.problem}</p>
            </div>

            <div className="cs-modal-section">
              <h4>What we did</h4>
              <p>{selected.whatWeDid}</p>
            </div>

            <div className="cs-modal-section">
              <h4>The result</h4>
              <p>{selected.result}</p>
            </div>

            {selected.quote && (
              <blockquote className="cs-modal-quote">{selected.quote}</blockquote>
            )}

            <a
              href="https://wa.link/a2gatg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '1.5rem' }}
            >
              <MessageCircle size={18} /> Get in Touch →
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
