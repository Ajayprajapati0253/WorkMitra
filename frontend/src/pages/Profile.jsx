import {
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Briefcase
} from "lucide-react";

function Profile() {

  const worker = {

    name: "Ramesh Kumar",

    work: "House Mistri",

    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",

    rating: "4.8",

    experience: "8",

    price: "900",

    location: "Vidisha, Madhya Pradesh",

    about:
      "Experienced house construction worker with expertise in building homes, walls, tiles and complete construction work.",

    gallery: [

      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15",

      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",

      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"

    ],

    reviews: [

      {
        name: "Rahul Sharma",
        rating: "5.0",
        comment:
          "Very professional and completed work on time."
      },

      {
        name: "Pooja Verma",
        rating: "4.8",
        comment:
          "Good quality work and reasonable pricing."
      }

    ]

  };

  return (

    <div className="bg-gray-100 min-h-screen py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Cover Image */}
          <img
            src={worker.image}
            alt={worker.name}
            className="w-full h-96 object-cover"
          />

          {/* Info */}
          <div className="p-8">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div>

                <h1 className="text-4xl font-bold text-gray-800">

                  {worker.name}

                </h1>

                <p className="text-yellow-500 text-xl font-semibold mt-2">

                  {worker.work}

                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-4">

                  <Star
                    className="text-yellow-400 fill-yellow-400"
                    size={22}
                  />

                  <span className="font-medium text-lg">

                    {worker.rating}

                  </span>

                </div>

                {/* Location */}
                <div className="flex items-center gap-2 mt-3 text-gray-600">

                  <MapPin size={20} />

                  <span>{worker.location}</span>

                </div>

                {/* Experience */}
                <div className="flex items-center gap-2 mt-3 text-gray-600">

                  <Briefcase size={20} />

                  <span>

                    {worker.experience} Years Experience

                  </span>

                </div>

              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col gap-4">

                <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2">

                  <Phone size={20} />

                  Call Now

                </button>

                <button className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2">

                  <MessageCircle size={20} />

                  WhatsApp

                </button>

              </div>

            </div>

          </div>

        </div>

        {/* About + Pricing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">

          {/* About */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-4">

              About Worker

            </h2>

            <p className="text-gray-600 leading-8">

              {worker.about}

            </p>

          </div>

          {/* Pricing */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">

              Pricing

            </h2>

            <p className="text-5xl font-bold text-yellow-500">

              ₹ {worker.price}

            </p>

            <p className="text-gray-600 mt-2">

              Per Day Charge

            </p>

          </div>

        </div>

        {/* Gallery */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

          <h2 className="text-3xl font-bold mb-6">

            Work Gallery

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {
              worker.gallery.map((image, index) => (

                <img
                  key={index}
                  src={image}
                  alt="gallery"
                  className="rounded-xl h-64 w-full object-cover hover:scale-105 transition"
                />

              ))
            }

          </div>

        </div>

        {/* Videos Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

          <h2 className="text-3xl font-bold mb-6">

            Work Videos

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <iframe
              className="w-full h-72 rounded-xl"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="YouTube video"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full h-72 rounded-xl"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="YouTube video"
              allowFullScreen
            ></iframe>

          </div>

        </div>

        {/* Reviews */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

          <h2 className="text-3xl font-bold mb-6">

            Customer Reviews

          </h2>

          <div className="space-y-6">

            {
              worker.reviews.map((review, index) => (

                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6"
                >

                  <div className="flex items-center gap-2">

                    <Star
                      className="text-yellow-400 fill-yellow-400"
                      size={18}
                    />

                    <span className="font-semibold">

                      {review.rating}

                    </span>

                  </div>

                  <h3 className="text-xl font-bold mt-2">

                    {review.name}

                  </h3>

                  <p className="text-gray-600 mt-2">

                    {review.comment}

                  </p>

                </div>

              ))
            }

          </div>

        </div>

        {/* Location */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

          <h2 className="text-3xl font-bold mb-6">

            Location

          </h2>

          <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center text-gray-600 text-xl">

            Google Map Section

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;