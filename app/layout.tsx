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
        <div className="flex items-center justify-center">
      <a href="/rss">
        <img 
          src="/rss-svgrepo-com.png" 
          alt="RSS Icon" 
          className="w-16 h-16 rounded-lg" // Tailwind styles
        />
      </a> 
    </div>   
  </body>
    </html>
  )
}

