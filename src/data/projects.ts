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
    title: 'DevTree',
    slug: 'devtree',
    description:
      'Este es una app clone de LinkTree hecha con el MERN Stack donde podrás compartir tus links sociales con tus amigos y familia!',
    thumbnail: '',
    status: 'Completed',
    repoUrl: 'https://github.com/Alejandro1709/devtree',
    liveUrl: 'https://devtree-nine.vercel.app/',
    tags: [
      'Node JS',
      'Express',
      'React',
      'Tailwind CSS',
      'JWT',
      'MongoDB',
      'REST',
      'CRUD',
      'Backend',
    ],
  },
  {
    id: 3,
    title: 'FM Recipe Page',
    slug: 'fm-recipe-page',
    description:
      'Una simple pagina hecha con HTML y CSS Puro que muestra una página de una receta.',
    thumbnail:
      'https://res.cloudinary.com/dn79mzc6d/image/upload/v1715191029/my-uploads/desktop-preview_zh0mzj.jpg',
    status: 'Completed',
    repoUrl: 'https://github.com/Alejandro1709/fm-recipe-page',
    liveUrl: 'https://tranquil-semifreddo-753e9b.netlify.app/',
    tags: ['HTML', 'Vanilla Css', 'Frontend'],
  },
  {
    id: 4,
    title: 'Trello Clone',
    slug: 'trello-clone',
    description:
      'Un clon de la app Trello donde puedes crear tus tablas Kanban de manera sencilla',
    thumbnail:
      'https://res.cloudinary.com/dn79mzc6d/image/upload/v1715444584/my-uploads/Screenshot_2024-05-11_at_11.21.44_zprmhd.png',
    status: 'In Progress',
    repoUrl: '',
    liveUrl: 'https://trello-clone-six-peach.vercel.app/',
    tags: ['React JS', 'TypeScript', 'Tailwind CSS', 'Frontend'],
  },
  {
    id: 5,
    title: 'Far Away',
    slug: 'far-away',
    description:
      'Una app sencilla que te permite agregar, modificar o eliminar items.',
    thumbnail:
      'https://res.cloudinary.com/dn79mzc6d/image/upload/v1716483310/my-uploads/Screenshot_2024-05-23_at_11.54.30_l8mzz3.png',
    status: 'Completed',
    repoUrl: 'https://github.com/Alejandro1709/far-away',
    liveUrl: 'https://far-away-gamma-eight.vercel.app/',
    tags: [
      'React JS',
      'JavaScript',
      'Vanilla CSS',
      'Local Storage',
      'Frontend',
    ],
  },
];

export default projects.sort((a, b) => a.title.localeCompare(b.title));
