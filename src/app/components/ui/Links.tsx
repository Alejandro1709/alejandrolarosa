import links from '@/data/links';
import Link from 'next/link';

function Links() {
  return (
    <>
      {links.map((link) => (
        <Link key={link.id} href={link.href}>
          {link.label}
        </Link>
      ))}
    </>
  );
}

export default Links;
