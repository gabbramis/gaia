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
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0, y: 60 },
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
      className="group relative p-8 border-l-4 border-transparent hover:border-[#ED9ABC] transition-all duration-500"
    >
      {/* Icon */}
      <div className="mb-6">
        <Icon
          size={56}
          className="text-[#ED9ABC] group-hover:scale-105 transition-transform duration-300"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(237, 154, 188, 0))',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(237, 154, 188, 0.5))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(237, 154, 188, 0))';
          }}
        />
      </div>

      {/* Title */}
      <h3 className="font-serif text-4xl md:text-5xl text-[#500712] mb-4 tracking-premium">
        {title}
      </h3>

      {/* Description */}
      <p className="font-sans text-lg md:text-xl text-black/80 leading-relaxed text-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
