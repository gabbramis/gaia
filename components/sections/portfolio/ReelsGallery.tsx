'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import { reels } from '@/lib/data/portfolio';
import { VideoEmbed } from '@/components/ui/VideoEmbed';
import { trackViewContent } from '@/lib/analytics/facebook-pixel';
import type { ReelItem } from '@/lib/data/types/portfolio';

export function ReelsGallery({ niche = 'Todos', items }: { niche?: string; items?: ReelItem[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const sourceItems = items && items.length > 0 ? items : reels;

    const filteredReels = niche === 'Todos' ? sourceItems : sourceItems.filter(r => r.niche === niche);
    const INITIAL_LIMIT = 8;
    const displayedReels = showAll ? filteredReels : filteredReels.slice(0, INITIAL_LIMIT);

    const handleScroll = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.scrollWidth / displayedReels.length;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(Math.min(index, displayedReels.length - 1));
    }, [displayedReels.length]);

    useEffect(() => {
        setShowAll(false);
        setActiveIndex(0);
        if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    }, [niche]);

    useEffect(() => {
        trackViewContent({
            content_name: 'Reels Gallery',
            content_category: 'Portfolio',
            content_type: 'video_gallery',
        });
    }, []);

    if (filteredReels.length === 0) return null;

    return (
        <section
            id="reels"
            className="relative bg-[var(--gaia-burgundy)] pt-8 md:pt-12 pb-16 md:pb-24 px-6 md:px-12 border-t border-[var(--gaia-pink)]/10"
        >
            <div className="max-w-7xl mx-auto">
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
                            Video Content
                        </span>
                        <div className="h-[1px] w-6 md:w-10 bg-[var(--gaia-pink)]/40"></div>
                    </div>
                    <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[var(--gaia-beige)] tracking-tight mb-5 font-light">
                        Reels<span className="text-[var(--gaia-pink)] italic">.</span>
                    </h2>
                    <p className="font-sans text-[var(--gaia-beige)]/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Contenido vertical dinámico para redes sociales y plataformas digitales
                    </p>
                </motion.div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-6">
                    {displayedReels.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                        >
                            <div className="overflow-hidden border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/5">
                                <VideoEmbed video={item.video} />
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
                        {displayedReels.map((item) => (
                            <div
                                key={item.id}
                                className="flex-shrink-0 w-[65vw] snap-center"
                            >
                                <div className="overflow-hidden border border-[var(--gaia-pink)]/10 bg-[var(--gaia-pink)]/5">
                                    <VideoEmbed video={item.video} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Indicators */}
                    <div className="flex items-center justify-center gap-3 mt-4">
                        <span className="text-[var(--gaia-beige)]/40 text-xs tracking-widest font-sans">
                            {activeIndex + 1} / {displayedReels.length}
                        </span>
                    </div>
                    <div className="flex justify-center gap-1.5 mt-3 flex-wrap max-w-[80%] mx-auto">
                        {displayedReels.map((_, i) => (
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
                {filteredReels.length > INITIAL_LIMIT && (
                    <div className="mt-12 md:mt-16 text-center">
                        <button
                            onClick={() => {
                                if (showAll) {
                                    document.getElementById('reels')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                                setShowAll(!showAll);
                            }}
                            className="inline-flex items-center justify-center px-8 py-3 border border-[var(--gaia-pink)]/30 text-[var(--gaia-beige)] text-xs tracking-[0.2em] uppercase hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] transition-all duration-500"
                        >
                            {showAll ? 'Ver menos' : 'Ver más'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
