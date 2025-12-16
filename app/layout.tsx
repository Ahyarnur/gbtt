import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahyar Nur Ichwan - Cybersecurity & Frontend Developer',
  description: 'Portfolio of Ahyar Nur Ichwan - Cybersecurity Engineering student and Frontend Developer specializing in modern web technologies.',
  keywords: ['Cybersecurity', 'Frontend Developer', 'React', 'Next.js', 'Web Development', 'UI/UX'],
  authors: [{ name: 'Ahyar Nur Ichwan' }],
  openGraph: {
    title: 'Ahyar Nur Ichwan - Cybersecurity & Frontend Developer',
    description: 'Portfolio of Ahyar Nur Ichwan - Cybersecurity Engineering student and Frontend Developer.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
