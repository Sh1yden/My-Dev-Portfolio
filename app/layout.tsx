import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Kirill (Shayden) — Python Backend Developer',
  description:
    'Portfolio of Kirill (Shayden) — Python Backend Developer. High-performance async APIs, database optimization, network tunnels, and clean production-ready code.',
  generator: 'v0.app',
  keywords: ['Python', 'FastAPI', 'Backend Developer', 'PostgreSQL', 'asyncio', 'Cloudflare'],
  authors: [{ name: 'Kirill (Shayden)' }],
  icons: {
    icon: [
      { url: '/icon-dark-32x32.png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1F1F28',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
