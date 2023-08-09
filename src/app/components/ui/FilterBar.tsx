import { categories } from '@/data/skills';
import { useCategoryStore } from '@/stores/categoryStore';

function FilterBar() {
  const activeCategory = useCategoryStore((state) => state.category);
  const setCategory = useCategoryStore((state) => state.setCategory);

  return (
    <div className='hidden flex-row rounded-lg border border-purple-400 bg-black px-4 py-2 shadow-purple-400 lg:flex'>
      <ul className='flex flex-wrap items-center gap-2'>
        {categories.map((category) => (
          <li
            key={category.id}
            className={`cursor-pointer rounded-md px-2 py-1 ${
              category.name === activeCategory
                ? 'bg-purple-400'
                : 'hover:bg-[#181818] hover:text-white'
            }`}
            onClick={() => setCategory(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterBar;
