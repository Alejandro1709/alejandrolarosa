import Button from '@/app/components/ui/Button';
import projects from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPage(props: { params: { slug: string } }) {
  const foundProject = projects.find((p) => p.slug == props.params.slug);

  return (
    <section className='mx-6 space-y-14 md:mx-auto md:max-w-screen-md lg:mx-auto lg:max-w-screen-lg'>
      <header className='mt-6 flex flex-col gap-6 md:mt-10'>
        <nav className='flex flex-row items-center justify-between'>
          <Link href='/'>
            <Button className='bg-purple-400 hover:bg-indigo-300'>Back</Button>
          </Link>
          <h2 className='text-xl font-semibold md:text-2xl'>
            {foundProject?.title}
          </h2>
          <Button className='bg-purple-400 hover:bg-indigo-300'>Open</Button>
        </nav>

        <div className='flex flex-col gap-4 md:flex-row'>
          <figure className='md:w-2/4'>
            <Image
              className='select-none rounded-md'
              src={foundProject?.thumbnail ?? ''}
              alt={foundProject?.title ?? 'Untitled Project'}
              width={600}
              height={400}
              draggable={false}
              priority
            />
          </figure>

          <p className='text-lg font-medium md:w-2/4'>
            {foundProject?.description ?? 'DESC'}
          </p>
        </div>
      </header>
    </section>
  );
}
