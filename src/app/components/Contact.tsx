import Button from './ui/Button';

type ContactProps = {
  id: string;
};

function Contact({ id }: ContactProps) {
  return (
    <section id={id} className='flex flex-col justify-center space-y-8'>
      <h2 className='text-center text-3xl font-medium uppercase leading-snug tracking-wider text-white lg:self-start'>
        contact
      </h2>

      <div className='lg:flex-shrink-none mx-6 flex flex-col gap-4 lg:mx-0'>
        <form className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name' className='sr-only'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Full Name'
              className='rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Email Address'
              className='rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='subject' className='sr-only'>
              Subject
            </label>
            <input
              type='text'
              name='subject'
              id='subject'
              placeholder='Subject'
              className='rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='message' className='sr-only'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              placeholder='Message'
              className='rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400'
            />
          </div>
          <Button className='bg-purple-500 hover:bg-purple-400' type='submit'>
            Send
          </Button>
        </form>
        <span className='rounded-md bg-green-400 p-2'>
          Mail successfully sent!
        </span>
      </div>
    </section>
  );
}

export default Contact;
