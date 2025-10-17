import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-brutalist-black border-t-2 border-white noise-bg"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32 w-full">
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
              className="font-mono font-bold text-3xl md:text-5xl text-white leading-tight"
            >
              CODE IS MY
              <br />
              PLAYGROUND
            </motion.h2>

            <div className="border-l-4 border-white pl-6 space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="font-mono text-base md:text-lg text-gray-300 leading-relaxed"
              >
                I write code that sometimes works. I design things that
                sometimes look good. Always learning.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="font-mono text-base md:text-lg text-gray-300 leading-relaxed"
              >
                From the mountains of Skardu to the frontiers of AI, I'm on a
                mission to create intelligent solutions that make a difference.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="font-mono text-base md:text-lg text-gray-300 leading-relaxed"
              >
                Blending creativity with technical expertise to shape tomorrow's
                technology.
              </motion.p>
            </div>

            {/* Terminal-style info */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="border-2 border-white bg-brutalist-darkgray p-6 mt-8 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform duration-300"
            >
              <div className="font-mono text-sm space-y-2">
                <div className="text-gray-400">
                  <span className="text-white">{">"}</span> cat about.txt
                </div>
                <div className="text-gray-300 pl-4">
                  <span className="text-white">Location:</span> Skardu, Pakistan
                </div>
                <div className="text-gray-300 pl-4">
                  <span className="text-white">Role:</span> AI Engineer | Full Stack Engineer
                </div>
                <div className="text-gray-300 pl-4">
                  <span className="text-white">Focus:</span> Machine Learning, Deep Learning, Natural Language Processing (NLP), End-to-End Web & Application Development
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
            {/* Feature 1 */}
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
                  AI ENTHUSIAST
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  Transforming complex data into intelligent solutions.
                  Passionate about pushing the boundaries of AI technology.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
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
                  PROBLEM SOLVER
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  Turning challenges into opportunities through innovative
                  coding and creative thinking.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
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
                  TECH EXPLORER
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  Always learning and exploring new technologies to build the
                  future of AI applications.
                </p>
              </div>
            </motion.div>

            {/* Command line hint */}
            <div className="border-t-2 border-white pt-6 mt-8">
              <div className="font-mono text-xs md:text-sm text-gray-500">
                <span className="text-white">Hint:</span> Scroll down to see my
                work →
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
