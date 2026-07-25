function ServicesPreview() {
  return (
    <section className="px-8 py-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4">
            Web Development
          </h3>

          <p className="text-gray-400">
            Modern, responsive and high-performance websites for businesses and startups.
          </p>
        </div>

        <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4">
            Mobile Apps
          </h3>

          <p className="text-gray-400">
            Android and iOS applications built for scalability and user engagement.
          </p>
        </div>

        <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4">
            AI Automation
          </h3>

          <p className="text-gray-400">
            Smart automation solutions that save time and improve productivity.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;