import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mountain Mixology',
  description: 'The best cocktail catering service',
}

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    <>
      <Navbar />
      <body className={inter.className}>{children}</body>
    </>
      // <Navbar />
      // <body className={inter.className}>{children}</body>
    // </html>
  )
}
