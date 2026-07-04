import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const AboutMe = () => {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="section-heading mb-0">
          <p className="section-kicker">01 / About</p>
          <h2>Engineer With a Systems Mindset</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="relative border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
        >
          <div className="geometric-divider" aria-hidden="true" />
          <div className="space-y-6 text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            <p>
              I&apos;m{" "}
              <span className="font-semibold text-[var(--text-primary)]">
                {profile.name}
              </span>
              , a software developer focused on building efficient, scalable
              applications with strong backend foundations and clean user
              experiences.
            </p>
            <p>
              My work spans API design, database modeling, full-stack product
              development, mobile apps, and research-oriented developer tooling.
              I care about systems that are understandable, maintainable, and
              practical for real users.
            </p>
            <p>
              I enjoy working through hard technical problems, learning new
              frameworks when they fit the job, and turning product ideas into
              software that can be tested, shipped, and improved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
