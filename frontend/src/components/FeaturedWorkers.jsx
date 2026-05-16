import WorkerCard from "./WorkerCard";

function FeaturedWorkers() {

  const workers = [

    {
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd",

      name: "Ramesh Kumar",

      work: "House Mistri",

      rating: "4.8",

      price: "900",

      location: "Vidisha",

      experience: "8"
    },

    {
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e",

      name: "Suresh Painter",

      work: "Wall Painter",

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
    }

  ];

  return (

    <section className="bg-gray-100 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-4">

          Featured Workers

        </h1>

        <p className="text-center text-gray-600 mb-12">

          Trusted and experienced workers near you

        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {
            workers.map((worker, index) => (

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

    </section>
  );
}

export default FeaturedWorkers;