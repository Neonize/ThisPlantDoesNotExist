import React from 'react';

export default function Explanation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explanation</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is This Plant Does Not Exist?</h2>
        <p className="mb-4">
          This Plant Does Not Exist is an innovative project that uses artificial intelligence to generate unique, non-existent plants. Inspired by projects like ThisPersonDoesNotExist, our goal is to create a fascinating exploration of botanical possibilities that don&apos;t exist in nature.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How Does It Work?</h2>
        <p className="mb-4">
          Our project utilizes advanced machine learning algorithms, specifically Generative Adversarial Networks (GANs), to create images of plants that look realistic but are entirely artificial. The AI has been trained on a vast database of real plant images, learning to generate new, unique plant designs that maintain botanical plausibility while pushing the boundaries of nature&apos;s designs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside">
          <li>Generation of unique, AI-created plant images</li>
          <li>Flavor text generation for each plant, providing imaginative descriptions</li>
          <li>User-friendly interface for exploring generated plants (tbd.)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Why This Project?</h2>
        <p className="mb-4">
          This Plant Does Not Exist serves multiple purposes:
        </p>
        <ul className="list-disc list-inside">
          <li>Artistic exploration of botanical forms and possibilities</li>
          <li>Educational tool for understanding AI capabilities in image generation</li>
          <li>Inspiration for botanists, artists, and designers</li>
          <li>Technological showcase of the power of GANs and machine learning</li>
        </ul>
      </section>
    </div>
  );
}
