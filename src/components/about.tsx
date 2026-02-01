import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Go",
  "Java",
  "React Native",
  "Python",
  "Linux",
  "Docker",
];

const AboutMe = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 px-4 lg:py-32"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text">
            About Me
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--accent-primary)] to-transparent" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Hello! I'm{" "}
            <span className="text-[var(--accent-secondary)] font-semibold">
              Jacob Sebastian Cyril
            </span>
            , a passionate software engineer with a strong focus on
            backend development. I love creating applications that are not
            only efficient and scalable but also intuitive and enjoyable for
            users.
          </p>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            I've had the privilege of working on a variety of projects, from
            building robust APIs to designing databases and optimizing system
            performance. I'm continuously expanding my skills, exploring new
            frameworks, and collaborating on exciting ideas.
          </p>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Beyond coding, I enjoy exploring tech trends and tinkering with
            new technologies. My philosophy is all about building solutions
            that matter.
          </p>

          {/* Skills */}
          <div className="pt-6">
            <h3 className="text-[var(--text-primary)] font-semibold mb-4">
              Technologies I work with:
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  className="px-4 py-2 rounded-full text-sm font-mono bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--glass-border)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
