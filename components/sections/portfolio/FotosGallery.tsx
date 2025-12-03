'use client';

import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';
import { fotos } from '@/lib/data/portfolio';

export function FotosGallery() {
    return (
        <section id="fotos" className="relative bg-[#500712] py-16 md:py-32 px-6 md:px-12 border-t border-[#ED9ABC]/10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-16 md:mb-24 text-center"
                >
                    <span className="block text-[#ED9ABC] text-sm tracking-[0.3em] uppercase mb-4">
                        Visual Storytelling
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl text-[#F1DFD1] tracking-tight mb-6">
                        Fotos
                    </h2>
                    <p className="font-sans text-[#F1DFD1]/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Fotografía editorial, de producto y lifestyle que cuenta historias visuales auténticas
                    </p>
                </motion.div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {fotos.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
                        >
                            {/* Image */}
                            <div className="absolute inset-0 bg-[#ED9ABC]/5">
                                <Image
                                    src={item.images[0].src}
                                    alt={item.images[0].alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-[#500712] via-[#500712]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {item.client && (
                                    <span className="font-sans text-xs text-[#ED9ABC] uppercase tracking-[0.2em] mb-2">
                                        {item.client}
                                    </span>
                                )}
                                <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-[#F1DFD1] mb-2">
                                    {item.title}
                                </h3>
                                {item.description && (
                                    <p className="font-sans text-sm text-[#F1DFD1]/70">
                                        {item.description}
                                    </p>
                                )}
                                {item.isCarousel && item.images.length > 1 && (
                                    <span className="font-sans text-xs text-[#ED9ABC]/60 mt-3">
                                        +{item.images.length - 1} más
                                    </span>
                                )}
                            </div>

                            {/* Border Frame */}
                            <div className="absolute inset-4 border border-[#ED9ABC]/20 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
