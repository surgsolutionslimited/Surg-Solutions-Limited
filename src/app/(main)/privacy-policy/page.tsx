import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Surg Solutions privacy policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="section animate-fade-in">
      <div className="container" style={{ maxWidth: '780px' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Last updated: April 2026</p>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>1. Who We Are</h2>
          <p>Surg Solutions Ltd (&ldquo;Surg Solutions&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) operates surgsolutions.online. We provide digital growth services including website design, SEO, paid advertising, and growth automation. Contact us at <a href="mailto:surgsolutionslimited@gmail.com" style={{ color: 'var(--primary)' }}>surgsolutionslimited@gmail.com</a>.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>2. Information We Collect</h2>
          <p style={{ marginBottom: '0.75rem' }}>We collect information you provide directly when you:</p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 2 }}>
            <li>Fill in an audit request or contact form (name, email, phone, company name, website URL)</li>
            <li>Book a call through our Calendly link</li>
            <li>Message us via WhatsApp</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>We also collect anonymised usage data through standard web analytics.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>3. How We Use Your Information</h2>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 2 }}>
            <li>To respond to enquiries and deliver the service you requested</li>
            <li>To send you the audit, guide, or proposal you signed up for</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>We do not sell your personal data to third parties.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>4. Cookies &amp; Tracking</h2>
          <p>Our site uses the Meta Pixel and Google Analytics to measure advertising effectiveness and understand how users navigate. You can opt out via your browser settings or the <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Your Online Choices</a> platform.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>5. Data Retention</h2>
          <p>We retain your data for as long as is necessary to provide our services and comply with our legal obligations, or until you ask us to delete it.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>6. Your Rights</h2>
          <p style={{ marginBottom: '0.75rem' }}>You have the right to:</p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 2 }}>
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to or restrict how we process your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>To exercise any of these rights, email us at <a href="mailto:surgsolutionslimited@gmail.com" style={{ color: 'var(--primary)' }}>surgsolutionslimited@gmail.com</a>.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>7. Third-Party Services</h2>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 2 }}>
            <li><strong>Calendly</strong> — for booking calls</li>
            <li><strong>Meta (Facebook) Pixel</strong> — for advertising analytics</li>
            <li><strong>Google Analytics</strong> — for site analytics</li>
            <li><strong>EmailJS</strong> — for form delivery</li>
            <li><strong>WhatsApp</strong> — for direct communication</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>8. Changes to This Policy</h2>
          <p>We may update this policy from time to time. Changes will be posted on this page with an updated date.</p>
        </section>
      </div>
    </div>
  )
}
