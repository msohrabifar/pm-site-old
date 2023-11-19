import { SVGProps } from 'react'

export function Chat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22Z" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.08L11 14l4-4"
          opacity=".5"
        />
      </g>
    </svg>
  )
}
