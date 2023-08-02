import React from 'react';

type Props = {
  Icon: React.FC;
  size?: 'sm' | 'md' | 'lg';
};

function Social({ Icon, size }: Props) {
  const sizes =
    size === 'sm' ? 'h-6 w-6' : size === 'md' ? 'h-7 w-7' : 'h-9 w-9';
  return (
    <a
      href='https://github.com/alejandro1709'
      className={`flex ${sizes} items-center justify-center rounded-md bg-[#181818] hover:bg-black`}
      target='_blank'
    >
      <Icon />
    </a>
  );
}

export default Social;
