import FilterBar from './ui/FilterBar';
import SkillsList from './ui/SkillsList';

type SkillsProps = {
  id: string;
};

function Skills({ id }: SkillsProps) {
  return (
    <section id={id} className='flex flex-col justify-center space-y-8'>
      <header className='flex w-full flex-col items-center justify-center space-y-4 uppercase leading-snug tracking-wider text-white lg:flex-row lg:justify-between lg:space-y-0'>
        <h2 className='text-center text-3xl font-medium uppercase leading-snug tracking-wider text-white lg:self-start'>
          skills
        </h2>

        <FilterBar />
      </header>

      <SkillsList />
    </section>
  );
}

export default Skills;
