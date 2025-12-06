'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import { reels } from '@/lib/data/portfolio';
import { VideoEmbed } from '@/components/ui/VideoEmbed';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ReelsGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, reels.length - itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <section id="reels" className="relative bg-[#500712] py-16 md:py-32 px-6 md:px-12 border-t border-[#ED9ABC]/10">
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
                        Video Content
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl text-[#F1DFD1] tracking-tight mb-6">
                        Reels
                    </h2>
                    <p className="font-sans text-[#F1DFD1]/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Contenido vertical dinámico para redes sociales y plataformas digitales
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative group">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#500712]/80 border border-[#ED9ABC]/30 text-[#ED9ABC] p-3 rounded-full hover:bg-[#ED9ABC] hover:text-[#500712] transition-all duration-300 backdrop-blur-sm -ml-4 md:-ml-12 disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentIndex === maxIndex}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#500712]/80 border border-[#ED9ABC]/30 text-[#ED9ABC] p-3 rounded-full hover:bg-[#ED9ABC] hover:text-[#500712] transition-all duration-300 backdrop-blur-sm -mr-4 md:-mr-12 disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Slider Track */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-4 md:gap-8"
                            animate={{
                                x: `calc(-${currentIndex * (100 / itemsPerPage)}% - ${currentIndex * (itemsPerPage === 1 ? 0 : 32 / itemsPerPage)}px)`
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {reels.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className="shrink-0"
                                    style={{
                                        width: `calc(${100 / itemsPerPage}% - ${((itemsPerPage - 1) * (itemsPerPage === 1 ? 0 : 32)) / itemsPerPage}px)`
                                    }}
                                >
                                    <div className="group/card relative overflow-hidden border border-[#ED9ABC]/10 bg-[#ED9ABC]/5">
                                        <VideoEmbed video={item.video} />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
