import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'lelbois',
  description: 'my blog ig',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <Providers>{children}</Providers>
    <div>
  <a href="/rss">
    <img 
      src="/rss-svgrepo-com.svg" 
      alt="RSS Icon" 
      width="64" 
      height="64" 
      class="rounded-lg"
    />
  </a>
</div>
<a href="https://info.flagcounter.com/qAI6">
        <img
          src="https://s05.flagcounter.com/map/qAI6/size_s/txt_000000/border_CCCCCC/pageviews_0/viewers_0/flags_0/"
          alt="Flag Counter"
          style={{ border: '0' }}
        />
      </a>  
  </body>
    </html>
  )
}

