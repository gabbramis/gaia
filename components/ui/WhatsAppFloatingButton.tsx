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
        <path d="M27.06 4.93A15.37 15.37 0 0 0 16.13.4C7.64.4.74 7.3.74 15.79c0 2.72.71 5.37 2.05 7.7L.4 31.6l8.32-2.18a15.33 15.33 0 0 0 7.39 1.88h.01c8.49 0 15.39-6.9 15.39-15.39 0-4.11-1.6-7.97-4.45-10.98Zm-10.93 23.8h-.01a12.7 12.7 0 0 1-6.48-1.77l-.46-.27-4.94 1.29 1.32-4.81-.3-.49a12.72 12.72 0 0 1-1.95-6.78c0-7.02 5.71-12.73 12.75-12.73 3.39 0 6.58 1.32 8.98 3.72a12.64 12.64 0 0 1 3.74 8.99c0 7.03-5.71 12.75-12.65 12.75Zm6.99-9.54c-.38-.19-2.23-1.1-2.58-1.23-.35-.13-.6-.19-.86.19-.25.38-.99 1.23-1.21 1.48-.22.25-.44.28-.82.1-.38-.19-1.6-.59-3.04-1.88-1.12-1-1.88-2.24-2.1-2.62-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.09-.19-.85-2.05-1.17-2.8-.31-.75-.62-.65-.86-.66l-.73-.01c-.25 0-.66.09-1 .47-.35.38-1.32 1.29-1.32 3.14 0 1.85 1.35 3.64 1.54 3.89.19.25 2.65 4.05 6.41 5.68.9.39 1.6.62 2.15.79.9.29 1.72.25 2.36.15.72-.11 2.23-.91 2.55-1.79.32-.88.32-1.63.22-1.79-.09-.16-.35-.25-.73-.44Z" />
      </svg>
    </Link>
  );
}
