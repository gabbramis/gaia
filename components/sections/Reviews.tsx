'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, Star, X } from 'lucide-react';
import { googleReviews, googleReviewsUrl } from '@/lib/google-reviews';

type Review = (typeof googleReviews)[number];

function ReviewCard({ review, onReadMore }: { review: Review; onReadMore: () => void }) {
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    if (!quoteRef.current) return;

    const quote = quoteRef.current;
    let active = true;
    const checkOverflow = () => {
      if (!active) return;
      const lineHeight = Number.parseFloat(window.getComputedStyle(quote).lineHeight);
      setIsTruncated(quote.scrollHeight > lineHeight * 3 + 1);
    };
    const observer = new ResizeObserver(checkOverflow);
    observer.observe(quote);
    void document.fonts.ready.then(checkOverflow);

    return () => {
      active = false;
      observer.disconnect();
    };
  }, []);

  return (
    <figure className="flex w-[min(84vw,23rem)] shrink-0 snap-start flex-col border border-[var(--gaia-pink)]/30 bg-[var(--gaia-pink)]/5 p-4 md:p-5">
      <div className="flex gap-0.5 text-[var(--gaia-pink)]" aria-label="5 de 5 estrellas">
        {Array.from({ length: 5 }, (_, index) => <Star key={index} size={13} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />)}
      </div>
      <blockquote ref={quoteRef} className="mt-4 line-clamp-3 font-serif text-[17px] leading-[1.4] tracking-tight">
        “{review.quote}”
      </blockquote>
      {isTruncated && (
        <button
          type="button"
          onClick={onReadMore}
          className="mb-4 mt-2 w-fit border-b border-[var(--gaia-pink)]/60 pb-0.5 font-sans text-[11px] font-semibold text-[var(--gaia-pink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gaia-pink)]"
        >
          Leer completa
        </button>
      )}
      <figcaption className={`mt-auto flex items-center gap-3 border-t border-[var(--gaia-pink)]/25 pt-3 ${isTruncated ? '' : 'mt-4'}`}>
        <Image src={review.avatarUrl} alt={'Imagen de perfil de ' + review.name} width={36} height={36} className="h-9 w-9 shrink-0 rounded-full object-cover" />
        <span className="min-w-0 font-sans">
          <a href={review.profileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gaia-pink)]">
            {review.name}
            <ArrowUpRight size={12} aria-hidden="true" />
          </a>
          <span className="block text-[11px] text-[var(--gaia-beige)]/60">Google Maps</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  const listRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedReview && !dialog.open) dialog.showModal();
    if (!selectedReview && dialog.open) dialog.close();
  }, [selectedReview]);

  const moveReviews = (direction: -1 | 1) => {
    const list = listRef.current;
    const card = list?.querySelector('figure');
    if (!list || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(list).columnGap) || 0;
    list.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  return (
    <section id="resenas" aria-labelledby="resenas-titulo" className="border-t border-[var(--gaia-pink)]/20 bg-[var(--gaia-burgundy)] px-6 py-10 text-[var(--gaia-beige)] md:px-12 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gaia-pink)]">
              Reseñas en Google Maps
            </p>
            <h2 id="resenas-titulo" className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              Trabajar con Gaia, en sus palabras.
            </h2>
          </div>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver las 6 opiniones de Gaia Studio en Google Maps, abre en una nueva pestaña"
            className="group inline-flex w-fit items-center gap-2 border-b border-[var(--gaia-pink)]/50 pb-1 font-sans text-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gaia-pink)]"
          >
            <span className="flex gap-0.5 text-[var(--gaia-pink)]" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => <Star key={index} size={12} fill="currentColor" strokeWidth={1.5} />)}
            </span>
            <strong className="font-semibold">5,0</strong>
            <span className="text-[var(--gaia-beige)]/75">· 6 opiniones</span>
            <ArrowUpRight size={14} aria-hidden="true" className="text-[var(--gaia-pink)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div
          ref={listRef}
          role="region"
          aria-label="Reseñas de clientes de Gaia Studio"
          tabIndex={0}
          className="reviews-track flex snap-x snap-mandatory gap-4 overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gaia-pink)]"
        >
          {googleReviews.map((review) => (
            <ReviewCard
              key={review.name}
              review={review}
              onReadMore={() => setSelectedReview(review)}
            />
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4">
          <p className="font-sans text-xs text-[var(--gaia-beige)]/60">Deslizá para leer las 5 reseñas</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => moveReviews(-1)} aria-label="Ver reseña anterior" className="flex h-9 w-9 items-center justify-center border border-[var(--gaia-pink)]/40 text-[var(--gaia-pink)] transition-colors hover:bg-[var(--gaia-pink)]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gaia-pink)]">
              <ArrowLeft size={16} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => moveReviews(1)} aria-label="Ver reseña siguiente" className="flex h-9 w-9 items-center justify-center border border-[var(--gaia-pink)]/40 text-[var(--gaia-pink)] transition-colors hover:bg-[var(--gaia-pink)]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gaia-pink)]">
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        <dialog
          ref={dialogRef}
          onClose={() => setSelectedReview(null)}
          aria-labelledby="resena-completa-titulo"
          className="m-auto max-h-[80vh] w-[min(90vw,34rem)] overflow-y-auto border border-[var(--gaia-pink)]/40 bg-[var(--gaia-burgundy)] p-6 text-[var(--gaia-beige)] shadow-2xl backdrop:bg-[var(--gaia-black)]/75 sm:p-8"
        >
          {selectedReview && (
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gaia-pink)]">Reseña en Google Maps</p>
                  <h3 id="resena-completa-titulo" className="sr-only">Reseña completa de {selectedReview.name}</h3>
                </div>
                <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Cerrar reseña" className="flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--gaia-pink)]/40 text-[var(--gaia-pink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gaia-pink)]">
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flex gap-0.5 text-[var(--gaia-pink)]" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />)}
              </div>
              <blockquote className="my-6 font-serif text-xl leading-relaxed sm:text-2xl">“{selectedReview.quote}”</blockquote>
              <div className="flex items-center gap-3 border-t border-[var(--gaia-pink)]/25 pt-4">
                <Image src={selectedReview.avatarUrl} alt={'Imagen de perfil de ' + selectedReview.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                <a href={selectedReview.profileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-sans text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gaia-pink)]">
                  {selectedReview.name}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          )}
        </dialog>
      </div>
    </section>
  );
}
