import { categories } from '@/data/skills';

function FilterBar() {
  return (
    <div className='flex flex-row rounded-lg border border-purple-400 bg-black px-4 py-2 shadow-purple-400'>
      <ul className='flex flex-wrap items-center gap-2'>
        {categories.map((category) => (
          <li
            key={category.id}
            className='cursor-pointer rounded-md px-2 py-1 hover:bg-[#181818] hover:text-white'
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterBar;
