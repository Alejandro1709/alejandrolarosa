import { useModalStore } from '@/stores/modalStore';

function ProjectCard() {
  const setIsModalOpen = useModalStore((state) => state.setModal);

  return (
    <article
      className='flex cursor-pointer flex-col gap-1 overflow-hidden rounded-md shadow-lg transition-all hover:scale-95 hover:outline'
      onClick={() => setIsModalOpen(true)}
    >
      <header className='h-[172px] bg-[#181818]'></header>
      <div className='m-4 flex flex-col gap-3'>
        <div className='flex flex-row justify-between'>
          <h2 className='text-2xl font-bold'>Project Title</h2>
          <span className='rounded-2xl bg-yellow-300 p-1.5 text-sm font-semibold text-black'>
            WIP
          </span>
        </div>
        <p className='max-w-xs'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nulla
          deserunt autem perferendis recusandae ad necessitatibus nihil, fugit
          quam quidem?
        </p>
      </div>
    </article>
  );
}

export default ProjectCard;
