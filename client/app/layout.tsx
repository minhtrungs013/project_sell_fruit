import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import FooterPage from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import { ToasterProvicer } from '@/providers/toast-provider'

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
        <ModalProvider />
        <ToasterProvicer />
        <Navbar />
        {children}
        <FooterPage />
      </body>
    </html>
  )
}
