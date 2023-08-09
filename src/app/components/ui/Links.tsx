import links from '@/data/links';

function Links() {
  return (
    <>
      {links.map((link) => (
        <a key={link.id} href={link.href}>
          {link.label}
        </a>
      ))}
    </>
  );
}

export default Links;
