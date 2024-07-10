import {
  IconGeometry,
  IconDeviceDesktopAnalytics,
  IconSettings,
  IconBrandSpeedtest,
} from "@tabler/icons-react";

const dataEspañol = {
  navBarOptions: [
    { option: "Inicio", path: "/" },
    { option: "Sobre Mi", path: "/#about" },
    { option: "Proyectos", path: "/projects" },
    { option: "Certificaciones", path: "/certifications" },
  ],
  header: {
    name: "Ignacio Nicoletti",
    title: "Desarrollador Full Stack con orientacion Backend",
    subtitle:
      "Formandome profesionalmente día a día y creando proyectos para la comunidad.",
  },
  about: {
    title: "Sobre mi",
    description:
      "Mi nombre es Ignacio Nicoletti, soy técnico informático con una gran pasión por la programación. Me fascina proporcionar soluciones que agreguen valor a la vida de las personas y, al mismo tiempo, me desafíen. He mejorado mis habilidades como desarrollador tanto Front-End como Back-End. Desde mi infancia, he sentido un gran interés por la programación, lo que me motiva constantemente a perfeccionar mis habilidades y a aprender nuevas tecnologías. Me gradué del Bootcamp SoyHenry, donde uno de mis logros fue que el proyecto grupal que desarrollé fuera considerado uno de los mejores entre las dos cohortes. Soy una persona dedicada que persigue hacer realidad sus sueños, trabajadora y orientada a resultados. Siempre busco alcanzar mi mejor versión sin importar las dificultades.",
    titleTecnology: "Mis principales tecnologias",
    subtitles: ["Frontend", "Backend", "Base de datos", "Diseño"],
  },
  services: [
    {
      title: "Diseño web",
      description:
        "Interfaces visuales atractivas y funcionales tanto para sitios web como para aplicaciones móviles, con el objetivo de resaltar la identidad de la marca o producto del cliente y maximizar su impacto en los usuarios.",
      icon: <IconGeometry stroke={2} width={50} height={50} />,
    },
    {
      title: "Desarrollo web",
      description:
        "Desarrollo de sitios web con una estructura sólida, diseño responsivo de calidad, paletas de colores atractivas y elementos interactivos que proporcionan una experiencia satisfactoria al usuario durante su navegación.",
      icon: <IconDeviceDesktopAnalytics stroke={2} width={50} height={50} />,
    },
    {
      title: "Mantenimiento web",
      description:
        "Brindar un servicio completo de mantenimiento para páginas web, que incluye la detección y corrección de errores, la actualización de contenido como textos, imágenes, elementos de diseño web y la incorporación de nuevas funciones, entre otras tareas.",
      icon: <IconSettings stroke={2} width={50} height={50} />,
    },
    {
      title: "Optimización Web",
      description:
        "Maximización integral de la eficiencia de tu página web mediante la mejora de la velocidad de carga, la optimización de imágenes y la implementación de URL efectivos, todo ello con el fin de proporcionar una experiencia superior a los usuarios que accedan al sitio web.",
      icon: <IconBrandSpeedtest stroke={2} width={50} height={50} />,
    },
  ],
  footer: {
    title: "Este sitio fue desarrollado con React.",
  },
};

const dataEnglish = {
  navBarOptions: [
    { option: "Home", path: "/" },
    { option: "About Me", path: "/#about" },
    { option: "Projects", path: "/projects" },
    { option: "Certifications", path: "/certifications" },
  ],
  header: {
    name: "Ignacio Nicoletti",
    title: "Full Stack Developer with Backend orientation",
    subtitle:
      "im improving profesionaly day by day and creating projects for community",
  },
  about: {
    title: "About Me",
    description:
      "My name is Ignacio Nicoletti, I am a computer technician with a great passion for programming. I am fascinated by providing solutions that add value to people's lives and, at the same time, challenge me. I have enhanced my skills as a developer in both Front-End and Back-End.Since my childhood, I have had a keen interest in programming, which constantly motivates me to refine my skills and learn new technologies. I graduated from the SoyHenry Bootcamp, where one of my achievements was that the group project I developed was considered one of the best among the two cohorts.I am a dedicated person who strives to make their dreams come true, hardworking and results-oriented. I always seek to achieve my best version regardless of the challenges.",
    titleTecnology: "My main technologies",
    subtitles: ["Frontend", "Backend", "DataBase", "Design"],
  },
  services: [
    {
      title: "Design  web",
      description:
        "Attractive and functional visual interfaces for both websites and mobile applications, aimed at highlighting the brand or product identity of the client and maximizing its impact on users.",
      icon: <IconGeometry stroke={2} width={50} height={50} />,
    },
    {
      title: "Web Development",
      description:
        "Development of websites with a robust structure, high-quality responsive design, attractive color palettes, and interactive elements that provide a satisfying user experience during navigation.",
      icon: <IconDeviceDesktopAnalytics stroke={2} width={50} height={50} />,
    },
    {
      title: "Web Maintenance",
      description:
        "Comprehensive maintenance of websites to detect and resolve errors, update content such as text, photos, web design elements, add new features, etc.",
      icon: <IconSettings stroke={2} width={50} height={50} />,
    },
    {
      title: "Website Optimization",
      description:
        "Comprehensive maintenance of websites to detect and resolve errors, update content such as text, photos, web design elements, add new features, etc.",
      icon: <IconBrandSpeedtest stroke={2} width={50} height={50} />,
    },
  ],
  footer: {
    title: "This site was developed with React.",
  },
};

export { dataEspañol, dataEnglish };
