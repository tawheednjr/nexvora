function About() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="text-center py-20 px-8">
        <h1 className="text-6xl font-bold mb-6">
          About Nexvora
        </h1>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg">
          Nexvora is a digital solutions company focused on building
          modern websites, mobile applications, AI-powered tools,
          and scalable software for businesses and startups.
        </p>
      </section>

      {/* Mission */}
      <section className="text-center px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            Our mission is to help businesses grow through innovative
            technology solutions. We combine design, development,
            and automation to create products that deliver real value.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Nexvora
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Modern Technology
            </h3>

            <p className="text-gray-400">
              We use the latest frameworks and tools to build future-ready products.
            </p>
          </div>

          <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Fast Delivery
            </h3>

            <p className="text-gray-400">
              We focus on efficient workflows to deliver projects on time.
            </p>
          </div>

          <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Client Focused
            </h3>

            <p className="text-gray-400">
              Every project is tailored to meet specific business goals.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-20">
        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-5xl font-bold text-purple-500">20+</h3>
            <p className="text-gray-400 mt-2">Projects</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-purple-500">10+</h3>
            <p className="text-gray-400 mt-2">Clients</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-purple-500">5+</h3>
            <p className="text-gray-400 mt-2">Services</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-purple-500">100%</h3>
            <p className="text-gray-400 mt-2">Commitment</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-24">
        <div className="max-w-4xl mx-auto border border-gray-800 rounded-3xl p-12 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Let's Build Something Great
          </h2>

          <p className="text-gray-400 mb-8">
            Partner with Nexvora and turn your ideas into reality.
          </p>

          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition">
            Get Started
          </button>

        </div>
      </section>

    </div>
  );
}

export default About;