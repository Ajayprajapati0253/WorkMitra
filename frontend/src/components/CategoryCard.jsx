function CategoryCard({ title, icon }) {
  return (

    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition duration-300 cursor-pointer">

      <div className="text-yellow-500 mb-4">
        {icon}
      </div>

      <h2 className="text-lg font-semibold text-gray-800 text-center">
        {title}
      </h2>

    </div>

  );
}

export default CategoryCard;