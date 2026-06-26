'use client';

import Link from 'next/link';
import { trackCustomEvent } from '@/lib/analytics/facebook-pixel';

const WHATSAPP_URL = 'https://wa.me/59891099805';

export function WhatsAppFloatingButton() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      onClick={() => {
        trackCustomEvent('WhatsApp flotante', {
          category: 'Lead Generation',
          action: 'Click',
        });
      }}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--gaia-pink)]/30 bg-[var(--gaia-pink)] text-[var(--gaia-burgundy)] shadow-[0_18px_40px_rgba(237,154,188,0.28)] transition-all duration-300 hover:scale-[1.04] hover:bg-[var(--gaia-beige)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gaia-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--gaia-burgundy)] md:bottom-6 md:right-6"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-6 w-6 fill-current"
      >
        <path d="M19.11 17.21c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.23 5.13 4.54.72.32 1.29.5 1.72.64.72.23 1.38.2 1.9.12.58-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        <path d="M16.01 3.2c-6.98 0-12.65 5.66-12.65 12.62 0 2.23.58 4.41 1.7 6.32L3.2 28.8l6.83-1.79a12.7 12.7 0 0 0 5.98 1.52h.01c6.97 0 12.64-5.66 12.64-12.63 0-3.37-1.32-6.53-3.7-8.92A12.6 12.6 0 0 0 16.01 3.2Zm0 22.99h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.22-4.06 1.07 1.09-3.95-.25-.41a10.43 10.43 0 0 1-1.61-5.57c0-5.77 4.72-10.47 10.54-10.47 2.82 0 5.46 1.09 7.45 3.07a10.39 10.39 0 0 1 3.08 7.4c0 5.78-4.72 10.48-10.5 10.48Z" />
      </svg>
    </Link>
  );
}
