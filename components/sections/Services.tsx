'use client';

import { motion } from 'motion/react';
import { services } from '@/lib/constants';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { TrendingUp, Megaphone, Palette, Code2, Share2, Sparkles } from 'lucide-react';

const iconMap = {
  TrendingUp,
  Megaphone,
  Palette,
  Code2,
  Share2,
  Sparkles,
};

export function Services() {
  return (
    <section
      id="servicios"
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
            Servicios
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={Icon}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
