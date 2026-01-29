'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { serviceCategories } from '@/lib/constants';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { fadeInUp } from '@/lib/animations';
import { Share2, Users, Video, Camera, Laptop, Search, Sparkles, ChartNoAxesColumnDecreasing, Component, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
  const [activeCategory, setActiveCategory] = useState<string>(serviceCategories[0].id);

  const currentCategory = serviceCategories.find(cat => cat.id === activeCategory) || serviceCategories[0];

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
          className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#ED9ABC]/20 pb-12"
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
            Ofrecemos soluciones digitales diseñadas según el momento y las necesidades de tu marca.
          </p>
        </motion.div>

        {/* Category Tabs - Desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="hidden md:flex items-center justify-center gap-2 mb-16"
        >
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "relative px-8 py-4 font-sans text-sm tracking-wide transition-all duration-500",
                activeCategory === category.id
                  ? "text-[#500712]"
                  : "text-[#F1DFD1]/60 hover:text-[#F1DFD1]"
              )}
            >
              {/* Active background */}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#ED9ABC] rounded-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Category Subtitle - Desktop */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden md:flex items-center justify-center gap-8 mb-20"
          >


            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center justify-center gap-4"
            >
              {/* Left sparkle */}
              <span className="text-[#ED9ABC]/40 text-sm">✦</span>

              <p className="font-serif text-3xl md:text-4xl text-[#ED9ABC] tracking-tight text-center">
                {currentCategory.subtitle}
              </p>

              {/* Right sparkle */}
              <span className="text-[#ED9ABC]/40 text-sm">✦</span>
            </motion.div>
          </motion.div>

        </AnimatePresence>

        {/* Services Grid - Desktop */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-16"
            >
              {currentCategory.services.map((service, index) => {
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: Categorized Accordion */}
        <div className="md:hidden space-y-4">
          {serviceCategories.map((category) => (
            <MobileCategorySection
              key={category.id}
              category={category}
              iconMap={iconMap}
            />
          ))}
        </div>

        {/* Guidance Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-[#ED9ABC]/20 text-center"
        >
          <span className="block text-[#ED9ABC] text-sm tracking-[0.3em] uppercase mb-6">
            We help you decide
          </span>
          <h3 className="font-serif text-4xl md:text-6xl text-[#F1DFD1] tracking-tight mb-6">
            ¿No sabés por dónde empezar?
          </h3>
          <p className="font-sans text-[#F1DFD1]/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Es normal. Cada marca está en un momento distinto. Agendá una llamada estratégica gratuita y analizamos juntas qué necesita tu proyecto hoy.
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

// Mobile Category Section Component
interface MobileCategorySectionProps {
  category: typeof serviceCategories[number];
  iconMap: Record<string, any>;
}

function MobileCategorySection({ category, iconMap }: MobileCategorySectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#ED9ABC]/20 rounded-sm overflow-hidden">
      {/* Category Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <div>
          <h3 className={cn(
            "font-serif text-2xl transition-colors duration-300",
            isOpen ? "text-[#ED9ABC]" : "text-[#F1DFD1] group-hover:text-[#ED9ABC]"
          )}>
            {category.title}
          </h3>
          <p className="text-[#F1DFD1]/50 text-sm mt-1">{category.subtitle}</p>
        </div>
        <div className={cn(
          "text-[#ED9ABC] transition-transform duration-300",
          isOpen ? "rotate-45" : ""
        )}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>

      {/* Services List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 space-y-6">
              {category.services.map((service) => {
                const Icon = iconMap[service.icon] || Sparkles;
                return (
                  <div
                    key={service.id}
                    className="flex gap-4 pl-2 border-l border-[#ED9ABC]/20"
                  >
                    <div className="text-[#ED9ABC] mt-1">
                      <Icon size={20} strokeWidth={1} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-[#F1DFD1] mb-2">
                        {service.title}
                      </h4>
                      <p className="font-sans text-sm text-[#F1DFD1]/60 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
