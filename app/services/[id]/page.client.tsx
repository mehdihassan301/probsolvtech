'use client'

import ServiceDetailPage from '@/src/legacy/pages/ServiceDetailPage'

export default function ServiceDetailClient({ id }: { id: string }) {
  return <ServiceDetailPage id={id} />
}
