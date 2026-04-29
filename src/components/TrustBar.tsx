const stats = [
  { num: '+7,700%', label: 'Traffic growth' },
  { num: '94/100', label: 'Site health achieved' },
  { num: '5+', label: 'Industries served' },
  { num: '30 days', label: 'Average time to go live' },
]

export default function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Results overview">
      <div className="container">
        <p className="trust-label text-center">REAL RESULTS FROM REAL BUSINESSES</p>
        <dl className="trust-stats-grid">
          {stats.map((s) => (
            <div key={s.num} className="trust-stat-item">
              <dt className="trust-stat-num">{s.num}</dt>
              <dd className="trust-stat-label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
