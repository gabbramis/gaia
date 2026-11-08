'use client';

import type { ReactNode } from 'react';
import posthog from 'posthog-js';
import { trackCustomEvent } from '@/lib/analytics/facebook-pixel';

type TrackedWhatsAppLinkProps = {
  children: ReactNode;
  className?: string;
  message: string;
  source: string;
};

export function TrackedWhatsAppLink({
  children,
  className,
  message,
  source,
}: TrackedWhatsAppLinkProps) {
  const href = `https://wa.me/59891099805?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        if (
          process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
          process.env.NEXT_PUBLIC_POSTHOG_HOST
        ) {
          posthog.capture('whatsapp_link_clicked', { source });
        }

        trackCustomEvent('WhatsApp contacto', {
          category: 'Lead Generation',
          action: 'Click',
          source,
        });
      }}
    >
      {children}
    </a>
  );
}
