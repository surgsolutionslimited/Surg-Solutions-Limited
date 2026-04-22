import { Outlet, Link } from 'react-router-dom';
import logoDark from '../assets/logo-dark.png';
import './FunnelLayout.css';

export default function FunnelLayout() {
  return (
    <div className="funnel-layout">
      <header className="funnel-header">
        <Link to="/">
          <img src={logoDark} alt="Surg Solutions" className="funnel-logo" />
        </Link>
      </header>
      <main className="funnel-main">
        <Outlet />
      </main>
    </div>
  );
}
