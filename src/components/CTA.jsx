import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-8 bg-black">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="pointer-events-none absolute left-10 top-10 h-60 w-60 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 right-10 h-60 w-60 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-purple-500/20 bg-gradient-to-br from-purple-950/40 via-[#0d0718] to-blue-950/30 px-6 py-16 text-center shadow-[0_20px_100px_rgba(139,92,246,0.15)] md:px-12 md:py-20"
        >

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-500/20 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-blue-500/20 blur-[100px]" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-400"
          >
            <Sparkles size={16} />
            Let's Build Something Great
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            Have an Idea?
            <br />

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Let's Make It Happen.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative z-10 mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg"
          >
            From websites and mobile applications to AI automation and
            custom software, Nexvora helps turn ambitious ideas into
            powerful digital products.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >

            {/* Start Project */}
            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40 sm:w-auto"
            >
              Start Your Project

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* View Projects */}
            <Link
              to="/projects"
              className="inline-flex w-full items-center justify-center rounded-xl border border-purple-500/40 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 sm:w-auto"
            >
              View Our Work
            </Link>

          </motion.div>

          {/* Bottom Text */}
          <p className="relative z-10 mt-8 text-sm text-gray-600">
            No pressure. Just tell us about your idea.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default CTA;