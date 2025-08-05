import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mojo Player - Kalash Vasaniya',
    short_name: 'Mojo Player',
    description: 'Listen to the latest tracks from Kalash Vasaniya',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/img/images.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
} 