import ContactForm from './ContactForm';

function Contact() {
  return (
    <section className='flex flex-col gap-2 bg-slate-800 p-4'>
      <h1 className='text-3xl'>Let&apos;s get in touch!</h1>
      <ContactForm />
    </section>
  );
}

export default Contact;
