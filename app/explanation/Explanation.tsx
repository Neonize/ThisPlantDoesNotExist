import React from 'react';

export default function Explanation() {
  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
      <div className="mt-8 space-y-8">
        <section className="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">What is This Plant Does Not Exist?</h2>
          <p className="mb-4 dark:text-gray-300">
            This Plant Does Not Exist is an innovative project that uses artificial intelligence to generate unique, non-existent plants. Inspired by projects like ThisPersonDoesNotExist, our goal is to create a fascinating exploration of botanical possibilities that don&apos;t exist in nature.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">How Does It Work?</h2>
          <p className="mb-4 dark:text-gray-300">
            Our project uses the FLUX.1-schnell model from Black Forest Labs via Together AI to generate unique, realistic plant images on demand. Simply click the "Generate" button to create a new plant image, or customize your generation with specific prompts, different step counts, and image dimensions to create exactly the plant you envision.
          </p>
          <p className="mb-4 dark:text-gray-300">
            The AI model has been trained on millions of images and can create botanically plausible plants that don&apos;t exist in nature, all rendered in a clean studio setting with professional lighting.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Features</h2>
          <ul className="list-disc list-inside dark:text-gray-300">
            <li>Instant generation of unique, AI-created plant images</li>
            <li>Customizable prompts to specify plant characteristics</li>
            <li>Adjustable generation steps for quality control</li>
            <li>Choice between square and upright image formats</li>
            <li>No account required - generate images immediately</li>
            <li>Clean, studio-lit plant photography style</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Why This Project?</h2>
          <p className="mb-4 dark:text-gray-300">
            This Plant Does Not Exist serves multiple purposes:
          </p>
          <ul className="list-disc list-inside dark:text-gray-300">
            <li>Artistic exploration of botanical forms and possibilities</li>
            <li>Educational tool for understanding AI capabilities in image generation</li>
            <li>Inspiration for botanists, artists, and designers</li>
            <li>Technological showcase of the power of GANs and machine learning</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
