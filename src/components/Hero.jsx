
import { motion } from "framer-motion";
import heroDashboard from "../assets/hero-dashboard.png";<section className="relative overflow-hidden min-h-screen flex items-center px-6 lg:px-16">

  {/* Background Glow */}
  <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

    {/* LEFT */}
    <div>

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-500/30 text-purple-400 text-sm mb-8">
        🚀 Trusted Digital Partner
      </div>

      <motion.h1
        initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8}}
        className="text-5xl md:text-7xl font-black leading-tight"
      >
        We Build
        <br />

        <span className="text-transparent bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text">
          Powerful Websites
        </span>

        <br />

        & AI Solutions
      </motion.h1>

      <motion.p
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        transition={{delay:.3}}
        className="text-gray-400 mt-8 text-lg max-w-xl"
      >
        Helping startups and businesses grow through modern websites,
        AI automation, scalable software, and powerful digital experiences.
      </motion.p>

      <motion.div
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{delay:.5}}
        className="flex gap-5 mt-10"
      >

        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 font-semibold hover:scale-105 duration-300">
          Start Project
        </button>

        <button className="px-8 py-4 rounded-xl border border-purple-500 hover:bg-purple-500/10 duration-300">
          View Portfolio
        </button>

      </motion.div>

      <div className="flex gap-12 mt-16">

        <div>
          <h2 className="text-3xl font-bold">25+</h2>
          <p className="text-gray-500">Projects</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">15+</h2>
          <p className="text-gray-500">Clients</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">100%</h2>
          <p className="text-gray-500">Satisfaction</p>
        </div>

      </div>

    </div>

    {/* RIGHT */}

    <motion.div
      initial={{opacity:0,x:80}}
      animate={{opacity:1,x:0}}
      transition={{duration:1}}
      className="relative"
    >

      <img
        src={heroDashboard}
        alt="Nexvora Dashboard"
        className="w-full drop-shadow-[0_20px_80px_rgba(139,92,246,.4)]"
      />

    </motion.div>

  </div>

</section>