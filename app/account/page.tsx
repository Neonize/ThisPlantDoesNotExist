'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/app/lib/supabase';

export default function AccountPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Account</h1>
      <div className="space-y-2">
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">User ID:</span> {user.id}
        </p>
      </div>
    </div>
  );
}
