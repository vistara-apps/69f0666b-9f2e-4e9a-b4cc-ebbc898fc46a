import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CryptoGoal - Automate Your Crypto Savings',
  description: 'Automate your crypto savings, visualize your progress, and earn yield effortlessly.',
  keywords: ['crypto', 'savings', 'DeFi', 'Base', 'yield', 'automation'],
  authors: [{ name: 'CryptoGoal Team' }],
  openGraph: {
    title: 'CryptoGoal - Automate Your Crypto Savings',
    description: 'Automate your crypto savings, visualize your progress, and earn yield effortlessly.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryptoGoal - Automate Your Crypto Savings',
    description: 'Automate your crypto savings, visualize your progress, and earn yield effortlessly.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
