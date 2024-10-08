'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/app/lib/supabase';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/account');
      router.refresh(); // This will trigger a re-render of the entire app, including the Header
    }
  };

  return (
    <div className="grid grid-cols-1 body-font container px-5 py-24 mx-auto gap-4">
      <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-8 mx-auto justify-center rounded-lg flex flex-col mt-10 md:mt-0">
        <h1 className="text-center sm:text-3xl text-2xl font-medium title-font mb-12 text-gray-900 dark:text-white">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="flex lg:w-2/3 w-full flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          {error && <p className="text-red-500 dark:text-red-400 text-sm mb-4 w-full">{error}</p>}
          <div className="relative flex-grow w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white dark:bg-gray-700 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative flex-grow w-full">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600 dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white dark:bg-gray-700 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <button type="submit" className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Login
          </button>
        </form>
      </div>
      <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-8 mx-auto justify-center rounded-lg flex flex-col w-full mt-10 md:mt-0">
        <p className="text-gray-900 dark:text-white">Don&apos;t have an account? <Link href="/user/register" className="text-green-500 hover:text-green-600">Sign up instead</Link></p>
      </div>
    </div>
  );
}
