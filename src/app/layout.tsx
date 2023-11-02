import './globals.css'
import type { Metadata } from 'next'
import { METADATA } from '@/shared'
import { vazir } from '@/app/fonts'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'

import Navbar from '@/components/Navbar'
import Container from '@/components/Container'

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
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          {/* <header>
            <Container>
              <Navbar />
            </Container>
          </header> */}
          <main className="grow flex flex-col p-8">
            <Container>{children}</Container>
          </main>
          {/* <footer className="border-t p-8">
            <Container>footer</Container>
          </footer> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
