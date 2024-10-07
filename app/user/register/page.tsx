'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Why from './why';
import Link from 'next/link';
import { supabase } from '@/app/lib/supabase';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // Redirect to login page after successful registration
      router.push('/user/login');
      router.refresh(); // This will trigger a re-render of the entire app, including the Header
    }
  };

  return (
    <>
      <div className="p-12 flex justify-center items-center">
        <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-8 justify-center rounded-lg flex flex-col w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 dark:text-white text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 dark:text-red-400 text-sm mb-4">{error}</p>}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600 dark:text-gray-400">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <button type="submit" className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
              Register
            </button>
          </form>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Already have an account? <Link href="/user/login" className="text-green-500 hover:text-green-600">Login instead</Link>
          </p>
        </div>
      </div>
      <Why />
    </>
  );
}
