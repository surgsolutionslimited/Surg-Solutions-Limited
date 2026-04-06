import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './BottomCTA.css';

export default function BottomCTA() {
  return (
    <section className="bottom-cta section-dark">
      <div className="container bottom-cta-container">
        <div className="bottom-cta-content text-center animate-fade-in">
          <h2>Ready to Scale Automatically?</h2>
          <p>Partner with the company that builds your infrastructure to drive measurable ROI and eliminate operational chaos.</p>
          <div className="bottom-cta-actions">
            <Link to="/free-audit" className="btn btn-primary">
              Get Your Free Growth System Audit <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
