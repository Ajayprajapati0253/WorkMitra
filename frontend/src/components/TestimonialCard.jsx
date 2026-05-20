import { Star } from "lucide-react";

function TestimonialCard({
  image,
  name,
  rating,
  comment
}) {
  return (

    <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">

      {/* Profile */}
      <div className="flex items-center gap-4">

        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>

          <h2 className="text-xl font-bold text-gray-800">
            {name}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">

            <Star
              className="text-yellow-400 fill-yellow-400"
              size={18}
            />

            <span className="font-medium">
              {rating}
            </span>

          </div>

        </div>

      </div>

      {/* Comment */}
      <p className="mt-5 text-gray-600 leading-7">

        "{comment}"

      </p>

    </div>

  );
}

export default TestimonialCard;