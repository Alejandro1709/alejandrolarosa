import Links from './ui/Links';
import Socials from './ui/Socials';

function Footer() {
  return (
    <footer className='flex flex-col items-center gap-6 pb-6 lg:flex-row lg:justify-between'>
      <aside className='hidden flex-col space-y-4 lg:flex'>
        <h3 className='text-3xl'>Site Map</h3>
        <ul className='grid grid-cols-2 gap-2'>
          <Links />
        </ul>
      </aside>
      <h3 className='text-xl font-medium lg:self-end'>© 2023 Alejandro LR.</h3>
      <aside className='flex flex-col space-y-4 lg:self-end'>
        <Socials size='lg' />
      </aside>
    </footer>
  );
}

export default Footer;
