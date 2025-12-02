'use client';

import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/lib/constants';

export function Contact() {
  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section
      id="contacto"
      className="relative min-h-screen bg-[#500712] py-16 md:py-32 px-6 md:px-12 flex items-center border-t border-[#ED9ABC]/10"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <span className="block text-[#ED9ABC] text-sm tracking-[0.3em] uppercase mb-6">
            Get in Touch
          </span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="font-serif text-5xl md:text-7xl text-[#F1DFD1] mb-8 tracking-tight"
          >
            Contacto
          </motion.h2>
          <p className="font-sans text-[#F1DFD1]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            ¿Lista para transformar tu marca? Escríbenos y comencemos a crear algo extraordinario.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleContact}
          className="space-y-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full bg-transparent border-b border-[#ED9ABC]/30 py-4 text-[#F1DFD1] placeholder-[#F1DFD1]/30 focus:outline-none focus:border-[#ED9ABC] transition-colors duration-300 font-sans tracking-wide"
              />
            </div>
            <div className="group">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-[#ED9ABC]/30 py-4 text-[#F1DFD1] placeholder-[#F1DFD1]/30 focus:outline-none focus:border-[#ED9ABC] transition-colors duration-300 font-sans tracking-wide"
              />
            </div>
          </div>

          <div className="group">
            <textarea
              placeholder="Mensaje"
              rows={4}
              className="w-full bg-transparent border-b border-[#ED9ABC]/30 py-4 text-[#F1DFD1] placeholder-[#F1DFD1]/30 focus:outline-none focus:border-[#ED9ABC] transition-colors duration-300 font-sans tracking-wide resize-none"
            />
          </div>

          <div className="flex justify-center pt-8">
            <Button
              size="lg"
              type="submit"
              className="bg-transparent border border-[#ED9ABC] text-[#ED9ABC] hover:bg-[#ED9ABC] hover:text-[#500712] rounded-none px-16 py-6 text-sm tracking-[0.15em] uppercase transition-all duration-500"
            >
              Enviar Mensaje
            </Button>
          </div>
        </motion.form>

        <div className="mt-24 pt-12 border-t border-[#ED9ABC]/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[#F1DFD1]/40 font-sans text-sm tracking-widest uppercase">
          <a href={`mailto:${contactInfo.email}`} className="hover:text-[#ED9ABC] transition-colors">
            {contactInfo.email}
          </a>
          <span>{contactInfo.address}</span>
          <a href={`tel:${contactInfo.phone}`} className="hover:text-[#ED9ABC] transition-colors">
            {contactInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
