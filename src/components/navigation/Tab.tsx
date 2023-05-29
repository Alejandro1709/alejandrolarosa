import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type ITab from '@/types/tab';

type NavLinkProps = {
  tab: ITab;
};

function Tab({ tab }: NavLinkProps) {
  const pathName = usePathname()

  return (
    <Link href={tab.href} className={`text-md flex-1 cursor-pointer border ${pathName === tab.href
      ? 'hover:border-white'
      : 'border-slate-700'
      } bg-slate-800 p-2.5 text-center hover:border-white`}>
      <li>
        {tab.label.toUpperCase()}
      </li>
    </Link>
  );
}

export default Tab;
