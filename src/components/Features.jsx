function Features() {
  return (
    <section className="px-8 py-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        What We Do
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">
            Web Development
          </h3>
          <p className="text-gray-400">
            Modern and responsive websites built with the latest technologies.
          </p>
        </div>

        <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">
            App Development
          </h3>
          <p className="text-gray-400">
            Scalable applications designed for performance and growth.
          </p>
        </div>

        <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">
            AI Solutions
          </h3>
          <p className="text-gray-400">
            Intelligent tools and automation for modern businesses.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;