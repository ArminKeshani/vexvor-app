import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vexvor.com'),
  title: {
    default: 'VexVor — A Standard Against the Vortex',
    template: '%s · VexVor',
  },
  description:
    'VexVor is a sovereign civilization project — a structured response to the Sovereign Void. We build verifiable character through Proof-of-Prestance. Stiftung in formation. A Kiyasha Group company.',
  keywords: [
    'VexVor',
    'Prestance',
    'Sovereign Civilization',
    'Proof of Prestance',
    'Character Economy',
    'Swiss Stiftung',
    'Aethel Canon',
    'Being Before Having',
    'Kiyasha Group',
  ],
  authors: [{ name: 'VexVor Foundation (in formation)' }],
  alternates: { canonical: 'https://www.vexvor.com' },
  openGraph: {
    title: 'VexVor — A Standard Against the Vortex',
    description:
      'A structured response to the Sovereign Void. Engineering verifiable character into economic capital. Phase I: 1,000 Founding Members.',
    url: 'https://www.vexvor.com',
    type: 'website',
    siteName: 'VexVor',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VexVor — A Standard Against the Vortex',
    description: 'A sovereign civilization project. Being Before Having.',
  },
  robots: { index: true, follow: true },
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
          colorPrimary: '#C9A24A',
          colorBackground: '#060608',
          colorText: '#FAFAF7',
          colorTextSecondary: '#95959A',
          colorInputBackground: '#0B0B0E',
          colorInputText: '#FAFAF7',
          borderRadius: '2px',
          fontFamily: 'var(--font-inter)',
        },
      }}
    >
      <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
        <body>
          <a href="#main" className="skip-link">Skip to main content</a>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
