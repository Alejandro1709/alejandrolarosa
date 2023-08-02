import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';

const hobbies = [
  {
    id: 1,
    name: 'Reading',
  },
  {
    id: 2,
    name: 'Gaming',
  },
  {
    id: 3,
    name: 'Coding',
  },
  {
    id: 4,
    name: 'Music',
  },
  {
    id: 5,
    name: 'Movies',
  },
  {
    id: 6,
    name: 'Theatre',
  },
  {
    id: 7,
    name: 'Biking',
  },
  {
    id: 8,
    name: 'Hiking',
  },
  {
    id: 9,
    name: 'Gym',
  },
  {
    id: 10,
    name: 'Persistent',
  },
  {
    id: 11,
    name: 'Curious',
  },
  {
    id: 12,
    name: 'Creative',
  },
  {
    id: 13,
    name: 'Team Player',
  },
  {
    id: 14,
    name: 'Problem Solver',
  },
];

function Hero() {
  return (
    <section
      id='hero'
      className='mt-16 flex flex-col items-center gap-8 lg:mt-28 lg:flex-row lg:gap-20'
    >
      <header className='flex flex-col items-center gap-6 text-center font-bold uppercase text-white lg:w-[65%] lg:gap-8 lg:text-left'>
        <h1 className='text-4xl leading-snug tracking-wider sm:text-5xl md:text-6xl'>
          Hello, my name is Alejandro.
        </h1>
        <h3 className='animate-pulse bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-2xl text-transparent sm:text-3xl md:text-4xl lg:self-start lg:text-5xl'>
          I&apos;m a software engineer.
        </h3>
        <div className='mt-4 flex flex-shrink-0 flex-row gap-8 lg:self-start'>
          <button className='rounded-md bg-purple-400 px-4 py-2 transition-all hover:bg-indigo-300 active:scale-95'>
            Hire Me!
          </button>

          <div className='flex flex-row items-center gap-2'>
            <a
              href='https://github.com/alejandro1709'
              className='flex h-9 w-9 items-center justify-center rounded-md bg-[#181818] hover:bg-black'
              target='_blank'
            >
              <BsGithub />
            </a>
            <a
              href='https://instagram.com/alepeusts99'
              className='flex h-9 w-9 items-center justify-center rounded-md bg-[#181818] hover:bg-black'
              target='_blank'
            >
              <BsInstagram />
            </a>
            <a
              href='https://linkedin.com/in/alejandro-la-rosa-4497a995'
              className='flex h-9 w-9 items-center justify-center rounded-md bg-[#181818] hover:bg-black'
              target='_blank'
            >
              <BsLinkedin />
            </a>
            <a
              href='https://www.youtube.com/@alefsdev'
              className='flex h-9 w-9 items-center justify-center rounded-md bg-[#181818] hover:bg-black'
              target='_blank'
            >
              <BsYoutube />
            </a>
          </div>
        </div>
      </header>
      <div className='hidden self-start lg:flex lg:flex-1'>
        <ul className='flex flex-wrap justify-center gap-2 lg:grid lg:grid-cols-3 lg:self-end'>
          {hobbies.map((hobbie) => (
            <li
              key={hobbie.id}
              className='rounded-md bg-[#181818] px-4 py-2 text-sm font-medium text-white lg:text-center'
            >
              {hobbie.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
