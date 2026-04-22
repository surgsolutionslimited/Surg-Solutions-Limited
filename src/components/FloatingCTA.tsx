import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './FloatingCTA.css';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link
      to="/audit"
      className={`floating-cta ${visible ? 'floating-cta--visible' : ''}`}
      aria-label="Get Free Growth Audit"
    >
      <ArrowRight size={22} />
      <span className="floating-cta-label">Get Free Growth Audit</span>
    </Link>
  );
}
