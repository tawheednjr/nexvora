import { motion } from "framer-motion";
import aboutImage from "../assets/about.webp";

function About() {
  return (
    <section className="relative overflow-hidden py-32 px-6 bg-[#07070f]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            About <span className="text-purple-500">Nexvora</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            We empower startups and businesses with modern digital
            solutions by combining innovative technology, AI,
            outstanding design, and exceptional user experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-purple-600/20 blur-3xl rounded-full"></div>

            <img
              src={aboutImage}
              alt="About Nexvora"
              className="relative rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-4xl font-bold mb-8">
              Building the Future with Technology
            </h3>

            <p className="text-gray-400 leading-8 mb-10 text-lg">
              At Nexvora, we specialize in building high-performance
              websites, AI-powered solutions, cloud applications,
              and custom software that help businesses grow faster,
              improve productivity, and create amazing digital
              experiences.
            </p>

            {/* Features */}

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <span className="text-2xl">🚀</span>
                <p className="text-lg">
                  Modern Website Development
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">🤖</span>
                <p className="text-lg">
                  AI Automation Solutions
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">📱</span>
                <p className="text-lg">
                  Mobile App Development
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">☁️</span>
                <p className="text-lg">
                  Cloud & DevOps Services
                </p>
              </div>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-2 gap-8 mt-12">

              <div>
                <h2 className="text-4xl font-bold text-purple-500">
                  25+
                </h2>
                <p className="text-gray-400">
                  Projects
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-purple-500">
                  15+
                </h2>
                <p className="text-gray-400">
                  Happy Clients
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-purple-500">
                  3+
                </h2>
                <p className="text-gray-400">
                  Years Experience
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-purple-500">
                  100%
                </h2>
                <p className="text-gray-400">
                  Client Satisfaction
                </p>
              </div>

            </div>

            {/* Button */}

            <button className="mt-12 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 duration-300 font-semibold shadow-lg shadow-purple-600/30">
              Learn More
            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;