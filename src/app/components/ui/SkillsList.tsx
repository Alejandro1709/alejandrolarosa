import skills from '@/data/skills';
import SkillCard from './SkillCard';

function SkillsList() {
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
      {skills.map((skill) => (
        <SkillCard key={skill.id}>{skill.name}</SkillCard>
      ))}
    </ul>
  );
}

export default SkillsList;
