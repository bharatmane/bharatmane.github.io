import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cursor from '@/components/ui/Cursor'
import ScrollProgress from '@/components/ui/ScrollProgress'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bharat Mane — Software Craftsman',
  description:
    'Software craftsman, runner, photographer. I write code the way a craftsman makes furniture — carefully, for people, built to outlast the trend.',
  openGraph: {
    title: 'Bharat Mane — Software Craftsman',
    description: 'Writing code the way a craftsman makes furniture — carefully, for people, built to outlast the trend.',
    type: 'website',
    url: 'https://bharatmane.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="relative">
        <ScrollProgress />
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
