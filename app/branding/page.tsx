import type { Metadata } from 'next';
import { ServiceLanding } from '@/components/sections/ServiceLanding';

export const metadata: Metadata = {
  title: 'Branding e Identidad Visual | Gaia Studio',
  description: 'Construimos la identidad visual de tu marca desde cero o la renovamos. Logo, paleta cromatica, tipografias y sistema visual coherente.',
  openGraph: {
    title: 'Branding e Identidad Visual | Gaia Studio',
    description: 'Construimos la identidad visual de tu marca desde cero o la renovamos para que comunique tu esencia.',
    siteName: 'Gaia Studio',
    locale: 'es_UY',
    type: 'website',
  },
  alternates: {
    canonical: '/branding',
  },
};

export default function BrandingPage() {
  return (
    <ServiceLanding
      slug="branding"
      breadcrumb="Servicios"
      title="Branding"
      subtitle="Construimos la identidad visual de tu marca desde cero o la renovamos para que comunique tu esencia de forma coherente y profesional."
      description="Una marca es mucho mas que un logo. Es lo que se ve, lo que se siente y lo que se recuerda. El branding es el proceso de traducir la esencia de tu proyecto en un sistema visual solido: colores, tipografias, formas y reglas de uso que aseguran coherencia en cada punto de contacto. Trabajamos con emprendimientos que nacen y necesitan una identidad desde cero, y con marcas que ya existen pero sienten que su imagen actual no las representa. El objetivo es que tu marca comunique quien es sin necesidad de explicarlo."
      includes={[
        'Diseno de Branding',
        'Identidad Visual',
      ]}
      problems={[
        'Tu marca no tiene una identidad visual definida o esta armada de forma improvisada.',
        'El logo y los colores actuales no reflejan la evolucion ni los valores de tu negocio.',
        'Cada pieza que creas se ve distinta porque no hay una guia visual que ordene.',
        'Necesitas profesionalizar tu imagen para transmitir confianza y credibilidad.',
        'Queres que tu marca sea reconocible y coherente en todos los canales y formatos.',
      ]}
      process={[
        {
          step: '01',
          title: 'Descubrimiento',
          description: 'Profundizamos en tu marca: valores, publico objetivo, diferenciadores y referencias visuales.',
        },
        {
          step: '02',
          title: 'Concepto',
          description: 'Definimos la direccion creativa: el estilo, la personalidad visual y el camino estetico.',
        },
        {
          step: '03',
          title: 'Diseno',
          description: 'Creamos el logo, la paleta cromatica, las tipografias y los elementos visuales del sistema.',
        },
        {
          step: '04',
          title: 'Sistematizacion',
          description: 'Armamos las reglas de uso y aplicamos la identidad a piezas clave para verificar coherencia.',
        },
        {
          step: '05',
          title: 'Entrega',
          description: 'Entregamos todos los archivos, guias y formatos necesarios para que tu marca se use correctamente.',
        },
      ]}
      results={[
        'Una identidad visual solida y coherente que refleja la esencia de tu marca.',
        'Reconocimiento y diferenciacion frente a la competencia a traves de una imagen cuidada.',
        'Guia clara para aplicar la marca en cualquier formato o canal sin perder consistencia.',
        'Profesionalizacion de tu imagen que transmite confianza a clientes y aliados.',
        'Un sistema visual flexible que puede crecer y adaptarse con tu negocio.',
      ]}
    />
  );
}
