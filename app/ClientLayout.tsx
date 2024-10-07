'use client';

import { usePathname } from 'next/navigation'
import AuthWrapper from '@/components/AuthWrapper'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/user/login' || pathname === '/user/register';

  return (
    <main className="container mx-auto px-4 py-8">
      {isAuthPage ? children : <AuthWrapper>{children}</AuthWrapper>}
    </main>
  )
}