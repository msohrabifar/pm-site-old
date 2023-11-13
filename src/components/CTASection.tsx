export default function CTASection() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="sm:hidden lg:block">
            <div className="w-[460px] h-[460px] rounded-2xl bg-gray-200"></div>
          </div>
          <div className="flex-1 max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-indigo-600 font-semibold">
              <span className="py-1 px-2 inline-flex items-center gap-x-1 text-sm font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                خدمات آموزشی
              </span>
            </h3>
            <p className="text-gray-800 text-xl font-bold sm:text-3xl">
              پوشش کامل نیازهای آموزشی بیماران
            </p>
            <p className="mt-3 text-gray-600 leading-7">
              آموزش های تخصصی در زمینه مراقبت، تغذیه، ورزش، فعالیت و مهارت ها
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
