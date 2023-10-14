import Heading from '@/components/Heading'

interface Props {
  params: { slug: Array<string> }
}

async function getMag(magId: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${magId}`)
  return res.json()
}

export default async function MagDetail({ params }: Props) {
  const { slug } = params
  const [magId, magCategory] = slug
  console.log(magId, magCategory)
  const mag = await getMag(2)
  console.log(mag)

  return (
    <>
      <Heading>{mag.title}</Heading>
      <p>{mag.body}</p>
    </>
  )
}
