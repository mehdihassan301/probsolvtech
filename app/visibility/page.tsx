import type { Metadata } from 'next'
import VisibilityClient from './page.client'

export const metadata: Metadata = {
  title: 'Visibility',
  description: 'Visibility, performance, and measurement approach for growth-focused web experiences.',
  alternates: { canonical: 'https://www.probsolvtech.agency/visibility' },
}

export default function Page() {
  return <VisibilityClient />
}
