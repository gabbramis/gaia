import type { Metadata } from 'next';
import { ServiceLanding } from '@/components/sections/ServiceLanding';

export const metadata: Metadata = {
  title: 'Cobertura de Eventos | Gaia Studio',
  description:
    'Cobertura de eventos para marcas, lanzamientos y experiencias. Foto, video y contenido listo para publicar en redes sociales.',
  openGraph: {
    title: 'Cobertura de Eventos | Gaia Studio',
    description:
      'Registramos tu evento con una cobertura visual cuidada, pensada para extender su impacto en redes y piezas de marca.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/cobertura-de-eventos',
  },
};

export default function CoberturaDeEventosPage() {
  return (
    <ServiceLanding
      slug="cobertura-de-eventos"
      title="Cobertura de Eventos"
      subtitle="Capturamos lo que pasa en tiempo real para que tu evento siga comunicando incluso despues de terminar."
      description="La cobertura de eventos combina mirada estrategica y produccion agil para registrar cada momento clave de una experiencia presencial. Generamos foto, video y piezas listas para publicar, para que tu marca pueda mostrar lo que sucedio con una estetica cuidada y coherente."
      includes={[
        'Cobertura fotografica del evento',
        'Registro de video vertical y horizontal',
        'Clips y contenido para historias',
        'Seleccion y edicion de material final',
        'Entrega de piezas listas para publicar',
        'Acompañamiento segun cronograma del evento',
      ]}
      problems={[
        'Marcas que organizan eventos y necesitan contenido profesional para mostrar la experiencia.',
        'Lanzamientos, activaciones o encuentros que requieren registro visual en tiempo real.',
        'Equipos que quieren reutilizar el evento como contenido para redes, pauta o comunicacion posterior.',
        'Negocios que necesitan una presencia mas cuidada y estrategica durante acciones presenciales.',
      ]}
      process={[
        {
          step: '01',
          title: 'Planificacion previa',
          description:
            'Definimos objetivos, momentos clave, tipo de contenido y necesidades de cobertura segun el formato del evento.',
        },
        {
          step: '02',
          title: 'Cobertura en sitio',
          description:
            'Registramos la experiencia en tiempo real con foco en marca, ambientacion, publico, detalles y momentos importantes.',
        },
        {
          step: '03',
          title: 'Seleccion y entrega',
          description:
            'Curamos y editamos el material para entregarlo listo para publicar o integrarlo a la estrategia digital de tu marca.',
        },
      ]}
      results={[
        'Contenido visual que prolonga el impacto del evento despues de finalizar.',
        'Material alineado con la identidad de tu marca y util para redes sociales.',
        'Mayor capacidad para comunicar la experiencia, convocatoria y valor de tu propuesta.',
        'Un banco de fotos y videos reutilizable para futuras acciones de marketing.',
      ]}
      ctaText="Coordinar cobertura"
    />
  );
}
