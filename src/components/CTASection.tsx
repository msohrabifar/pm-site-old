import Image from 'next/image'
import { cn } from '@/lib/utils'
import { CTA_ICONS } from '@/shared/icons'
// types
import type { CtaIconsKeys } from '@/types/icon'

interface CtaImage {
  src: string
  alt: string
}

interface Props {
  image: CtaImage
  imageAlign: 'left' | 'right'
  label: string
  caption: string
  description: string
  iconName: CtaIconsKeys
  className: string
}

export default function CTASection({
  image,
  imageAlign,
  label,
  caption,
  description,
  iconName,
  className
}: Props) {
  const TargetIcon = CTA_ICONS[iconName]

  return (
    <section className={className}>
      <div className="max-w-screen-lg mx-auto md:px-8">
        <div
          className={cn(
            'items-center gap-x-20 sm:px-4 md:px-0 lg:flex',
            imageAlign === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
          )}
        >
          <div className="sm:hidden lg:block">
            <Image src={image.src} width={260} height={260} alt={image.alt} />
          </div>
          <div className="flex-1 max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <div className="inline-flex text-blue-600 bg-blue-100 p-4 rounded-2xl">
              <TargetIcon width={64} height={64} />
            </div>
            {/* <h3 className="text-indigo-600 font-semibold">
              <span className="py-1 px-2 inline-flex items-center gap-x-1 text-sm font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                {label}
              </span>
            </h3> */}
            <p className="text-gray-800 text-xl font-bold sm:text-3xl !mt-8">
              {caption}
            </p>
            <p className="mt-3 text-gray-600 leading-7">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
