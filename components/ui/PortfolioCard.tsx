'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { scaleOnScroll } from '@/lib/animations';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  backgroundColor: 'white' | 'beige' | 'pink' | 'burgundy';
  featured?: boolean;
  index: number;
  organicShape: string;
}

export function PortfolioCard({
  title,
  category,
  description,
  imageUrl,
  backgroundColor,
  featured = false,
  index,
  organicShape,
}: PortfolioCardProps) {
  const bgColorMap = {
    white: 'bg-white',
    beige: 'bg-[#F1DFD1]',
    pink: 'bg-[#FFB8D5]/10',
    burgundy: 'bg-[#500712]',
  };

  const textColorMap = {
    white: 'text-[#500712]',
    beige: 'text-[#500712]',
    pink: 'text-[#500712]',
    burgundy: 'text-white',
  };

  const categoryColorMap = {
    white: 'text-[#ED9ABC]',
    beige: 'text-[#ED9ABC]',
    pink: 'text-[#ED9ABC]',
    burgundy: 'text-[#FFB8D5]',
  };

  const aspectRatio = featured ? 'aspect-[21/9]' : 'aspect-[3/4]';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.15,
          },
        },
      }}
      className={`group relative ${bgColorMap[backgroundColor]} p-8 md:p-12 ${
        featured ? 'md:col-span-2' : ''
      } hover-overlay shadow-premium hover:shadow-premium-hover transition-shadow duration-500`}
    >
      {/* Image */}
      <div className={`relative ${aspectRatio} overflow-hidden ${organicShape} mb-6 md:mb-8`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={scaleOnScroll}
          className="w-full h-full"
        >
          <Image
            src={imageUrl}
            alt={description}
            fill
            className="object-cover"
            sizes={featured ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div>
        <p className={`font-sans text-sm uppercase tracking-luxury ${categoryColorMap[backgroundColor]} mb-3`}>
          {category}
        </p>
        <h3 className={`font-serif text-3xl md:text-4xl ${textColorMap[backgroundColor]} ${
          featured ? 'lg:text-5xl' : ''
        }`}>
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
