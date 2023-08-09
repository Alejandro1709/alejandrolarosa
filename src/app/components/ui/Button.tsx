import { twMerge } from 'tailwind-merge';
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

function Button({
  className,
  children,
  type = 'button',
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        `rounded-md px-4 py-2 transition-all ${
          disabled
            ? 'pointer-events-none cursor-not-allowed bg-slate-300'
            : 'bg-slate-300 hover:bg-slate-300 active:scale-95'
        }`,
        className
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
