import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
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
    <a
      href="https://wa.link/a2gatg"
      target="_blank"
      rel="noopener noreferrer"
      className={`floating-cta ${visible ? 'floating-cta--visible' : ''}`}
      aria-label="Get in Touch on WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="floating-cta-label">Get in Touch</span>
    </a>
  );
}
