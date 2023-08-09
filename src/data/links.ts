import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';

import type ILink from '@/types/link';
import { type ISocialLink } from '@/types/link';

const links: ILink[] = [
  {
    id: 1,
    name: 'hero',
    label: 'Home',
    href: '#hero',
  },
  {
    id: 2,
    name: 'projects',
    label: 'Projects',
    href: '#projects',
  },
  {
    id: 3,
    name: 'skills',
    label: 'Skills',
    href: '#skills',
  },
  {
    id: 4,
    name: 'experience',
    label: 'Experience',
    href: '#experience',
  },
  {
    id: 5,
    name: 'contact',
    label: 'Contact',
    href: '#contact',
  },
];

export const socialLinks: ISocialLink[] = [
  {
    id: 1,
    name: 'github',
    label: 'Github',
    href: 'https://github.com/Alejandro1709',
    Icon: BsGithub,
  },
  {
    id: 2,
    name: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/alepeusts99',
    Icon: BsInstagram,
  },
  {
    id: 3,
    name: 'linkedin',
    label: 'Linkedin',
    href: 'https://linkedin.com/in/alejandro-la-rosa-4497a995/',
    Icon: BsLinkedin,
  },
  {
    id: 4,
    name: 'youtube',
    label: 'Youtube',
    href: 'https://youtube.com/@alefsdev/',
    Icon: BsYoutube,
  },
];

export default links;
