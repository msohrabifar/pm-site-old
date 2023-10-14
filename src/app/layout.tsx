import './globals.css'
import type { Metadata } from 'next'
import { vazir } from '@/app/fonts'
import { METADATA } from '@/shared'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description
}

type LayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className} min-h-screen flex flex-col`}>
        <header>
          <Navbar />
        </header>
        <main className="grow flex flex-col p-8">{children}</main>
        <footer className="border-t p-8">footer</footer>
      </body>
    </html>
  )
}
