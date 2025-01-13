import { NextResponse } from 'next/server';
import { getSortedPostsData } from '@/lib/posts'; // Adjust the path if necessary

// Helper function to escape special characters for XML
function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, (char) => {
    switch (char) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return char;
    }
  });
}

export async function GET() {
  // Get the sorted posts data
  const posts = getSortedPostsData();

  // Generate the RSS feed XML with escaped characters
  const feed = `
    <rss version="2.0">
      <channel>
        <title>Blog Name</title>
        <link>https://lelboi.vercel.app</link>
        <description>blog description</description>
        ${posts
          .map(
            (post) => `
          <item>
            <title>${escapeXml(post.title)}</title>
            <link>https://lelboi.vercel.app/posts/${post.id}</link>
            <description>${escapeXml(post.title)}</description>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          </item>
        `
          )
          .join('')}
      </channel>
    </rss>
  `;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=UTF-8',
    },
  });
}
