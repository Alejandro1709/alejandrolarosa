import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import Social from './Social';

type SocialsProps = {
  size?: 'sm' | 'md' | 'lg';
};

function Socials({ size = 'md' }: SocialsProps) {
  return (
    <div className='flex flex-row items-center gap-2'>
      <Social Icon={BsGithub} size={size} />
      <Social Icon={BsInstagram} size={size} />
      <Social Icon={BsLinkedin} size={size} />
      <Social Icon={BsYoutube} size={size} />
    </div>
  );
}

export default Socials;
