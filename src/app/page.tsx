import MainNavbar from '@/components/MainNavbar'
import MainHero from '@/components/MainHero'
// import States from '@/components/States'
import CTASection from '@/components/CTASection'
import Faqs from '@/components/Faqs'
import LatestPosts from '@/components/LatestPosts'
import MagFooter from '@/components/MagFooter'

import { cn } from '@/lib/utils'
// types
import type { CtaIconsKeys } from '@/types/icon'

const ctaSections = [
  {
    image: {
      src: '/cares-app.png',
      alt: 'services'
    },
    label: 'خدمات آموزشی',
    caption: 'پوشش کامل نیازهای آموزشی بیماران',
    description:
      'آموزش های تخصصی در زمینه مراقبت، تغذیه، ورزش، فعالیت و مهارت ها',
    iconName: 'learn'
  },
  {
    image: {
      src: '/story-app.png',
      alt: ''
    },
    label: '',
    caption: 'یادگیری ساده و آسان',
    description:
      'ارائه آموزش ها با لحنی روان، ساده و استفاده حداقلی از واژگان تخصصی',
    iconName: 'archive'
  },
  {
    image: {
      src: '/meds-app.png',
      alt: ''
    },
    label: '',
    caption: 'هرآنچه درمورد داروهایاتان باید بدانید',
    description: 'آموزش ساده و کاربردی در مورد داروها و نکات مصرف آنها',
    iconName: 'drugs'
  },
  {
    image: {
      src: '/ticket-app.png',
      alt: ''
    },
    label: '',
    caption: 'گفتگوی آسان با کارشناسان حوزه سلامت شات',
    description:
      'هر زمان از بخش گفتگو می توانید با کارشناسان متخصص حوزه سلامت در ارتباط باشید و سوالات و مشکلات خود را مطرح کنید.',
    iconName: 'chat'
  },
  {
    image: {
      src: '/marked-app.png',
      alt: ''
    },
    label: '',
    caption: 'دسترسی سریع به آموزش های مهم',
    description: 'با قابلیت نشان ، به آموزش های مهم سریع دسترسی پیدا کنید',
    iconName: 'update'
  }
]

export default function Home() {
  return (
    <>
      <MainNavbar />
      <MainHero />
      {/* <States /> */}
      {ctaSections.map((ctaSection, ctaSectionIndex) => (
        <CTASection
          key={ctaSectionIndex}
          image={ctaSection.image}
          imageAlign={ctaSectionIndex % 2 === 0 ? 'right' : 'left'}
          label={ctaSection.label}
          caption={ctaSection.caption}
          description={ctaSection.description}
          iconName={ctaSection.iconName as CtaIconsKeys}
          className={cn(
            'py-16',
            ctaSectionIndex === 0 ||
              ctaSectionIndex === 2 ||
              ctaSectionIndex === 4
              ? 'bg-gray-50'
              : ''
          )}
        />
      ))}
      <Faqs />
      <LatestPosts />
      <MagFooter />
    </>
  )
}
