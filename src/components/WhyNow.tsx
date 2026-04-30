const engines = [
  { name: 'ChatGPT', color: '#10a37f' },
  { name: 'Claude', color: '#d4774a' },
  { name: 'Perplexity', color: '#6366f1' },
  { name: 'Gemini', color: '#4285F4' },
]

export default function WhyNow() {
  return (
    <section className="why-now section">
      <div className="container">
        <div className="why-now-inner">
          <h2>A growing share of your customers now ask AI before they ask Google.</h2>
          <div className="why-now-body">
            <p>Customer behaviour has changed. People now ask AI tools like ChatGPT instead of Google — and they usually get just a few answers.</p>
            <p>If you&apos;re not in those answers, you don&apos;t exist.</p>
            <p>Most agencies still optimise for old search. We optimise for AEO — so your business shows up first.</p>
          </div>
          <div className="why-now-engines" aria-label="AI search engines we optimise for">
            {engines.map((e) => (
              <span key={e.name} className="why-now-engine" style={{ borderColor: e.color, color: e.color }}>
                {e.name}
              </span>
            ))}
          </div>
          <p className="why-now-caption">Be visible everywhere your customers ask.</p>
        </div>
      </div>
    </section>
  )
}
