import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Navbar from '../components/Navbar'
import Colors from '../components/Colors'
import Footer from '../components/Footer'
import Cursor from '../components/Cursor'
const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
  title: {
    template: '%s | NMES',
    default: 'NMES club',
  },
  openGraph: {
    title: 'NMES club',
    description: 'Unleash Your Creativity',
    site_name : 'NMES club',
    type: 'website',
    url: 'nmes.vercel.app',
    images: 'https://nmes.vercel.app/thumbnail.jpg',
    videos: [
      'https://nmes.vercel.app/4k.mp4',
      { 
        'type': 'application/x-shockwave-flash',
        'width': '398',
        'height': '264',
      },
    ],
  },
  description: 'Unleash Your Creativity',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <meta property="og:title" content="New Mongol Entertainment System" />
        <meta property="og:site_name" content="New Mongol Entertainment System" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Шинэ монгол технологийн дээд сургуулийн нийт оюутнууддаа зориулав. NMES club болон NMIT student-union" />
        <meta property="og:url" content="nmit.club" />
        <meta name="theme-color" content="#1c1d1e"/>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any"/>
        <link rel="icon" type="image/x-icon" href="/faviconl.ico" sizes="any" media="(prefers-color-scheme: light)"/>
        <meta name="google" content="notranslate"/>
      </Head> */}
      <body className={inter.className}>
        {/* <Cursor/> */}
        <Navbar/>
        <Colors/>
        {children}
        <Footer/>
        <Analytics />
      </body>
    </html>
  )
}
