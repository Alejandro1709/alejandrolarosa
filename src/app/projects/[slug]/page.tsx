import Button from '@/app/components/ui/Button';
import NavLink from '@/app/components/ui/NavLink';

function ProjectPage() {
  return (
    <div className='mx-auto mt-10 flex flex-col items-center justify-center gap-8 lg:mt-16 lg:max-w-screen-lg'>
      <header className='flex w-full flex-col gap-8 px-10'>
        <div className='flex flex-row items-center justify-between'>
          <NavLink href='/' className='bg-[#181818] hover:bg-[#252525]'>
            Back
          </NavLink>
          <h2 className='text-2xl font-medium'>Project Details</h2>
          <Button className='bg-[#181818] hover:bg-[#252525]'>Share</Button>
        </div>

        <div className='h-48 rounded-md bg-[#181818]'></div>

        <div className='ml-1 flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:flex-row lg:items-center lg:justify-between'>
          <h1 className='text-3xl font-bold leading-snug tracking-wider'>
            Get That Home
          </h1>
          <ul className='flex flex-row gap-4 lg:self-end'>
            <li className='rounded-md bg-purple-400 p-2 text-sm font-semibold text-white'>
              Fullstack Project
            </li>

            <li className='rounded-md bg-yellow-300 p-2 text-sm font-semibold text-black'>
              Work In Progress
            </li>
          </ul>
        </div>
      </header>

      <section className='px-10'>
        <p className='text-md font-medium'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          corrupti animi cumque suscipit, hic quisquam aperiam nemo officia
          aliquid maxime reprehenderit optio excepturi officiis magnam fugit?
          Praesentium quas, culpa earum id quia, labore sint necessitatibus
          excepturi unde alias ratione aspernatur.
        </p>
      </section>

      <section className='w-full px-10'>
        <h3 className='text-2xl font-bold'>Technologies</h3>
      </section>
    </div>
  );
}

export default ProjectPage;
