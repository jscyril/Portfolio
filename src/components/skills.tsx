import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";

const SkillsSection = () => {
  return (
    <section id="skills" className="section-shell border-y border-[var(--border)] bg-[var(--surface)]/35">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <p className="section-kicker">04 / Skill</p>
          <h2>Tech Stack</h2>
          <p>
            A practical toolkit for building full-stack products, APIs, mobile
            clients, and data-backed applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map(({ category, icon: Icon, skills }, index) => (
            <motion.article
              key={category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <div className="mb-8 flex items-center justify-between">
                <h3 className="font-mono text-sm uppercase text-[var(--text-primary)]">
                  {category}
                </h3>
                <span className="inline-flex h-10 w-10 items-center justify-center border border-[var(--accent)] text-[var(--accent)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="min-h-11 border border-[var(--border)] px-3 py-3 text-sm text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
