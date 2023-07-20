export default function Home() {
  return (
    <div className='mx-6'>
      <section id='hero' className='my-8 flex flex-col items-center'>
        <header className='flex flex-col items-center gap-6 font-bold uppercase text-white'>
          <div className='flex flex-col items-center gap-6 text-4xl'>
            <span className='animate-wiggle animate-infinite'>👋</span>
            <h1 className='text-center leading-snug tracking-wider'>
              Hello, my name is Alejandro.
            </h1>
          </div>
          <h3 className='bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-2xl text-transparent'>
            I&apos;m a software engineer.
          </h3>
        </header>
      </section>

      <section id='about' className='my-8 flex flex-col items-center border'>
        <h2>LOOL</h2>
      </section>
    </div>
  );
}
