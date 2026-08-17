import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import dashboard from "../assets/projects/dashboard.webp";
import ecommerce from "../assets/projects/ecommerce.webp";
import restaurant from "../assets/projects/restaurant.webp";
import realestate from "../assets/projects/realestate.webp";
import portfolio from "../assets/projects/portfolio.webp";
import business from "../assets/projects/business.webp";

const projects = [
  {
    title: "AI Analytics Dashboard",
    category: "SaaS",
    image: dashboard,
    description:
      "Modern AI-powered analytics dashboard with real-time insights and business intelligence.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Nexvora Commerce",
    category: "E-Commerce",
    image: ecommerce,
    description:
      "A premium online shopping platform with secure checkout and modern user experience.",
    tech: ["React", "Express", "MongoDB", "Stripe"],
    live: "#",
    github: "#",
  },
  {
    title: "Restaurant Website",
    category: "Restaurant",
    image: restaurant,
    description:
      "Modern restaurant website featuring online reservations, digital menus and a premium dining experience.",
    tech: ["React", "Firebase", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Real Estate Platform",
    category: "Property",
    image: realestate,
    description:
      "Luxury property listing platform with advanced search and interactive property listings.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    category: "Portfolio",
    image: portfolio,
    description:
      "Modern personal portfolio showcasing skills, projects, experience and achievements.",
    tech: ["React", "Framer Motion", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Business Landing Page",
    category: "Business",
    image: business,
    description:
      "High-converting business landing page designed for startups and growing companies.",
    tech: ["React", "Vite", "Tailwind"],
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#090312] to-black px-6 py-32 md:px-8">

          {/* Background Glow */}
          <div className="pointer-events-none absolute left-10 top-20 h-80 w-80 rounded-full bg-purple-600/20 blur-[150px]" />

          <div className="pointer-events-none absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-500/20 blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-7xl">

            {/* Portfolio Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex justify-center"
            >
              <div className="rounded-full border border-purple-500/30 bg-purple-600/10 px-5 py-2 text-sm text-purple-400">
                💼 Our Portfolio
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center text-5xl font-bold md:text-6xl"
            >
              Featured{" "}
              <span className="text-purple-500">
                Projects
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 mb-20 max-w-3xl text-center text-lg leading-8 text-gray-400"
            >
              Explore some of our recent work built with modern
              technologies, exceptional user experiences and scalable
              architecture.
            </motion.p>

            {/* Projects Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -10 }}
                  className="group overflow-hidden rounded-3xl border border-purple-500/20 bg-[#111111] transition-all duration-500 hover:border-purple-500 hover:shadow-[0_20px_80px_rgba(139,92,246,0.35)]"
                >

                  {/* Project Image */}
                  <div className="relative h-60 overflow-hidden bg-black">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Category */}
                    <div className="absolute left-5 top-5 rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white">
                      {project.category}
                    </div>

                  </div>

                  {/* Project Content */}
                  <div className="p-7">

                    <h2 className="mb-3 text-2xl font-bold text-white">
                      {project.title}
                    </h2>

                    <p className="mb-6 leading-7 text-gray-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">

                      <a
                        href={project.live}
                        onClick={(e) => {
                          if (project.live === "#") {
                            e.preventDefault();
                          }
                        }}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105"
                      >
                        <FaExternalLinkAlt size={14} />
                        Live Demo
                      </a>

                      <a
                        href={project.github}
                        onClick={(e) => {
                          if (project.github === "#") {
                            e.preventDefault();
                          }
                        }}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-purple-500 py-3 font-semibold text-white transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10"
                      >
                        <FaGithub size={17} />
                        GitHub
                      </a>

                    </div>

                  </div>
                </motion.article>
              ))}

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Projects;