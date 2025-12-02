'use client';

import { motion } from 'motion/react';

interface PortfolioCardProps {
  title: string;
  category: string;
  index: number;
}

export function PortfolioCard({ title, category, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group flex items-baseline justify-between py-8 border-b border-[#ED9ABC]/20 hover:border-[#ED9ABC] transition-colors duration-500 cursor-default"
    >
      <div className="flex items-baseline gap-6">
        <span className="font-sans text-xs text-[#ED9ABC]/30 group-hover:text-[#ED9ABC] transition-colors duration-300 w-8">
          {(index + 1).toString().padStart(2, '0')}
        </span>
        <h3 className="font-serif text-2xl md:text-4xl text-[#F1DFD1] group-hover:text-[#ED9ABC] group-hover:translate-x-2 transition-all duration-500">
          {title}
        </h3>
      </div>

      <span className="font-sans text-xs md:text-sm text-[#F1DFD1]/50 uppercase tracking-widest group-hover:text-[#F1DFD1] transition-colors duration-300 text-right">
        {category}
      </span>
    </motion.div>
  );
}
