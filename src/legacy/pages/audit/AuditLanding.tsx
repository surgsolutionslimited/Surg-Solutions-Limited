import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../SEO';
import './AuditLanding.css';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function AuditLanding() {
  const navigate = useNavigate();

  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Audit Landing Page',
        content_type: 'funnel_page',
        value: 0,
        currency: 'USD'
      });
    }
  }, []);

  function handleYes() {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Audit Qualification - Qualified Lead',
        content_type: 'funnel_action',
        value: 0,
        currency: 'USD'
      });
      window.fbq('trackCustom', 'QualifiedLead', {
        ad_spend_range: 'inquired'
      });
    }
    sessionStorage.setItem('auditQualified', 'true');
    navigate('/audit/apply');
  }

  function handleNo() {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Audit Qualification - Not Running Ads',
        content_type: 'funnel_action',
        value: 0,
        currency: 'USD'
      });
      window.fbq('trackCustom', 'UnqualifiedLead', {
        reason: 'not_running_ads'
      });
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
