import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import './CaseStudyDetail.css';

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const cs = caseStudies.find((c) => c.id === id);

  // Redirect to case studies list if slug doesn't match
  if (!cs) return <Navigate to="/case-studies" replace />;

  return (
    <div className="cs-detail-page animate-fade-in">

      {/* Hero */}
      <section className="cs-detail-hero section-dark">
        <div className="container">
          <Link to="/case-studies" className="cs-detail-back">
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>

          <div className="cs-detail-tag" style={{ color: cs.accentColor }}>
            {cs.industry} · {cs.tags.join(' & ')}
          </div>

          <h1 className="cs-detail-title">{cs.title}</h1>

          {/* Stats bar */}
          <div className="cs-detail-stats">
            {cs.stats.map((s) => (
              <div key={s.label} className="cs-detail-stat">
                <div className="cs-detail-stat-num" style={{ color: cs.accentColor }}>{s.num}</div>
                <div className="cs-detail-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="cs-detail-body section section-light">
        <div className="container">
          <div className="cs-detail-content">

            <div className="cs-detail-section">
              <h2>The Problem</h2>
              <p>{cs.problem}</p>
            </div>

            <div className="cs-detail-section">
              <h2>What We Did</h2>
              <p>{cs.whatWeDid}</p>
            </div>

            <div className="cs-detail-section">
              <h2>The Result</h2>
              <p>{cs.result}</p>
            </div>

            {cs.quote && (
              <blockquote className="cs-detail-quote">{cs.quote}</blockquote>
            )}

            <div className="cs-detail-cta">
              <p>Want results like this for your business?</p>
              <a
                href="https://wa.link/a2gatg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle size={18} /> Get in Touch
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
