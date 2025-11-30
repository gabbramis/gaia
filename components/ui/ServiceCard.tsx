'use client';

import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
  className?: string; // Allow custom positioning/sizing
}

export function ServiceCard({ title, description, icon, index, className = '' }: ServiceCardProps) {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[icon] || Icons.Sparkles;

  return (
    <div className={`relative bg-[#500712] border border-[#ED9ABC]/20 p-8 md:p-10 backdrop-blur-sm shadow-2xl group hover:border-[#ED9ABC]/50 transition-colors duration-500 ${className}`}>
      {/* Decorative Tape/Pin effect (Optional, keeping it clean for now) */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#ED9ABC]/20" />

      {/* Icon */}
      <div className="mb-6">
        <IconComponent className="w-10 h-10 text-[#ED9ABC] opacity-80 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
      </div>

      {/* Content */}
      <h3 className="font-serif text-2xl md:text-3xl text-[#F1DFD1] mb-4 leading-tight">
        {title}
      </h3>
      <p className="font-sans text-sm text-[#F1DFD1]/70 leading-relaxed">
        {description}
      </p>

      {/* Number Watermark */}
      <span className="absolute bottom-4 right-4 font-sans text-xs text-[#ED9ABC]/10 text-[4rem] leading-none pointer-events-none">
        0{index + 1}
      </span>
    </div>
  );
}
