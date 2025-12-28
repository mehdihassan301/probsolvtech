import type { Metadata } from 'next'
import PrivacyClient from './page.client'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  alternates: { canonical: 'https://www.probsolvtech.agency/privacy' },
}

export default function Page() {
  return <PrivacyClient />
}
