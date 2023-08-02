import React from 'react';

type Props = {
  Icon: React.FC;
};

function Social({ Icon }: Props) {
  return (
    <a
      href='https://github.com/alejandro1709'
      className='flex h-9 w-9 items-center justify-center rounded-md bg-[#181818] hover:bg-black'
      target='_blank'
    >
      <Icon />
    </a>
  );
}

export default Social;
