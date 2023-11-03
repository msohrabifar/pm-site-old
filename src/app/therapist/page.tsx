import Image from 'next/image'
import Link from 'next/link'
import DownloadIcon from '@/components/icons/Download'
import AndroidIcon from '@/components/icons/Android'

export default function Therapist() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-16">
      <Image src="/logo.png" alt="Payeshman Logo" width="64" height="64" />
      <div className="flex flex-col items-center gap-4 mt-4">
        <h1 className="text-4xl font-bold">پایــش مـن</h1>
        <h2 className="text-xl font-medium py-1.5 px-3 text-blue-600 bg-blue-50 rounded-lg">
          نســــخه درمــانگـر
        </h2>
      </div>
      <p className="text-base text-zinc-600 text-center leading-8 max-w-sm mt-2">
        امکان بررسی اطلاعات آموزشی، ثبت نظر، امتیازدهی، ایجاد پرونده آموزشی
        بیمار
      </p>
      <Link
        href="https://cdn.payeshman.com/lib/app/payeshman-therapist-1.0.0.apk"
        target="_blank"
        className="flex items-center gap-3 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all mt-4"
      >
        <div>
          <AndroidIcon width={40} height={40} className="text-blue-50" />
        </div>
        <div className="flex flex-col justify-center items-start gap-0.5">
          <p className="text-xl text-white font-normal">دانلود مستقیم</p>
          <div className="text-xs text-white/60">فایل نصب APK</div>
        </div>
      </Link>
    </div>
  )
}
