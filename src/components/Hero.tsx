import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background-pattern"></div>
      <div className="container hero-container">
        <div className="hero-content text-center animate-fade-in">
          <div className="hero-badge">Growth Systems & Automation</div>
          <h1>
            We Build Growth Systems<br />
            <span className="text-gradient">That Scale Your Business.</span>
          </h1>
          <p>
            Websites, automation, and growth infrastructure designed to generate leads, remove manual work, and help you run your business with ease.
          </p>
          <div className="hero-actions">
            <Link to="/free-audit" className="btn btn-primary">
              Get Free Growth System Audit <ArrowRight size={20} />
            </Link>
            <Link to="/case-studies" className="btn btn-outline">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
