import Heading from './Heading'
// types
import type { Post } from '@/types/post'

export default function Post({ title, desc }: Post) {
  return (
    <>
      <Heading>{title}</Heading>
    </>
  )
}
