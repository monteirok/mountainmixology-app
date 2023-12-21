import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mountain Mixology',
  description: 'The best cocktail catering service',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <main className='p-5 m-3'>
            {children}
          </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
