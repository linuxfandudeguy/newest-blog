import Link from 'next/link'
import { ThemeToggle } from './components/ThemeToggle'
import { getSortedPostsData } from '../lib/posts'
import { BookOpen, Calendar } from 'lucide-react'
import React from "react";

export default function Home() {
  const posts = getSortedPostsData()

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="py-8">
        <div className="flex justify-between items-center">
          <img src="/logo.png" alt="Logo" width="100" height="100"></img>
          <h1 className="text-3xl font-bold">lelbois</h1>          
         <ThemeToggle />
        </div>
      </header>
      <main>
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <BookOpen className="mr-2" size={24} />
          Latest Posts
        </h2>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <Link href={`/posts/${post.id}`} className="block hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-150 ease-in-out rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{post.title}</h3>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="mr-2" size={16} />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

