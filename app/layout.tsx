import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WeframeTech Dashboard',
  description: 'Franchise dashboard - Pixel perfect implementation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
