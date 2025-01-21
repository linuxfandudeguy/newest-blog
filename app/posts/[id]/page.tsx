import Link from 'next/link';
import { ThemeToggle } from '../../components/ThemeToggle';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrism from 'rehype-prism-plus';
import { getPostData } from '../../../lib/posts';
import { ArrowLeft, Calendar } from 'lucide-react';

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="py-8">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          <ThemeToggle />
        </div>
        <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Calendar className="mr-2" size={16} />
          <time dateTime={postData.date}>{postData.date}</time>
        </div>
      </header>
      <main className="prose dark:prose-invert max-w-none">
        <MDXRemote
          source={postData.content}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypePrism, { ignoreMissing: true }]],
            },
          }}
        />
        {/* Utterances Comments Section */}
        <div id="comments-section">
          <script
            src="https://utteranc.es/client.js"
            repo="linuxfandudeguy/newest-blog" /* Replace with your GitHub repo */
            issue-term="url"
            label="comments"
            theme="photon-dark"
            crossOrigin="anonymous"
            async
          ></script>
        </div>
      </main>
    </div>
  );
}
