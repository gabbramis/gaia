'use client';

import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';

const contentCategories = [
    {
        id: 'fotos',
        title: 'Fotos',
        image: '/images/portfolio/1.jpg', // Placeholder, will use actual images
        description: 'Fotografía Editorial'
    },
    {
        id: 'reels',
        title: 'Reels',
        image: '/images/portfolio/2.jpg',
        description: 'Contenido Vertical'
    },
    {
        id: 'campanas',
        title: 'Campañas',
        image: '/images/portfolio/3.jpg',
        description: 'Producción Integral'
    }
];

export function Contenidos() {
    return (
        <section id="contenidos" className="relative bg-[#500712] py-32 px-6 md:px-12 border-t border-[#ED9ABC]/10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-24 text-center"
                >
                    <span className="block text-[#ED9ABC] text-sm tracking-[0.3em] uppercase mb-4">
                        Visual Storytelling
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl text-[#F1DFD1] tracking-tight">
                        Contenidos
                    </h2>
                </motion.div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contentCategories.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
                        >
                            {/* Image */}
                            <div className="absolute inset-0 bg-[#ED9ABC]/5">
                                {/* Using a placeholder div if image fails, but ideally this is an Image component */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                                />
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#500712] via-transparent to-transparent">
                                <span className="font-sans text-xs text-[#ED9ABC] uppercase tracking-[0.2em] mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {item.description}
                                </span>
                                <h3 className="font-serif text-4xl text-[#F1DFD1] group-hover:text-[#ED9ABC] transition-colors duration-300">
                                    {item.title}
                                </h3>
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
