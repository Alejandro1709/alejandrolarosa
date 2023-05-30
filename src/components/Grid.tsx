function Grid() {
  return (
    <ul className='grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3'>
      <li className='h-[133px] rounded-md border border-slate-700 bg-slate-800 hover:scale-95 transition-all duration-200 cursor-pointer'>
        Hello
      </li>
      <li className='h-[133px] rounded-md border border-slate-700 bg-slate-800 hover:scale-95 transition-all duration-200 cursor-pointer'>
        Hello
      </li>
      <li className='h-[133px] rounded-md border border-slate-700 bg-slate-800 hover:scale-95 transition-all duration-200 cursor-pointer'>
        Hello
      </li>
      <li className='h-[133px] rounded-md border border-slate-700 bg-slate-800 hover:scale-95 transition-all duration-200 cursor-pointer'>
        Hello
      </li>
    </ul>
  );
}

export default Grid;
