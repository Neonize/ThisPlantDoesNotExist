'use client';

import Image from "next/image";

interface GeneratedImage {
  id: string;
  image_url: string;
  settings: {
    customPrompt: string;
    steps: number;
  };
  created_at: string;
}

// Static example images to showcase the app's capabilities
const staticImages: GeneratedImage[] = [
  {
    id: "1",
    image_url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=512&h=512&fit=crop&crop=center",
    settings: {
      customPrompt: "succulent with purple leaves",
      steps: 4
    },
    created_at: "2024-01-15"
  },
  {
    id: "2",
    image_url: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=512&h=512&fit=crop&crop=center",
    settings: {
      customPrompt: "tropical plant with large green leaves",
      steps: 4
    },
    created_at: "2024-01-14"
  },
  {
    id: "3",
    image_url: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=512&h=512&fit=crop&crop=center",
    settings: {
      customPrompt: "small flowering cactus",
      steps: 4
    },
    created_at: "2024-01-13"
  },
  {
    id: "4",
    image_url: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=512&h=512&fit=crop&crop=center",
    settings: {
      customPrompt: "hanging plant with trailing vines",
      steps: 4
    },
    created_at: "2024-01-12"
  },
  {
    id: "5",
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=512&h=512&fit=crop&crop=center",
    settings: {
      customPrompt: "snake plant with yellow edges",
      steps: 4
    },
    created_at: "2024-01-11"
  },
  {
    id: "6",
    image_url: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=512&h=512&fit=crop&crop=center",
    settings: {
      customPrompt: "monstera plant with split leaves",
      steps: 4
    },
    created_at: "2024-01-10"
  }
];

export default function ImageGrid() {

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
          {staticImages.map((image) => (
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
