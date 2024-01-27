import type IProject from '@/types/project';

const projects: IProject[] = [
  {
    id: 1,
    title: 'Get That Home',
    slug: 'get-that-home',
    description:
      '¡Bienvenido a GetThatHome! Tu destino confiable para encontrar el hogar perfecto. Ya sea que estés buscando alquilar o comprar una casa o departamento, nuestra plataforma te conecta con una amplia variedad de opciones en diversas ubicaciones. Explora listados actualizados, visualiza imágenes detalladas y encuentra la propiedad que se adapte a tus necesidades y estilo de vida. Nuestra interfaz fácil de usar hace que la búsqueda de tu próximo hogar sea rápida y eficiente. ¡Descubre el lugar ideal para ti con GetThatHome y haz realidad tus sueños de vivir en el hogar perfecto!',
    thumbnail:
      'https://res.cloudinary.com/dn79mzc6d/image/upload/v1706376261/my_uploads/gth_hxxp7r.jpg',
    status: 'Completed',
    repoUrl: 'https://github.com/Alejandro1709/GetThatHome-Client',
    liveUrl: 'https://getthathome.onrender.com/',
    tags: [
      'React',
      'Ruby On Rails',
      'Emotion',
      'Styled Components',
      'Fullstack',
    ],
  },
  {
    id: 2,
    title: 'AFHS Api',
    slug: 'afhs-api',
    description:
      'Este es un REST API que te permite obtener información de los personajes de la famosa teleserie Peruana: "Al Fondo Hay Sitio".',
    thumbnail:
      'https://res.cloudinary.com/dn79mzc6d/image/upload/v1706376598/my_uploads/GNAWK53ZLBB3VAB27SWN2JZ7N4_u0n8qm.jpg',
    status: 'Completed',
    repoUrl: 'https://github.com/Alejandro1709/afhs-api',
    liveUrl: 'https://afhsapi.com/',
    tags: ['Node JS', 'Express', 'JWT', 'MongoDB', 'REST', 'CRUD', 'Backend'],
  },
  {
    id: 3,
    title: 'AFHS Client',
    slug: 'afhs-client',
    description:
      'Este es el cliente que te permite obtener información de los personajes de la famosa teleserie Peruana: "Al Fondo Hay Sitio".',
    thumbnail:
      'https://res.cloudinary.com/dn79mzc6d/image/upload/v1706376598/my_uploads/GNAWK53ZLBB3VAB27SWN2JZ7N4_u0n8qm.jpg',
    status: 'Completed',
    repoUrl: 'https://github.com/Alejandro1709/afhs-showcase',
    liveUrl: 'https://afhsapi.com/',
    tags: [
      'React JS',
      'Typescript',
      'Vite',
      'Tailwind CSS',
      'ESLint',
      'Prettier',
      'Frontend',
    ],
  },
  {
    id: 4,
    title: 'Countdown App Clone',
    slug: 'countdown-app-clone',
    description: '[No Description Available]',
    thumbnail: '',
    status: 'In Progress',
    tags: [
      'Next JS',
      'Typescript',
      'Tailwind CSS',
      'ESLint',
      'Prettier',
      'Frontend',
    ],
  },
  {
    id: 5,
    title: 'TicketTrek',
    slug: 'tickettrek',
    description: '[No Description Available]',
    thumbnail: '',
    status: 'In Progress',
    tags: [
      'Next JS',
      'Typescript',
      'Tailwind CSS',
      'ESLint',
      'Prettier',
      'Fullstack',
    ],
  },
  {
    id: 6,
    title: 'Anagram API',
    slug: 'anagram-api',
    description: '[No Description Available]',
    thumbnail: '',
    status: 'In Progress',
    tags: ['Node JS', 'Express', 'JWT', 'MongoDB', 'REST', 'CRUD', 'Backend'],
  },
];

export default projects.toSorted((a, b) => a.title.localeCompare(b.title));
