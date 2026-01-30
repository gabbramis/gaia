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
                        className={cn(
                            "border border-[var(--gaia-pink)]/10 bg-[var(--gaia-burgundy)] overflow-hidden transition-all duration-500",
                            isOpen ? "bg-[var(--gaia-burgundy)]/50 border-[var(--gaia-pink)]/30" : ""
                        )}
                    >
                        <button
                            onClick={() => setOpenId(isOpen ? null : item.id)}
                            className="w-full flex items-center justify-between p-6 text-left group"
                        >
                            <div className="flex items-center gap-4">
                                <div className={cn(
                                    "text-[var(--gaia-pink)] transition-transform duration-500",
                                    isOpen ? "scale-110" : "group-hover:scale-110"
                                )}>
                                    {Icon && <Icon size={24} strokeWidth={1} />}
                                </div>
                                <span className={cn(
                                    "font-serif text-xl md:text-2xl transition-colors duration-300",
                                    isOpen ? "text-[var(--gaia-pink)]" : "text-[var(--gaia-beige)] group-hover:text-[var(--gaia-pink)]"
                                )}>
                                    {item.title}
                                </span>
                            </div>

                            <div className="text-[var(--gaia-pink)]/50">
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
                                            <p className="font-sans text-[var(--gaia-beige)]/70 text-sm leading-relaxed tracking-wide border-l border-[var(--gaia-pink)]/20 pl-4">
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
