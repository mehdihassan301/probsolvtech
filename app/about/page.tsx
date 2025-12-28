import type { Metadata } from 'next'
import AboutClient from './page.client'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about ProbSolv Tech Agency—our mission, process, and values.',
  alternates: { canonical: 'https://www.probsolvtech.agency/about' },
}

export default function Page() {
  return <AboutClient />
}
