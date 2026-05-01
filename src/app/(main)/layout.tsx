import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ConditionalBottomCTA from '@/components/ConditionalBottomCTA'
import FloatingCTA from '@/components/FloatingCTA'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-container">
      <Navbar />
      <main>{children}</main>
      <ConditionalBottomCTA />
      <Footer />
      <FloatingCTA />
    </div>
  )
}
