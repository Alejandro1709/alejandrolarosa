import type IProject from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className='flex cursor-pointer select-none flex-col gap-1 overflow-hidden rounded-md shadow-lg transition-all hover:scale-95 hover:outline'>
        <header className='h-[172px] bg-[#181818]'>
          {project.thumbnail ? (
            <Image
              className='h-full w-full bg-cover'
              src={project.thumbnail}
              alt='Project title'
              width={100}
              height={100}
            />
          ) : null}
        </header>
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
            {project.description.length >= 200
              ? project.description.slice(0, 200).concat('...')
              : project.description}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default ProjectCard;
