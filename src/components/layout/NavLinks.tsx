'use client';

import links from '@/data/links';
import type ILink from '@/types/link';
import { useState } from 'react';
import NavLink from './NavLink';

function NavLinks() {
  const [activeLink, setActiveLink] = useState<ILink>(links[0]);

  return (
    <ul className='flex w-full flex-row justify-center gap-2'>
      {links.map((link) => (
        <NavLink
          key={link.name}
          link={link}
          active={activeLink}
          onClick={setActiveLink}
        />
      ))}
    </ul>
  );
}

export default NavLinks;
