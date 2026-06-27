import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

const EarthCanvas = lazy(() => import("./three/EarthCanvas"));

const ContactSection = () => {
  const [state, handleSubmit] = useForm("manobqba");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="relative min-h-screen flex items-center bg-brutalist-black border-t-2 border-[var(--accent-color)] noise-bg"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-20 md:py-32 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="border-2 border-[var(--accent-color)] p-8 md:p-12 text-center"
          >
            <div className="font-mono space-y-4">
              <div className="text-[var(--accent-green)] text-4xl mb-4">[✓]</div>
              <div className="text-white text-xl md:text-2xl font-bold">
                MESSAGE SENT SUCCESSFULLY
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                Thanks for reaching out! I'll get back to you soon.
              </div>
              <div className="pt-6">
                <button
                  onClick={() => window.location.reload()}
                  className="btn-brutalist"
                >
                  <span className="text-gray-500 mr-2">{">"}</span>
                  Send Another Message
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center bg-transparent border-t-2 border-[var(--accent-color)] overflow-hidden"
    >
      {/* nebula glow over the global 3D starfield */}
      <div
        className="absolute inset-0 -z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 50%, rgba(168,85,247,0.12), transparent 55%), radial-gradient(ellipse at 25% 60%, rgba(34,211,238,0.10), transparent 55%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 md:py-32 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="font-mono text-sm md:text-base text-gray-400 mb-4">
            <span className="text-[var(--accent-color)]">04.</span> CONTACT
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 break-words">
            GET IN TOUCH
          </h2>
          <div className="h-px bg-[var(--accent-color)] w-full"></div>
        </motion.div>

        {/* Two-column: terminal form + 3D globe */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Terminal-style Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-2 border-[var(--border-color)] bg-brutalist-darkgray p-4 sm:p-6 md:p-8"
          >
            {/* Terminal Header */}
            <div className="border-b-2 border-[var(--border-color)] pb-4 mb-6">
              <div className="font-mono text-xs sm:text-sm text-gray-400 break-words">
                <span className="text-white">aleena@portfolio</span>
                <span className="text-gray-400">:</span>
                <span className="text-white">~/contact</span>
                <span className="text-gray-400">$</span>
                <span className="text-[var(--accent-color)] ml-2">send_message</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="font-mono text-xs sm:text-sm text-gray-400 block"
                >
                  <span className="text-[var(--accent-color)]">{">"}</span> Enter your name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="terminal-input w-full"
                  placeholder="John Doe"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-mono text-xs sm:text-sm text-gray-400 block"
                >
                  <span className="text-[var(--accent-color)]">{">"}</span> Enter your email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="terminal-input w-full"
                  placeholder="john@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-mono text-xs sm:text-sm text-gray-400 block"
                >
                  <span className="text-[var(--accent-color)]">{">"}</span> Enter your message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="terminal-input w-full resize-none"
                  placeholder="Type your message here..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-brutalist w-full md:w-auto text-xs sm:text-sm md:text-base"
                >
                  <span className="text-gray-400 mr-2">{">"}</span>
                  {state.submitting ? "Sending..." : "Send Message"}
                  <span className="ml-2">→</span>
                </button>
              </div>

              {/* Error Display */}
              {state.errors && Object.keys(state.errors).length > 0 && (
                <div className="border-2 border-red-500 bg-brutalist-black p-4 mt-4">
                  <div className="font-mono text-sm text-red-500">
                    [ERROR] Failed to send message. Please try again.
                  </div>
                </div>
              )}
            </form>
          </motion.div>

          {/* 3D Globe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block h-[450px] xl:h-[550px]"
          >
            <Suspense fallback={null}>
              <EarthCanvas />
            </Suspense>
          </motion.div>
        </div>

        {/* Social Icons - React Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center items-center gap-8 sm:gap-12"
        >
          <a
            href="https://github.com/AleenaTahir1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/aleenatahir/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://wa.me/923105968568"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={40} />
          </a>
          <a
            href="https://www.instagram.com/aleenaatahirr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={40} />
          </a>
          <a
            href="mailto:aleenatahirf23@nutech.edu.pk"
            className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope size={40} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
