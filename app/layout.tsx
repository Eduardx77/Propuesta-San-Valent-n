import type { Metadata } from 'next'
import { Dancing_Script, Quicksand } from 'next/font/google'

import './globals.css'

const _dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-serif',
})
const _quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'San Valentin',
  description: 'Una propuesta especial para ti',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_dancingScript.variable} ${_quicksand.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
