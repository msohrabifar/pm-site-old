type TextAs = 'p' | 'span' | 'i'

interface Props {
  as?: TextAs
  children: React.ReactNode
}

export default function Text({ as = 'p', children, ...props }: Props) {
  const TextTag = as
  return (
    <TextTag {...props} className="font-normal text-base">
      {children}
    </TextTag>
  )
}
