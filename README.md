# Mojo Player - Next.js Music Player

A modern, responsive music player built with Next.js 14, TypeScript, and React. Features a beautiful UI with smooth animations and proper SEO optimization.

## Features

- 🎵 **Music Player**: Full-featured audio player with play/pause, next/previous controls
- 📱 **Responsive Design**: Optimized for both desktop and mobile devices
- ⚡ **Next.js 14**: Built with the latest Next.js features including App Router
- 🔍 **SEO Optimized**: Complete SEO setup with meta tags, Open Graph, and Twitter Cards
- 🎨 **Modern UI**: Beautiful animations and hover effects
- 📊 **Analytics**: Google Analytics integration
- 💬 **Live Chat**: Tawk.to integration for customer support
- 🚀 **Performance**: Optimized for fast loading and smooth playback

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS3 with responsive design
- **Icons**: Font Awesome
- **SEO**: next-seo package
- **Analytics**: Google Analytics
- **Chat**: Tawk.to

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mojo-player
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main music player component
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # SEO sitemap
│   ├── robots.ts           # SEO robots.txt
│   └── manifest.ts         # PWA manifest
├── public/
│   ├── music/              # Audio files
│   └── img/                # Images and icons
├── package.json
├── next.config.js
└── tsconfig.json
```

## SEO Features

- **Meta Tags**: Complete meta tag setup for search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: JSON-LD for rich snippets

## Customization

### Adding New Songs

1. Add your audio files to the `public/music/` directory
2. Update the `songs` array in `app/page.tsx`:

```typescript
const songs: Song[] = [
  { title: 'Your Song Title', src: '/music/your-song.mp3', cover: '/img/your-cover.jpg' },
  // ... more songs
]
```

### Styling

The main styles are in `app/globals.css`. The design is responsive with:
- Desktop layout for screens ≥600px
- Mobile layout for screens <600px
- Smooth animations and transitions

### Analytics

Google Analytics is configured in `app/layout.tsx`. Update the tracking ID:
```typescript
gtag('config', 'YOUR-GA-TRACKING-ID');
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **Static Generation**: Pre-rendered pages for better SEO
- **Bundle Analysis**: Built-in bundle analyzer

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Author

**Kalash Vasaniya**
- Website: [your-domain.com](https://your-domain.com)
- Email: [your-email@example.com](mailto:your-email@example.com)

---

Made with ❤️ using Next.js
