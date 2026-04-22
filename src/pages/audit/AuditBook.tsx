import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import './AuditBook.css';

export default function AuditBook() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('auditFormComplete')) {
      navigate('/audit', { replace: true });
      return;
    }
    setReady(true);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    function handleMessage(e: MessageEvent) {
      if (e.data && e.data.event === 'calendly.event_scheduled') {
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('trackCustom', 'CallBooked');
        }
      }
    }
    window.addEventListener('message', handleMessage);

    return () => {
      document.head.removeChild(script);
      window.removeEventListener('message', handleMessage);
    };
  }, [navigate]);

  if (!ready) return null;

  return (
    <div className="audit-book">
      <SEO
        title="Book Your Strategy Session"
        description="Pick a time for your free 30-minute strategy call with the Surg Solutions team."
        canonical="/audit/book"
      />
      <div className="audit-book-container">
        <h1>You're One Step Away — Book Your Free Strategy Session</h1>
        <p className="audit-book-intro">
          Pick a time that works for you. This is a 30-minute call where we'll look at your current setup, identify exactly where growth is leaking, and show you what a complete system would look like for your business.
        </p>
        <div className="calendly-wrapper">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/surgsolutionslimited/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </div>
  );
}
