'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { VideoEmbed as VideoEmbedType } from '@/lib/data/types/portfolio';

interface VideoEmbedProps {
  video: VideoEmbedType;
  className?: string;
}

export function VideoEmbed({ video, className = '' }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const aspectRatioClass = {
    '16:9': 'aspect-video',
    '9:16': 'aspect-[9/16]',
    '1:1': 'aspect-square',
    '4:5': 'aspect-[4/5]',
  }[video.aspectRatio || '16:9'];
  const thumbnail = video.thumbnail?.src || (video.platform === 'youtube' && video.videoId
    ? `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`
    : null);

  return (
    <div className={`relative w-full ${aspectRatioClass} ${className}`}>
      {thumbnail && !isPlaying ? (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label="Reproducir video"
          className="group absolute inset-0 w-full overflow-hidden bg-[var(--gaia-burgundy)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gaia-pink)]"
        >
          <Image
            src={thumbnail}
            alt=""
            fill
            unoptimized={thumbnail.startsWith('https://i.ytimg.com/')}
            sizes="(max-width: 767px) 65vw, (max-width: 1023px) 33vw, 25vw"
            className="object-cover opacity-85 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-[var(--gaia-burgundy)]/25">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gaia-pink)] text-[var(--gaia-burgundy)] shadow-lg transition-transform group-hover:scale-110">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current"><path d="m7 4 13 8-13 8V4Z" /></svg>
            </span>
          </span>
        </button>
      ) : (
        <iframe
          src={isPlaying ? `${video.embedUrl}${video.embedUrl.includes('?') ? '&' : '?'}autoplay=1` : video.embedUrl}
          title={`${video.platform} video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
          loading={isPlaying ? 'eager' : 'lazy'}
        />
      )}
    </div>
  );
}
