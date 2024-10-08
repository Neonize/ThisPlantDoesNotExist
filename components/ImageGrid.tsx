'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import { supabase } from '@/app/lib/supabase';

interface GeneratedImage {
  id: string;
  image_url: string;
  settings: {
    customPrompt: string;
    steps: number;
    isSquare: boolean;
  };
  created_at: string;
}

export default function ImageGrid() {
  const [publicImages, setPublicImages] = useState<GeneratedImage[]>([]);

  useEffect(() => {
    const fetchPublicImages = async () => {
      const { data, error } = await supabase
        .from('generated_images')
        .select('*')
        .eq('is_public', true)
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) {
        console.error('Error fetching public images:', error);
      } else {
        setPublicImages(data as GeneratedImage[]);
      }
    };

    fetchPublicImages();
  }, []);

  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl lg:text-5xl md:text-4xl text-center">
            Recent generations
          </h1>
          <p className="my-4 max-w-xl text-sm lg:text-lg md:text-base text-center">
            Here are some impressions of the last generated plants
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
          {publicImages.map((image) => (
            <div
              key={image.id}
              className="flex flex-col items-center justify-center max-w-sm p-4 rounded-lg shadow-md bg-gray-100 dark:bg-gray-900"
            >
              <Image
                className="w-full h-64 bg-gray-300 dark:bg-gray-700 object-cover rounded-lg shadow"
                src={image.image_url}
                alt="Generated plant"
                height={512}
                width={512}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
              <div className="w-full text-center overflow-hidden py-2">
                <p className="px-3 text-base">
                  Prompt: {image.settings.customPrompt || 'Default prompt'}
                </p>
                {image.settings.steps && (
                  <p className="px-3 text-base">
                    Steps: {image.settings.steps}
                  </p>)}
                <p className="px-3 text-base">
                  Created: {new Date(image.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
