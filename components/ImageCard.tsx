import React from 'react';

interface ImageCardProps {
  imageUrl: string;
  customPrompt?: string;
  steps?: number;
  createdAt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, customPrompt, steps, createdAt }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt="Generated Plant" className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span className="font-semibold">Prompt:</span> {customPrompt || 'Default prompt'}
        </p>
        {steps && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span className="font-semibold">Steps:</span> {steps}
          </p>)}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Created: {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;