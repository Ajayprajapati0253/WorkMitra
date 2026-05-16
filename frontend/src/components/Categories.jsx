import {
  Hammer,
  Paintbrush,
  Scissors,
  Truck,
  Wrench,
  PlugZap,
  Droplets,
  Sofa,
  HardHat,
  Drill,
  Building2,
  BrickWall
} from "lucide-react";

import CategoryCard from "./CategoryCard";

function Categories() {

  const categories = [

    {
      title: "Mistri",
      icon: <Hammer size={40} />
    },

    {
      title: "Painter",
      icon: <Paintbrush size={40} />
    },

    {
      title: "Beauty Parlor",
      icon: <Scissors size={40} />
    },

    {
      title: "Brick Seller",
      icon: <BrickWall size={40} />
    },

    {
      title: "Sand Supplier",
      icon: <Truck size={40} />
    },

    {
      title: "Electrician",
      icon: <PlugZap size={40} />
    },

    {
      title: "Plumber",
      icon: <Droplets size={40} />
    },

    {
      title: "Carpenter",
      icon: <Drill size={40} />
    },

    {
      title: "Tiles Worker",
      icon: <Building2 size={40} />
    },

    {
      title: "POP Worker",
      icon: <HardHat size={40} />
    },

    {
      title: "Welder",
      icon: <Wrench size={40} />
    },

    {
      title: "Furniture Maker",
      icon: <Sofa size={40} />
    }

  ];

  return (

    <section className="bg-gray-100 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-4">

          Popular Categories

        </h1>

        <p className="text-center text-gray-600 mb-12">

          Find skilled workers near your location

        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {
            categories.map((category, index) => (

              <CategoryCard
                key={index}
                title={category.title}
                icon={category.icon}
              />

            ))
          }

        </div>

      </div>

    </section>
  );
}

export default Categories;