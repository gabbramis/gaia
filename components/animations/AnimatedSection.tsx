'use client';

import { motion, Variants } from 'motion/react';
import { ReactNode } from 'react';
import { defaultViewport } from '@/lib/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  variants,
  className = '',
  delay = 0,
}: AnimatedSectionProps) {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
