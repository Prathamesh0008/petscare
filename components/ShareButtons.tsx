'use client';

import { useState } from 'react';

interface ShareButtonsProps {
  animal?: {
    id: string;
    name: string;
    type: string;
  };
  pageUrl?: string;
  title?: string;
}

export default function ShareButtons({ animal, pageUrl, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  
  const currentUrl = pageUrl || (animal ? `${window.location.origin}/animals/${animal.id}` : window.location.href);
  const shareTitle = title || (animal ? `Meet ${animal.name} at PawHaven!` : 'Check out PawHaven Animal Shelter');
  const shareText = animal 
    ? `I found ${animal.name}, a lovely ${animal.type} available for adoption at PawHaven Vashi!`
    : 'Help support animal welfare at PawHaven Vashi shelter';

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${currentUrl}`)}`,
    email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${shareText}\n\n${currentUrl}`)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const downloadImage = () => {
    // In a real app, this would generate/download a shareable image
    alert('Download feature coming soon!');
  };

  return (
    <div className="share-buttons">
      <div className="flex flex-wrap gap-2">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900"
          title="Share on Facebook"
        >
          <span>f</span>
          <span className="hidden sm:inline">Facebook</span>
        </a>
        
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"
          title="Share on Twitter"
        >
          <span>𝕏</span>
          <span className="hidden sm:inline">Twitter</span>
        </a>
        
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          title="Share on WhatsApp"
        >
          <span>💬</span>
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
        
        <a
          href={shareLinks.email}
          className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          title="Share via Email"
        >
          <span>✉️</span>
          <span className="hidden sm:inline">Email</span>
        </a>
        
        <button
          onClick={copyToClipboard}
          className={`flex items-center gap-2 ${copied ? 'bg-green-600' : 'bg-purple-600'} text-white px-4 py-2 rounded hover:opacity-90`}
          title="Copy link"
        >
          {copied ? '✓ Copied!' : '🔗 Copy Link'}
        </button>
        
        <button
          onClick={downloadImage}
          className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
          title="Download shareable image"
        >
          <span>📷</span>
          <span className="hidden sm:inline">Image</span>
        </button>
      </div>
      
      {copied && (
        <div className="mt-2 text-sm text-green-600">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
}