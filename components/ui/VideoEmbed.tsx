import type { VideoEmbed as VideoEmbedType } from '@/lib/data/types/portfolio';

interface VideoEmbedProps {
  video: VideoEmbedType;
  className?: string;
}

export function VideoEmbed({ video, className = '' }: VideoEmbedProps) {
  const aspectRatioClass = {
    '16:9': 'aspect-video',
    '9:16': 'aspect-[9/16]',
    '1:1': 'aspect-square',
    '4:5': 'aspect-[4/5]',
  }[video.aspectRatio || '16:9'];

  return (
    <div className={`relative w-full ${aspectRatioClass} ${className}`}>
      <iframe
        src={video.embedUrl}
        title={`${video.platform} video`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
      />
    </div>
  );
}
