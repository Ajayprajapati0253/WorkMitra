function Hero() {
  return (
    <section className="bg-gradient-to-r from-black to-gray-900 text-white min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-3xl">

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            Find Trusted
            <span className="text-yellow-400">
              {" "}Local Workers
            </span>
            <br />
            Near You

          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-lg text-gray-300">

            Mistri, Painter, Electrician,
            Beauty Parlor, Plumber and more.

          </p>

          {/* Search Bar */}
          <div className="mt-8 flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Search workers..."
              className="px-5 py-4 rounded-lg text-black w-full outline-none"
            />

            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition">

              Search

            </button>

          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex gap-4">

            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">

              Hire Now

            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">

              Become a Worker

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;