import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Surg Solutions terms of service — the terms that govern use of our website and services.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <div className="section animate-fade-in">
      <div className="container" style={{ maxWidth: '780px' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Last updated: April 2026</p>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
          <p>By accessing or using surgsolutions.online you agree to be bound by these Terms of Service.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>2. Services</h2>
          <p>Surg Solutions Ltd provides digital growth services including website design and development, SEO and answer engine optimisation, Google and Meta advertising, and growth automation. Specific deliverables, timelines, and payment terms are defined in individual client agreements.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>3. Use of This Website</h2>
          <p style={{ marginBottom: '0.75rem' }}>You agree not to:</p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 2 }}>
            <li>Use the site in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorised access to any part of the site</li>
            <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
            <li>Reproduce, duplicate, or copy any content from the site without our written permission</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>4. Intellectual Property</h2>
          <p>All content on this site is the property of Surg Solutions Ltd and protected by applicable intellectual property laws.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>5. Case Studies &amp; Results</h2>
          <p>Case studies and performance statistics reflect real results achieved for specific clients under specific conditions. Results vary and are not guaranteed.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Surg Solutions Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>7. Governing Law</h2>
          <p>These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of the courts of Nigeria.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>8. Changes to These Terms</h2>
          <p>We reserve the right to update these terms at any time. Continued use of our site after changes constitutes acceptance of the updated terms.</p>
        </section>

        <p style={{ marginTop: '3rem', color: 'var(--text-secondary)' }}>
          Questions? Contact us at <a href="mailto:surgsolutionslimited@gmail.com" style={{ color: 'var(--primary)' }}>surgsolutionslimited@gmail.com</a>.
        </p>
      </div>
    </div>
  )
}
