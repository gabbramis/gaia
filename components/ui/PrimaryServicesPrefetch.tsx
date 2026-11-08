'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type NetworkConnection = {
  effectiveType?: string;
  saveData?: boolean;
};

export function PrimaryServicesPrefetch() {
  const router = useRouter();

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: NetworkConnection }).connection;
    if (connection?.saveData || /(^|-)(2g|3g)$/.test(connection?.effectiveType ?? '')) {
      return;
    }

    // These cards sit below the first viewport, so warm their routes after the landing settles.
    const timeout = window.setTimeout(() => {
      router.prefetch('/gestion-redes-sociales');
      router.prefetch('/diseno-web');
    }, 1000);

    return () => window.clearTimeout(timeout);
  }, [router]);

  return null;
}
