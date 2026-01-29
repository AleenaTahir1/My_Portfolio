import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-brutalist-black border-t-2 border-white noise-bg"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-20 md:py-32 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="font-mono text-sm md:text-base text-gray-400 mb-4">
            <span className="text-white">01.</span> ABOUT
          </div>
          <div className="h-px bg-white w-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight break-words"
            >
              FULL STACK AI DEVELOPER
            </motion.h2>

            <div className="border-l-4 border-white pl-4 sm:pl-6 space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="font-mono text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed break-words"
              >
                Need a developer who understands the entire stack from DB to UI and AI? I am Aleena, a Full Stack AI Engineer specializing in building heavy-lifting applications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="font-mono text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed break-words"
              >
                I combine the speed of Rust and Go with the versatility of Python and React to deliver software that is fast, smart, and scalable. From apps to custom agents, I handle the technical challenges so you can focus on growth.
              </motion.p>
            </div>

            {/* Terminal-style info */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="border-2 border-white bg-brutalist-darkgray p-4 sm:p-6 mt-8 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform duration-300"
            >
              <div className="font-mono text-xs sm:text-sm space-y-2 break-words">
                <div className="text-gray-400">
                  <span className="text-white">{">"}</span> cat about.txt
                </div>
                <div className="text-gray-300 pl-4">
                  <span className="text-white">Location:</span> Islamabad, Pakistan
                </div>
                <div className="text-gray-300 pl-4">
                  <span className="text-white">Status:</span>{" "}
                  <span className="text-green-500">Available</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Features/Skills blocks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Soft Skill 1 - Problem Solver */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="card-brutalist p-6 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 group"
            >
              <div className="font-mono">
                <div className="text-sm text-gray-500 mb-2">[01]</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  PROBLEM SOLVER
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  Breaking down complex challenges into actionable solutions with analytical thinking and creative approaches.
                </p>
              </div>
            </motion.div>

            {/* Soft Skill 2 - Fast Learner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="card-brutalist p-6 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 group"
            >
              <div className="font-mono">
                <div className="text-sm text-gray-500 mb-2">[02]</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  FAST LEARNER
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  Quickly adapting to new technologies and frameworks. Always exploring cutting-edge tools to stay ahead.
                </p>
              </div>
            </motion.div>

            {/* Soft Skill 3 - Team Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="card-brutalist p-6 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 group"
            >
              <div className="font-mono">
                <div className="text-sm text-gray-500 mb-2">[03]</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  TEAM PLAYER
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  Collaborating effectively with cross-functional teams, communicating clearly, and delivering results together.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
