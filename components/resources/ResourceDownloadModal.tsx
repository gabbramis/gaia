'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { trackCustomEvent } from '@/lib/analytics/facebook-pixel';

interface ResourceDownloadModalProps {
  resource: {
    slug: string;
    title: string;
    shortDescription?: string;
    requiresEmail: boolean;
    resourceUrl: string | null;
    canvaUrl: string | null;
    downloadableFileUrl: string | null;
  };
  onSuccess: () => void;
  onClose: () => void;
}

export function ResourceDownloadModal({
  resource,
  onSuccess,
  onClose,
}: ResourceDownloadModalProps) {
  const [name, setName] = useState('');
  const storedEmail = typeof window !== 'undefined' ? localStorage.getItem('gaia_resource_email') : null;
  const [email, setEmail] = useState(storedEmail || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedName) {
      setError('Por favor, ingresá tu nombre.');
      return;
    }

    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Por favor, ingresá un email válido.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/resources/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, resourceSlug: resource.slug }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setError(data.error || 'Hubo un error. Intentá de nuevo.');
        return;
      }

      trackCustomEvent('Resource Request', {
        category: 'Resource',
        action: 'Request',
        resource: resource.title,
      });

      if (typeof window !== 'undefined') {
        localStorage.setItem('gaia_resource_email', trimmedEmail);
      }

      const url = data.resourceUrl || data.canvaUrl || data.downloadableFile;
      if (url) {
        trackCustomEvent('Resource Download', {
          category: 'Resource',
          action: 'Download',
          resource: resource.title,
        });
        window.open(url, '_blank', 'noopener,noreferrer');
      }

      onSuccess();
    } catch {
      setError('Hubo un error de conexión. Intentá de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    const url = resource.resourceUrl || resource.canvaUrl || resource.downloadableFileUrl;

    if (url) {
      trackCustomEvent('Resource Download', {
        category: 'Resource',
        action: 'Download',
        resource: resource.title,
      });
      window.open(url, '_blank', 'noopener,noreferrer');
    }

    onSuccess();
  };

  const hasResource = resource.resourceUrl || resource.canvaUrl || resource.downloadableFileUrl;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-lg rounded-sm border border-[var(--gaia-pink)]/20 bg-[var(--gaia-burgundy)] p-6 md:p-8 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-[var(--gaia-beige)]/40 hover:text-[var(--gaia-pink)] transition-colors"
            aria-label="Cerrar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <h3 className="font-serif text-2xl md:text-3xl text-[var(--gaia-beige)] mb-2 pr-8">
            {resource.title}
          </h3>

          {resource.shortDescription && (
            <p className="font-sans text-sm text-[var(--gaia-beige)]/60 mb-6 leading-relaxed">
              {resource.shortDescription}
            </p>
          )}

          {!hasResource ? (
            <p className="font-sans text-sm text-[var(--gaia-beige)]/40 text-center py-4">
              Este recurso aún no está disponible para descarga.
            </p>
          ) : storedEmail ? (
            <button
              onClick={handleDownload}
              className="w-full inline-flex items-center justify-center gap-3 rounded-sm border border-[var(--gaia-pink)] bg-[var(--gaia-pink)] px-6 py-4 font-sans text-sm uppercase tracking-[0.12em] text-[var(--gaia-burgundy)] transition-all duration-300 hover:bg-[var(--gaia-beige)] hover:border-[var(--gaia-beige)]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Descargar recurso
            </button>
          ) : resource.requiresEmail ? (
            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div>
                <label
                  htmlFor="modal-resource-name"
                  className="block font-sans text-xs uppercase tracking-[0.12em] text-[var(--gaia-pink)]/70 mb-2"
                >
                  Tu nombre
                </label>
                <input
                  id="modal-resource-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                  className="w-full rounded-sm border border-[var(--gaia-pink)]/30 bg-[var(--gaia-burgundy)] px-4 py-3 font-sans text-sm text-[var(--gaia-beige)] placeholder:text-[var(--gaia-beige)]/30 focus:border-[var(--gaia-pink)] focus:outline-none focus:ring-1 focus:ring-[var(--gaia-pink)]/50 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-resource-email"
                  className="block font-sans text-xs uppercase tracking-[0.12em] text-[var(--gaia-pink)]/70 mb-2"
                >
                  Tu email
                </label>
                <input
                  id="modal-resource-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="tu@email.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-sm border border-[var(--gaia-pink)]/30 bg-[var(--gaia-burgundy)] px-4 py-3 font-sans text-sm text-[var(--gaia-beige)] placeholder:text-[var(--gaia-beige)]/30 focus:border-[var(--gaia-pink)] focus:outline-none focus:ring-1 focus:ring-[var(--gaia-pink)]/50 transition-all duration-300"
                />
              </div>

              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="font-sans text-xs text-red-400"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-sm border border-[var(--gaia-pink)] bg-[var(--gaia-pink)] px-6 py-3 font-sans text-xs uppercase tracking-[0.12em] text-[var(--gaia-burgundy)] transition-all duration-300 hover:bg-[var(--gaia-beige)] hover:border-[var(--gaia-beige)] disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Procesando...
                  </span>
                ) : (
                  'Quiero el recurso'
                )}
              </button>
            </form>
          ) : (
            <button
              onClick={handleDownload}
              className="w-full inline-flex items-center justify-center gap-3 rounded-sm border border-[var(--gaia-pink)] bg-[var(--gaia-pink)] px-6 py-4 font-sans text-sm uppercase tracking-[0.12em] text-[var(--gaia-burgundy)] transition-all duration-300 hover:bg-[var(--gaia-beige)] hover:border-[var(--gaia-beige)]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Descargar recurso
            </button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
