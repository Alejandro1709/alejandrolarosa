import { useTabStore } from '@/stores/tabStore';
import type ITab from '@/types/tab';
import React from 'react';

type NavLinkProps = {
  tab: ITab;
  active: ITab;
  onClick: React.Dispatch<React.SetStateAction<ITab>>;
};

function Tab({ tab, active, onClick }: NavLinkProps) {
  const setCurrentTab = useTabStore((state) => state.setCurrentTab);

  const handleClick = (tab: ITab) => {
    onClick({ ...tab, active: !tab.active });
    setCurrentTab(tab.id);
  };

  return (
    <li
      className={`text-md flex-1 cursor-pointer border ${
        active.active && active.name === tab.name
          ? 'hover:border-white'
          : 'border-slate-700'
      } bg-slate-800 p-2.5 text-center hover:border-white`}
      onClick={() => handleClick(tab)}
    >
      {tab.label.toUpperCase()}
    </li>
  );
}

export default Tab;
