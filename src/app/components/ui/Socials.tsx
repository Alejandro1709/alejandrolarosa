import { socialLinks } from '@/data/links';
import Social from './Social';

type SocialsProps = {
  size?: 'sm' | 'md' | 'lg';
};

function Socials({ size = 'md' }: SocialsProps) {
  return (
    <ul className='flex flex-row items-center gap-2'>
      {socialLinks.map((link) => (
        <Social key={link.href} Icon={link.Icon} size={size} href={link.href} />
      ))}
    </ul>
  );
}

export default Socials;
