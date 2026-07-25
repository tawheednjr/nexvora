function Services() {
  return (
    <div className="min-h-screen bg-black text-white">

      <section className="text-center py-20 px-8">
        <h1 className="text-6xl font-bold mb-6">
          Our Services
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          We help startups and businesses build powerful digital products,
          automate workflows, and scale faster with modern technology.
        </p>
      </section>

      <section className="px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4">
              Web Development
            </h2>

            <p className="text-gray-400">
              Modern, responsive, and high-performance websites built with the latest technologies.
            </p>
          </div>

          <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4">
              Mobile Apps
            </h2>

            <p className="text-gray-400">
              Custom Android and iOS applications designed for growth and scalability.
            </p>
          </div>

          <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4">
              AI Automation
            </h2>

            <p className="text-gray-400">
              Smart automation solutions that save time and increase productivity.
            </p>
          </div>

          <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4">
              Custom Software
            </h2>

            <p className="text-gray-400">
              Tailored software systems built specifically for your business needs.
            </p>
          </div>

        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="max-w-4xl mx-auto border border-gray-800 rounded-3xl p-12 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Ready to Start?
          </h2>

          <p className="text-gray-400 mb-8">
            Let's discuss your project and build something amazing together.
          </p>

          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition">
            Contact Us
          </button>

        </div>
      </section>

    </div>
  );
}

export default Services;