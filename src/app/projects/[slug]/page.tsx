import Button from '@/app/components/ui/Button';
import NavLink from '@/app/components/ui/NavLink';

function ProjectPage() {
  return (
    <div className='mx-auto mt-10 flex flex-col items-center justify-center gap-4 lg:mt-16 lg:max-w-screen-lg lg:flex-row lg:gap-20'>
      <header className='flex w-full flex-col gap-8 px-10'>
        <div className='flex flex-row items-center justify-between'>
          <NavLink href='/' className='bg-[#181818] hover:bg-[#252525]'>
            Back
          </NavLink>
          <h2 className='text-2xl font-medium'>Project Details</h2>
          <Button className='bg-[#181818] hover:bg-[#252525]'>Share</Button>
        </div>

        <div className='h-48 rounded-md bg-[#181818]'></div>

        <div className='ml-1 flex flex-col gap-2'>
          <h1 className='text-3xl font-bold leading-snug tracking-wider'>
            Get That Home
          </h1>
        </div>
      </header>
    </div>
  );
}

export default ProjectPage;
