import TestimonialCard from "./TestimonialCard";

function Testimonials() {

  const reviews = [

    {
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",

      name: "Rahul Sharma",

      rating: "4.9",

      comment:
        "Very professional worker. Completed my house work on time."
    },

    {
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",

      name: "Pooja Verma",

      rating: "4.8",

      comment:
        "Best beauty parlor service near my location."
    },

    {
      image:
        "https://randomuser.me/api/portraits/men/75.jpg",

      name: "Amit Patel",

      rating: "5.0",

      comment:
        "Electrician was experienced and fixed everything quickly."
    }

  ];

  return (

    <section className="bg-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-4">

          What Customers Say

        </h1>

        <p className="text-center text-gray-600 mb-12">

          Trusted by local customers across Vidisha

        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {
            reviews.map((review, index) => (

              <TestimonialCard
                key={index}
                image={review.image}
                name={review.name}
                rating={review.rating}
                comment={review.comment}
              />

            ))
          }

        </div>

      </div>

    </section>
  );
}

export default Testimonials;