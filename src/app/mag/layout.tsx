import { ThemeProvider } from '@/components/theme-provider'

import Navbar from '@/components/Navbar'
import Container from '@/components/Container'
import Faqs from '@/components/Faqs'
import MagFooter from '@/components/MagFooter'

type LayoutProps = {
  children: React.ReactNode
}

export default function MagLayout({ children }: LayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>
      <main className="grow flex flex-col p-8">
        <Container>{children}</Container>
      </main>
      <Faqs />
      <MagFooter />
    </ThemeProvider>
  )
}
