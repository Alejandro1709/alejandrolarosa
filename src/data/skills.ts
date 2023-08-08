import type ISkill from '@/types/skill';

export type SkillCategory = { id: number; name: string };

export const categories: SkillCategory[] = [
  {
    id: 1,
    name: 'Frontend',
  },
  {
    id: 2,
    name: 'Backend',
  },
  {
    id: 3,
    name: 'Database',
  },
  {
    id: 4,
    name: 'Language',
  },
  {
    id: 5,
    name: 'DevOps',
  },
  {
    id: 6,
    name: 'Testing',
  },
  {
    id: 7,
    name: 'Design',
  },
  {
    id: 8,
    name: 'Other',
  },
];

const skills: ISkill[] = [
  {
    id: 1,
    name: 'React JS',
    category: 'Frontend',
  },
  {
    id: 2,
    name: 'Node JS',
    category: 'Backend',
  },
  {
    id: 3,
    name: 'Mongo DB',
    category: 'Database',
  },
  {
    id: 4,
    name: 'Express JS',
    category: 'Backend',
  },
  {
    id: 5,
    name: 'TypeScript',
    category: 'Language',
  },
  {
    id: 6,
    name: 'JavaScript',
    category: 'Language',
  },
  {
    id: 7,
    name: 'HTML',
    category: 'Frontend',
  },
  {
    id: 8,
    name: 'CSS',
    category: 'Frontend',
  },
  {
    id: 9,
    name: 'Tailwind CSS',
    category: 'Frontend',
  },
  {
    id: 10,
    name: 'Next JS',
    category: 'Frontend',
  },
  {
    id: 11,
    name: 'TRPC',
    category: 'Backend',
  },
  {
    id: 12,
    name: 'Docker',
    category: 'DevOps',
  },
  {
    id: 13,
    name: 'Redux',
    category: 'Frontend',
  },
  {
    id: 14,
    name: 'Zustand',
    category: 'Frontend',
  },
  {
    id: 15,
    name: 'React Query',
    category: 'Frontend',
  },
  {
    id: 16,
    name: 'Postgres SQL',
    category: 'Database',
  },
  {
    id: 17,
    name: 'MySQL',
    category: 'Database',
  },
  {
    id: 18,
    name: 'Redis',
    category: 'Database',
  },
  {
    id: 19,
    name: 'Jest',
    category: 'Testing',
  },
  {
    id: 20,
    name: 'React Testing Library',
    category: 'Testing',
  },
  {
    id: 21,
    name: 'Cypress',
    category: 'Testing',
  },
  {
    id: 22,
    name: 'Git',
    category: 'Other',
  },
  {
    id: 23,
    name: 'Nest JS',
    category: 'Backend',
  },
  {
    id: 24,
    name: 'Figma',
    category: 'Design',
  },
];

export default skills;
