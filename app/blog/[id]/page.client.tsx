'use client'

import BlogPostPage from '@/src/legacy/pages/BlogPostPage'

export default function BlogPostClient({ id }: { id: string }) {
  return <BlogPostPage id={id} />
}
