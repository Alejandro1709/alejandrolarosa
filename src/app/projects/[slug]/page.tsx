import Button from '@/app/components/ui/Button';
import projects from '@/data/projects';

export default function ProjectPage(props: { params: { slug: string } }) {
  const foundProject = projects.find((p) => p.slug == props.params.slug);

  return (
    <section className='mx-6 space-y-14 md:mx-auto md:max-w-screen-md lg:mx-auto lg:max-w-screen-lg'>
      <Button className='bg-purple-400 hover:bg-indigo-300'>Back</Button>
      Hello {foundProject?.title}
    </section>
  );
}
