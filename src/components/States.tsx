export default function States() {
  const stats = [
    {
      
      data: '35K',
      title: 'عملاء'
    },
    {
      data: '10K+',
      title: 'تنزيلات'
    },
    {
      data: '40+',
      title: 'بلدان'
    },
    {
      data: '30M+',
      title: 'إجمالي الإيرادات'
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        {/* <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            عملاؤنا سعداء دائمًا
          </h3>
          <p className="mt-3">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى.
          </p>
        </div> */}
        <div className="mt-8">
          <ul className="flex flex-col items-center justify-center gap-x-8 gap-y-10 sm:flex-row sm:flex-wrap">
            {stats.map((item, idx) => (
              <li
                key={idx}
                className="text-center px-12 md:px-16 py-10 bg-gray-50 rounded-xl"
              >
                <h4 className="text-5xl text-blue-600 font-semibold">
                  {item.data}
                </h4>
                <p className="mt-3 font-medium text-lg">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
