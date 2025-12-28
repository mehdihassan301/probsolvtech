import type { Metadata } from 'next'
import PricingClient from './page.client'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for websites, apps, and AI automations—choose the plan that fits your goals.',
  alternates: { canonical: 'https://www.probsolvtech.agency/pricing' },
}

export default function Page() {
  return <PricingClient />
}
