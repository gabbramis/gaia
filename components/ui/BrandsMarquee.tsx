import Image from 'next/image';

const brands = [
  { name: 'Adriana Costa Orfebre', image: '/marcas/white/white-header.png' },
  { name: 'Era Fit', image: '/marcas/white/era-logos.png' },
  { name: '4Nuts', image: '/marcas/white/4nuts.png' },
  { name: 'Mimo Rewards', image: '/marcas/white/mimo-rewards.png' },
  { name: 'IAG Logística', image: '/marcas/white/chunitur.png' },
  { name: 'Clean My Zapatos', image: '/marcas/white/clean-my-zapas.png' },
  { name: 'Motoservice', image: '/marcas/white/motoservice-logo.png' },
  { name: 'Trium Seguridad Privada', image: '/marcas/white/trium.png' },
] as const;

export function BrandsMarquee() {
  return (
    <div className="relative z-10 border-t border-[var(--gaia-pink)]/15 bg-[var(--gaia-burgundy)]/60 py-5 md:py-6">
      <p className="px-6 text-center font-sans text-[9px] font-semibold uppercase tracking-[0.26em] text-[var(--gaia-pink)]/60 sm:text-[10px]">
        Marcas que confiaron en nosotras
      </p>

      <div className="mt-4 overflow-hidden">
        <div className="animate-logo-marquee flex w-max items-center">
          {[0, 1, 2, 3].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy !== 0}
              className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
            >
              {brands.map((brand) => (
                <li
                  key={brand.name}
                  className="flex h-7 w-[115px] shrink-0 items-center justify-center opacity-80 sm:h-8 sm:w-[150px]"
                >
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={270}
                    height={64}
                    sizes="150px"
                    className="h-full w-full object-contain"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
