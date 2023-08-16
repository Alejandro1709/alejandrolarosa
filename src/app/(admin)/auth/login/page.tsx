import LoginForm from '@/app/components/LoginForm';

export const metadata = {
  title: 'Alejandro LR | Login',
  description: 'Login to be able to view, create, edit and delete page content',
};

function LoginPage() {
  return (
    <div className='mt-6 flex flex-col gap-4'>
      <h2 className='text-center text-3xl font-medium uppercase leading-snug tracking-wider text-white lg:self-start'>
        admin login
      </h2>

      <div className='lg:flex-shrink-none mx-6 flex flex-col gap-4 lg:mx-0'>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
