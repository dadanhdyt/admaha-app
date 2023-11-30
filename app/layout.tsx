import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-stone-950 h-16 flex items-center justify-center space-x-4">
          <Link className="text-white capitalize hover:text-cyan-600 transition-all" href="/">home</Link>
          <Link className="text-white capitalize hover:text-cyan-600 transition-all" href="/matakuliah">mata kuliah</Link>
        </nav>
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}