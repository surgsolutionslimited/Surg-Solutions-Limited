import Image from 'next/image'
import Link from 'next/link'

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="funnel-layout">
      <header className="funnel-header">
        <Link href="/">
          <Image src="/Logo Light Background.png" alt="Surg Solutions" width={417} height={224} className="funnel-logo" />
        </Link>
      </header>
      <main className="funnel-main">
        {children}
      </main>
    </div>
  )
}
