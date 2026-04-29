import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import './CaseStudies.css';

import SEO from '../SEO';

export default function CaseStudies() {
  return (
    <div className="case-studies-page animate-fade-in">
      <SEO 
        title="SEO & Client Case Studies" 
        description="Every case study is a real growth story with real numbers. See how we help service businesses scale their organic and paid traffic."
        canonical="/case-studies"
      />

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
              <Link
                key={cs.id}
                to={`/case-studies/${cs.id}`}
                className="cs-card-real"
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
                <div className="cs-card-arrow">
                  Read case study <ArrowRight size={14} />
                </div>
              </Link>
            ))}
            <div className="cs-card-placeholder">
              <span>More case studies coming soon</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
