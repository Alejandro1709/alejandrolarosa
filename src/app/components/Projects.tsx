import ProjectCard from './ui/ProjectCard';

type ProjectsProps = {
  id: string;
};

function Projects({ id }: ProjectsProps) {
  return (
    <section id={id} className='flex flex-col items-center space-y-10'>
      <h2 className='text-3xl font-medium uppercase leading-snug tracking-wider text-purple-400/60 lg:self-start'>
        projects
      </h2>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;
