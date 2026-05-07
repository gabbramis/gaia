"use client";

import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/constants";
import { useState } from "react";
import { Cherry } from "lucide-react";
import { trackContact, trackLead, trackCustomEvent } from '@/lib/analytics/facebook-pixel';

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "El nombre es requerido";
    if (!email.trim()) newErrors.email = "El email es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Ingresá un email válido";
    if (!message.trim()) newErrors.message = "El mensaje es requerido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(false);
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setIsSubmitted(true);

        // Track contact events
        trackContact({
          content_name: 'Contact Form',
          content_category: 'Lead Generation',
        });

        trackLead({
          content_name: 'Contact Form Submission',
        });
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="relative min-h-screen bg-[var(--gaia-burgundy)] py-16 md:py-32 px-6 md:px-12 flex items-center border-t border-[var(--gaia-pink)]/10"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <span className="block text-[var(--gaia-pink)] text-sm tracking-[0.3em] uppercase mb-6">
            Get in Touch
          </span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="font-serif text-5xl md:text-7xl text-[var(--gaia-beige)] mb-8 tracking-tight"
          >
            Contacto
          </motion.h2>
          <p className="font-sans text-[var(--gaia-beige)]/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            ¿Lista para transformar tu marca? Escríbenos y comencemos a crear algo extraordinario.
          </p>
        </div>

        {!isSubmitted ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleContact}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group">
                <label htmlFor="contact-name" className="sr-only">Nombre</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrors((prev) => ({ ...prev, name: "" })); }}
                  className="w-full bg-transparent border-b border-[var(--gaia-pink)]/30 py-4 text-[var(--gaia-beige)] placeholder-[var(--gaia-beige)]/30 focus:outline-none focus:border-[var(--gaia-pink)] transition-colors duration-300 font-sans tracking-wide"
                />
                {errors.name && <p className="text-[var(--gaia-pink)] text-xs mt-2 tracking-wide">{errors.name}</p>}
              </div>
              <div className="group">
                <label htmlFor="contact-email" className="sr-only">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: "" })); }}
                  className="w-full bg-transparent border-b border-[var(--gaia-pink)]/30 py-4 text-[var(--gaia-beige)] placeholder-[var(--gaia-beige)]/30 focus:outline-none focus:border-[var(--gaia-pink)] transition-colors duration-300 font-sans tracking-wide"
                />
                {errors.email && <p className="text-[var(--gaia-pink)] text-xs mt-2 tracking-wide">{errors.email}</p>}
              </div>
            </div>

            <div className="group">
              <label htmlFor="contact-message" className="sr-only">Mensaje</label>
              <textarea
                id="contact-message"
                placeholder="Mensaje"
                rows={4}
                value={message}
                onChange={(e) => { setMessage(e.target.value); setErrors((prev) => ({ ...prev, message: "" })); }}
                className="w-full bg-transparent border-b border-[var(--gaia-pink)]/30 py-4 text-[var(--gaia-beige)] placeholder-[var(--gaia-beige)]/30 focus:outline-none focus:border-[var(--gaia-pink)] transition-colors duration-300 font-sans tracking-wide resize-none"
              />
              {errors.message && <p className="text-[var(--gaia-pink)] text-xs mt-2 tracking-wide">{errors.message}</p>}
            </div>

            {submitError && (
              <p className="text-[var(--gaia-pink)] text-sm text-center tracking-wide">
                Hubo un error al enviar el mensaje. Por favor intentá de nuevo.
              </p>
            )}

            <div className="flex justify-center pt-8">
              <Button
                size="lg"
                type="submit"
                disabled={isSubmitting}
                className="bg-transparent border border-[var(--gaia-pink)] text-[var(--gaia-pink)] hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] rounded-none px-8 md:px-16 py-5 md:py-6 text-sm tracking-[0.15em] uppercase transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center py-12 md:py-20"
          >
            <div className="mb-8">
              <div className="inline-block mb-6">
                <Cherry className="w-12 h-12 text-[var(--gaia-pink)] animate-pulse" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-[var(--gaia-beige)] mb-6">
                ¡Gracias!
              </h3>
              <p className="font-sans text-[var(--gaia-beige)]/70 text-lg md:text-xl max-w-lg mx-auto leading-relaxed mb-10">
                ¡Que lindo que quieras ser parte de Gaia! Pronto nos estaremos contactando contigo.
                Te dejamos nuestro instagram para que veas mas de cerca nuestro trabajo.
              </p>
              <a
                href="https://www.instagram.com/gaia_studio?igsh=MWszOGh5ZnN0MWxpag=="
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackCustomEvent('Instagram', {
                    category: 'Social Media',
                    action: 'Click',
                    source: 'Thank You Message',
                  });
                }}
                className="inline-block border border-[var(--gaia-pink)] text-[var(--gaia-pink)] hover:bg-[var(--gaia-pink)] hover:text-[var(--gaia-burgundy)] px-8 py-3 text-sm tracking-[0.2em] uppercase transition-all duration-500"
              >
                Instagram
              </a>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-[var(--gaia-pink)]/40 hover:text-[var(--gaia-pink)] text-xs uppercase tracking-[0.2em] transition-colors"
            >
              Enviar otro mensaje
            </button>
          </motion.div>
        )}

        <div className="mt-24 pt-12 border-t border-[var(--gaia-pink)]/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[var(--gaia-beige)]/40 font-sans text-sm tracking-widest uppercase">
          <a href={`mailto:${contactInfo.email}`} className="hover:text-[var(--gaia-pink)] transition-colors">
            {contactInfo.email}
          </a>
          <span>{contactInfo.address}</span>
          <span className="flex flex-col md:flex-row gap-2">
            {contactInfo.phone.split(' - ').map((num) => (
              <a
                key={num}
                href={`tel:${num.replace(/\s/g, '')}`}
                className="hover:text-[var(--gaia-pink)] transition-colors"
              >
                {num.trim()}
              </a>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
