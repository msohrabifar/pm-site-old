import Link from 'next/link'
import AndroidIcon from '@/components/icons/Android'

const HERO_CAPTION = 'اپلیکیشن تخصصی آموزش خودمراقبتی به بیماران'
const HERO_DESC = `اپلیکیشن پایش من با ارائه آموزش های علمی طبقه بندی شده، هدفمند و فرد
            محور، به بیماران کمک می کند تا در دوران بهبودی بتوانند از خودشان
            مراقبت کنند. بیماران و همراهان ایشان می توانند با استفاده از
            اپلیکیشن پایش من تمام آموزش ها و نکات لازم را در زمینه مراقبت ها،
            تغذیه، ورزش، فعالیت ها، مهارت ها و داروها متناسب با شرایط و وضعیت
            بالینیشان دریافت نمایند.`

export default function MainHero() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 text-gray-600 md:px-8 xl:flex">
        <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-right">
          {/* <h1 className="text-lg text-gray-800 font-extrabold mx-auto md:text-xl">
            پایش من – مراقب سلامتی من
          </h1> */}
          <h2 className="text-4xl text-gray-800 font-black mx-auto md:text-5xl !leading-snug !md:leading-[4rem]">
            {HERO_CAPTION}
          </h2>
          <p className="max-w-xl mx-auto xl:mx-0 leading-7">{HERO_DESC}</p>
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
            <div className="w-[460px] h-[460px] rounded-2xl bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
