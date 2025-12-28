import type { Metadata } from 'next'
import TestimonialsClient from './page.client'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'What clients say about working with ProbSolv Tech Agency.',
  alternates: { canonical: 'https://www.probsolvtech.agency/testimonials' },
}

export default function Page() {
  return <TestimonialsClient />
}
