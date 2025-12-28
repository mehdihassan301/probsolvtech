import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Montserrat, Poppins } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'], display: 'swap', variable: '--font-poppins' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['700', '800', '900'], display: 'swap', variable: '--font-montserrat' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.probsolvtech.agency'),
  title: {
    default: 'ProbSolv Tech Agency — AI Automation & Web Apps',
    template: 'ProbSolv Tech Agency — %s',
  },
  description:
    "ProbSolv Tech Agency crafts high-performance websites, custom 'vibe coding' apps, and intelligent AI automations to scale your business.",
  openGraph: {
    type: 'website',
    url: 'https://www.probsolvtech.agency/',
    siteName: 'ProbSolv Tech Agency',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ProbSolv Tech Agency - Web & AI Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://www.probsolvtech.agency/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}>
      <body>
        {/* Google Analytics (kept from the existing site) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DJL6WRLG5Y"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-DJL6WRLG5Y');`}
        </Script>

        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
