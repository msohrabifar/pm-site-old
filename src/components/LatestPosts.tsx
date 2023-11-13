import Image from 'next/image'

export default function LatestPosts() {
  const posts = [
    {
      title: 'فیزیوتراپی بعد از عمل قلب باز – آشنایی با روش ها و مزایا',
      desc: 'یک شخص ممکن است در طول زندگی خود در نواحی مختلفی از بدن نظیر قلب، کمر، زانو، دست، ران، لگن و مانند آن تحت جراحی های ارتوپدی قرار گیرد.',
      img: '/test.avif',
      authorLogo: '/face.jpg',
      authorName: 'شاهد رحیمی',
      date: '5 شهریور 1402',
      href: '/'
    },
    {
      title: 'علت و درمان تنگی نفس بعد از عمل قلب باز',
      desc: 'تنگی نفس یا نفس تنگی به طور کلی وضعیتی است که تنفس طبیعی برای شما مشکل می‌شود و این مشکل می‌تواند خفیف، حاد، جدی و یا مزمن باشد.',
      img: '/test.avif',
      authorLogo: '/face.jpg',
      authorName: 'حسن قربتی',
      date: '5 شهریور 1402',
      href: '/'
    },
    {
      title:
        'چرا بعد از عمل قلب باز سرفه می کنیم؟ روش تمیز نگهداشتن ریه با سرفه',
      desc: 'سرفه نوعی واکنش دفاعی بدن نسبت به مواد محرک تنفسی (مانند پریدن تکه ی غذا در گلو) یا آلودگی هوا یا برای دفع ترشحات در هنگام بیماری است.',
      img: '/test.avif',
      authorLogo: '/face.jpg',
      authorName: 'هانیه سراوان',
      date: '5 شهریور 1402',
      href: '/'
    }
  ]

  return (
    <section className="pt-20 pb-40 mx-auto px-4 max-w-screen-xl md:px-8">
      <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">مقالات</h1>
        <p className="mt-3 text-gray-500">آخرین مقالات ارسالی در مجله سلامتی</p>
      </div>
      <div className="mt-12 grid gap-2 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((items, key) => (
          <article
            className="max-w-md mx-auto mt-4 border border-gray-100 rounded-xl duration-300 hover:shadow-xl hover:shadow-gray-200"
            key={key}
          >
            <a href={items.href}>
              <Image
                src={items.img}
                width={500}
                height={100}
                loading="lazy"
                alt={items.title}
                className="rounded-t-md"
              />
              <div className="flex items-center gap-2 mt-2 pt-3 px-3 mr-4 ml-2">
                <div className="flex-none w-8 h-8 rounded-full">
                  <Image
                    src={items.authorLogo}
                    width={32}
                    height={32}
                    className="rounded-full"
                    alt={items.authorName}
                  />
                </div>
                <div className="mr-1">
                  <span className="block text-sm text-gray-900">
                    {items.authorName}
                  </span>
                  <span className="block text-gray-400 text-xs">
                    {items.date}
                  </span>
                </div>
              </div>
              <div className="py-3 px-3 mr-4 ml-2 mb-3">
                <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
                  {items.title}
                </h3>
                <p className="text-gray-400 text-sm leading-6 line-clamp-3 mt-1.5">
                  {items.desc}
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
