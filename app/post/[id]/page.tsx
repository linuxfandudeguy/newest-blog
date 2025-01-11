import Link from 'next/link'
import { ThemeToggle } from '../../components/ThemeToggle'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrism from 'rehype-prism-plus'

const posts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    content: `
# Getting Started with Next.js

Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. Here's a simple example of a Next.js page:

\`\`\`jsx
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is a basic Next.js page.</p>
    </div>
  )
}
\`\`\`

This creates a new Next.js page that can be accessed at the root of your application.
    `
  },
  {
    id: 2,
    title: 'Understanding Server Components',
    content: `
# Understanding Server Components

Server Components are a new feature in React and Next.js that allow you to render components on the server. Here's an example:

\`\`\`jsx
import { db } from '@/lib/db'

async function PostList() {
  const posts = await db.post.findMany()

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export default function Blog() {
  return (
    <div>
      <h1>My Blog</h1>
      <PostList />
    </div>
  )
}
\`\`\`

In this example, \`PostList\` is a Server Component that fetches data from a database and renders it. This happens on the server, reducing the amount of JavaScript sent to the client.
    `
  },
  {
    id: 3,
    title: 'Building a Blog with Next.js and Markdown',
    content: `
# Building a Blog with Next.js and Markdown

Next.js makes it easy to build a blog using Markdown files. Here's how you can render Markdown content:

\`\`\`jsx
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrism from 'rehype-prism-plus'

export default function Post({ content }) {
  return (
    <MDXRemote 
      source={content} 
      options={{
        mdxOptions: {
          rehypePlugins: [rehypePrism]
        }
      }}
    />
  )
}
\`\`\`

This example uses \`next-mdx-remote\` to render Markdown content with syntax highlighting provided by \`rehype-prism-plus\`.
    `
  }
]

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === parseInt(params.id))

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <ThemeToggle />
      </header>
      <main>
        <MDXRemote 
          source={post.content} 
          options={{
            mdxOptions: {
              rehypePlugins: [rehypePrism]
            }
          }}
        />
        <div className="mt-8">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}

