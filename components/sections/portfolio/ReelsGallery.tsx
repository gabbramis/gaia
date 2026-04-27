'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import { reels } from '@/lib/data/portfolio';
import { VideoEmbed } from '@/components/ui/VideoEmbed';
import { trackViewContent } from '@/lib/analytics/facebook-pixel';

export function ReelsGallery({ niche = 'Todos' }: { niche?: string }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const filteredReels = niche === 'Todos' ? reels : reels.filter(r => r.niche === niche);

    const handleScroll = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.scrollWidth / filteredReels.length;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(Math.min(index, filteredReels.length - 1));
    }, [filteredReels.length]);

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
            className="relative bg-[var(--gaia-burgundy)] py-16 md:py-32 px-6 md:px-12 border-t border-[var(--gaia-pink)]/10"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-12 md:mb-16 text-center"
                >
                    <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-4">
                        Video Content
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl text-[var(--gaia-beige)] tracking-tight mb-6">
                        Reels
                    </h2>
                    <p className="font-sans text-[var(--gaia-beige)]/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Contenido vertical dinámico para redes sociales y plataformas digitales
                    </p>
                </motion.div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredReels.map((item, index) => (
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
                        {filteredReels.map((item) => (
                            <div
                                key={item.id}
                                className="flex-shrink-0 w-[80vw] snap-center"
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
                            {activeIndex + 1} / {filteredReels.length}
                        </span>
                    </div>
                    <div className="flex justify-center gap-1.5 mt-3">
                        {filteredReels.map((_, i) => (
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
            </div>
        </section>
    );
}
