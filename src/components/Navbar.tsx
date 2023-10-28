import Link from 'next/link'
import Heading from './Heading'

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-4 p-4 text-sm font-medium">
        <li className="flex items-center">
          <Link href="/" className="py-2 pe-3">
            <Heading>پایش من</Heading>
          </Link>
        </li>
        <li>
          <Link
            href="/mag"
            prefetch={false}
            className="py-2 px-3 hover:bg-zinc-100 rounded-lg"
          >
            مجله
          </Link>
        </li>
      </ul>
    </nav>
  )
}
