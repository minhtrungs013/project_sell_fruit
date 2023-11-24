import ModalProvider from '@/providers/modal-provider'
import { ToasterProvicer } from '@/providers/toast-provider'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'sell fruit admim',
  description: 'sell fruit admim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvicer/>
          <ModalProvider/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
