import Link from 'next/link';

export const metadata = {
  title: 'Alejandro LR | Not Found',
};

function NotFound() {
  return (
    <div className='mx-6 flex min-h-screen flex-col items-center justify-center md:mx-auto md:max-w-screen-md lg:mx-auto lg:max-w-screen-lg'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='animate-pulse bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-6xl font-bold text-transparent xl:text-7xl'>
          Uh oh.
        </h1>
        <h2 className='max-w-sm text-center text-2xl font-medium xl:text-3xl'>
          This page does not exists... Yet
        </h2>
        <Link href='/'>Go back home</Link>
      </div>
    </div>
  );
}

export default NotFound;
