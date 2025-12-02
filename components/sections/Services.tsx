'use client';

import { motion } from 'motion/react';
import { services } from '@/lib/constants';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { ServiceAccordion } from '@/components/ui/ServiceAccordion';
import { fadeInUp } from '@/lib/animations';
import { Share2, Users, Video, Camera, Laptop, Search, Sparkles, ChartNoAxesColumnDecreasing, Component } from 'lucide-react';

const iconMap: Record<string, any> = {
  Share2,
  Users,
  Video,
  Camera,
  Laptop,
  Search,
  Sparkles,
  ChartNoAxesColumnDecreasing,
  Component,
};

export function Services() {
  return (
    <section
      id="servicios"
      className="relative min-h-screen bg-[#500712] py-32 px-6 md:px-12 border-t border-[#ED9ABC]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#ED9ABC]/20 pb-12"
        >
          <div>
            <span className="block text-[#ED9ABC] text-sm tracking-[0.3em] uppercase mb-4">
              Our Expertise
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-[#F1DFD1] tracking-tight">
              Servicios
            </h2>
          </div>
          <p className="font-sans text-[#F1DFD1]/60 max-w-md text-sm md:text-base leading-relaxed tracking-wide">
            Ofrecemos soluciones integrales diseñadas para posicionar tu marca en el mercado.
          </p>
        </motion.div>

        {/* Services Grid */}
        {/* Mobile Accordion */}
        <div className="md:hidden">
          <ServiceAccordion items={services} iconMap={iconMap} />
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-24">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
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
