'use client'

import ProjectBriefPage from '@/src/legacy/pages/ProjectBriefPage'

export default function BriefClient({ plan }: { plan?: string }) {
  return <ProjectBriefPage plan={plan} />
}
