import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Valeria Hub',
  description: 'Valeria Games Community Fansite - Mobile Game - TCG - Manga - Web3 - NFT',
  image: "/assets/manga/poster/poster.jpg",
  websiteUrl: 'https://www.valeriahub.com'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.websiteUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
