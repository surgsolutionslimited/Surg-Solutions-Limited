const bonuses = [
  { item: 'Complete Growth System (website + SEO + AEO + ads + automation)', value: 'Core', isCore: true },
  { item: 'AI Visibility Audit — you + top 3 competitors across ChatGPT, Claude, Perplexity, Gemini', value: '₦150,000', isCore: false },
  { item: '90-Day Content & AEO Entity Calendar', value: '₦200,000', isCore: false },
  { item: 'WhatsApp + SMS Instant Lead-Response Automation Pack', value: '₦120,000', isCore: false },
  { item: 'Google Business Profile Domination Setup', value: '₦100,000', isCore: false },
  { item: 'Competitor Teardown Report (what\'s working in your area, where the gaps are)', value: '₦80,000', isCore: false },
  { item: 'Review Engine — automated 5-star review collection from happy customers', value: '₦100,000', isCore: false },
  { item: '6 × Monthly Strategy Calls with Founder', value: '₦300,000', isCore: false },
]

export default function BonusStack() {
  return (
    <section className="bonus-stack section section-light">
      <div className="container">
        <div className="section-header text-center">
          <h2>What&apos;s included with every growth system</h2>
          <p>Every project includes the following at no additional cost:</p>
        </div>
        <div className="bonus-table" role="table" aria-label="Included bonuses">
          <div className="bonus-row bonus-row-header" role="row">
            <span role="columnheader">Inclusion</span>
            <span role="columnheader">Value</span>
          </div>
          {bonuses.map((bonus) => (
            <div key={bonus.item} className="bonus-row" role="row">
              <span className="bonus-item" role="cell">
                <span className="bonus-check" aria-hidden="true">&#10003;</span> {bonus.item}
              </span>
              <span className={`bonus-value${bonus.isCore ? ' bonus-value-core' : ''}`} role="cell">
                {bonus.value}
              </span>
            </div>
          ))}
        </div>
        <p className="bonus-total">Total bonus value: &#8358;1,050,000+ — included free with every growth system.</p>
        <p className="price-anchor">
          Growth systems start at &#8358;450,000. Book the free audit to see what your system needs and what it would cost. No obligation.
        </p>
      </div>
    </section>
  )
}
