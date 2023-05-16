import type ILink from '@/types/tab';

const tabs: ILink[] = [
  {
    id: 1,
    name: 'work',
    label: 'Work',
    href: '/',
  },
  {
    id: 2,
    name: 'portfolio',
    label: 'Portfolio',
    href: '/portfolio',
  },
  {
    id: 3,
    name: 'skills',
    label: 'Skills',
    href: '/skills',
  },
  {
    id: 4,
    name: 'contact',
    label: 'Contact',
    href: '/contact',
  },
];

export default tabs;
