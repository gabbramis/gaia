'use client';

import { motion } from 'motion/react';
import { fadeInUp, fadeIn } from '@/lib/animations';
import { Button } from '@/components/ui/button';

export function Contact() {
  const handleContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contacto"
      className="relative min-h-[80vh] bg-gradient-burgundy-pink py-32 px-6 md:px-12 flex items-center"
    >
      {/* Texture Overlay */}
      <div className="texture-overlay absolute inset-0 animate-gradient" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-8 text-tight tracking-premium"
        >
          ¿Lista para transformar tu marca?
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.6, delay: 0.4 },
            },
          }}
          className="font-sans text-xl md:text-2xl text-[#FFB8D5] mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          Trabajemos juntas para crear algo extraordinario. Una marca que inspire, conecte y perdure.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, delay: 0.8 },
            },
          }}
        >
          <Button
            size="lg"
            onClick={handleContact}
            className="bg-white text-[#500712] hover:bg-[#FFB8D5] hover:text-white shadow-elevated text-lg px-12 py-6 h-auto font-semibold transition-all duration-300"
          >
            Contáctanos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
