import './ProblemSection.css';

export default function ProblemSection() {
  return (
    <section className="problem-section section section-light">
      <div className="container">
        <div className="problem-inner">
          <div className="problem-tag">The Problem We Solve</div>
          <blockquote className="problem-quote">
            "Most businesses have great products or services — but no system to attract clients
            consistently. They rely on referrals, word of mouth, and manual outreach. It works,
            until it doesn't."
          </blockquote>
          <p className="problem-body">
            When your growth depends entirely on hustle and relationships, you're one slow month
            away from stress. We replace that unpredictable cycle with a repeatable system that
            works whether you're in the office or not.
          </p>
        </div>
      </div>
    </section>
  );
}
