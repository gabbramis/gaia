'use client';

import type { ReactNode } from 'react';
import { captureClientEvent } from '@/lib/analytics/posthog-client';
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
        captureClientEvent('whatsapp_link_clicked', { source });

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
