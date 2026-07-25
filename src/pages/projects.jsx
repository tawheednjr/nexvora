import { useState } from "react";
import ProjectModal from "../components/ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      description:
        "Modern online shopping platform with secure payments and responsive design.",
      tech: "React • Node.js • MongoDB",
      timeline: "3 Months",
      client: "Retail Startup",
    },
    {
      title: "AI Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      description:
        "Analytics dashboard powered by AI for business intelligence.",
      tech: "React • AI • Firebase",
      timeline: "2 Months",
      client: "Tech Company",
    },
    {
      title: "Startup Landing Page",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description:
        "High-converting landing page designed for startup growth.",
      tech: "React • Tailwind CSS",
      timeline: "1 Month",
      client: "SaaS Startup",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-20">
      <h1 className="text-5xl font-bold text-center mb-16">
        Our Projects
      </h1>

      <ProjectModal
      project={selectedProject}
      onClose={() => setSelectedProject(null)}
      />

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden border border-gray-800 rounded-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-56 object-cover"
  />

  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
    <button className="px-5 py-3 bg-purple-600 rounded-xl">
      View Details
    </button>
  </div>
</div>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">
                {project.title}
              </h2>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <p className="text-purple-400 mb-6">
                {project.tech}
              </p>

              <button onClick={() => setSelectedProject(project)}
              className="px-5 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition"
              >
              View Project
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;