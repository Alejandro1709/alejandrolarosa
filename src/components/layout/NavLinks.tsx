'use client';

import links from '@/data/links';
import { useTabStore } from '@/stores/tabStore';
import type ILink from '@/types/link';
import { useState } from 'react';
import NavLink from './NavLink';

function NavLinks() {
  const currentTab = useTabStore((state) => state.currentTab);

  const [activeLink, setActiveLink] = useState<ILink>(links[currentTab]);

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
