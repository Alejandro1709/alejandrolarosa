/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import Button from './ui/Button';
import Hobbies from './ui/Hobbies';
import Socials from './ui/Socials';

type HeroProps = {
  id: string;
};

const Hero = forwardRef<HTMLHeadingElement, HeroProps>(({ id }, ref) => {
  return (
    <section
      id={id}
      className='mt-10 flex flex-col items-center gap-8 lg:mt-16 lg:flex-row lg:gap-20'
    >
      <header className='flex flex-col items-center gap-6 text-center font-bold uppercase text-white lg:w-[65%] lg:gap-8 lg:text-left'>
        <h1
          ref={ref}
          className='text-4xl leading-snug tracking-wider sm:text-5xl md:text-6xl'
        >
          Hello, my name is Alejandro.
        </h1>
        <h3 className='animate-pulse bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-2xl text-transparent sm:text-3xl md:text-4xl lg:self-start lg:text-5xl'>
          I&apos;m a software engineer.
        </h3>
        <div className='mt-4 flex flex-shrink-0 flex-row gap-8 lg:self-start'>
          <Button className='bg-purple-400 hover:bg-indigo-300'>
            Hire Me!
          </Button>

          <Socials size='lg' />
        </div>
      </header>
      <Hobbies />
    </section>
  );
});
export default Hero;
