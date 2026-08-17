import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Startup Founder",
    initials: "AS",
    review:
      "Nexvora transformed our idea into a polished web application. The design, performance, and communication were excellent throughout the project.",
  },
  {
    name: "Priya Mehta",
    role: "Business Owner",
    initials: "PM",
    review:
      "The team delivered a modern website that perfectly represents our brand. We noticed a significant improvement in customer engagement after launch.",
  },
  {
    name: "Rahul Kapoor",
    role: "SaaS Entrepreneur",
    initials: "RK",
    review:
      "Working with Nexvora was smooth from start to finish. They understood our requirements quickly and delivered beyond our expectations.",
  },
];

function Testimonials() {
  return (
    <section className="relative py-32 px-6 md:px-8 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-purple-600/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="px-5 py-2 rounded-full border border-purple-500/30 bg-purple-600/10 text-purple-400 text-sm">
            ⭐ Client Feedback
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-center"
        >
          What Our{" "}
          <span className="text-purple-500">
            Clients Say
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-3xl mx-auto mt-6 mb-20 text-lg leading-8"
        >
          We believe great work speaks for itself. Here's what our clients
          have to say about working with Nexvora.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="relative rounded-3xl border border-purple-500/20 bg-[#111111] p-8 transition-all duration-500 hover:border-purple-500 hover:shadow-[0_20px_80px_rgba(139,92,246,0.35)]"
            >

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-purple-500/30">
                <Quote size={42} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-purple-500 text-purple-500"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 leading-8 mb-8">
                "{testimonial.review}"
              </p>

              {/* Client */}
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center font-bold text-white">
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;