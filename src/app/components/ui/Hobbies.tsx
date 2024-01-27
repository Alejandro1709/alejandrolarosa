import type IHobby from '@/types/hobby';
import Hobby from './Hobby';

const hobbies: IHobby[] = [
  {
    id: 1,
    name: 'Reading',
  },
  {
    id: 2,
    name: 'Gaming',
  },
  {
    id: 3,
    name: 'Coding',
  },
  {
    id: 4,
    name: 'Music',
  },
  {
    id: 5,
    name: 'Movies',
  },
  {
    id: 6,
    name: 'Theatre',
  },
  {
    id: 7,
    name: 'Biking',
  },
  {
    id: 8,
    name: 'Hiking',
  },
  {
    id: 9,
    name: 'Gym',
  },
  {
    id: 10,
    name: 'Persistent',
  },
  {
    id: 11,
    name: 'Curious',
  },
  {
    id: 12,
    name: 'Creative',
  },
  {
    id: 13,
    name: 'Team Player',
  },
  {
    id: 14,
    name: 'Problem Solver',
  },
  {
    id: 15,
    name: 'Coffee Lover',
  },
];

function Hobbies() {
  return (
    <div className='hidden self-start lg:flex lg:flex-1'>
      <ul className='flex flex-wrap justify-center gap-2 lg:grid lg:grid-cols-3 lg:self-end'>
        {hobbies.map((hobby) => (
          <Hobby key={hobby.id} hobby={hobby} />
        ))}
      </ul>
    </div>
  );
}

export default Hobbies;
