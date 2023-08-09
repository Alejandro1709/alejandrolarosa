type Props = {
  Icon: React.FC;
  size?: 'sm' | 'md' | 'lg';
  href: string;
};

function Social({ Icon, size, href }: Props) {
  const sizes =
    size === 'sm' ? 'h-6 w-6' : size === 'md' ? 'h-7 w-7' : 'h-9 w-9';
  return (
    <a
      href={href}
      target='_blank'
      className={`flex ${sizes} items-center justify-center rounded-md bg-[#181818] hover:bg-black`}
    >
      <Icon />
    </a>
  );
}

export default Social;
