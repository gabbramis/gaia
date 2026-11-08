'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

type ProgressiveImageProps = ImageProps & {
  overlayClassName?: string;
};

export function ProgressiveImage({
  alt,
  className,
  overlayClassName = '',
  onLoad,
  ...props
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <div
          aria-hidden="true"
          className={`absolute inset-0 animate-pulse bg-[var(--gaia-pink)]/10 ${overlayClassName}`}
        />
      ) : null}

      <Image
        {...props}
        alt={alt}
        className={className}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
      />
    </>
  );
}
