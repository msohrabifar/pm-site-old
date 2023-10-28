import Heading from '@/components/Heading'
// types
import type { Post } from '@/types/post'

interface Props {
  params: { slug: Array<string> }
}

async function getPost(postId: number): Promise<{ result: Post }> {
  const res = await fetch(
    `http://ws.payeshman.com/api/site/v1/blog/get-post/${postId}`
  )
  return res.json()
}

export default async function Post({ params }: Props) {
  const { slug } = params
  const [postId] = slug
  console.log(postId)
  const { result: post } = await getPost(+postId)

  return (
    <>
      <Heading>{post.title} </Heading>
      <p>{post.desc}</p>
    </>
  )
}
