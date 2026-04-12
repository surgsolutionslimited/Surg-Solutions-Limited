import './TrustBar.css';

const stats = [
  { num: '+7,700%', label: 'Traffic growth' },
  { num: '94/100',  label: 'Site health achieved' },
  { num: '5+',      label: 'Industries served' },
  { num: '30 days', label: 'Average time to go live' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container">
        <p className="trust-label text-center">REAL RESULTS FROM REAL BUSINESSES</p>
        <div className="trust-stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="trust-stat-item">
              <div className="trust-stat-num">{s.num}</div>
              <div className="trust-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

