'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';
import Link from 'next/link';
import { webDesigns } from '@/lib/data/portfolio';
import { trackViewContent } from '@/lib/analytics/facebook-pixel';

export function WebDesigns() {
    useEffect(() => {
        trackViewContent({
            content_name: 'Web Designs',
            content_category: 'Portfolio',
            content_type: 'web_design_gallery',
        });
    }, []);

    return (
        <section id="web-designs" className="relative bg-[var(--gaia-burgundy)] py-16 md:py-32 px-6 md:px-12 border-t border-[var(--gaia-pink)]/10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-4">
                            Digital Experience
                        </span>
                        <h2 className="font-serif text-5xl md:text-7xl text-[var(--gaia-beige)] tracking-tight">
                            Diseños Web
                        </h2>
                    </div>
                    <p className="font-sans text-[var(--gaia-beige)]/60 max-w-md text-sm md:text-base leading-relaxed tracking-wide">
                        Experiencias digitales inmersivas y funcionales.
                    </p>
                </motion.div>

                {/* Web Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {webDesigns.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href={project.url || '#'} target={project.url ? "_blank" : "_self"} rel="noopener noreferrer" className="group cursor-pointer block">
                                {/* Browser/Window Frame Effect */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--gaia-pink)]/5 border border-[var(--gaia-pink)]/10 group-hover:border-[var(--gaia-pink)]/30 transition-colors duration-500">
                                    {/* Mockup Header */}
                                    <div className="absolute top-0 left-0 right-0 h-6 bg-[var(--gaia-burgundy)]/50 backdrop-blur-sm border-b border-[var(--gaia-pink)]/10 flex items-center px-3 gap-1.5 z-10">
                                        <div className="w-2 h-2 rounded-full bg-[var(--gaia-pink)]/30" />
                                        <div className="w-2 h-2 rounded-full bg-[var(--gaia-pink)]/30" />
                                        <div className="w-2 h-2 rounded-full bg-[var(--gaia-pink)]/30" />
                                    </div>

                                    {/* Image */}
                                    <Image
                                        src={project.images.cover.src}
                                        alt={project.images.cover.alt}
                                        fill
                                        className="object-cover mt-6 transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-[var(--gaia-burgundy)]/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                                </div>

                                <div className="mt-6 flex justify-between items-baseline">
                                    <div>
                                        <h3 className="font-serif text-xl md:text-2xl text-[var(--gaia-beige)] group-hover:text-[var(--gaia-pink)] transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        {project.subtitle && (
                                            <p className="font-sans text-sm text-[var(--gaia-beige)]/50 mt-1">
                                                {project.subtitle}
                                            </p>
                                        )}
                                    </div>
                                    {project.url && (
                                        <span className="font-sans text-[10px] sm:text-xs text-[var(--gaia-pink)]/40 uppercase tracking-widest group-hover:text-[var(--gaia-pink)] transition-colors duration-300">
                                            Visit Website ↗
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
