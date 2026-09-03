// Brand Colors
export const colors = {
  black: "#000000",
  burgundy: "#500712",
  mediumPink: "#ED9ABC",
  lightPink: "#FFB8D5",
  beige: "#F1DFD1",
  white: "#FFFFFF",
} as const;

// Z-Index Hierarchy
export const zIndex = {
  navigation: 50,
  modal: 40,
  overlappingImages: 10,
  decorativeElements: 5,
  baseContent: 1,
  backgroundElements: -1,
} as const;

// Services Data - Categorized
export const serviceCategories = [
  {
    id: "estrategia",
    title: "Estrategia y Contenido",
    subtitle: "Planificación y gestión de tu presencia digital",
    services: [
      {
        id: 1,
        title: "Social Media",
        description: "Creamos contenido visual alineado a la identidad, estética y tono de tu marca. Desarrollamos piezas gráficas y audiovisuales listas para usar, pensadas para sostener una presencia digital cuidada y coherente.",
        icon: "Share2",
      },
      {
        id: 2,
        title: "Community Manager",
        description: "Gestionamos tus redes de manera integral: creatividad, planificación, grabación, edición y publicación de contenido. Trabajamos la comunicación diaria para construir comunidad, generar interacción y fortalecer la marca.",
        icon: "Users",
      },
      {
        id: 7,
        title: "Campaña Publicitaria 360°",
        description: "Desarrollamos campañas publicitarias para lanzamientos, promociones o acciones especiales. Nos enfocamos en la idea creativa, la producción de contenido y la pauta digital para lograr mayor alcance y resultados.", icon: "ChartNoAxesColumnDecreasing",
      },
    ],
  },
  {
    id: "digital",
    title: "Digital y Web",
    subtitle: "Desarrollo y optimización de plataformas",
    services: [
      {
        id: 5,
        title: "Diseño Web y E-commerce",
        description: "Diseñamos y desarrollamos sitios web funcionales, claros y alineados a la identidad de tu marca. Creamos experiencias digitales que comunican, ordenan la información y acompañan los objetivos del negocio.",
        icon: "Laptop",
      },
      {
        id: 6,
        title: "SEO y Posicionamiento",
        description: "Optimizamos tu presencia digital para que tu marca sea fácilmente encontrada en Google, aumentando visibilidad y alcance orgánico.",
        icon: "Search",
      },
      {
        id: 9,
        title: "Web Management Mensual",
        description: "Mantenimiento completo de tu sitio: actualización de productos, gestión de inventario, carga de contenido y soporte continuo.",
        icon: "Laptop",
      },
    ],
  },
  {
    id: "produccion",
    title: "Producción Visual",
    subtitle: "Contenido audiovisual e identidad de marca",
    services: [
      {
        id: 3,
        title: "Producción y Edición",
        description: "Creamos piezas visuales de alto impacto: fotos, videos y diseño gráfico, con edición profesional y postproducción que refleje la identidad de tu marca.",
        icon: "Camera",
      },
      {
        id: 4,
        title: "Cobertura de Eventos",
        description: "Realizamos cobertura de eventos creando contenido en el momento y material posterior para redes sociales. Permitimos que tu comunidad vea, sienta y reviva la experiencia a través de una comunicación auténtica.", icon: "Video",
      },
      {
        id: 8,
        title: "Diseño de Branding",
        description: "Transformamos la esencia de tu proyecto en un sistema visual sólido y coherente: logo, paleta cromática, tipografías y universo visual.",
        icon: "Component",
      },
    ],
  },

] as const;

// Flat services array for backwards compatibility
export const services = serviceCategories.flatMap(cat => [...cat.services]);



// Navigation Links
export const navLinks = [
  { href: "servicios", label: "Servicios" },
  { href: "nosotras", label: "Nosotras" },
  { href: "portfolio", label: "Portfolio" },
  { href: "recursos", label: "Recursos" },
 // { href: "blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
] as const;

// Social Media Links
export const socialLinks = [
  { platform: "Instagram", url: "https://www.instagram.com/gaia_studio?igsh=MWszOGh5ZnN0MWxpag==", icon: "Instagram" },
  { platform: "WhatsApp", url: "https://wa.me/59891099805", icon: "MessageCircle" },
  { platform: "LinkedIn", url: "https://uy.linkedin.com/company/agencia-gaia-studio", icon: "Linkedin" },
] as const;

// Contact Information
export const contactInfo = {
  email: "gaiacontacto.studio@gmail.com",
  phone: "+598 91 099 805",
  address: "Montevideo, Uruguay",
} as const;
