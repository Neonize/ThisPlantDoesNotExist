'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/app/lib/supabase';
import ImageCard from '@/components/ImageCard';

interface GeneratedImage {
  id: string;
  image_url: string;
  settings?: {
    customPrompt: string;
    steps: number;
  };
  created_at: string;
}

export default function AccountPage() {
  const [user, setUser] = useState<any>(null);
  const [images, setImages] = useState<GeneratedImage[]>([]);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data, error } = await supabase
          .from('generated_images')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching images:', error);
        } else {
          setImages(data as GeneratedImage[]);
        }
      }
    };

    getUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Account</h1>
      <div className="space-y-2 mb-6">
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">User ID:</span> {user.id}
        </p>
      </div>

      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Your Generated Images</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            imageUrl={image.image_url}
            customPrompt={image.settings?.customPrompt}
            steps={image.settings?.steps}
            createdAt={image.created_at}
          />
        ))}
      </div>
    </div>
  );
}
