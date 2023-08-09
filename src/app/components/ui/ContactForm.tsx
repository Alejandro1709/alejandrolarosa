import { Field, Form, Formik } from 'formik';
import * as z from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Button from './Button';

function ContactForm() {
  const contactFormSchema = z.object({
    name: z
      .string({ required_error: 'Provide your name' })
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
    email: z
      .string({ required_error: 'Provide your email' })
      .email('Invalid email address'),
    subject: z
      .string({ required_error: 'Provide a subject' })
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
    message: z
      .string({ required_error: 'Provide a message' })
      .min(2, 'Too Short!')
      .max(200, 'Too Long!'),
  });

  type ContactFormSchema = z.infer<typeof contactFormSchema>;

  return (
    <Formik<ContactFormSchema>
      initialValues={{ name: '', email: '', subject: '', message: '' }}
      validationSchema={toFormikValidationSchema(contactFormSchema)}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formikState) => {
        const { errors, touched } = formikState;
        return (
          <Form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
              <label htmlFor='name' className='sr-only'>
                Name
              </label>
              <Field
                type='text'
                name='name'
                id='name'
                placeholder='Full Name'
                className='rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400'
              />
              {errors.name && touched.name ? (
                <span className='text-red-400'>{errors.name}</span>
              ) : null}
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>
              <Field
                type='text'
                name='email'
                id='email'
                placeholder='Email Address'
                className='rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400'
              />
              {errors.email && touched.email ? (
                <span className='text-red-400'>{errors.email}</span>
              ) : null}
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor='subject' className='sr-only'>
                Subject
              </label>
              <Field
                type='text'
                name='subject'
                id='subject'
                placeholder='Subject'
                className='rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400'
              />
              {errors.subject && touched.subject ? (
                <span className='text-red-400'>{errors.subject}</span>
              ) : null}
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor='message' className='sr-only'>
                Message
              </label>
              <Field
                name='message'
                id='message'
                placeholder='Message'
                className='rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400'
              />
              {errors.message && touched.message ? (
                <span className='text-red-400'>{errors.message}</span>
              ) : null}
            </div>
            <Button className='bg-purple-500 hover:bg-purple-400' type='submit'>
              Send
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
