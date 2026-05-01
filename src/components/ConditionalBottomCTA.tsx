'use client'
import { usePathname } from 'next/navigation'
import BottomCTA from './BottomCTA'

export default function ConditionalBottomCTA() {
  const pathname = usePathname()
  if (pathname === '/services' || pathname === '/services/') return null
  return <BottomCTA />
}
