import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Elias "Kideo" Mokwana | Official Website',
  description: 'Official website of Elias "Kideo" Mokwana - South African footballer, right winger for Al-Hazem FC and Bafana Bafana. The first SA player with a personal website.',
  keywords: 'Elias Mokwana, Kideo, South African footballer, Bafana Bafana, Al-Hazem, Sekhukhune United, Esperance, PSL',
  authors: [{ name: 'Thabo is Innocent' }],
  openGraph: {
    title: 'Elias "Kideo" Mokwana | Official Website',
    description: 'Official website of South African football star Elias "Kideo" Mokwana',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}