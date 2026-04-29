import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BottomCTA from '../../components/BottomCTA';
import FloatingCTA from '../../components/FloatingCTA';

export default function MainLayout() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <BottomCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
