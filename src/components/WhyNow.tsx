const engines = ['ChatGPT', 'Claude', 'Perplexity', 'Gemini']

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
            {engines.map((name) => (
              <span key={name} className="why-now-engine">{name}</span>
            ))}
          </div>
          <p className="why-now-caption">Be visible everywhere your customers ask.</p>
        </div>
      </div>
    </section>
  )
}
