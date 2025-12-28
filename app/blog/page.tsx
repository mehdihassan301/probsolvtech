import type { Metadata } from 'next'
import BlogClient from './page.client'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on web development, automation, AI, and growth—by ProbSolv Tech Agency.',
  alternates: { canonical: 'https://www.probsolvtech.agency/blog' },
}

export default function Page() {
  return <BlogClient />
}
