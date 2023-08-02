import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function Home() {
  return (
    <div className='mx-6 space-y-14 scroll-smooth md:mx-auto md:max-w-screen-md lg:mx-auto lg:max-w-screen-lg'>
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}
