import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CaseStudyPreview.css';

const previews = [
  {
    industry: 'Auto repair',
    title: 'From 8 to 624 Google visitors in 6 months',
    stat: '+7,700%',
    statLabel: 'Organic traffic growth',
    color: '#0F6E56',
    slug: 'auto-repair-seo',
  },
  {
    industry: 'Electrical trades',
    title: '94/100 site health, zero errors, +18 positions',
    stat: '94/100',
    statLabel: 'Site health score',
    color: '#3C3489',
    slug: 'electrical-trades-seo',
  },
];

export default function CaseStudyPreview() {
  return (
    <section className="cs-preview section section-light">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
          <h2>Results That Speak for Themselves</h2>
          <p>A sample of what the growth system delivers for real businesses.</p>
        </div>

        <div className="cs-preview-grid">
          {previews.map((cs) => (
            <Link to={`/case-studies`} key={cs.slug} className="cs-preview-card">
              <span className="cs-preview-industry" style={{ color: cs.color }}>
                {cs.industry}
              </span>
              <h3 className="cs-preview-title">{cs.title}</h3>
              <div className="cs-preview-divider" />
              <div className="cs-preview-stat" style={{ color: cs.color }}>{cs.stat}</div>
              <div className="cs-preview-stat-label">{cs.statLabel}</div>
            </Link>
          ))}
        </div>

        <div className="cs-preview-footer">
          <Link to="/case-studies" className="btn btn-outline">
            View all case studies <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
