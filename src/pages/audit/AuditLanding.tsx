import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import './AuditLanding.css';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function AuditLanding() {
  const navigate = useNavigate();

  function handleYes() {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'QualifiedLead');
    }
    sessionStorage.setItem('auditQualified', 'true');
    navigate('/audit/apply');
  }

  function handleNo() {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'UnqualifiedLead');
    }
    navigate('/audit/thank-you');
  }

  return (
    <div className="audit-landing">
      <SEO
        title="Free Growth Audit"
        description="Answer one quick question and we'll show you the most relevant growth strategy for your business."
        canonical="/audit"
      />
      <div className="audit-card">
        <h1>Is Your Business Currently Running Paid Ads?</h1>
        <p className="audit-subheadline">
          Answer one quick question so we can show you the most relevant information.
        </p>
        <div className="audit-choices">
          <button className="btn btn-primary" onClick={handleYes}>
            Yes — I'm running ads
          </button>
          <button className="btn btn-outline" onClick={handleNo}>
            No — not yet
          </button>
        </div>
      </div>
    </div>
  );
}
