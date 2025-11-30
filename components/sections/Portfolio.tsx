'use client';

import { motion } from 'motion/react';
import { portfolioItems } from '@/lib/constants';
import { getPortfolioImage } from '@/lib/images';
import { PortfolioCard } from '@/components/ui/PortfolioCard';
import { fadeInUp } from '@/lib/animations';

export function Portfolio() {
  // Get first 4 portfolio items as featured
  const featuredItems = portfolioItems.slice(0, 4);

  // Define backgrounds and organic shapes for alternating pattern
  const cardStyles = [
    { backgroundColor: 'white' as const, organicShape: 'organic-shape-1' },
    { backgroundColor: 'beige' as const, organicShape: 'organic-shape-2' },
    { backgroundColor: 'pink' as const, organicShape: 'organic-shape-3' },
    { backgroundColor: 'burgundy' as const, organicShape: 'organic-shape-1' },
  ];

  return (
    <section
      id="portfolio"
      className="relative min-h-screen bg-white py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-24"
        >
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-[#500712] text-tight tracking-premium">
            Portfolio
          </h2>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              imageUrl={getPortfolioImage(item.id)}
              backgroundColor={cardStyles[index].backgroundColor}
              organicShape={cardStyles[index].organicShape}
              featured={item.featured}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
