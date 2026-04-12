import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import logoLight from '../assets/logo-light.png';
import logoDark from '../assets/logo-dark.png';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isDarkBg = false;

  return (
    <header className={`navbar ${isDarkBg ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={isDarkBg ? logoLight : logoDark} alt="Surg Solutions Logo" />
        </Link>

        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className={location.pathname.startsWith('/services') ? 'active' : ''} onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/case-studies" className={location.pathname.startsWith('/case-studies') ? 'active' : ''} onClick={() => setIsOpen(false)}>Case Studies</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsOpen(false)}>About</Link>
          <div className="navbar-cta-mobile">
            <a
              href="https://wa.link/a2gatg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary navbar-cta-btn"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle size={16} /> Get in Touch
            </a>
          </div>
        </nav>

        <div className="navbar-cta-desktop">
          <a
            href="https://wa.link/a2gatg"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar-cta-btn"
          >
            <MessageCircle size={16} /> Get in Touch
          </a>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}

