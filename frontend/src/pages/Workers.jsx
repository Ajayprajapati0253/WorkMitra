import { useState } from "react";
import WorkerCard from "../components/WorkerCard";

function Workers() {

  const workersData = [

    {
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd",

      name: "Ramesh Kumar",

      work: "Mistri",

      rating: "4.8",

      price: "900",

      location: "Vidisha",

      experience: "8"
    },

    {
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e",

      name: "Suresh Painter",

      work: "Painter",

      rating: "4.7",

      price: "700",

      location: "Basoda",

      experience: "5"
    },

    {
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",

      name: "Aman Electrician",

      work: "Electrician",

      rating: "4.9",

      price: "1000",

      location: "Vidisha",

      experience: "10"
    },

    {
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216",

      name: "Pooja Beauty",

      work: "Beauty Parlor",

      rating: "4.6",

      price: "1500",

      location: "Bhopal",

      experience: "6"
    }

  ];

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const [location, setLocation] = useState("");

  const filteredWorkers = workersData.filter((worker) => {

    return (

      worker.name.toLowerCase().includes(search.toLowerCase()) &&

      worker.work.toLowerCase().includes(category.toLowerCase()) &&

      worker.location.toLowerCase().includes(location.toLowerCase())

    );

  });

  return (

    <div className="bg-gray-100 min-h-screen px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-center mb-3">

          Find Workers

        </h1>

        <p className="text-center text-gray-600 mb-10">

          Search trusted local workers near you

        </p>

        {/* Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Search */}
          <input
            type="text"
            placeholder="Search workers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
          />

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
          >

            <option value="">
              All Categories
            </option>

            <option value="mistri">
              Mistri
            </option>

            <option value="painter">
              Painter
            </option>

            <option value="electrician">
              Electrician
            </option>

            <option value="beauty parlor">
              Beauty Parlor
            </option>

          </select>

          {/* Location */}
          <input
            type="text"
            placeholder="Enter location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
          />

        </div>

        {/* Workers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {
            filteredWorkers.map((worker, index) => (

              <WorkerCard
                key={index}
                image={worker.image}
                name={worker.name}
                work={worker.work}
                rating={worker.rating}
                price={worker.price}
                location={worker.location}
                experience={worker.experience}
              />

            ))
          }

        </div>

      </div>

    </div>
  );
}

export default Workers;