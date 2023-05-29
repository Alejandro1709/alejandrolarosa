'use client';

import { useState } from 'react';
import tabs from '@/data/tabs';
import { useTabStore } from '@/stores/tabStore';
import NavLink from './Tab';
import type ITab from '@/types/tab';

function Tabs() {
  const currentTab = useTabStore((state) => state.currentTab);

  const [activeTab, setActiveTab] = useState<ITab>(tabs[currentTab - 1]);

  return (
    <ul className='flex w-full flex-row justify-center items-start gap-2 transition-all duration-200'>
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          tab={tab}
          active={activeTab}
        />
      ))}
    </ul>
  );
}

export default Tabs;
