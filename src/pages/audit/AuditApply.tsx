import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import './AuditApply.css';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function AuditApply() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('auditQualified')) {
      navigate('/audit', { replace: true });
    } else {
      setReady(true);
      if (window.fbq) {
        window.fbq('track', 'ViewContent', {
          content_name: 'Audit Application Form',
          content_type: 'funnel_page',
          value: 0,
          currency: 'USD'
        });
      }
    }
  }, [navigate]);

  if (!ready) return null;

  return (
    <div className="audit-apply">
      <SEO
        title="Apply — Free Growth Audit"
        description="Tell us about your business so we can prepare your free strategy session."
        canonical="/audit/apply"
      />
      <div className="audit-apply-card">
        <h1>Tell Us a Bit About Your Business</h1>
        <p className="audit-apply-sub">
          Takes less than 60 seconds. We'll use this to prepare for your free strategy session.
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe02834KjSGEyFrhX26cZgnD46Nz7jzvBrjyssSlXTXm77Eng/viewform?embedded=true"
          width="100%"
          height="1379"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Growth Audit Application"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
