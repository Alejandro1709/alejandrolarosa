import ProgressBar from './layout/ProgressBar';

function Skills() {
  return (
    <ul className='grid gap-2 p-3 md:grid-cols-2 xl:grid-cols-3'>
      <li className='flex flex-row items-center justify-between border border-slate-700 bg-slate-800 p-4'>
        <h2 className='text-md font-medium'>Javascript</h2>
        <ProgressBar current={68} />
      </li>
      <li className='flex flex-row items-center justify-between border border-slate-700 bg-slate-800 p-4'>
        <h2 className='text-md font-medium'>Typescript</h2>
        <ProgressBar current={50} />
      </li>
    </ul>
  );
}

export default Skills;
