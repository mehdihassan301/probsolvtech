import type { Metadata } from 'next'
import ContactClient from './page.client'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start your next project with ProbSolv Tech Agency. Get in touch for a quote or consultation.',
  alternates: { canonical: 'https://www.probsolvtech.agency/contact' },
}

export default function Page() {
  return <ContactClient />
}
