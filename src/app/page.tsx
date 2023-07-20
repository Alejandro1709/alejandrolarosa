export default function Home() {
  return (
    <main className='mx-8'>
      <section id='hero' className='my-8 py-2'>
        <header className='flex flex-col items-center gap-6 font-bold uppercase text-white'>
          <h1 className='text-center text-4xl leading-snug tracking-wider'>
            <span className='mr-1'>👋</span> Hello, my name is Alejandro.
          </h1>
          <h3 className='bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-2xl text-transparent'>
            I&apos;m a software engineer.
          </h3>
        </header>
      </section>
    </main>
  );
}
