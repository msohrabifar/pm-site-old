import Image from 'next/image'
import Link from 'next/link'
import AndroidIcon from '@/components/icons/Android'
import { BRAND_CAPTION, BRAND_DESCRIPTION } from '@/shared'

export default function MainHero() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 p-24 gap-12 text-gray-600 md:px-8 xl:flex xl:items-center">
        <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-right">
          {/* <h1 className="text-lg text-gray-800 font-extrabold mx-auto md:text-xl">
            پایش من – مراقب سلامتی من
          </h1> */}
          <h2 className="text-4xl text-gray-800 font-black mx-auto md:text-5xl !leading-snug !md:leading-[4rem]">
            {BRAND_CAPTION}
          </h2>
          <p className="max-w-xl mx-auto xl:mx-0 leading-7">
            {BRAND_DESCRIPTION}
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
            <Link
              href="https://cdn.payeshman.com/lib/app/payeshman-therapist-1.0.0.apk"
              target="_blank"
              className="flex items-center gap-2.5 py-2.5 px-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all mt-4"
            >
              <div>
                <AndroidIcon width={32} height={32} className="text-blue-50" />
              </div>
              <div className="flex flex-col justify-center items-start gap-0">
                <p className="text-base text-white font-medium">
                  دانلود مستقیم
                </p>
                <p className="text-[0.66rem] text-white/60">فایل نصب APK</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
          <div className="relative">
            {/* <div className="w-[460px] h-[460px] rounded-2xl bg-gray-200"></div> */}
            <Image
              src="/hp-app.png"
              width={480}
              height={480}
              alt="payeshman application home page"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
