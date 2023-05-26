import { create } from 'zustand';

type TabStoreTypes = {
  currentTab: number;
  setCurrentTab: (tab: number) => void;
};

export const useTabStore = create<TabStoreTypes>((set) => ({
  currentTab: 1,
  setCurrentTab: (tab) => set({ currentTab: tab }),
}));