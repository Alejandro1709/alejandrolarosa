import type IHobby from '@/types/hobby';

type HobbyProps = {
  hobby: IHobby;
};

function Hobby({ hobby }: HobbyProps) {
  return (
    <li
      key={hobby.id}
      className='rounded-md bg-[#181818] px-4 py-2 text-sm font-medium text-white lg:text-center'
    >
      {hobby.name}
    </li>
  );
}

export default Hobby;
