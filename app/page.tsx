import type { Metadata } from 'next'
import HomeClient from './page.client'

export const metadata: Metadata = {
  title: 'Home',
  description:
    "ProbSolv Tech Agency crafts high-performance websites, custom 'vibe coding' apps, and intelligent AI automations to scale your business.",
  alternates: { canonical: 'https://www.probsolvtech.agency/' },
}

export default function Page() {
  return <HomeClient />
}
