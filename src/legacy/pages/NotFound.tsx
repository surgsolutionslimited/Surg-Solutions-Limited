import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../SEO';

export default function NotFound() {
  return (
    <div className="section animate-fade-in" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <SEO
        title="404 — Page Not Found"
        description="The page you're looking for doesn't exist. Head back to the Surg Solutions homepage."
        canonical="/404"
      />
      <div className="container text-center">
        <p style={{ fontSize: '6rem', fontWeight: 800, lineHeight: 1, color: 'var(--primary)', marginBottom: '1rem' }}>404</p>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page not found</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '36ch', margin: '0 auto 2rem' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
