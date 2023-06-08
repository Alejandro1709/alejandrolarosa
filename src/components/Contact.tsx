'use client';

import { useAlertStore } from '@/stores/alertStore';
import ContactForm from './ContactForm';

function Contact() {
  const currentAlert = useAlertStore((state) => state.currentAlert);

  return (
    <section className='flex flex-col gap-2 bg-slate-800 p-4'>
      {currentAlert ? (
        <div className='flex flex-row items-center justify-between bg-slate-700 p-2'>
          <span className='text-green-600'>Email sent</span>
          <button className='text-sm'>Dismiss</button>
        </div>
      ) : null}
      <h1 className='text-3xl'>Let&apos;s get in touch!</h1>
      <ContactForm />
    </section>
  );
}

export default Contact;
