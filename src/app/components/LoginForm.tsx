'use client';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Button from './ui/Button';

const handleLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data } = await axios.post(
    '/api/auth/login',
    {
      email,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return data;
};

function LoginForm() {
  const router = useRouter();

  const loginSchema = z.object({
    email: z
      .string({ required_error: 'Provide an email' })
      .email({ message: 'Invalid email' }),
    password: z
      .string({ required_error: 'Provide a password' })
      .min(6, { message: 'Password must be at least 6 characters' }),
  });

  type LoginSchemaType = z.infer<typeof loginSchema>;

  const { mutate, isLoading, error } = useMutation({
    mutationKey: ['login'],
    mutationFn: handleLogin,
    onError: (err: Error) => {
      console.log(err);
    },
    onSuccess: (data) => {
      localStorage.setItem('user', JSON.stringify(data));
      router.push('/dashboard');
    },
  });

  return (
    <Formik<LoginSchemaType>
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        mutate(values);
      }}
      validationSchema={toFormikValidationSchema(loginSchema)}
    >
      {({ errors, touched }) => {
        return (
          <Form className='flex flex-col gap-2'>
            {error ? (
              <span className='rounded-md bg-red-400 p-2'>{error.message}</span>
            ) : null}

            <div className='flex flex-col gap-2'>
              <label className='text-sm font-medium text-white' id='email'>
                Email
              </label>
              <Field
                className='rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400'
                name='email'
                id='email'
                type='email'
                placeholder='johndoe@gmail.com'
              />
              {errors.email && touched.email ? (
                <span className='text-red-400'>{errors.email}</span>
              ) : null}
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-medium text-white' id='password'>
                Password
              </label>
              <Field
                className='rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400'
                name='password'
                id='password'
                type='password'
                placeholder='*******'
              />
              {errors.password && touched.password ? (
                <span className='text-red-400'>{errors.password}</span>
              ) : null}
            </div>
            <Button
              className='mt-2 bg-purple-500 hover:bg-purple-400'
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Login'}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
