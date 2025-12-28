import type { Metadata } from 'next'
import BlogPostClient from './page.client'
import { blogPosts } from '@/src/legacy/components/constants'

type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === id)
  if (!post) {
    return {
      title: 'Post Not Found',
      alternates: { canonical: `https://www.probsolvtech.agency/blog/${id}` },
    }
  }
  const canonical = `https://www.probsolvtech.agency/blog/${post.id}`
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      url: canonical,
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image.startsWith('http') ? post.image : `https://www.probsolvtech.agency${post.image}` }],
    },
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  return <BlogPostClient id={id} />
}
