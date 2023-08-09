import skills from '@/data/skills';
import { useCategoryStore } from '@/stores/categoryStore';
import SkillCard from './SkillCard';

function SkillsList() {
  const filter = useCategoryStore((state) => state.category);

  const filteredSkills =
    filter === 'Name'
      ? skills.sort((a, b) => a.name.localeCompare(b.name))
      : skills.filter((skill) => skill.category === filter);

  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
      {filteredSkills.map((skill) => (
        <SkillCard key={skill.id}>{skill.name}</SkillCard>
      ))}
    </ul>
  );
}

export default SkillsList;
