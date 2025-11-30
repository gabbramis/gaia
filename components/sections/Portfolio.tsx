'use client';

import { motion } from 'motion/react';
import { portfolioItems } from '@/lib/constants';
import { getPortfolioImage } from '@/lib/images';
import { PortfolioCard } from '@/components/ui/PortfolioCard';
import { fadeInUp } from '@/lib/animations';

export function Portfolio() {
  // Assign random-ish aspect ratios for the masonry look
  const getAspectRatio = (index: number) => {
    // Pattern: Tall, Short, Square, Tall, Square, Cinematic
    const ratios = [
      'aspect-[3/4]',  // 0: Tall
      'aspect-[4/3]',  // 1: Short
      'aspect-[1/1]',  // 2: Square
      'aspect-[3/4]',  // 3: Tall
      'aspect-[1/1]',  // 4: Square
      'aspect-[16/9]', // 5: Cinematic
    ];
    return ratios[index % ratios.length];
  };

  return (
    <section
      id="portfolio"
      className="relative min-h-screen bg-[#500712] py-32 px-6 md:px-12 border-t border-[#ED9ABC]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="block text-[#ED9ABC] text-sm tracking-[0.3em] uppercase mb-4">
            Selected Works
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F1DFD1] text-tight tracking-tight">
            Portfolio
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              imageUrl={getPortfolioImage(item.id)}
              index={index}
              aspectRatio={getAspectRatio(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
