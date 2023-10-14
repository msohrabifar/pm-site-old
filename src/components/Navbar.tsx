import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-2 p-4 text-sm font-medium">
        <li>
          <Link href="/" className="py-2 px-3 hover:bg-zinc-100 rounded-lg">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/mag"
            prefetch={false}
            className="py-2 px-3 hover:bg-zinc-100 rounded-lg"
          >
            Magazine
          </Link>
        </li>
      </ul>
    </nav>
  )
}
