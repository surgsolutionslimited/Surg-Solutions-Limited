import { ArrowRight, MessageCircle } from 'lucide-react';
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
            Stop Chasing Clients.<br />
            <span className="text-gradient">Build the System That Brings Them to You.</span>
          </h1>
          <p>
            We design and build complete digital growth systems — websites, SEO, ads, and automation — so your business attracts and converts clients predictably, without the manual hustle.
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.link/a2gatg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={20} /> Get in Touch
            </a>
            <Link to="/case-studies" className="btn btn-outline">
              See Our Work <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
