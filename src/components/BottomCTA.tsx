import { MessageCircle } from 'lucide-react'

export default function BottomCTA() {
  return (
    <section className="bottom-cta section-dark">
      <div className="container bottom-cta-container">
        <div className="bottom-cta-content text-center animate-fade-in">
          <h2>Ready to Build Your Growth System?</h2>
          <p>Let&apos;s talk about what you need. No pressure, no pitch — just a conversation about your business and how to grow it.</p>
          <div className="bottom-cta-actions">
            <a href="https://wa.link/a2gatg" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <MessageCircle size={20} aria-hidden="true" /> Get in Touch on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
