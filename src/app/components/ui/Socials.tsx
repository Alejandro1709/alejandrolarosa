import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import Social from './Social';

function Socials() {
  return (
    <div className='flex flex-row items-center gap-2'>
      <Social Icon={BsGithub} />
      <Social Icon={BsInstagram} />
      <Social Icon={BsLinkedin} />
      <Social Icon={BsYoutube} />
    </div>
  );
}

export default Socials;
