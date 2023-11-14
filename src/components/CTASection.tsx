import Image from 'next/image'
import { cn } from '@/lib/utils'

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
}

export default function CTASection({
  image,
  imageAlign,
  label,
  caption,
  description
}: Props) {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div
          className={cn(
            'items-center gap-x-8 sm:px-4 md:px-0 lg:flex',
            imageAlign === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
          )}
        >
          <div className="sm:hidden lg:block">
            <Image src={image.src} width={400} height={400} alt={image.alt} />
          </div>
          <div className="flex-1 max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <div className="text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                >
                  <path d="M3.092 6.637L9.782 3.5a5.17 5.17 0 0 1 4.435 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 0 1-4.435 0L5 11.258" />
                  <path
                    stroke-linejoin="round"
                    d="M2.5 15v-2.862c0-1.28 0-1.92.33-2.42c.33-.501.919-.753 2.094-1.257L6 8"
                    opacity=".5"
                  />
                  <path
                    d="M19 11.5v5.125c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21c-1.796 0-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5"
                    opacity=".5"
                  />
                </g>
              </svg>
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
