'use client';

import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.1,
          },
        },
      }}
      className="group relative p-8 border border-[#ED9ABC]/20 hover:border-[#ED9ABC] transition-all duration-500 bg-[#500712] hover:bg-[#3D050D]"
    >
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[1px] border-r-[1px] border-[#ED9ABC]/0 group-hover:border-[#ED9ABC] group-hover:w-4 group-hover:h-4 transition-all duration-500" />

      {/* Icon */}
      <div className="mb-8 flex items-center justify-between">
        <Icon
          size={32}
          className="text-[#ED9ABC] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          strokeWidth={1.5}
        />
        <span className="font-serif text-[#ED9ABC]/40 text-sm italic group-hover:text-[#ED9ABC] transition-colors duration-300">
          0{index + 1}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-3xl text-[#F1DFD1] mb-4 tracking-wide group-hover:translate-x-2 transition-transform duration-500">
        {title}
      </h3>

      {/* Description */}
      <p className="font-sans text-sm md:text-base text-[#F1DFD1]/70 leading-relaxed tracking-wide">
        {description}
      </p>
    </motion.div>
  );
}
