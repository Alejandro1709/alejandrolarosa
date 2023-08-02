import Hero from './components/Hero';

export default function Home() {
  return (
    <div className='mx-6 space-y-14 md:mx-auto md:max-w-screen-md lg:mx-auto lg:max-w-screen-lg'>
      <Hero />
      <section>
        <header className='flex flex-col items-center justify-center text-3xl leading-snug tracking-wider lg:text-left'>
          <div className='flex justify-center gap-2 font-medium'>
            <span className='bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent'>
              **
            </span>
            <h3>Work in progress</h3>
            <span className='bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent'>
              **
            </span>
          </div>
          <p className='mt-4 max-w-sm text-center text-sm'>
            This site is still under construction. Please check back later for
            more content.
          </p>
        </header>
      </section>
    </div>
  );
}
