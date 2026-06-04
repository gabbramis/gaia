import type { Metadata } from 'next';
import { ServiceLanding } from '@/components/sections/ServiceLanding';

export const metadata: Metadata = {
  title: 'Campanas Publicitarias 360 | Gaia Studio',
  description: 'Disenamos y ejecutamos campanas publicitarias con ideas creativas, produccion de contenido y pauta digital estrategica para maximizar el impacto.',
  openGraph: {
    title: 'Campanas Publicitarias 360 | Gaia Studio',
    description: 'Disenamos y ejecutamos campanas 360 con ideas creativas y pauta digital estrategica para maximizar el impacto de cada accion.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/campanas-publicitarias',
  },
};

export default function CampanasPublicitariasPage() {
  return (
    <ServiceLanding
      slug="campanas-publicitarias"
      breadcrumb="Servicios"
      title="Campanas Publicitarias"
      subtitle="Disenamos y ejecutamos campanas 360 con ideas creativas, produccion de contenido y pauta digital estrategica para maximizar el impacto."
      description="Una campana publicitaria es un momento de intensidad para una marca: un lanzamiento, una promocion, una fecha clave. No se trata solo de publicar algo bonito, sino de generar un movimiento coordinado que llegue a la audiencia correcta, en el momento correcto, con el mensaje correcto. Desarrollamos la idea creativa, producimos el contenido, planificamos la pauta digital y acompanamos la ejecucion para que cada accion tenga sentido dentro de un todo. Trabajamos con marcas que quieren generar impacto real, no solo ruido."
      includes={[
        'Campanas Publicitarias 360',
        'Promociones',
        'Lanzamientos',
      ]}
      problems={[
        'Necesitas lanzar un producto o servicio y no sabes como estructurar la comunicacion.',
        'Hiciste acciones sueltas en el pasado pero nunca una campana integrada con estrategia.',
        'Queres generar impacto en una fecha clave (Black Friday, Dia de la Madre, etc.) y necesitas planificar con tiempo.',
        'Tu marca necesita visibilidad rapida y focalizada para un objetivo concreto.',
        'Tenes el contenido pero no sabes como distribuirlo ni como invertir en pauta de forma inteligente.',
      ]}
      process={[
        {
          step: '01',
          title: 'Briefing',
          description: 'Definimos el objetivo de la campana, la audiencia, el mensaje clave y los canales.',
        },
        {
          step: '02',
          title: 'Idea Creativa',
          description: 'Desarrollamos el concepto central, la pieza visual y el tono comunicacional de la campana.',
        },
        {
          step: '03',
          title: 'Produccion',
          description: 'Creamos todo el contenido necesario: graficas, videos, reels, copys y adaptaciones por canal.',
        },
        {
          step: '04',
          title: 'Ejecucion',
          description: 'Lanzamos la campana coordinando publicaciones organicas y pauta digital de forma sincronizada.',
        },
        {
          step: '05',
          title: 'Medicion',
          description: 'Analizamos los resultados, el alcance y el rendimiento para aprender y optimizar la siguiente.',
        },
      ]}
      results={[
        'Una campana integrada donde cada accion tiene sentido dentro de una estrategia clara.',
        'Contenido creativo y de calidad que captura la atencion y comunica el mensaje.',
        'Alcance ampliado combinando publicacion organica con pauta digital bien segmentada.',
        'Coordinacion y profesionalismo en la ejecucion, sin improvisaciones de ultimo momento.',
        'Medicion y aprendizaje para que cada campana sea mejor que la anterior.',
      ]}
    />
  );
}
