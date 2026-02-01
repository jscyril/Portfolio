import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "UniLink",
    description:
      "A full-stack social platform for university students with real-time features, user authentication, and a clean modern interface.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    githubLink: "https://github.com/jscyril/UniLink",
    featured: true,
  },
  {
    title: "HabiTrax",
    description:
      "A mobile habit tracking application that helps users build and maintain positive habits with progress visualization.",
    technologies: ["React Native", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/jscyril/HabiTrax",
    featured: true,
  },
  {
    title: "Golang Music Player",
    description:
      "A terminal-based music player built in Go, featuring a beautiful TUI, library management, and seamless playback controls.",
    technologies: ["Go", "BubbleTea", "Audio APIs"],
    githubLink: "https://github.com/jscyril/golang_music_player",
    featured: true,
  },
  {
    title: "RentScope",
    description:
      "An ML-powered property recommendation app that provides personalized rent predictions and smart property search.",
    technologies: ["Python", "Machine Learning", "Django", "React"],
    githubLink: "https://github.com/jscyril/RentScope",
    featured: true,
  },
  {
    title: "UniRide",
    description:
      "A ride-sharing application for college students, enabling students heading to the same campus to share rides efficiently.",
    technologies: ["Flutter", "FastAPI", "PostgreSQL"],
    githubLink: "https://github.com/samuelshine/carpool-mca",
    featured: true,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] hover:border-[var(--accent-primary)] transition-all duration-500 hover:shadow-[0_20px_50px_-12px_var(--accent-glow)] hover:-translate-y-2">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 rounded-lg bg-[var(--bg-tertiary)]">
            <Folder className="w-8 h-8 text-[var(--accent-secondary)]" />
          </div>
          <div className="flex gap-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-tertiary)] hover:text-[var(--accent-secondary)] transition-colors duration-300"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-tertiary)] hover:text-[var(--accent-secondary)] transition-colors duration-300"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-secondary)] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-[var(--text-tertiary)] text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-[var(--accent-tertiary)] bg-[var(--bg-tertiary)] px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 px-4 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text">
            Projects
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--accent-primary)] to-transparent" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/jscyril"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--accent-secondary)] hover:text-[var(--accent-tertiary)] transition-colors duration-300 font-mono"
            whileHover={{ x: 5 }}
          >
            View more on GitHub
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
