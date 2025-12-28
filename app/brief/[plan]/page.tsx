import type { Metadata } from 'next'
import BriefClient from './page.client'

export const metadata: Metadata = {
  title: 'Project Brief',
  description: 'Tell us about your project so we can recommend the best next steps.',
}

type PageProps = {
  params: Promise<{ plan: string }>
}

export default async function Page({ params }: PageProps) {
  const { plan } = await params
  return <BriefClient plan={decodeURIComponent(plan)} />
}
