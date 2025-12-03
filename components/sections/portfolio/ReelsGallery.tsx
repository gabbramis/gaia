'use client';

import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import { reels } from '@/lib/data/portfolio';
import { VideoEmbed } from '@/components/ui/VideoEmbed';

export function ReelsGallery() {
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

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
                    {reels.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            {/* Video Embed */}
                            <div className="relative overflow-hidden border border-[#ED9ABC]/10 group-hover:border-[#ED9ABC]/30 transition-colors duration-500">
                                <VideoEmbed video={item.video} />
                            </div>

                            {/* Info */}
                            <div className="mt-4 md:mt-6">
                                {item.client && (
                                    <span className="block font-sans text-xs text-[#ED9ABC] uppercase tracking-[0.2em] mb-2">
                                        {item.client}
                                    </span>
                                )}
                                <h3 className="font-serif text-xl md:text-2xl text-[#F1DFD1] group-hover:text-[#ED9ABC] transition-colors duration-300 mb-2">
                                    {item.title}
                                </h3>
                                {item.description && (
                                    <p className="font-sans text-sm text-[#F1DFD1]/60">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
