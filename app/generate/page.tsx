'use client';

import { useState, useEffect } from 'react';
import Image from "next/legacy/image";

async function generateImage(customPrompt: string, steps: number, isSquare: boolean): Promise<string> {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ customPrompt, steps, isSquare }),
  });
  if (!response.ok) {
    throw new Error('Failed to generate image');
  }
  const data = await response.json();
  return data.imageUrl;
}

export default function Generate() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCustomOptions, setShowCustomOptions] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [steps, setSteps] = useState(4);
  const [isSquare, setIsSquare] = useState(true);

  useEffect(() => {
    if (window.location.hash === '#custom') {
      setShowCustomOptions(true);
    }
  }, []);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const url = await generateImage(customPrompt, steps, isSquare);
      setImageUrl(url);
    } catch (err) {
      setError('Error generating image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
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
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500 text-xl text-center px-4">Click "Generate New Image" to create a plant image</p>
          </div>
        )}
      </div>
      <button
        onClick={() => setShowCustomOptions(!showCustomOptions)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        {showCustomOptions ? 'Hide Custom Options' : 'Show Custom Options'}
      </button>
      {showCustomOptions && (
        <div className="mt-4 w-full max-w-md bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <label htmlFor="customPrompt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Custom Prompt:
          </label>
          <input
            id="customPrompt"
            type="text"
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            placeholder="Add custom details to the prompt"
            className="w-full px-3 py-2 border rounded-lg mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <div className="flex items-center mb-4">
            <label className="mr-2 text-sm font-medium text-gray-700 dark:text-gray-300">Steps:</label>
            <input
              type="range"
              min="1"
              max="8"
              value={steps}
              onChange={(e) => setSteps(Number(e.target.value))}
              className="w-full"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">{steps}</span>
          </div>
          <div className="flex items-center">
            <label className="mr-2 text-sm font-medium text-gray-700 dark:text-gray-300">Image Shape:</label>
            <button
              onClick={() => setIsSquare(true)}
              className={`px-3 py-1 rounded-l-lg ${isSquare ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-600'}`}
            >
              Square
            </button>
            <button
              onClick={() => setIsSquare(false)}
              className={`px-3 py-1 rounded-r-lg ${!isSquare ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-600'}`}
            >
              Upright
            </button>
          </div>
        </div>
      )}
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
