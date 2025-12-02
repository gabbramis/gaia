'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon, Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Service {
    readonly id: number | string;
    readonly title: string;
    readonly description: string;
    readonly icon: string;
}

interface ServiceAccordionProps {
    items: readonly Service[];
    iconMap: Record<string, LucideIcon>;
}

export function ServiceAccordion({ items, iconMap }: ServiceAccordionProps) {
    const [openId, setOpenId] = useState<number | string | null>(null);

    return (
        <div className="flex flex-col gap-4">
            {items.map((item, index) => {
                const isOpen = openId === item.id;
                const Icon = iconMap[item.icon];

                return (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={cn(
                            "border border-[#ED9ABC]/10 bg-[#500712] overflow-hidden transition-all duration-500",
                            isOpen ? "bg-[#500712]/50 border-[#ED9ABC]/30" : ""
                        )}
                    >
                        <button
                            onClick={() => setOpenId(isOpen ? null : item.id)}
                            className="w-full flex items-center justify-between p-6 text-left group"
                        >
                            <div className="flex items-center gap-4">
                                <div className={cn(
                                    "text-[#ED9ABC] transition-transform duration-500",
                                    isOpen ? "scale-110" : "group-hover:scale-110"
                                )}>
                                    {Icon && <Icon size={24} strokeWidth={1} />}
                                </div>
                                <span className={cn(
                                    "font-serif text-xl md:text-2xl transition-colors duration-300",
                                    isOpen ? "text-[#ED9ABC]" : "text-[#F1DFD1] group-hover:text-[#ED9ABC]"
                                )}>
                                    {item.title}
                                </span>
                            </div>

                            <div className="text-[#ED9ABC]/50">
                                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                        </button>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 pb-6 pt-0">
                                        <div className="pl-[40px]"> {/* Align with text start */}
                                            <p className="font-sans text-[#F1DFD1]/70 text-sm leading-relaxed tracking-wide border-l border-[#ED9ABC]/20 pl-4">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </div>
    );
}
