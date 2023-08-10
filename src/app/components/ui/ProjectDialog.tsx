import { useModalStore } from '@/stores/modalStore';
import Button from './Button';

function ProjectDialog() {
  const isModalOpen = useModalStore((state) => state.isOpen);
  const setIsModalOpen = useModalStore((state) => state.setModal);

  return (
    <dialog
      open={isModalOpen}
      className='mt-12 w-96 space-y-4 rounded-md text-white shadow lg:mt-16 lg:w-1/4'
    >
      <header className='flex flex-col gap-4'>
        <div className='flex flex-row items-center justify-between'>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
          <h1 className='text-2xl font-medium'>Detail</h1>
          <button>Share</button>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='h-40 rounded bg-red-400 shadow' />
          <h1 className='text-2xl font-medium'>
            Project Name but longer and longer 2x3
          </h1>
        </div>
      </header>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
        repudiandae doloribus officia! Aperiam asperiores impedit neque non,
        dolorem maiores nulla veniam voluptatibus quaerat facilis hic. Magni
        minus iusto tempore dolorem quae deserunt rerum blanditiis maiores
        nihil, obcaecati quos veniam eum?
      </p>

      <footer className='flex flex-col gap-4'>
        <ul className='flex flex-wrap gap-2'>
          <li className='rounded bg-black px-2 py-1 text-sm'>#Fullstack</li>
          <li className='rounded bg-black px-2 py-1 text-sm'>Typescript</li>
          <li className='rounded bg-black px-2 py-1 text-sm'>Nextjs</li>
          <li className='rounded bg-black px-2 py-1 text-sm'>In progress</li>
          <li className='rounded bg-black px-2 py-1 text-sm'>Mern</li>
          <li className='rounded bg-black px-2 py-1 text-sm'>Fun</li>
        </ul>
        <div className='flex flex-row gap-4'>
          <Button className='w-full bg-white text-black hover:bg-black hover:text-white lg:flex-1'>
            Open Repo
          </Button>
          <Button className='w-full bg-white text-black hover:bg-black hover:text-white lg:flex-1'>
            Open project
          </Button>
        </div>
      </footer>
    </dialog>
  );
}

export default ProjectDialog;
