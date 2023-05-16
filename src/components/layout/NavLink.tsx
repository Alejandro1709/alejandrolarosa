import type ILink from '@/types/link';
import React from 'react';

type NavLinkProps = {
  link: ILink;
  active: ILink;
  onClick: React.Dispatch<React.SetStateAction<ILink>>;
};

function NavLink({ link, active, onClick }: NavLinkProps) {
  const handleClick = (link: ILink) => {
    console.log(link);
    onClick({ ...link, active: !link.active });
  };

  return (
    <li
      className={`text-md flex-1 cursor-pointer border ${
        active.active && active.name === link.name
          ? 'hover:border-white'
          : 'border-slate-700'
      } bg-slate-800 p-2.5 text-center`}
      onClick={() => handleClick(link)}
    >
      {link.label.toUpperCase()}
    </li>
  );
}

export default NavLink;
