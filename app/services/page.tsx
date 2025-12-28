import type { Metadata } from 'next'
import ServicesClient from './page.client'

export const metadata: Metadata = {
  title: 'Services',
  description: 'High-performance web development, AI automations, and digital solutions tailored to grow your business.',
  alternates: { canonical: 'https://www.probsolvtech.agency/services' },
}

export default function Page() {
  return <ServicesClient />
}
