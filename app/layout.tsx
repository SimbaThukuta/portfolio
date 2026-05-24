import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Simbarashe Thukuta | Full Stack Software Developer',
  description: 'Professional portfolio of Simbarashe Thukuta - Full Stack Software Developer specializing in Laravel, React, and modern web technologies. Building scalable systems and elegant solutions.',
  keywords: ['Software Developer', 'Full Stack', 'Laravel', 'React', 'Web Development', 'Lilongwe', 'Malawi'],
  authors: [{ name: 'Simbarashe Thukuta' }],
  creator: 'Simbarashe Thukuta',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://simbathukuta.dev',
    title: 'Simbarashe Thukuta | Full Stack Software Developer',
    description: 'Professional portfolio showcasing modern web development projects and expertise.',
    siteName: 'Simbarashe Thukuta Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simbarashe Thukuta | Full Stack Software Developer',
    description: 'Professional portfolio showcasing modern web development projects and expertise.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
