import links from '@/data/links';

type NavigationProps = {
  title?: string;
};

function Navigation({ title = 'Alejandro LR' }: NavigationProps) {
  return (
    <header className='flex flex-col gap-2'>
      <div className='flex h-14 flex-col items-center justify-center border border-slate-700 bg-slate-800'>
        <h1 className='text-xl font-medium'>{title}</h1>
      </div>
      <nav className='flex flex-col items-center justify-center'>
        <ul className='flex w-full flex-row justify-center gap-2'>
          {links.map((link) => (
            <li
              key={link.name}
              className='text-md flex-1 cursor-pointer border border-slate-700 bg-slate-800 p-2.5 text-center'
            >
              {link.label.toUpperCase()}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
