'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface ImageUploaderProps {
  onImagesChange: (images: string[]) => void;
  maxImages?: number;
}

export default function ImageUploader({ onImagesChange, maxImages = 10 }: ImageUploaderProps) {
  const [images, setImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    if (files.length + images.length > maxImages) {
      alert(`Maximum ${maxImages} images allowed`);
      return;
    }

    setUploading(true);

    // In a real app, you would upload to cloud storage here
    // For demo, we'll create object URLs
    const newImages = await Promise.all(
      files.map(async (file) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.readAsDataURL(file);
        });
      })
    );

    const updatedImages = [...images, ...newImages];
    setImages(updatedImages);
    onImagesChange(updatedImages);
    setUploading(false);
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onImagesChange(updatedImages);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-medium">Upload Images</h4>
          <p className="text-sm text-gray-600">
            {images.length}/{maxImages} images uploaded
          </p>
        </div>
        <button
          type="button"
          onClick={triggerFileInput}
          disabled={uploading || images.length >= maxImages}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Add Images'}
        </button>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square group">
              <Image
                src={image}
                alt={`Upload ${index + 1}`}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-red-600 text-white w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                title="Remove image"
              >
                ×
              </button>
              <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">📷</div>
        <p className="text-gray-600 mb-2">
          Drag and drop images here, or click to browse
        </p>
        <p className="text-sm text-gray-500">
          JPG, PNG, or WebP. Max 5MB each.
        </p>
        <button
          type="button"
          onClick={triggerFileInput}
          className="mt-4 text-blue-600 hover:underline"
        >
          Select Files
        </button>
      </div>
    </div>
  );
}