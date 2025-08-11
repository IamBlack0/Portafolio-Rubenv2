import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ruben Rivera - Desarrollador de Software',
  description: 'Portafolio de Ruben Rivera - Desarrollador de software especializado en React, Next.js, React Native y tecnologías modernas.',
  keywords: ['Ruben Rivera', 'Desarrollador', 'Software', 'React', 'Next.js', 'React Native', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Ruben Rivera' }],
  creator: 'Ruben Rivera',
  publisher: 'Ruben Rivera',
  icons: {
    icon: '/icons8-portafolio.svg',
    shortcut: '/icons8-portafolio.svg',
    apple: '/icons8-portafolio.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/icons8-portafolio.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icons8-portafolio.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons8-portafolio.svg" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
