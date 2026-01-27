'use client';

import { motion } from 'motion/react';
import { services } from '@/lib/constants';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { ServiceAccordion } from '@/components/ui/ServiceAccordion';
import { fadeInUp } from '@/lib/animations';
import { Share2, Users, Video, Camera, Laptop, Search, Sparkles, ChartNoAxesColumnDecreasing, Component, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
      className="relative bg-[#500712] pt-16 md:pt-32 pb-12 md:pb-20 px-6 md:px-12 border-t border-[#ED9ABC]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#ED9ABC]/20 pb-12"
        >
          <div>
            <span className="block text-[#ED9ABC] text-sm tracking-[0.3em] uppercase mb-4">
              Our Expertise
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-[#F1DFD1] tracking-tight">
              Nuestros Servicios
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

        {/* Guidance Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-[#ED9ABC]/20 text-center"
        >
          <span className="block text-[#ED9ABC] text-sm tracking-[0.3em] uppercase mb-6">
            We help you decide
          </span>
          <h3 className="font-serif text-4xl md:text-6xl text-[#F1DFD1] tracking-tight mb-6">
            ¿No sabés por dónde empezar?
          </h3>
          <p className="font-sans text-[#F1DFD1]/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Es normal. Cada marca está en un momento diferente. Agendá una llamada estratégica gratuita y analizamos juntas qué necesita tu proyecto hoy.
          </p>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ED9ABC] text-[#500712] font-sans text-sm tracking-wide rounded-sm hover:bg-[#F1DFD1] transition-colors duration-300"
          >
            Agendar llamada estratégica
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
