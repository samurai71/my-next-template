import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/providers/theme-provider'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Next.js Theme Switcher',
  description: 'Dark/Light mode with next-themes',
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
      </body>
    </html>
  )
}
