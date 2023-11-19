import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar'
import Penultimate from '@/Components/Penultimate '
import Footer from '@/Components/Footer'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'SnappyCx',
  description: 'SnappyCx',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Penultimate />
        <Footer />
      </body>
    </html>
  )
}
