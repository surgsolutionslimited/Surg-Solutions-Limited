import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BottomCTA from '@/components/BottomCTA'
import FloatingCTA from '@/components/FloatingCTA'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-container">
      <Navbar />
      <main>{children}</main>
      <BottomCTA />
      <Footer />
      <FloatingCTA />
    </div>
  )
}
