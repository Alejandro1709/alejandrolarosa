import Link from 'next/link';

function Grid() {
  return (
    <ul className='grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3'>
      <Link href='/portfolio/fjfjd'>
        <li className='h-[133px] cursor-pointer rounded-md border border-slate-700 bg-slate-800 transition-all duration-200 hover:scale-95'>
          Hello
        </li>
      </Link>
      <li className='h-[133px] cursor-pointer rounded-md border border-slate-700 bg-slate-800 transition-all duration-200 hover:scale-95'>
        Hello
      </li>
      <li className='h-[133px] cursor-pointer rounded-md border border-slate-700 bg-slate-800 transition-all duration-200 hover:scale-95'>
        Hello
      </li>
      <li className='h-[133px] cursor-pointer rounded-md border border-slate-700 bg-slate-800 transition-all duration-200 hover:scale-95'>
        Hello
      </li>
    </ul>
  );
}

export default Grid;
