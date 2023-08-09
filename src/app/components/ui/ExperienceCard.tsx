function ExperienceCard() {
  return (
    <article className='overflow-hidden rounded-lg bg-[#181818]'>
      <div className='flex flex-col gap-1 px-4 py-2'>
        <a
          className='text-purple-400/60 transition-all hover:text-white/60'
          href='https://google.com'
        >
          <h2 className='text-xl font-semibold'>Deco clean Express</h2>
        </a>
        <div className='flex flex-col gap-0.5 text-sm'>
          <h3>Fullstack Web Developer</h3>
          <p className='text-sm text-gray-500'>2019 - 2020</p>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
