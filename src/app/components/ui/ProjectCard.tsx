import { useModalStore } from '@/stores/modalStore';
import type IProject from '@/types/project';

type ProjectCardType = {
  project: IProject;
};

const renderStatus = (project: IProject) => {
  return project.status === 'Completed'
    ? 'bg-green-300'
    : project.status === 'In Progress'
    ? 'bg-yellow-300'
    : project.status === 'Cancelled'
    ? 'bg-red-300'
    : 'bg-blue-300';
};

function ProjectCard({ project }: ProjectCardType) {
  const setIsModalOpen = useModalStore((state) => state.setModal);

  return (
    <article
      className='flex cursor-pointer flex-col gap-1 overflow-hidden rounded-md shadow-lg transition-all hover:scale-95 hover:outline'
      onClick={() => setIsModalOpen(true)}
    >
      <header className='h-[172px] bg-[#181818]'></header>
      <div className='m-4 flex flex-col gap-3'>
        <div className='flex flex-row flex-wrap justify-between gap-3'>
          <h2 className='text-2xl font-bold'>{project.title}</h2>
          <span
            className={`rounded-2xl ${renderStatus(
              project
            )} p-1.5 text-sm font-semibold text-black`}
          >
            {project.status}
          </span>
        </div>
        <p className='max-w-xs'>
          {project.description.slice(0, 200).concat('...')}
        </p>
      </div>
    </article>
  );
}

export default ProjectCard;
