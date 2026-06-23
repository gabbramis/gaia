'use client';

import { useState } from 'react';
import { Navigation } from '@/components/ui/Navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FotosGallery } from '@/components/sections/portfolio/FotosGallery';
import { ReelsGallery } from '@/components/sections/portfolio/ReelsGallery';
import { Footer } from '@/components/sections/Footer';
import type { FotoItem, ReelItem } from '@/lib/data/types/portfolio';

type ContenidosClientPageProps = {
  niches: string[];
  fotos: FotoItem[];
  reels: ReelItem[];
};

export function ContenidosClientPage({ niches, fotos, reels }: ContenidosClientPageProps) {
  const [selectedNiche, setSelectedNiche] = useState('Todos');

  return (
    <main className="bg-[var(--gaia-burgundy)] min-h-screen overflow-x-hidden w-full">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center pt-24 md:pt-32">
        <div className="mb-6 flex items-start text-left md:mb-8">
          <Breadcrumbs />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-[var(--gaia-beige)] tracking-tight mb-8">
          Portfolio
        </h1>

        <div
          className="flex justify-start md:justify-center overflow-x-auto snap-x snap-mandatory pb-4 mb-4 gap-3 md:gap-4 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {niches.map((niche) => (
            <button
              key={niche}
              onClick={() => setSelectedNiche(niche)}
              className={`snap-center flex-shrink-0 px-6 py-2 rounded-full border transition-all duration-300 font-sans text-sm tracking-wider uppercase
                ${selectedNiche === niche
                  ? 'bg-[var(--gaia-pink)] border-[var(--gaia-pink)] text-[var(--gaia-burgundy)] font-medium'
                  : 'border-[var(--gaia-pink)]/30 text-[var(--gaia-beige)]/70 hover:border-[var(--gaia-pink)] hover:text-[var(--gaia-beige)]'
                }`}
            >
              {niche}
            </button>
          ))}
        </div>
      </div>

      <div className="pb-12">
        <FotosGallery niche={selectedNiche} items={fotos} />
        <ReelsGallery niche={selectedNiche} items={reels} />
      </div>
      <Footer />
    </main>
  );
}
