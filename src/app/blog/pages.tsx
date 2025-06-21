import Link from 'next/link'
import { blogs } from '../data/blog'

export const metadata = {
  title: 'Blog | My Dynamic Website',
  description: 'List of our latest blog posts',
}

export default function BlogListPage() {
  return (
    <div>
      <h1 className="text-xl font-bold">Blog</h1>
      <ul>
        {blogs.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
