import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import FooterPage from '@/components/footer'
import Navbar from '@/components/navbar'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <FooterPage />
      </body>
    </html>
  )
}
