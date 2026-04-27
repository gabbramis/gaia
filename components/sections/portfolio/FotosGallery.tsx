'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';
import { fotos } from '@/lib/data/portfolio';
import { trackViewContent } from '@/lib/analytics/facebook-pixel';

export function FotosGallery({ niche = 'Todos' }: { niche?: string }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const filteredFotos = niche === 'Todos' ? fotos : fotos.filter(f => f.niche === niche);

    const handleScroll = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.scrollWidth / filteredFotos.length;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(Math.min(index, filteredFotos.length - 1));
    }, [filteredFotos.length]);

    useEffect(() => {
        trackViewContent({
            content_name: 'Fotos Gallery',
            content_category: 'Portfolio',
            content_type: 'gallery',
        });
    }, []);

    if (filteredFotos.length === 0) return null;

    return (
        <section
            id="fotos"
            className="relative bg-[var(--gaia-burgundy)] py-16 md:py-32 px-6 md:px-12 border-t border-[var(--gaia-pink)]/10"
        >
            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-12 md:mb-16 text-center"
            >
                <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-4">
                    Visual Storytelling
                </span>
                <h2 className="font-serif text-5xl md:text-7xl text-[var(--gaia-beige)] tracking-tight mb-6">
                    Fotos
                </h2>
                <p className="font-sans text-[var(--gaia-beige)]/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                    Fotografía editorial, de producto y lifestyle que cuenta historias visuales auténticas
                </p>
            </motion.div>

            {/* Desktop Grid */}
            <div className="hidden md:grid max-w-7xl mx-auto grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredFotos.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.08 }}
                    >
                        <div className="group relative aspect-[3/4] overflow-hidden border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/5">
                            <Image
                                src={item.images[0].src}
                                alt={item.images[0].alt}
                                fill
                                sizes="(max-width: 1024px) 33vw, 25vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-[var(--gaia-burgundy)] via-[var(--gaia-burgundy)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {item.client && (
                                    <span className="font-sans text-xs text-[var(--gaia-pink)] uppercase tracking-[0.2em] mb-2">
                                        {item.client}
                                    </span>
                                )}
                            </div>
                            <div className="absolute inset-4 border border-[var(--gaia-pink)]/20 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Snap-Scroll */}
            <div className="md:hidden">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                    {filteredFotos.map((item) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 w-[85vw] snap-center"
                        >
                            <div className="group relative aspect-[3/4] overflow-hidden border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/5">
                                <Image
                                    src={item.images[0].src}
                                    alt={item.images[0].alt}
                                    fill
                                    sizes="85vw"
                                    className="object-cover opacity-90"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[var(--gaia-burgundy)] via-transparent to-transparent">
                                    {item.client && (
                                        <span className="font-sans text-xs text-[var(--gaia-pink)] uppercase tracking-[0.2em]">
                                            {item.client}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicators */}
                <div className="flex items-center justify-center gap-3 mt-4">
                    <span className="text-[var(--gaia-beige)]/40 text-xs tracking-widest font-sans">
                        {activeIndex + 1} / {filteredFotos.length}
                    </span>
                </div>
                <div className="flex justify-center gap-1.5 mt-3">
                    {filteredFotos.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                i === activeIndex
                                    ? 'w-6 bg-[var(--gaia-pink)]'
                                    : 'w-1.5 bg-[var(--gaia-pink)]/30'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
