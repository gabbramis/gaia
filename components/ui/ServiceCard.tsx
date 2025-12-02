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
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.1,
          },
        },
      }}
      className="group flex flex-col items-start gap-6 p-4 md:p-0"
    >
      {/* Icon */}
      <div className="text-[#ED9ABC] group-hover:text-[#F1DFD1] transition-colors duration-300">
        <Icon size={32} strokeWidth={1} />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="font-serif text-2xl md:text-3xl text-[#F1DFD1] leading-tight group-hover:text-[#ED9ABC] transition-colors duration-300">
          {title}
        </h3>

        <p className="font-sans text-sm md:text-base text-[#F1DFD1]/60 leading-relaxed tracking-wide max-w-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
