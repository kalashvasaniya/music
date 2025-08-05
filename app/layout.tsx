import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kalash Vasaniya | Mojo Player',
  description: 'Listen to the latest tracks from Kalash Vasaniya. Enjoy high-quality music streaming with our modern music player.',
  keywords: 'music, player, kalash vasaniya, streaming, audio, songs',
  authors: [{ name: 'Kalash Vasaniya' }],
  creator: 'Kalash Vasaniya',
  publisher: 'Kalash Vasaniya',
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
    title: 'Kalash Vasaniya | Mojo Player',
    description: 'Listen to the latest tracks from Kalash Vasaniya. Enjoy high-quality music streaming with our modern music player.',
    url: 'https://your-domain.com',
    siteName: 'Mojo Player',
    images: [
      {
        url: '/img/uv.jpg',
        width: 1200,
        height: 630,
        alt: 'Mojo Player Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalash Vasaniya | Mojo Player',
    description: 'Listen to the latest tracks from Kalash Vasaniya. Enjoy high-quality music streaming with our modern music player.',
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
        
        {/* Tawk.to Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function(){
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/61876df16885f60a50baa9fa/1fjsgaul6';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 