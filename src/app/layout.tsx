import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { StoreInitializer } from '@/components/StoreInitializer'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'Simple Unit Converter',
    template: '%s | Simple Unit Converter',
  },
  description: 'Modern unit converter built with Next.js 15, shadcn/ui, and Zustand. Convert between different units easily.',
  keywords: [
    '단위변환기',
    'unit converter',
    '길이변환',
    '무게변환',
    '온도변환',
    'length converter',
    'weight converter',
    'temperature converter',
    'Next.js',
    'React',
  ],
  authors: [
    {
      name: 'Simple Unit Converter',
    },
  ],
  creator: 'Simple Unit Converter Team',
  openGraph: {
    type: 'website',
    url: 'https://simple-unit-converter.vercel.app',
    title: 'Simple Unit Converter',
    description: 'Modern unit converter built with Next.js 15, shadcn/ui, and Zustand',
    siteName: 'Simple Unit Converter',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simple Unit Converter',
    description: 'Modern unit converter built with Next.js 15, shadcn/ui, and Zustand',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={inter.className}>
        <StoreInitializer />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
} 