import { useState } from 'react';
import SEO from '../../components/SEO';
import './AuditThankYou.css';

const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyU3tFNZ1mpUhJ6VuiH4DKkF-CRUe5qgv-56OwbAqULjhqvJMghJLXNpYffbQyRumhO2g/exec';

export default function AuditThankYou() {
  const [form, setForm] = useState({ fullName: '', email: '', whatsapp: '' });
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors.has(name)) {
      setErrors(prev => { const s = new Set(prev); s.delete(name); return s; });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const invalid = new Set<string>();
    if (!form.fullName.trim()) invalid.add('fullName');
    if (!form.email.trim()) invalid.add('email');
    if (invalid.size > 0) { setErrors(invalid); return; }

    setIsSubmitting(true);
    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'nurture' }),
      });
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', 'NurtureLead');
      }
      setSubmitted(true);
    } catch {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="audit-thankyou">
      <SEO
        title="Here's Something That'll Help"
        description="Before running ads, get our free guide on the three things every business needs in place first."
        canonical="/audit/thank-you"
      />
      <div className="audit-thankyou-card">
        <h1>No Problem, Here's Something That'll Help You First</h1>
        <p className="audit-thankyou-intro">
          Before running ads, there are three things every business needs in place to make sure the money you spend actually works. Most businesses skip all three.
        </p>
        <div className="audit-guide-box">
          <p>
            <strong>Free Guide</strong>
            We've put together a short guide that walks you through exactly what to set up first — and it's free.
            <br /><br />
            <em>"Why Your Business Isn't Growing Consistently (Even If You Run Ads)"</em>
          </p>
        </div>

        {submitted ? (
          <p className="audit-success-msg">
            Check your inbox — we'll send it over within a few minutes.
          </p>
        ) : (
          <form className="audit-nurture-form" onSubmit={handleSubmit} noValidate>
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
              <label htmlFor="whatsapp">
                WhatsApp number <span style={{ fontWeight: 400, color: 'var(--text-secondary)', fontSize: '0.8rem' }}>(optional)</span>
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="+234..."
                value={form.whatsapp}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary audit-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Me the Guide'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
