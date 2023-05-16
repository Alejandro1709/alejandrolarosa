import NavLinks from './NavLinks';

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
        <NavLinks />
      </nav>
    </header>
  );
}

export default Navigation;
