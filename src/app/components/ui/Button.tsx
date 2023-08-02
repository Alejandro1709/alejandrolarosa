import { twMerge } from 'tailwind-merge';
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={twMerge(
        `rounded-md bg-slate-400 px-4 py-2 transition-all hover:bg-slate-300 active:scale-95`,
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
