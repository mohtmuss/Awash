export default function CategoryTabs({ categories, selected, onChange }) {
  return (
    <div className="bg-white border-b border-gray-200 overflow-x-auto sticky top-16 z-40">
      <div className="flex gap-2 px-6 py-4 min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`px-6 py-2 rounded-full whitespace-nowrap transition font-medium ${
              selected === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}