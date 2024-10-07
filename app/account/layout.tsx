'use client';

import AuthWrapper from '@/components/AuthWrapper';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthWrapper>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </AuthWrapper>
  );
}