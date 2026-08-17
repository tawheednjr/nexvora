import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Clock3,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: <Rocket size={42} />,
    title: "Fast Delivery",
    description:
      "We deliver high-quality digital products quickly without compromising quality.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Premium Quality",
    description:
      "Every website is crafted with clean code, beautiful design, and modern technologies.",
  },
  {
    icon: <Clock3 size={42} />,
    title: "On-Time Support",
    description:
      "We value your time and provide reliable communication throughout the project.",
  },
  {
    icon: <Headphones size={42} />,
    title: "24/7 Assistance",
    description:
      "We're always available to help you even after your project is completed.",
  },
];

function WhyChoose() {
  return (
    <section className="relative py-32 px-8 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="px-5 py-2 rounded-full bg-purple-600/10 border border-purple-500/30 text-purple-400 text-sm">
            ⭐ Why Choose Us
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center"
        >
          Why Choose <span className="text-purple-500">Nexvora</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 max-w-3xl mx-auto mt-6 mb-20 text-lg"
        >
          We combine creativity, technology and innovation to build
          digital experiences that help businesses grow.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group p-8 rounded-3xl bg-[#111111] border border-purple-500/20 hover:border-purple-500 transition-all duration-500 hover:shadow-[0_20px_80px_rgba(139,92,246,.35)]"
            >

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-500 to-blue-500 flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition duration-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;