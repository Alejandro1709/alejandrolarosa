import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  target?: string;
  children: React.ReactNode;
}

function NavLink({ href, target, className, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      className={twMerge(
        `rounded-md bg-slate-400 px-4 py-2 transition-all hover:bg-slate-300 active:scale-95`,
        className
      )}
    >
      {children}
    </Link>
  );
}

export default NavLink;
