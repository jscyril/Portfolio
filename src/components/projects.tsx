import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/portfolio";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
      className="group flex min-h-[330px] flex-col border border-[var(--border)] bg-[var(--surface)] p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)]"
    >
      <div className="mb-8 flex items-start justify-between gap-4">
        <span className="font-mono text-xs uppercase text-[var(--accent)]">
          0{index + 1}
        </span>
        <div className="flex items-center gap-3">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            aria-label={`${project.title} GitHub repository`}
          >
            <Github className="h-5 w-5" />
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              aria-label={`${project.title} live site`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent)]">
        {project.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-[var(--text-muted)]">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="border border-[var(--border)] px-2.5 py-1 font-mono text-[11px] uppercase text-[var(--text-soft)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <p className="section-kicker">03 / Projects</p>
          <h2>Featured Projects</h2>
          <p>
            Selected builds spanning web platforms, backend systems, mobile
            apps, research tooling, and developer-focused infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
