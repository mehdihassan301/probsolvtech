import type { Metadata } from 'next'
import CaseStudyClient from './page.client'
import { portfolioItems } from '@/src/legacy/components/constants'

type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const item = portfolioItems.find((p) => p.id === id)
  if (!item) {
    return {
      title: 'Case Study Not Found',
      alternates: { canonical: `https://www.probsolvtech.agency/portfolio/${id}` },
    }
  }
  return {
    title: `${item.title} Case Study`,
    description: item.challenge,
    alternates: { canonical: `https://www.probsolvtech.agency/portfolio/${item.id}` },
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  return <CaseStudyClient id={id} />
}
