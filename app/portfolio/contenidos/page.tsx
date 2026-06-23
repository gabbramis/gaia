import { ContenidosClientPage } from './ContenidosClientPage';
import { sanityClient } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { contentItemsQuery, contentNichesQuery } from '@/sanity/lib/queries';
import { fotos, reels } from '@/lib/data/portfolio';
import type { FotoItem, ReelItem } from '@/lib/data/types/portfolio';

export const revalidate = 60;

type SanityImage = {
  alt?: string;
  asset?: {
    _ref: string;
    _type: 'reference';
  };
};

type SanityContentItem = {
  _id: string;
  client?: {
    name: string;
    slug: string;
  };
  contentType: 'photo' | 'reel';
  image?: SanityImage;
  youtubeUrl?: string;
  aspectRatio?: '16:9' | '9:16' | '1:1' | '4:5';
  featured: boolean;
  publishedAt: string;
  niche?: {
    title: string;
    slug: string;
  };
};

type SanityContentNiche = {
  title: string;
};

function getYouTubeVideoId(url: string) {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname.includes('youtu.be')) {
      return parsedUrl.pathname.replace('/', '');
    }

    if (parsedUrl.searchParams.get('v')) {
      return parsedUrl.searchParams.get('v');
    }

    const segments = parsedUrl.pathname.split('/');
    const embedIndex = segments.findIndex((segment) => segment === 'embed');
    return embedIndex >= 0 ? segments[embedIndex + 1] : null;
  } catch {
    return null;
  }
}

async function getSanityContent() {
  const [items, niches] = await Promise.all([
    sanityClient.fetch<SanityContentItem[]>(contentItemsQuery),
    sanityClient.fetch<SanityContentNiche[]>(contentNichesQuery),
  ]);

  const sanityFotos: FotoItem[] = items
    .filter((item) => item.contentType === 'photo' && item.image?.asset)
    .map((item) => ({
      id: item._id,
      title: item.client?.name || 'Proyecto',
      client: item.client?.name,
      niche: item.niche?.title,
      images: [
        {
          src: urlFor(item.image as SanityImage).width(1200).height(1600).fit('crop').url(),
          alt: item.image?.alt || item.client?.name || 'Foto',
        },
      ],
      isCarousel: false,
      date: item.publishedAt,
      featured: item.featured,
    }));

  const sanityReels: ReelItem[] = items
    .filter((item) => item.contentType === 'reel' && item.youtubeUrl)
    .map((item) => {
      const videoId = getYouTubeVideoId(item.youtubeUrl || '');
      return {
        id: item._id,
        title: item.client?.name || 'Reel',
        client: item.client?.name,
        niche: item.niche?.title,
        video: {
          platform: 'youtube',
          embedUrl: videoId
            ? `https://www.youtube.com/embed/${videoId}`
            : item.youtubeUrl || '',
          videoId: videoId || undefined,
          aspectRatio: item.aspectRatio || '9:16',
        },
        date: item.publishedAt,
        featured: item.featured,
      };
    });

  const sanityNiches = niches.map((niche) => niche.title);

  return { sanityFotos, sanityNiches, sanityReels };
}

export default async function ContenidosPage() {
  const { sanityFotos, sanityNiches, sanityReels } = await getSanityContent();

  const allFotos = sanityFotos.length > 0 ? sanityFotos : fotos;
  const allReels = sanityReels.length > 0 ? sanityReels : reels;
  const fallbackNiches = Array.from(
    new Set([...allFotos.map((item) => item.niche).filter(Boolean), ...allReels.map((item) => item.niche).filter(Boolean)]),
  ) as string[];
  const niches = ['Todos', ...(sanityNiches.length > 0 ? sanityNiches : fallbackNiches)];

  return <ContenidosClientPage niches={niches} fotos={allFotos} reels={allReels} />;
}
