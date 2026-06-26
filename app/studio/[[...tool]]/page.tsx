import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';
import { hasSanityConfig } from '@/sanity/env';

export const dynamic = 'force-static';

export default function StudioPage() {
  if (!hasSanityConfig) {
    return null;
  }

  return <NextStudio config={config} />;
}
