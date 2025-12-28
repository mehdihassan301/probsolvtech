import type { Metadata } from 'next'
import PortfolioClient from './page.client'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore recent projects and case studies from ProbSolv Tech Agency.',
  alternates: { canonical: 'https://www.probsolvtech.agency/portfolio' },
}

export default function Page() {
  return <PortfolioClient />
}
