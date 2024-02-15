import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import UIProvider from './ui-provider'
import PageAnimatePresence from '@/HOC/PageAnimatePresence'
import HeaderSection from '@/components/header-section'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home | Diaz Linggaputra',
  description:
    'This Personal Portfolio that you are currently seeing right now. I craft with purpose.',
  authors: [{ name: 'Diaz Linggaputra' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UIProvider>
          <HeaderSection />
          <PageAnimatePresence>{children}</PageAnimatePresence>
        </UIProvider>
      </body>
    </html>
  )
}
