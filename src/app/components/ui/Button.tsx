interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button className='rounded-md bg-purple-400 px-4 py-2 transition-all hover:bg-indigo-300 active:scale-95'>
      {children}
    </button>
  );
}

export default Button;
