'use client';

import { useRef } from "react";
import { ApiContactRequest } from "@/validators/validator";

function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value
    const email = emailRef.current?.value
    const subject = subjectRef.current?.value
    const message = messageRef.current?.value

    if (!name || !email || !subject || !message) return

    const payload: ApiContactRequest = {
      name,
      email,
      subject,
      message
    }

    const res = await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    console.log(res)
  };

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-1'>
        <label htmlFor='name'>Name:</label>
        <input
          className='border border-slate-600 bg-slate-700 p-2'
          id='name'
          type='text'
          placeholder='John Doe'
          ref={nameRef}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='email'>Email:</label>
        <input
          className='border border-slate-600 bg-slate-700 p-2'
          id='email'
          type='text'
          placeholder='johndoe@example.com'
          ref={emailRef}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='subject'>Subject:</label>
        <input
          className='border border-slate-600 bg-slate-700 p-2'
          id='subject'
          type='text'
          placeholder='App Idea'
          ref={subjectRef}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='message'>Message:</label>
        <textarea
          className='resize-none border border-slate-600 bg-slate-700 p-2 text-white'
          id='message'
          placeholder='Your message goes here'
          ref={messageRef}
        ></textarea>
      </div>
      <button className='mt-2 rounded-md bg-blue-400 p-2 text-lg font-medium hover:bg-blue-500 active:bg-blue-600'>
        Send
      </button>
      <div>
        <span>Error will be here!!</span>
      </div>
    </form>
  );
}

export default ContactForm;
