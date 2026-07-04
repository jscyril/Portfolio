import { BriefcaseBusiness, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <p className="section-kicker">02 / Experience</p>
          <h2>Work Experience</h2>
          <p>
            Practical full-stack delivery across healthcare workflows, mobile
            applications, real-time video, and system integration.
          </p>
        </div>

        <div className="grid gap-5">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="experience-card border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-[var(--accent)] text-[var(--accent)]">
                    <BriefcaseBusiness className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                    {experience.role}
                  </h3>
                  <p className="mt-3 font-mono text-sm uppercase text-[var(--accent)]">
                    {experience.company}
                  </p>
                  <div className="mt-5 space-y-2 text-sm text-[var(--text-muted)]">
                    <p>{experience.period}</p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[var(--text-soft)]" aria-hidden="true" />
                      {experience.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="experience-bullet">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
