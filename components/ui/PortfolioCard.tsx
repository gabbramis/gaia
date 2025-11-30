
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  index: number;
  aspectRatio?: string;
}

export function PortfolioCard({
  title,
  category,
  description,
  imageUrl,
  index,
  aspectRatio = 'aspect-[3/4]',
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative mb-8 break-inside-avoid"
    >
      <div className={`relative w-full ${aspectRatio} overflow-hidden border border-[#ED9ABC]/20`}>
        {/* Image */}
        <Image
          src={imageUrl}
          alt={description}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content - Mobile: Below Image | Desktop: Overlay */}
      <div className="
        flex flex-col justify-center items-center text-center p-6 transition-all duration-500 z-10
        relative mt-2
        md:absolute md:inset-0 md:mt-0 md:bg-[#500712]/80 md:opacity-0 md:group-hover:opacity-100
      ">
        <span className="font-sans text-xs text-[#ED9ABC] uppercase tracking-[0.2em] mb-2 md:mb-3 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 delay-100">
          {category}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-[#F1DFD1] mb-2 md:mb-3 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 delay-200">
          {title}
        </h3>
        <p className="font-sans text-xs md:text-sm text-[#F1DFD1]/80 max-w-[200px] md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 delay-300 hidden md:block">
          {description}
        </p>

        {/* Decorative Frame - Desktop Only */}
        <div className="hidden md:block absolute inset-4 border border-[#ED9ABC]/30 scale-95 group-hover:scale-100 transition-transform duration-500 delay-100" />
      </div>
    </motion.div>
  );
}
