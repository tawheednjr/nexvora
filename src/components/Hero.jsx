import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-[80vh]">

      <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>

      <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-6xl md:text-8xl font-bold leading-tight z-10"
>
        Building Modern
        <span className="block text-purple-500">
          Digital Experiences
        </span>
      </motion.h1>

      <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="mt-8 max-w-2xl text-gray-400 text-xl z-10"
>
        We build modern websites, scalable applications, and future-ready
        digital solutions that help businesses grow.
      </motion.p>

      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="mt-10 flex gap-4 z-10"
>
        <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition">
          Start Project
        </button>

        <button className="px-8 py-4 border border-gray-700 hover:border-purple-500 rounded-xl transition">
          View Work
        </button>
      </motion.div>

    </section>
  );
}

export default Hero;