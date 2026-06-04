import type { Metadata } from 'next';
import { ServiceLanding } from '@/components/sections/ServiceLanding';

export const metadata: Metadata = {
  title: 'Gestion de Redes Sociales | Gaia Studio',
  description: 'Estrategia integral de redes sociales para construir y fortalecer la presencia digital de tu marca. Social media, community management y produccion de contenido.',
  openGraph: {
    title: 'Gestion de Redes Sociales | Gaia Studio',
    description: 'Estrategia integral de redes sociales para construir y fortalecer la presencia digital de tu marca.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/gestion-redes-sociales',
  },
};

export default function GestionRedesSocialesPage() {
  return (
    <ServiceLanding
      slug="gestion-redes-sociales"
      breadcrumb="Servicios"
      title="Gestion de Redes Sociales"
      subtitle="Estrategia integral para construir y fortalecer la presencia de tu marca en redes sociales, combinando creatividad, planificacion y contenido de calidad."
      description="Las redes sociales son hoy el punto de contacto mas directo entre una marca y su comunidad. Pero estar presente no alcanza: importa como se comunica, que se muestra y con que frecuencia. Nos hacemos cargo de toda la gestion —desde la estrategia hasta la publicacion— para que tu marca tenga una presencia cuidada, coherente y constante. Trabajamos junto a emprendimientos, marcas personales y empresas que necesitan ordenar su comunicacion digital sin perder autenticidad."
      includes={[
        'Social Media',
        'Community Manager',
        'Produccion y Edicion',
      ]}
      problems={[
        'Tu marca tiene redes pero no logra mantener una linea comunicacional consistente.',
        'No tenes tiempo ni equipo dedicado para gestionar la publicacion y la interaccion diaria.',
        'El contenido que se publica no refleja la identidad visual ni el tono de la marca.',
        'Necesitas planificar con anticipacion y tener una estrategia clara, no improvisar.',
        'Queres construir comunidad y generar interaccion real, no solo acumular seguidores.',
      ]}
      process={[
        {
          step: '01',
          title: 'Descubrimiento',
          description: 'Analizamos tu marca, tu audiencia actual y tu presencia en redes para entender el punto de partida.',
        },
        {
          step: '02',
          title: 'Estrategia',
          description: 'Definimos los ejes de contenido, el tono comunicacional y la frecuencia de publicacion ideal.',
        },
        {
          step: '03',
          title: 'Produccion',
          description: 'Creamos las piezas graficas, audiovisuales y los textos alineados a la identidad de tu marca.',
        },
        {
          step: '04',
          title: 'Gestion',
          description: 'Publicamos, respondemos, interactuamos y acompanamos a tu comunidad de forma constante.',
        },
        {
          step: '05',
          title: 'Optimizacion',
          description: 'Revisamos metricas, ajustamos la estrategia y mejoramos continuamente los resultados.',
        },
      ]}
      results={[
        'Una presencia digital ordenada, coherente y alineada con la identidad de tu marca.',
        'Contenido planificado y de calidad que refleja profesionalismo y cuida la imagen.',
        'Interaccion genuina con tu comunidad, fortaleciendo el vinculo con tu audiencia.',
        'Ahorro de tiempo y recursos al delegar la gestion completa a un equipo especializado.',
        'Una estrategia que evoluciona con base en datos reales, no en suposiciones.',
      ]}
    />
  );
}
