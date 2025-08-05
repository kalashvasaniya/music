import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'College',
  description: 'Listen to the latest tracks. Enjoy high-quality music streaming with our modern music player.',
  keywords: 'music, player, streaming, audio, songs',
  authors: [{ name: 'College' }],
  creator: 'College',
  publisher: 'College',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'College',
    description: 'Listen to the latest tracks. Enjoy high-quality music streaming with our modern music player.',
    url: 'https://your-domain.com',
    siteName: 'College',
    images: [
      {
        url: '/img/uv.jpg',
        width: 1200,
        height: 630,
        alt: 'College Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'College',
    description: 'Listen to the latest tracks. Enjoy high-quality music streaming with our modern music player.',
    images: ['/img/uv.jpg'],
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
  verification: {
    google: 'G-FJKSXYNMLD',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/img/images.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FJKSXYNMLD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FJKSXYNMLD');
            `,
          }}
        />
        

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 