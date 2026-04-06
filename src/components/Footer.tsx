import { Link } from 'react-router-dom';
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
             <p>We build automated growth systems that generate leads, eliminate repetitive work, and make it easier to run and scale your business.</p>
          </div>
          
          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">Growth Engine</Link></li>
              <li><Link to="/services">Automation & Ops</Link></li>
              <li><Link to="/services">Data Systems</Link></li>
              <li><Link to="/services">Scalable Growth</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/#process">Our Systems</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-form">
            <h3>Get Your Free Growth Audit</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your work email" required aria-label="Work Email" />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Surg Solutions Ltd. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
