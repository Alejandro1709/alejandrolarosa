import { type SkillCategory } from '@/types/skill';
import { create } from 'zustand';

type CategoryStore = {
  category: SkillCategory | string;
  setCategory: (name: string) => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
  category: 'Name',
  setCategory: (category) => set({ category }),
}));
