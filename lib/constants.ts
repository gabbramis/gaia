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

// Services Data
export const services = [
  {
    id: 1,
    title: "Social Media",
    description: "Diseñamos estrategias de contenido integrales, producimos publicaciones impactantes, gestionamos campañas y analizamos métricas para potenciar tu presencia digital.",
    icon: "Share2",
  },
  {
    id: 2,
    title: "Community Manager",
    description: "Gestionamos tus redes con publicación estrategica, interacción activa con tu comunidad y atención personalizada a comentarios y mensajes directos, manteniendo tu marca siempre viva y cercana.",
    icon: "Users",
  },
  {
    id: 3,
    title: "Producción y Edición",
    description: "Creamos piezas visuales de alto impacto: fotos, videos y diseño gráfico, con edición profesional y postproducción que refleje la identidad de tu marca.",
    icon: "Camera",
  },
  {
    id: 4,
    title: "Cobertura de Eventos",
    description: "Capturamos la esencia de tus eventos mediante contenido audiovisual dinámico y creativo, para que cada momento relevante llegue a tu audiencia.",
    icon: "Video",
  },
  {
    id: 5,
    title: "Diseño Web y E-commerce",
    description: "Desarrollamos sitios web funcionales y atractivos, tiendas online y blogs optimizados, diseñados para ofrecer una experiencia única y potenciar tus ventas.",
    icon: "Laptop",
  },
  {
    id: 6,
    title: "SEO y Posicionamiento",
    description: "Optimizamos tu presencia digital para que tu marca sea fácilmente encontrada en Google, aumentando visibilidad y alcance orgánico.",
    icon: "Search",
  },
  {
    id: 7,
    title: "Campaña Publicitaria 360°",
    description: "Creamos conceptos únicos para momentos clave: lanzamientos de producto, aperturas de locales, promociones especiales o eventos que necesitan una narrativa potente y una ejecución impecable.",
    icon: "ChartNoAxesColumnDecreasing",
  },
  {
    id: 8,
    title: "Diseño de Branding",
    description: "Nuestro servicio de diseño de branding transforma la esencia de tu proyecto en un sistema visual sólido, estético y coherente. Creamos la identidad gráfica que definirá cómo tu marca se presenta al mundo: logo, paleta cromática, tipografías y universo visual.",
    icon: "Brand",
  },
  {
    id: 9,
    title: "Web Management Mensual",
    description: "Nos encargamos del mantenimiento completo de tu sitio: actualización de productos, gestión de inventario, carga de contenido, revisión de funcionamiento y soporte continuo para mantener tu web siempre activa, optimizada y al día.",
    icon: "Laptop",
  },
] as const;



// Navigation Links
export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contacto", label: "Contacto" },
] as const;

// Social Media Links
export const socialLinks = [
  { platform: "Instagram", url: "https://www.instagram.com/gaia_studio?igsh=MWszOGh5ZnN0MWxpag==", icon: "Instagram" },
  { platform: "LinkedIn", url: "https://linkedin.com/company/gaia", icon: "Linkedin" },
  { platform: "Behance", url: "https://behance.net/gaia", icon: "Dribbble" },
] as const;

// Contact Information
export const contactInfo = {
  email: "gaiacontacto.studio@gmail.com",
  phone: "+598 91 392 302 +598 95 967 816",
  address: "Montevideo, Uruguay",
} as const;
