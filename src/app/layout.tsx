import type { Metadata } from 'next'
import { Inter, Unbounded } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VexVor — The Civilizational Forge',
  description:
    'VexVor is the world\'s first civilizational forge — a sovereign ecosystem where character is the primary asset class. Join the Redeemers.',
  keywords: ['VexVor', 'civilizational forge', 'Prestance Economy', 'character development', 'sovereign individual'],
  openGraph: {
    title: 'VexVor — The Civilizational Forge',
    description: 'Where character is the primary asset class.',
    type: 'website',
    siteName: 'VexVor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VexVor — The Civilizational Forge',
    description: 'Where character is the primary asset class.',
  },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#D4AF37',
          colorBackground: '#1A1B1F',
          colorText: '#FAFAF7',
          colorTextSecondary: '#C4C4C0',
          colorInputBackground: '#141518',
          colorInputText: '#FAFAF7',
          borderRadius: '2px',
          fontFamily: 'var(--font-inter)',
        },
      }}
    >
      <html lang="en" className={`${inter.variable} ${unbounded.variable}`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
