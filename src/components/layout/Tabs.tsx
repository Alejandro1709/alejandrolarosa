'use client';

import tabs from '@/data/tabs';
import { useTabStore } from '@/stores/tabStore';
import type ITab from '@/types/tab';
import { useState } from 'react';
import NavLink from './Tab';

function Tabs() {
  const currentTab = useTabStore((state) => state.currentTab);

  const [activeTab, setActiveTab] = useState<ITab>(tabs[currentTab]);

  return (
    <ul className='flex w-full flex-row justify-center gap-2 transition-all duration-200'>
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          tab={tab}
          active={activeTab}
          onClick={setActiveTab}
        />
      ))}
    </ul>
  );
}

export default Tabs;
