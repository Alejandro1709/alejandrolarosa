'use client';

function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='email'>Email:</label>
        <input
          className='border border-slate-600 bg-slate-700 p-2'
          id='email'
          type='text'
          placeholder='johndoe@example.com'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='subject'>Subject:</label>
        <input
          className='border border-slate-600 bg-slate-700 p-2'
          id='subject'
          type='text'
          placeholder='App Idea'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='message'>Message:</label>
        <textarea
          className='resize-none border border-slate-600 bg-slate-700 p-2 text-white'
          id='message'
          placeholder='Your message goes here'
        ></textarea>
      </div>
      <button className='mt-2 rounded-md bg-blue-400 p-2 text-lg font-medium hover:bg-blue-500 active:bg-blue-600'>
        Send
      </button>
    </form>
  );
}

export default ContactForm;
