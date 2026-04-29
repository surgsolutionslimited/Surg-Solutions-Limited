'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import emailjs from '@emailjs/browser'

declare global {
  interface Window { fbq?: (...args: unknown[]) => void }
}

const EMAILJS_SERVICE_ID = 'service_quldgnl'
const EMAILJS_PUBLIC_KEY = '_sdJMcDD1eULBwyXv'
const EMAILJS_NOTIFY_TEMPLATE = 'template_75p0z4m'
const EMAILJS_REPLY_TEMPLATE = 'template_ov87tsl'

interface FormData {
  fullName: string
  email: string
  whatsapp: string
  businessName: string
  services: string
  adSpend: string
  websiteUrl: string
}

export default function AuditApplyPage() {
  const router = useRouter()
  const [ready] = useState(() => typeof window !== 'undefined' && !!sessionStorage.getItem('auditQualified'))
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Set<string>>(new Set())
  const [submitError, setSubmitError] = useState('')
  const [form, setForm] = useState<FormData>({
    fullName: '', email: '', whatsapp: '', businessName: '', services: '', adSpend: '', websiteUrl: '',
  })

  useEffect(() => {
    if (!ready) {
      router.replace('/audit')
    } else if (window.fbq) {
      window.fbq('track', 'ViewContent', { content_name: 'Audit Application Form', content_type: 'funnel_page' })
    }
  }, [ready, router])

  if (!ready) return null

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors.has(name)) {
      setErrors(prev => { const s = new Set(prev); s.delete(name); return s })
    }
    if (window.fbq) window.fbq('trackCustom', 'FormFieldFilled', { field: name })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitError('')
    const required: (keyof FormData)[] = ['fullName', 'email', 'whatsapp', 'businessName', 'services', 'adSpend']
    const invalid = new Set(required.filter(f => !form[f].trim()))
    if (invalid.size > 0) { setErrors(invalid); return }

    setIsSubmitting(true)
    try {
      const leadData = {
        from_name: form.fullName,
        from_email: form.email,
        whatsapp: form.whatsapp,
        business_name: form.businessName,
        services: form.services,
        ad_spend: form.adSpend,
        website: form.websiteUrl || 'Not provided',
      }
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_NOTIFY_TEMPLATE, leadData, EMAILJS_PUBLIC_KEY)
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_REPLY_TEMPLATE, { to_name: form.fullName, to_email: form.email }, EMAILJS_PUBLIC_KEY)
      if (window.fbq) {
        window.fbq('track', 'AddPaymentInfo', { content_name: 'Qualified Lead - Application Submitted' })
        window.fbq('trackCustom', 'FormSubmit', { business_category: form.services, ad_spend_range: form.adSpend })
      }
      sessionStorage.setItem('auditFormComplete', 'true')
      router.push('/audit/book')
    } catch {
      setSubmitError('Something went wrong. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="audit-apply">
      <div className="audit-apply-card">
        <h1>Tell Us a Bit About Your Business</h1>
        <p className="audit-apply-sub">Takes less than 60 seconds. We&apos;ll use this to prepare for your free strategy session.</p>
        <form className="audit-form" onSubmit={handleSubmit} noValidate>
          {[
            { id: 'fullName', label: 'Full name', type: 'text', placeholder: 'Your full name' },
            { id: 'email', label: 'Email address', type: 'email', placeholder: 'you@example.com' },
            { id: 'whatsapp', label: 'WhatsApp number', type: 'tel', placeholder: '+234...' },
            { id: 'businessName', label: 'Business name', type: 'text', placeholder: 'Your business name' },
            { id: 'services', label: 'Services', type: 'text', placeholder: 'e.g. SEO, Google Ads, Web Design' },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="audit-form-group">
              <label htmlFor={id}>{label}</label>
              <input
                id={id} name={id} type={type} placeholder={placeholder}
                value={form[id as keyof FormData]} onChange={handleChange}
                className={errors.has(id) ? 'field-error' : ''}
              />
              {errors.has(id) && <span className="field-error-msg">This field is required</span>}
            </div>
          ))}

          <div className="audit-form-group">
            <label htmlFor="adSpend">Monthly ad spend (approx)</label>
            <select id="adSpend" name="adSpend" value={form.adSpend} onChange={handleChange} className={errors.has('adSpend') ? 'field-error' : ''}>
              <option value="">Select an option</option>
              <option value="Under ₦50,000">Under ₦50,000</option>
              <option value="₦50,000 – ₦200,000">₦50,000 – ₦200,000</option>
              <option value="₦200,000 – ₦500,000">₦200,000 – ₦500,000</option>
              <option value="₦500,000+">₦500,000+</option>
            </select>
            {errors.has('adSpend') && <span className="field-error-msg">This field is required</span>}
          </div>

          <div className="audit-form-group">
            <label htmlFor="websiteUrl">Website URL <span className="field-optional">(optional)</span></label>
            <input id="websiteUrl" name="websiteUrl" type="text" placeholder="https://..." value={form.websiteUrl} onChange={handleChange} />
          </div>

          {submitError && <p className="audit-form-error">{submitError}</p>}
          <button type="submit" className="btn btn-primary audit-submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Checking availability...' : 'Book My Free Strategy Call'}
          </button>
        </form>
      </div>
    </div>
  )
}
