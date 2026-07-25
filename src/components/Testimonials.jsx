function Testimonials() {
  return (
    <section className="px-8 py-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
          <p className="text-gray-400 mb-4">
            "Nexvora delivered an outstanding website that helped us grow our business."
          </p>
          <h3 className="font-bold">Sarah Johnson</h3>
        </div>

        <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
          <p className="text-gray-400 mb-4">
            "Professional team, fast delivery, and excellent communication."
          </p>
          <h3 className="font-bold">Michael Chen</h3>
        </div>

        <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
          <p className="text-gray-400 mb-4">
            "The AI automation solution saved our company hours every week."
          </p>
          <h3 className="font-bold">David Wilson</h3>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;