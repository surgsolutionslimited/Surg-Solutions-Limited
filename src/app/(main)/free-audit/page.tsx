'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, ShieldCheck, Phone } from 'lucide-react'

export default function FreeAuditPage() {
  const [hasSocial, setHasSocial] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    setSubmitSuccess(false)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyKISwcgfAr9YtuB2J3kt5J6tMfGgcd9FdCTiD0-Icz7jcXLKDwhA8RPKoQ_PDWYS2W/exec'

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: new URLSearchParams(data as Record<string, string>),
        mode: 'no-cors',
      })
      setIsSubmitting(false)
      setSubmitSuccess(true)
    } catch {
      setIsSubmitting(false)
      setSubmitError('There was a problem submitting your request. Please try again.')
    }
  }

  return (
    <div className="audit-page animate-fade-in section-gray">
      <div className="container audit-container">
        <div className="audit-content">
          <div className="audit-hero">
            <h1>Get Your Free <br /><span className="text-gradient">Growth System Audit</span></h1>
            <p className="audit-subheadline">Get a free breakdown of your current growth system and discover where you&apos;re losing time, efficiency, and revenue.</p>
          </div>
          <div className="audit-value">
            <h3>What You Get:</h3>
            <ul className="value-list">
              <li><CheckCircle2 className="value-icon" aria-hidden="true" /> <span>Operational workflow review</span></li>
              <li><CheckCircle2 className="value-icon" aria-hidden="true" /> <span>Lead generation system analysis</span></li>
              <li><CheckCircle2 className="value-icon" aria-hidden="true" /> <span>Identify manual bottlenecks</span></li>
              <li><CheckCircle2 className="value-icon" aria-hidden="true" /> <span>Custom growth system blueprint</span></li>
            </ul>
          </div>
          <div className="audit-contact-alt">
            <div className="contact-alt-card">
              <div className="contact-icon"><Phone size={28} aria-hidden="true" /></div>
              <div>
                <h4>Don&apos;t have a website yet?</h4>
                <p>Call us directly to discuss your strategy.</p>
                <a href="https://wa.link/a2gatg" target="_blank" rel="noopener noreferrer" className="phone-link">Message on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>

        <div className="audit-form-wrapper">
          <div className="audit-form-card">
            <h2>Request Your Audit</h2>
            <form className="audit-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input type="text" id="fullName" name="fullName" required placeholder="Jane Doe" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required placeholder="jane@company.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name *</label>
                <input type="text" id="company" name="company" required placeholder="Acme Corp" />
              </div>
              <div className="form-group">
                <label htmlFor="website">Website URL *</label>
                <input type="url" id="website" name="website" required placeholder="https://www.example.com" />
              </div>
              <div className="form-toggle">
                <label className="toggle-label">
                  <input type="checkbox" name="hasSocial" checked={hasSocial} onChange={() => setHasSocial(!hasSocial)} />
                  <span>Include Social Media Handle(s)?</span>
                </label>
              </div>
              {hasSocial && (
                <div className="form-group slide-down">
                  <label htmlFor="socialUrl">Social Media URL</label>
                  <input type="url" id="socialUrl" name="socialUrl" placeholder="https://linkedin.com/company/your-company" />
                </div>
              )}
              {submitError && <div style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.875rem' }}>{submitError}</div>}
              {submitSuccess ? (
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#065f46', padding: '1rem', borderRadius: '4px', textAlign: 'center', marginBottom: '1rem' }}>
                  <CheckCircle2 size={24} style={{ margin: '0 auto 0.5rem' }} aria-hidden="true" />
                  <p style={{ margin: 0, fontWeight: 500 }}>Audit request received!</p>
                  <p style={{ margin: 0, fontSize: '0.875rem' }}>Our team will review your info and contact you shortly.</p>
                </div>
              ) : (
                <button type="submit" className="btn btn-primary btn-block mt-4" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : <><span>Get My Free Audit</span> <ArrowRight size={18} aria-hidden="true" /></>}
                </button>
              )}
              <div className="trust-element">
                <ShieldCheck size={18} aria-hidden="true" />
                <span>Your information is secure and will only be used to deliver your audit.</span>
              </div>
            </form>
          </div>
          <div className="audit-closing text-center mt-4">
            <p><strong>Ready to scale?</strong> Your custom growth blueprint is just one step away.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
