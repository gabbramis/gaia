'use client';

import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';
import Link from 'next/link';

const webProjects = [
    {
        id: 1,
        title: 'Luxury E-commerce',
        image: '/images/portfolio/4.jpg',
        url: '' // Add your real URLs here
    },
    {
        id: 2,
        title: 'Corporate Identity',
        image: '/images/portfolio/5.jpg',
        url: 'https://example.com/corporate'
    },
    {
        id: 3,
        title: 'Creative Portfolio',
        image: '/images/portfolio/6.jpg',
        url: 'https://example.com/portfolio'
    },
    {
        id: 4,
        title: 'Landing Page',
        image: '/images/portfolio/1.jpg',
        url: 'https://example.com/landing'
    },
];

export function WebDesigns() {
    return (
        <section id="web-designs" className="relative bg-[#500712] py-32 px-6 md:px-12 border-t border-[#ED9ABC]/10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <span className="block text-[#ED9ABC] text-sm tracking-[0.3em] uppercase mb-4">
                            Digital Experience
                        </span>
                        <h2 className="font-serif text-5xl md:text-7xl text-[#F1DFD1] tracking-tight">
                            Diseños Web
                        </h2>
                    </div>
                    <p className="font-sans text-[#F1DFD1]/60 max-w-md text-sm md:text-base leading-relaxed tracking-wide">
                        Experiencias digitales inmersivas y funcionales.
                    </p>
                </motion.div>

                {/* Web Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {webProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href={project.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                                {/* Browser/Window Frame Effect */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-[#ED9ABC]/5 border border-[#ED9ABC]/10 group-hover:border-[#ED9ABC]/30 transition-colors duration-500">
                                    {/* Mockup Header */}
                                    <div className="absolute top-0 left-0 right-0 h-6 bg-[#500712]/50 backdrop-blur-sm border-b border-[#ED9ABC]/10 flex items-center px-3 gap-1.5 z-10">
                                        <div className="w-2 h-2 rounded-full bg-[#ED9ABC]/30" />
                                        <div className="w-2 h-2 rounded-full bg-[#ED9ABC]/30" />
                                        <div className="w-2 h-2 rounded-full bg-[#ED9ABC]/30" />
                                    </div>

                                    {/* Image */}
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover mt-6 transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-[#500712]/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                                </div>

                                <div className="mt-6 flex justify-between items-baseline">
                                    <h3 className="font-serif text-2xl text-[#F1DFD1] group-hover:text-[#ED9ABC] transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <span className="font-sans text-xs text-[#ED9ABC]/40 uppercase tracking-widest group-hover:text-[#ED9ABC] transition-colors duration-300">
                                        Visit Website ↗
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
