import './globals.css'
import type { Metadata } from 'next'
import { METADATA } from '@/shared'
import { vazir } from '@/app/fonts'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: {
    default: METADATA.default,
    template: METADATA.template
  },
  description: METADATA.description,
  openGraph: {
    title: METADATA.default,
    description: METADATA.description,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName
  }
}

type LayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fa" dir="rtl">
      <body className={cn('min-h-screen flex flex-col', vazir.className)}>
        {children}
      </body>
    </html>
  )
}
