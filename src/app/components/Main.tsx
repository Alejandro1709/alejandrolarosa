'use client';

import { useInView } from 'react-intersection-observer';
import Footer from './Footer';
import Hero from './Hero';
import Projects from './Projects';
import Navbar from './ui/Navbar';

function Main() {
  const { ref: heroRef, inView: isIntersecting } = useInView({
    threshold: 0,
    initialInView: true,
    rootMargin: '-100px',
  });

  return (
    <>
      <Navbar isIntersecting={isIntersecting} />
      <div className='mx-6 space-y-14 scroll-smooth md:mx-auto md:max-w-screen-md lg:mx-auto lg:max-w-screen-lg'>
        <Hero id='hero' ref={heroRef} />
        <Projects id='projects' />
        <Footer />
      </div>
    </>
  );
}

export default Main;
