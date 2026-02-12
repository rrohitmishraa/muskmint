export default function MenuItem({ name, description, price, image }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-soft overflow-hidden 
                 flex flex-row md:flex-col 
                 transition-transform duration-200 hover:-translate-y-1"
    >
      {/* Image */}
      <div
        className="
          w-32 h-32 md:w-full md:aspect-square lg:aspect-[4/3]
          flex-shrink-0 bg-white
          flex items-center justify-center
          overflow-hidden
        "
      >
        <img
          src={image}
          alt={name}
          className="
            w-full h-full
            object-contain md:object-cover
          "
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 lg:p-3 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-base md:text-lg lg:text-base font-semibold mb-1">
            {name}
          </h3>

          <p className="text-sm text-gray-500 line-clamp-2 md:line-clamp-2 lg:line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="font-medium text-[#1E5F4A] text-sm lg:text-base">
            {price}
          </span>

          <button
            className="text-xs md:text-sm px-3 py-1.5 rounded-full 
                       bg-[#1E5F4A] text-white 
                       hover:opacity-90 active:scale-95 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
