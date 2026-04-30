import { Shield, Unlock, Calendar } from 'lucide-react'

const cards = [
  {
    icon: <Shield size={32} aria-hidden="true" />,
    title: 'Lead Guarantee',
    body: "If our system doesn't deliver agreed lead targets in 90 days, we keep working free until it does. You pay for outcomes, not activity.",
  },
  {
    icon: <Unlock size={32} aria-hidden="true" />,
    title: 'You Own Everything',
    body: 'Your website, content, ad accounts, automations, and customer data — all yours, forever. Walk away whenever you want and take it all with you. No agency lock-in.',
  },
  {
    icon: <Calendar size={32} aria-hidden="true" />,
    title: 'Live in 30 Days or Setup Refunded',
    body: 'Your full system goes live within 30 days of project start. If we miss it, your setup fee is refunded — and we still finish the build at no extra cost.',
  },
]

export default function RiskReversal() {
  return (
    <section className="risk-reversal section section-gray">
      <div className="container">
        <div className="section-header text-center">
          <h2>Why working with us is risk-free</h2>
        </div>
        <div className="risk-cards">
          {cards.map((card) => (
            <article key={card.title} className="risk-card">
              <div className="risk-card-icon">{card.icon}</div>
              <h3 className="risk-card-title">{card.title}</h3>
              <p className="risk-card-body">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
