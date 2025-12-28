import type { Metadata } from 'next'
import ServiceDetailClient from './page.client'
import { serviceDetails } from '@/src/legacy/components/constants'

type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const svc = serviceDetails.find((s) => s.id === id)
  if (!svc) {
    return {
      title: 'Service Not Found',
      alternates: { canonical: `https://www.probsolvtech.agency/services/${id}` },
    }
  }
  return {
    title: svc.title,
    description: svc.description,
    alternates: { canonical: `https://www.probsolvtech.agency/services/${svc.id}` },
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  return <ServiceDetailClient id={id} />
}
