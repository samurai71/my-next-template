import type { Metadata } from 'next'

// import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/providers/theme-provider'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Nextjs Template',
    default: 'Nextjs Template', // a default is required when creating a template
  },
  description: 'A Basic nextjs template to get you started quickly.',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
