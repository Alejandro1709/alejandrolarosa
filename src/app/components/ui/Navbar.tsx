'use client';

import Links from './Links';

type NavbarProps = {
  isIntersecting: boolean;
};

function Navbar({ isIntersecting }: NavbarProps) {
  return (
    <nav
      className={`top-0 z-20 h-16 ${
        isIntersecting
          ? 'hidden -translate-y-10 bg-transparent'
          : 'sticky flex translate-y-0 border-b border-purple-400 bg-black/95 shadow-sm shadow-purple-400'
      } items-center justify-center transition-all duration-100`}
    >
      <ul className='mx-10 flex w-full flex-row gap-8 overflow-x-scroll text-lg font-bold md:mx-auto md:max-w-screen-md lg:mx-auto lg:max-w-screen-lg'>
        <Links />
      </ul>
    </nav>
  );
}

export default Navbar;
