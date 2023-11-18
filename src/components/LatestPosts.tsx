import Image from 'next/image'
// types
import type { Post } from '@/types/post'

async function getPosts(): Promise<{ result: Array<Post> }> {
  const res = await fetch(
    `http://ws.payeshman.com/api/site/v1/blog/get-posts/1`
  )
  return res.json()
}

export default async function LatestPosts() {
  const { result } = await getPosts()
  const posts = result.filter((post, postIndex) => postIndex <= 2)
  // console.log(posts)

  return (
    <section className="pt-20 pb-40 px-4 md:px-8 bg-gray-50">
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">مقالات</h1>
          <p className="mt-3 text-gray-500">
            آخرین مقالات ارسالی در مجله سلامتی
          </p>
        </div>
        <div className="mt-12 grid gap-2 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((items, key) => (
            <article
              className="max-w-md mx-auto mt-4 bg-white border border-gray-100 rounded-xl duration-300 hover:shadow-xl hover:shadow-gray-200"
              key={key}
            >
              <a href="/">
                <Image
                  src="/blog1.jpg"
                  width={500}
                  height={100}
                  loading="lazy"
                  alt={items.title}
                  className="rounded-t-md"
                />
                {/* <div className="flex items-center gap-2 mt-2 pt-3 px-3 mr-4 ml-2">
                  <div className="flex-none w-8 h-8 rounded-full">
                    <Image
                      src={items.authorLogo}
                      width={32}
                      height={32}
                      className="rounded-full"
                      alt={items.author.display_name}
                    />
                  </div>
                  <div className="mr-1">
                    <span className="block text-sm text-gray-900">
                      {items.author?.display_name}
                    </span>
                    <span className="block text-gray-400 text-xs">
                      {items.created_at}
                    </span>
                  </div>
                </div> */}
                <div className="pb-3 pt-6 px-3 mr-4 ml-2 mb-3">
                  <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
                    {items.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-6 line-clamp-3 mt-1.5">
                    {items.desc}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
