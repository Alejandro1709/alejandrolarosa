import Button from '@/app/components/ui/Button';
import Link from 'next/link';

function ProjectPage() {
  return (
    <div className='mt-10 flex flex-col items-center justify-center gap-8 lg:mt-16 lg:flex-row lg:gap-20'>
      <header className='flex w-full flex-row items-center justify-between px-10 lg:w-[65%]'>
        <Link href='/'>Back</Link>
        <h2 className='text-2xl'>Project Title</h2>
        <Button className='bg-[#181818]'>Share</Button>
      </header>
    </div>
  );
}

export default ProjectPage;
