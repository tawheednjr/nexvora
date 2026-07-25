function ProjectsPreview() {
  return (
    <section className="px-8 py-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4">
            E-Commerce Store
          </h3>

          <p className="text-gray-400">
            Modern shopping platform with secure payments and fast performance.
          </p>
        </div>

        <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4">
            AI Dashboard
          </h3>

          <p className="text-gray-400">
            Analytics and automation platform for business intelligence.
          </p>
        </div>

        <div className="p-8 border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4">
            SaaS Landing Page
          </h3>

          <p className="text-gray-400">
            High-converting startup website designed for growth.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ProjectsPreview;