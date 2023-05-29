'use client';

import tabs from '@/data/tabs';
import NavLink from './Tab';

function Tabs() {
  return (
    <ul className='flex w-full flex-row justify-center items-start gap-2 transition-all duration-200'>
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          tab={tab}
        />
      ))}
    </ul>
  );
}

export default Tabs;
