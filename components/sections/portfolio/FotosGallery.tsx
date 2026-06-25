'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import { fotos } from '@/lib/data/portfolio';
import { trackViewContent } from '@/lib/analytics/facebook-pixel';
import type { FotoItem } from '@/lib/data/types/portfolio';
import { ProgressiveImage } from '@/components/ui/ProgressiveImage';

export function FotosGallery({ niche = 'Todos', items }: { niche?: string; items?: FotoItem[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const sourceItems = items && items.length > 0 ? items : fotos;

    const filteredFotos = niche === 'Todos' ? sourceItems : sourceItems.filter(f => f.niche === niche);
    const INITIAL_LIMIT = 10;
    const displayedFotos = showAll ? filteredFotos : filteredFotos.slice(0, INITIAL_LIMIT);

    const handleScroll = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.scrollWidth / displayedFotos.length;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(Math.min(index, displayedFotos.length - 1));
    }, [displayedFotos.length]);

    useEffect(() => {
        setShowAll(false);
        setActiveIndex(0);
        if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    }, [niche]);

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
            className="relative bg-[var(--gaia-burgundy)] pt-8 md:pt-12 pb-16 md:pb-24 px-6 md:px-12 border-t border-[var(--gaia-pink)]/10"
        >
            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-10 md:mb-14 text-center flex flex-col items-center"
            >
                <div className="inline-flex items-center justify-center gap-4 mb-4">
                    <div className="h-[1px] w-6 md:w-10 bg-[var(--gaia-pink)]/40"></div>
                    <span className="block text-[var(--gaia-pink)] text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
                        Visual Storytelling
                    </span>
                    <div className="h-[1px] w-6 md:w-10 bg-[var(--gaia-pink)]/40"></div>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[var(--gaia-beige)] tracking-tight mb-5 font-light">
                    Fotos<span className="text-[var(--gaia-pink)] italic">.</span>
                </h2>
                <p className="font-sans text-[var(--gaia-beige)]/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                    Fotografía editorial, de producto y lifestyle que cuenta historias visuales auténticas
                </p>
            </motion.div>

            {/* Desktop Grid */}
            <div className="hidden md:grid max-w-7xl mx-auto grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
                {displayedFotos.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.08 }}
                    >
                        <div className="group relative aspect-[3/4] overflow-hidden border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/5">
                            <ProgressiveImage
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
                    {displayedFotos.map((item) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 w-[70vw] snap-center"
                        >
                            <div className="group relative aspect-[3/4] overflow-hidden border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/5">
                                <ProgressiveImage
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
                        {activeIndex + 1} / {displayedFotos.length}
                    </span>
                </div>
                <div className="flex justify-center gap-1.5 mt-3 flex-wrap max-w-[80%] mx-auto">
                    {displayedFotos.map((_, i) => (
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

            {/* View More Button */}
            {filteredFotos.length > INITIAL_LIMIT && (
                <div className="mt-12 md:mt-16 text-center">
                    <button
                        onClick={() => {
                            if (showAll) {
                                document.getElementById('fotos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                            setShowAll(!showAll);
                        }}
                        className="inline-flex items-center justify-center px-8 py-3 border border-[var(--gaia-pink)]/30 text-[var(--gaia-beige)] text-xs tracking-[0.2em] uppercase hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500"
                    >
                        {showAll ? 'Ver menos' : 'Ver más'}
                    </button>
                </div>
            )}
        </section>
    );
}
