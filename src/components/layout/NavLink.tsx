import type ILink from '@/types/link';
import React from 'react';

type NavLinkProps = {
  link: ILink;
  active: ILink;
  onClick: React.Dispatch<React.SetStateAction<ILink>>;
};

function NavLink({ link, active, onClick }: NavLinkProps) {
  return (
    <li className='text-md flex-1 cursor-pointer border border-slate-700 bg-slate-800 p-2.5 text-center hover:border-white'>
      {link.label.toUpperCase()}
    </li>
  );
}

export default NavLink;
