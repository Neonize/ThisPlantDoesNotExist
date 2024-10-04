'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600 dark:text-green-400">
          This Plant Does Not Exist
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/generate" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                Generate
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                About
              </Link>
            </li>
            <li>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
