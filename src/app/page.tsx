import MainNavbar from '@/components/MainNavbar'
import MainHero from '@/components/MainHero'
import States from '@/components/States'
import CTASection from '@/components/CTASection'
import Faqs from '@/components/Faqs'
import LatestPosts from '@/components/LatestPosts'
import MagFooter from '@/components/MagFooter'

export default function Home() {
  return (
    <>
      <MainNavbar />
      <MainHero />
      <States />
      <CTASection />
      <Faqs />
      <LatestPosts />
      <MagFooter />
    </>
  )
}
