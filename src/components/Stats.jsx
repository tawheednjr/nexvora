import { motion } from "framer-motion";
import { Briefcase, Users, Star, Clock } from "lucide-react";

const stats = [
  {
    icon: <Briefcase size={28} />,
    number: "25+",
    label: "Projects Completed",
  },
  {
    icon: <Users size={28} />,
    number: "15+",
    label: "Happy Clients",
  },
  {
    icon: <Star size={28} />,
    number: "100%",
    label: "Client Satisfaction",
  },
  {
    icon: <Clock size={28} />,
    number: "24/7",
    label: "Support",
  },
];

function Stats() {
  return (
    <section className="relative py-24 px-6 md:px-8 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-purple-600/10 blur-[130px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="absolute top-1/2 right-10 w-72 h-72 bg-blue-500/10 blur-[130px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 text-center transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/[0.04]"
            >

              {/* Icon */}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 transition-all duration-300 group-hover:bg-purple-500/20 group-hover:scale-110">
                {stat.icon}
              </div>

              {/* Number */}
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {stat.number}
              </h2>

              {/* Label */}
              <p className="mt-3 text-sm md:text-base text-gray-500">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;