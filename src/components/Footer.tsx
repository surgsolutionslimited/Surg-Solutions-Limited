import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import logoLight from '../assets/logo-light.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/">
              <img src={logoLight} alt="Surg Solutions" className="footer-logo" />
            </Link>
            <p>We design and build complete digital growth systems — websites, SEO, ads, and automation — so your business attracts and converts clients predictably.</p>
          </div>

          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">Website Design</Link></li>
              <li><Link to="/services">SEO &amp; AIO</Link></li>
              <li><Link to="/services">Google &amp; Meta Ads</Link></li>
              <li><Link to="/services">Growth Automation</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </div>

          <div className="footer-form">
            <h3>Ready to grow?</h3>
            <p className="footer-wa-desc">
              The fastest way to start is a direct message. No forms, no funnels.
            </p>
            <a
              href="https://wa.link/a2gatg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary footer-wa-btn"
            >
              <MessageCircle size={16} /> Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Surg Solutions Ltd. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
