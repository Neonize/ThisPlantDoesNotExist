'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/app/lib/supabase'
import { Session } from '@supabase/supabase-js'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [session, setSession] = useState<Session | null>(null)
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!mounted) return null

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600 dark:text-green-400 basis-1/2 md:basis-3/4">
          This Plant Does Not Exist
        </Link>
        <nav className='grow'>
          <ul className="grid grid-cols-3 md:grid-cols-max gap-2 md:gap-4 justify-items-center">
            <li>
              <Link href="/generate" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                Generate
              </Link>
            </li>
            <li>
              <Link href="/explanation" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                How
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                About
              </Link>
            </li>
            {session ? (
              <>
                <li>
                  <Link href="/account" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                    Account
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/user/login" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/user/register" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                    Register
                  </Link>
                </li>
              </>
            )}
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
