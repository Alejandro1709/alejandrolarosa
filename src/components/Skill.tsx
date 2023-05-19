import ProgressBar from './layout/ProgressBar';

type SkillProps = {
  language: string;
  level: string | number;
};

function Skill({ language, level }: SkillProps) {
  return (
    <li className='flex flex-row items-center justify-between border border-slate-700 bg-slate-800 p-4'>
      <h2 className='text-md font-medium'>{language}</h2>
      <ProgressBar current={+level} />
    </li>
  );
}

export default Skill;
