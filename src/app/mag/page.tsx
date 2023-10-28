import Heading from '@/components/Heading'
import Link from 'next/link'
// types
import type { Post } from '@/types/post'

async function getPosts(): Promise<{ result: Array<Post> }> {
  const res = await fetch(
    `http://ws.payeshman.com/api/site/v1/blog/get-posts/1`
  )
  return res.json()
}

export default async function Posts() {
  const { result: posts } = await getPosts()
  console.log(posts)

  return (
    <>
      <Heading>Mag page</Heading>
      {posts.map((post) => {
        return (
          <Link href={`/mag/${post.id}`} key={post.id}>
            <Heading as="h2">{post.title}</Heading>
          </Link>
        )
      })}
    </>
  )
}
