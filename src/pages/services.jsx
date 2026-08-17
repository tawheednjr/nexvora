import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  BrainCircuit,
  Cloud,
  Palette,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: <Code2 size={42} />,
    title: "Web Development",
    description:
      "Fast, responsive, SEO-friendly websites built using React, Next.js, Node.js and modern technologies.",
  },
  {
    icon: <Smartphone size={42} />,
    title: "Mobile App Development",
    description:
      "Beautiful Android & iOS applications focused on performance, speed and user experience.",
  },
  {
    icon: <BrainCircuit size={42} />,
    title: "AI Automation",
    description:
      "AI chatbots, automation systems and intelligent solutions that save time and increase productivity.",
  },
  {
    icon: <Cloud size={42} />,
    title: "Cloud & DevOps",
    description:
      "Cloud deployment, CI/CD pipelines, scalable infrastructure and secure hosting solutions.",
  },
  {
    icon: <Palette size={42} />,
    title: "UI / UX Design",
    description:
      "Modern, beautiful and conversion-focused interfaces that users love and remember.",
  },
  {
    icon: <BarChart3 size={42} />,
    title: "Digital Marketing",
    description:
      "SEO optimization, Google Ads, branding and social media strategies to grow your business.",
  },
];

function Services() {
  return (
    <section className="relative py-32 px-8 overflow-hidden bg-gradient-to-b from-black via-[#090312] to-black">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/30 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/30 blur-[140px] rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="px-5 py-2 rounded-full bg-purple-600/10 border border-purple-500/30 text-purple-400 text-sm">
            🚀 What We Offer
          </div>
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-5xl md:text-6xl font-bold text-center"
        >
          Our <span className="text-purple-500">Services</span>
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-3xl mx-auto mt-6 mb-20 text-lg leading-8"
        >
          We build modern digital products that help startups,
          businesses and enterprises grow faster through
          cutting-edge technologies and exceptional digital
          experiences.
        </motion.p>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="
              group
              rounded-3xl
              p-8
              bg-[#111111]
              border
              border-purple-500/20
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-purple-500
              hover:shadow-[0_20px_80px_rgba(139,92,246,0.35)]
              "
            >

              {/* Icon */}

              <div
                className="
                w-20
                h-20
                rounded-2xl
                bg-gradient-to-r
                from-purple-600
                via-violet-500
                to-cyan-500
                flex
                items-center
                justify-center
                mb-8
                text-white
                group-hover:rotate-12
                group-hover:scale-110
                transition-all
                duration-500
                "
              >
                {service.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-white mb-5">
                {service.title}
              </h3>

              {/* Description */}

              <p className="text-gray-400 leading-8">
                {service.description}
              </p>

              {/* Button */}

              <button
                className="
                mt-8
                text-purple-400
                hover:text-white
                transition-all
                duration-300
                "
              >
                <span className="inline-flex items-center gap-2 group-hover:translate-x-2 transition-all duration-300">
                  Learn More
                  <span>→</span>
                </span>
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;