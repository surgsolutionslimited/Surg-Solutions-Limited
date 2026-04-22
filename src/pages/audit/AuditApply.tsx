import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import './AuditApply.css';

const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyU3tFNZ1mpUhJ6VuiH4DKkF-CRUe5qgv-56OwbAqULjhqvJMghJLXNpYffbQyRumhO2g/exec';

interface FormData {
  fullName: string;
  whatsapp: string;
  businessName: string;
  whatSells: string;
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
    whatsapp: '',
    businessName: '',
    whatSells: '',
    adSpend: '',
    websiteUrl: '',
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('auditQualified')) {
      navigate('/audit', { replace: true });
    } else {
      setReady(true);
    }
  }, [navigate]);

  if (!ready) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors.has(name)) {
      setErrors(prev => { const s = new Set(prev); s.delete(name); return s; });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError('');

    const required: (keyof FormData)[] = ['fullName', 'whatsapp', 'businessName', 'whatSells', 'adSpend'];
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'qualified' }),
      });
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', 'FormSubmit');
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
            <label htmlFor="whatSells">What does your business sell?</label>
            <input
              id="whatSells"
              name="whatSells"
              type="text"
              placeholder="Describe your products or services"
              value={form.whatSells}
              onChange={handleChange}
              className={errors.has('whatSells') ? 'field-error' : ''}
            />
            {errors.has('whatSells') && <span className="field-error-msg">This field is required</span>}
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
