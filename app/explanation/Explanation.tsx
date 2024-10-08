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
            Our project utilizes advanced machine learning algorithms, specifically Generative Adversarial Networks (GANs), to create images of plants that look realistic but are entirely artificial. The AI has been trained on a vast database of real plant images, learning to generate new, unique plant designs that maintain botanical plausibility while pushing the boundaries of nature&apos;s designs.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Features</h2>
          <ul className="list-disc list-inside dark:text-gray-300">
            <li>Generation of unique, AI-created plant images</li>
            <li>Flavor text generation for each plant, providing imaginative descriptions</li>
            <li>User-friendly interface for exploring generated plants (tbd.)</li>
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
