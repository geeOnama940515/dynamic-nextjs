import './globals.css'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'My Dynamic Website',
  description: 'Next.js powered dynamic app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 bg-blue-600 text-white">
          <h1 className="text-xl font-bold">My Website Header</h1>
        </header>

        <nav className="bg-gray-100 p-4">
          <Link className="mr-4 text-blue-600 hover:underline" href="/">Home</Link>
          <Link className="mr-4 text-blue-600 hover:underline" href="/about">About</Link>
          <Link className="mr-4 text-blue-600 hover:underline" href="/blog">Blog</Link>
        </nav>

        <main className="p-4">{children}</main>

        <footer className="p-4 bg-gray-100 text-center">© 2025</footer>
      </body>
    </html>
  )
}
