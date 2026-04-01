'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

export function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        className="w-full h-full absolute inset-0 border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <div 
      className="w-full h-full absolute inset-0 cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      <Image 
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-[var(--color-primary-base)] rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
          <Play className="w-8 h-8 text-white fill-current" />
        </div>
      </div>
    </div>
  );
}
