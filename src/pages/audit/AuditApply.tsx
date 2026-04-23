import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import './AuditApply.css';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const FORM_ENDPOINT = 'https://docs.google.com/forms/d/e/1FAIpQLSe02834KjSGEyFrhX26cZgnD46Nz7jzvBrjyssSlXTXm77Eng/formResponse';

interface FormData {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  services: string;
  adSpend: string;
  websiteUrl: string;
}

export default function AuditApply() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [submitError, setSubmitError] = useState('');
  const [form, setForm] = useState<FormData>({
    fullName: '',
    email: '',
    whatsapp: '',
    businessName: '',
    services: '',
    adSpend: '',
    websiteUrl: '',
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('auditQualified')) {
      navigate('/audit', { replace: true });
    } else {
      setReady(true);
      // Track page view
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

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors.has(name)) {
      setErrors(prev => { const s = new Set(prev); s.delete(name); return s; });
    }
    // Track form interaction
    if (typeof window !== 'undefined' && window.fbq && !errors.has(name)) {
      window.fbq('trackCustom', 'FormFieldFilled', { field: name });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError('');

    const required: (keyof FormData)[] = ['fullName', 'email', 'whatsapp', 'businessName', 'services', 'adSpend'];
    const invalid = new Set(required.filter(f => !form[f].trim()));
    if (invalid.size > 0) {
      setErrors(invalid);
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({
          'entry.1775219185': form.fullName,
          'entry.2069549997': form.email,
          'entry.124181063':  form.whatsapp,
          'entry.1889593317': form.businessName,
          'entry.1506920286': form.services,
          'entry.849248797':  form.adSpend,
          'entry.593916911':  form.websiteUrl,
        }),
      });
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'AddPaymentInfo', {
          content_name: 'Qualified Lead - Application Submitted',
          content_type: 'funnel_action',
          value: 0,
          currency: 'USD'
        });
        window.fbq('trackCustom', 'FormSubmit', {
          business_category: form.services,
          ad_spend_range: form.adSpend
        });
      }
      sessionStorage.setItem('auditFormComplete', 'true');
      navigate('/audit/book');
    } catch {
      setSubmitError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  }

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
        <form className="audit-form" onSubmit={handleSubmit} noValidate>
          <div className="audit-form-group">
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your full name"
              value={form.fullName}
              onChange={handleChange}
              className={errors.has('fullName') ? 'field-error' : ''}
            />
            {errors.has('fullName') && <span className="field-error-msg">This field is required</span>}
          </div>

          <div className="audit-form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={errors.has('email') ? 'field-error' : ''}
            />
            {errors.has('email') && <span className="field-error-msg">This field is required</span>}
          </div>

          <div className="audit-form-group">
            <label htmlFor="whatsapp">WhatsApp number</label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              placeholder="+234..."
              value={form.whatsapp}
              onChange={handleChange}
              className={errors.has('whatsapp') ? 'field-error' : ''}
            />
            {errors.has('whatsapp') && <span className="field-error-msg">This field is required</span>}
          </div>

          <div className="audit-form-group">
            <label htmlFor="businessName">Business name</label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              placeholder="Your business name"
              value={form.businessName}
              onChange={handleChange}
              className={errors.has('businessName') ? 'field-error' : ''}
            />
            {errors.has('businessName') && <span className="field-error-msg">This field is required</span>}
          </div>

          <div className="audit-form-group">
            <label htmlFor="services">Services</label>
            <input
              id="services"
              name="services"
              type="text"
              placeholder="e.g. SEO, Google Ads, Web Design"
              value={form.services}
              onChange={handleChange}
              className={errors.has('services') ? 'field-error' : ''}
            />
            {errors.has('services') && <span className="field-error-msg">This field is required</span>}
          </div>

          <div className="audit-form-group">
            <label htmlFor="adSpend">Monthly ad spend (approx)</label>
            <select
              id="adSpend"
              name="adSpend"
              value={form.adSpend}
              onChange={handleChange}
              className={errors.has('adSpend') ? 'field-error' : ''}
            >
              <option value="">Select an option</option>
              <option value="Under ₦50,000">Under ₦50,000</option>
              <option value="₦50,000 – ₦200,000">₦50,000 – ₦200,000</option>
              <option value="₦200,000 – ₦500,000">₦200,000 – ₦500,000</option>
              <option value="₦500,000+">₦500,000+</option>
            </select>
            {errors.has('adSpend') && <span className="field-error-msg">This field is required</span>}
          </div>

          <div className="audit-form-group">
            <label htmlFor="websiteUrl">
              Website URL <span className="field-optional">(optional)</span>
            </label>
            <input
              id="websiteUrl"
              name="websiteUrl"
              type="text"
              placeholder="https://..."
              value={form.websiteUrl}
              onChange={handleChange}
            />
          </div>

          {submitError && <p className="audit-form-error">{submitError}</p>}

          <button
            type="submit"
            className="btn btn-primary audit-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Checking availability...' : 'Book My Free Strategy Call'}
          </button>
        </form>
      </div>
    </div>
  );
}
