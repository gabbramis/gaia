'use client';

import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';
import { campanas } from '@/lib/data/portfolio';

export function CampanasGallery() {
    return (
        <section id="campanas" className="relative bg-[var(--gaia-burgundy)] py-16 md:py-32 px-6 md:px-12 border-t border-[var(--gaia-pink)]/10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-16 md:mb-24 text-center"
                >
                    <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-4">
                        360° Projects
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl text-[var(--gaia-beige)] tracking-tight mb-6">
                        Campañas
                    </h2>
                    <p className="font-sans text-[var(--gaia-beige)]/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Proyectos integrales de branding, marketing y producción de contenido
                    </p>
                </motion.div>

                {/* Campaign Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16">
                    {campanas.map((campaign, index) => (
                        <motion.div
                            key={campaign.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group cursor-pointer"
                        >
                            {/* Hero Image */}
                            <div className="relative aspect-[16/10] overflow-hidden border border-[var(--gaia-pink)]/10 group-hover:border-[var(--gaia-pink)]/30 transition-colors duration-500 mb-4 md:mb-6">
                                <Image
                                    src={campaign.preview.image.src}
                                    alt={campaign.preview.image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-[var(--gaia-burgundy)]/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Info */}
                            <div className="space-y-3">
                                {/* Category & Year */}
                                <div className="flex items-center justify-between">
                                    <span className="font-sans text-xs text-[var(--gaia-pink)] uppercase tracking-[0.2em]">
                                        {campaign.category} • {campaign.year}
                                    </span>
                                    {campaign.duration && (
                                        <span className="font-sans text-xs text-[var(--gaia-beige)]/40">
                                            {campaign.duration}
                                        </span>
                                    )}
                                </div>

                                {/* Title & Client */}
                                <div>
                                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[var(--gaia-beige)] group-hover:text-[var(--gaia-pink)] transition-colors duration-300 mb-1">
                                        {campaign.title}
                                    </h3>
                                    <p className="font-sans text-sm text-[var(--gaia-beige)]/50">
                                        {campaign.client}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="font-sans text-sm md:text-base text-[var(--gaia-beige)]/70 leading-relaxed">
                                    {campaign.preview.excerpt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
