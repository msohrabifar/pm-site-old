import Link from 'next/link'
import AndroidIcon from '@/components/icons/Android'
import { BRAND_NAME, BRAND_DESCRIPTION } from '@/shared'

export default function MagFooter() {
  const footerNavs = [
    {
      label: 'خدمات کاربران',
      items: [
        {
          href: 'javascript:void()',
          name: 'قوانین استفاده'
        },
        {
          href: 'javascript:void()',
          name: 'حریم خصوصی'
        },
        {
          href: 'javascript:void()',
          name: 'مجله سلامتی'
        },
        {
          href: 'javascript:void()',
          name: 'فهرست منابع علمی'
        },
        {
          href: 'javascript:void()',
          name: 'راهنمای کار با اپلیکیشن'
        }
      ]
    },
    {
      label: 'ارتباط با پشتیبانی',
      items: [
        {
          href: 'javascript:void()',
          name: 'درباره ما'
        },
        {
          href: 'javascript:void()',
          name: 'استخدام'
        },
        {
          href: 'javascript:void()',
          name: 'تماس با ما'
        },
        {
          href: 'javascript:void()',
          name: 'پرسش و پاسخ'
        }
      ]
    }
  ]

  return (
    <footer className="pt-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="py-12 space-y-6 items-start justify-between sm:flex md:space-y-0 gap-20">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-1.5 text-gray-600" key={idx}>
              <h4 className="text-base text-gray-800 font-semibold sm:pb-2">
                {item.label}
              </h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className="text-sm hover:text-gray-800 duration-150"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
          <div className="w-80">
            <h3 className="text-base text-gray-800 font-semibold sm:pb-2">
              لینک های دانلود اپلیکیشن
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="https://cdn.payeshman.com/lib/app/payeshman-therapist-1.0.0.apk"
                target="_blank"
                className="flex items-center gap-2.5 py-2.5 px-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all mt-4"
              >
                <div>
                  <AndroidIcon
                    width={32}
                    height={32}
                    className="text-blue-50"
                  />
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
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">{BRAND_NAME.fa}</h2>
            <p className="text-sm leading-7 text-gray-700 mt-4">
              تلفن پشتیبانی : 09029029400
            </p>
            <p className="text-sm leading-7 text-gray-700 mt-2">
              آدرس :  مشهد،میدان فردوسی، میدان بوعلی، پارک علم و فناوری سلامت
            </p>
          </div>
        </div>

        <div className="my-10 lg:-mx-8 py-6 px-8 bg-gray-100 rounded-full flex items-center justify-between ">
          <p className="text-xs text-gray-400 align-middle">
            © کلیه حقوق این سرویس ( وب‌سایت و اپلیکیشن‌های موبایل ) محفوظ و
            متعلق به پایش من می‌باشد.
          </p>
          <div className="flex items-center gap-x-5 text-gray-400 ">
            <a href="/" rel="navigate to soroosh social media">
              <svg
                className="w-5 h-5 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 1045.000000 1045.000000"
              >
                <g
                  transform="translate(0.000000,1045.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    d="M5075 10134 c-672 -34 -1274 -177 -1883 -448 -733 -327 -1405 -871
-1903 -1538 -503 -674 -825 -1474 -929 -2308 -95 -755 -18 -1472 241 -2244
189 -560 466 -1002 814 -1294 247 -208 479 -309 816 -357 361 -51 759 37 1074
239 550 352 815 860 766 1467 -19 244 -68 432 -233 894 -246 688 -313 891
-397 1196 -86 313 -151 642 -188 954 -22 189 -25 761 -5 925 62 501 206 958
423 1340 89 157 156 246 289 384 396 410 910 632 1590 687 172 14 479 6 664
-16 71 -8 131 -14 133 -12 13 13 -425 90 -635 111 -152 16 -502 27 -637 20z"
                  />
                  <path d="M6368 9993 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
                  <path
                    d="M6806 9680 c-398 -63 -721 -325 -844 -685 -56 -164 -69 -395 -33
-571 61 -296 213 -486 691 -861 314 -246 478 -392 730 -649 481 -490 728 -863
923 -1391 252 -679 312 -1420 173 -2105 -73 -357 -217 -740 -401 -1063 -248
-436 -630 -875 -938 -1079 -563 -372 -1276 -623 -1977 -698 -184 -19 -637 -16
-825 6 -721 84 -1419 356 -2053 798 -110 77 -97 59 25 -34 372 -285 839 -540
1312 -717 1159 -433 2360 -409 3512 72 155 65 394 181 517 251 35 20 69 36 76
36 7 0 410 -106 895 -235 486 -130 885 -234 886 -233 1 2 -51 431 -116 953
l-117 950 79 121 c630 976 896 2105 763 3249 -130 1130 -644 2165 -1474 2969
-481 466 -982 788 -1388 892 -109 28 -313 40 -416 24z"
                  />
                </g>
              </svg>
            </a>
            <a href="/" rel="navigate to twitter social media">
              <svg
                className="w-5 h-5 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <g clip-path="url(#clip0_17_80)">
                  <path
                    fill="currentColor"
                    d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_80">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="/" rel="navigate to telegram social media">
              <svg
                className="w-5 h-5 hover:text-gray-500 duration-150"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01c-.378.15-.577.298-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294c.26.006.549-.1.868-.32c2.179-1.471 3.304-2.214 3.374-2.23c.05-.012.12-.026.166.016c.047.041.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817c-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088c.327.216.589.393.85.571c.284.194.568.387.936.629c.093.06.183.125.27.187c.331.236.63.448.997.414c.214-.02.435-.22.547-.82c.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315a.337.337 0 0 0-.114-.217a.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                />
              </svg>
            </a>
            <a href="/" rel="navigate to instagram social media">
              <svg
                className="w-5 h-5 hover:text-gray-500 duration-150"
                fill="currentColor"
                viewBox="0 0 48 48"
              >
                <g clip-path="url(#clip0_17_63)">
                  <path d="M24 4.322c6.413 0 7.172.028 9.694.14 2.343.104 3.61.497 4.453.825 1.116.432 1.922.957 2.756 1.791.844.844 1.36 1.64 1.79 2.756.329.844.723 2.12.826 4.454.112 2.53.14 3.29.14 9.693 0 6.413-.028 7.172-.14 9.694-.103 2.344-.497 3.61-.825 4.453-.431 1.116-.957 1.922-1.79 2.756-.845.844-1.642 1.36-2.757 1.791-.844.328-2.119.722-4.453.825-2.532.112-3.29.14-9.694.14-6.413 0-7.172-.028-9.694-.14-2.343-.103-3.61-.497-4.453-.825-1.115-.431-1.922-.956-2.756-1.79-.844-.844-1.36-1.641-1.79-2.757-.329-.844-.723-2.119-.826-4.453-.112-2.531-.14-3.29-.14-9.694 0-6.412.028-7.172.14-9.694.103-2.343.497-3.609.825-4.453.431-1.115.957-1.921 1.79-2.756.845-.844 1.642-1.36 2.757-1.79.844-.329 2.119-.722 4.453-.825 2.522-.113 3.281-.141 9.694-.141zM24 0c-6.516 0-7.331.028-9.89.14-2.55.113-4.304.526-5.822 1.116-1.585.619-2.926 1.435-4.257 2.775-1.34 1.332-2.156 2.672-2.775 4.247C.666 9.806.253 11.55.141 14.1.028 16.669 0 17.484 0 24s.028 7.331.14 9.89c.113 2.55.526 4.304 1.116 5.822.619 1.585 1.435 2.925 2.775 4.257a11.732 11.732 0 004.247 2.765c1.528.591 3.272 1.003 5.822 1.116 2.56.112 3.375.14 9.89.14 6.516 0 7.332-.028 9.891-.14 2.55-.113 4.303-.525 5.822-1.116a11.732 11.732 0 004.247-2.765 11.732 11.732 0 002.766-4.247c.59-1.528 1.003-3.272 1.115-5.822.113-2.56.14-3.375.14-9.89 0-6.516-.027-7.332-.14-9.891-.112-2.55-.525-4.303-1.115-5.822-.591-1.594-1.407-2.935-2.747-4.266a11.732 11.732 0 00-4.247-2.765C38.194.675 36.45.262 33.9.15 31.331.028 30.516 0 24 0z" />
                  <path d="M24 11.672c-6.806 0-12.328 5.522-12.328 12.328 0 6.806 5.522 12.328 12.328 12.328 6.806 0 12.328-5.522 12.328-12.328 0-6.806-5.522-12.328-12.328-12.328zm0 20.325a7.998 7.998 0 010-15.994 7.998 7.998 0 010 15.994zM39.694 11.184a2.879 2.879 0 11-2.878-2.878 2.885 2.885 0 012.878 2.878z" />
                </g>
                <defs>
                  <clipPath id="clip0_17_63">
                    <path d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
