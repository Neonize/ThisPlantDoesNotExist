'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

async function generateImage(): Promise<string> {
  const response = await fetch('/api/generate', {
    method: 'POST',
  });
  if (!response.ok) {
    throw new Error('Failed to generate image');
  }
  const data = await response.json();
  return data.imageUrl;
}

export default function Generate() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const url = await generateImage();
      setImageUrl(url);
    } catch (err) {
      setError('Error generating image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Generated Plant Image</h1>
      <div className="relative w-96 h-96 rounded-lg overflow-hidden shadow-lg bg-white">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        ) : error ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-red-500 text-xl text-center px-4">{error}</p>
          </div>
        ) : imageUrl ? (
          <Image src={imageUrl} alt="Generated plant" layout="fill" objectFit="cover" />
        ) : null}
      </div>
      <button
        onClick={handleGenerate}
        className="mt-8 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-400"
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate New Image'}
      </button>
    </div>
  );
}
