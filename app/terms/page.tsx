import type { Metadata } from 'next'
import TermsClient from './page.client'

export const metadata: Metadata = {
  title: 'Terms of Service',
  alternates: { canonical: 'https://www.probsolvtech.agency/terms' },
}

export default function Page() {
  return <TermsClient />
}
