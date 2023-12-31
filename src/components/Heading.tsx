type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface Props {
  as?: HeadingAs
  children: React.ReactNode
}

export default function Heading({ as = 'h1', children, ...props }: Props) {
  const HeadingTag = as
  return (
    <HeadingTag {...props} className="font-bold pb-3 text-2xl">
      {children}
    </HeadingTag>
  )
}
