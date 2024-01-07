import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import './globals.css'

export const metadata = {
  title: 'e-commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
