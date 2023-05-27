'use client';

import { useRef } from "react";
import { ApiContactRequest } from "@/validators/validator";
import { useMutation } from "@tanstack/react-query";
import { useTabStore } from "@/stores/tabStore";

function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const setCurrentTab = useTabStore((state) => state.setCurrentTab)

  const handleClearForm = () => {
    const name = nameRef.current
    const email = emailRef.current
    const subject = subjectRef.current
    const message = messageRef.current

    if (!name || !email || !subject || !message) return

    name.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''
  };

  const handleSendMail = async ({ name, email, subject, message }: ApiContactRequest) => {
    const payload: ApiContactRequest = {
      name,
      email,
      subject,
      message
    }

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
  }

  const { mutate, isLoading, error } = useMutation({
    mutationKey: ['sendEmail'],
    mutationFn: handleSendMail,
    onSuccess: () => {
      setCurrentTab(1)
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value
    const email = emailRef.current?.value
    const subject = subjectRef.current?.value
    const message = messageRef.current?.value

    if (!name || !email || !subject || !message) return

    mutate({ name, email, subject, message })
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
      <button className='mt-2 rounded-md bg-blue-400 p-2 text-lg font-medium hover:bg-blue-500 active:bg-blue-600 disabled:bg-slate-400 disabled:cursor-not-allowed' disabled={isLoading}>
        Send
      </button>
      {error ? (
        <div>
          <span>Error will be here!!</span>
        </div>
      ) : null}
    </form>
  );
}

export default ContactForm;
