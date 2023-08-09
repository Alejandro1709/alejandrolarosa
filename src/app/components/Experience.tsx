import ExperienceCard from './ui/ExperienceCard';

type ExperienceProps = {
  id: string;
};

function Experience({ id }: ExperienceProps) {
  return (
    <section id={id} className='flex flex-col justify-center space-y-8'>
      <h2 className='text-center text-3xl font-medium uppercase leading-snug tracking-wider text-white lg:self-start'>
        experience
      </h2>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </section>
  );
}

export default Experience;
