import Heading from '@/components/Heading'

export default function MagDetail({ params }: { params: { slug: string[] } }) {
  const { slug } = params
  const [magId, magCategory] = slug
  console.log(magId, magCategory)

  return (
    <>
      <Heading>Mag Page</Heading>
    </>
  )
}
