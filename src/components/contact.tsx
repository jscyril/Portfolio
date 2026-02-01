import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Send } from "lucide-react";

const ContactSection = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 px-4 lg:py-32"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[var(--accent-secondary)] font-mono mb-4">
            What's Next?
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Get In Touch
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[var(--text-tertiary)] text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I'm currently looking for new opportunities and my inbox is always
          open. Whether you have a question, a project idea, or just want to say
          hello, I'd love to hear from you!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="mailto:jacobsebcyril@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-transparent border-2 border-[var(--accent-primary)] text-[var(--accent-secondary)] font-semibold hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_var(--accent-glow)]"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            Say Hello
            <Send className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Email directly */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={sectionInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-[var(--text-tertiary)] text-sm"
        >
          Or email me at{" "}
          <a
            href="mailto:jacobsebcyril@gmail.com"
            className="text-[var(--accent-secondary)] hover:text-[var(--accent-tertiary)] transition-colors duration-300 link-underline"
          >
            jacobsebcyril@gmail.com
          </a>
        </motion.p>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-50" />
    </section>
  );
};

export default ContactSection;
