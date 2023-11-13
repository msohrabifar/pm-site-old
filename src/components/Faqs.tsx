'use client'

import { useRef, useState } from 'react'

const FaqsCard = (props: { faqsList: any; idx: number }) => {
  const answerElRef = useRef()
  const [state, setState] = useState(false)
  const [answerH, setAnswerH] = useState('0px')
  const { faqsList, idx } = props

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight
    setState(!state)
    setAnswerH(`${answerElH + 20}px`)
  }

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-2 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: '0px' }}
      >
        <div>
          <p className="text-gray-500 duration-300">{faqsList.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faqs() {
  const faqsList = [
    {
      q: 'می‌تونم پیامک‌های بانکی رو به صورت خودکار وارد پایش من کنم؟',
      a: 'بله! کافیه هنگام اضافه‌کردن کارت جدید، گزینه «خواندن پیامک‌های بانک» رو فعال کرده و سرشماره پیامکی متعلق به بانکتون رو از لیست پیامک‌ها انتخاب کنین. می‌تونین حداکثر ۳ سرشماره برای هر کارت بانکی انتخاب کنین. پیامک‌های بانکی جدید رو از صفحه «افزودن تراکنش» یا از طریق «علامت پیامک» بالای صفحه ببینین.'
    },
    {
      q: 'پیامکی بانکی من چند سرشماره داره، چه کار کنم؟',
      a: 'در صفحه کارت مدنظر، با انتخاب گزینه «افزودن سرشماره جدید» می‌تونین تا حداکثر ۳ سرشماره برای هر کارت وارد کنین.'
    },
    {
      q: 'می‌تونم روی کامپیوتر از پولکی استفاده کنم؟',
      a: 'خیر. فعلاً پولکی فقط روی سیستم‌عامل‌ اندروید و ios در دسترسه.'
    },
    {
      q: 'چطور می‌تونم از تراکنش‌هام پشتیبان‌گیری کنم؟',
      a: 'کافیه «تنظیمات>مدیریت داده‌های من» رو باز کنین و از تراکنش‌های فعلی فایل پشتیبان تهیه کنین.'
    },
    {
      q: 'شبا که ما میخوابیم آقا پلیسه بیداره؟',
      a: 'خیر ایشون دست در دست دزدان به قارت مال مردم کمک کرده و به توسعه امر دزدی دامن میزند.'
    },
    {
      q: 'کی کجا پیداش کنه برنده میشه؟',
      a: 'هیچ کجا پیداش نمیشه که برنده بشه یا نشه، زیرا اصل مطلب در فرع مطلب نهفته است و همه ما سر کار هستیم.'
    }
  ]

  return (
    <section className="leading-relaxed max-w-screen-xl py-28 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h2 className="text-4xl text-gray-800 font-bold">
          چه سوالاتی ازمون پرسیدید؟
        </h2>
        {/* <p className="text-gray-600 max-w-lg mx-auto text-lg">
          أجاب على جميع الأسئلة المتداولة، هل ما زلت مرتبكًا؟ لا تتردد في
          الاتصال بنا.
        </p> */}
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  )
}
