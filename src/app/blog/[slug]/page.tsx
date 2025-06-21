import { blogs } from '../../data/blog'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const post = blogs.find((b) => b.slug === params.slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | My Dynamic Website`,
    description: post.content.slice(0, 150)
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogs.find((b) => b.slug === params.slug)
  if (!post) return notFound()

  return (
    <div>
      <h1 className="text-xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
