import { Star, MapPin, Briefcase } from "lucide-react";

function WorkerCard({
  image,
  name,
  work,
  rating,
  price,
  location,
  experience
}) {
  return (

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="p-5">

        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-800">
          {name}
        </h2>

        {/* Work */}
        <p className="text-yellow-500 font-semibold mt-1">
          {work}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">

          <Star className="text-yellow-400 fill-yellow-400" size={20} />

          <span className="font-medium">
            {rating}
          </span>

        </div>

        {/* Price */}
        <p className="mt-3 text-lg font-semibold text-gray-700">

          ₹ {price} / day

        </p>

        {/* Location */}
        <div className="flex items-center gap-2 mt-3 text-gray-600">

          <MapPin size={18} />

          <span>{location}</span>

        </div>

        {/* Experience */}
        <div className="flex items-center gap-2 mt-2 text-gray-600">

          <Briefcase size={18} />

          <span>{experience} Years Experience</span>

        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">

          View Profile

        </button>

      </div>

    </div>

  );
}

export default WorkerCard;