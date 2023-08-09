import ContactForm from './ui/ContactForm';

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
        <ContactForm />
        <span className='rounded-md bg-green-400 p-2'>
          Mail successfully sent!
        </span>
      </div>
    </section>
  );
}

export default Contact;
