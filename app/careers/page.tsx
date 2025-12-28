import type { Metadata } from 'next'
import CareersClient from './page.client'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join ProbSolv Tech Agency—see open roles and collaborate on impactful web and AI work.',
  alternates: { canonical: 'https://www.probsolvtech.agency/careers' },
}

export default function Page() {
  return <CareersClient />
}
