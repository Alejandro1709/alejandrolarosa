import projects from '@/data/projects';
import ProjectCard from './ui/ProjectCard';

type ProjectsProps = {
  id: string;
};

function Projects({ id }: ProjectsProps) {
  return (
    <section id={id} className='flex flex-col items-center space-y-10'>
      <h2 className='text-3xl font-medium uppercase leading-snug tracking-wider text-white lg:self-start'>
        projects
      </h2>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
