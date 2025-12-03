'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';
import { fotos } from '@/lib/data/portfolio';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function FotosGallery() {
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

    const maxIndex = Math.max(0, fotos.length - itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <section id="fotos" className="relative bg-[#500712] py-16 md:py-32 px-6 md:px-12 border-t border-[#ED9ABC]/10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-12 md:mb-24 text-center"
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
                            {fotos.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className="relative shrink-0"
                                    style={{
                                        width: `calc(${100 / itemsPerPage}% - ${((itemsPerPage - 1) * (itemsPerPage === 1 ? 0 : 32)) / itemsPerPage}px)`
                                    }}
                                >
                                    <div className="group/card relative aspect-[3/4] overflow-hidden cursor-pointer border border-[#ED9ABC]/10 bg-[#ED9ABC]/5">
                                        {/* Image */}
                                        <Image
                                            src={item.images[0].src}
                                            alt={item.images[0].alt}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover/card:scale-105 opacity-80 group-hover/card:opacity-100"
                                        />

                                        {/* Overlay Content */}
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-[#500712] via-[#500712]/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                                            {item.client && (
                                                <span className="font-sans text-xs text-[#ED9ABC] uppercase tracking-[0.2em] mb-2">
                                                    {item.client}
                                                </span>
                                            )}
                                            <h3 className="font-serif text-xl md:text-2xl text-[#F1DFD1] mb-2">
                                                {item.title}
                                            </h3>
                                            {item.description && (
                                                <p className="font-sans text-sm text-[#F1DFD1]/70 line-clamp-2">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>

                                        {/* Border Frame */}
                                        <div className="absolute inset-4 border border-[#ED9ABC]/20 scale-95 opacity-0 group-hover/card:scale-100 group-hover/card:opacity-100 transition-all duration-500" />
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
