import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const socialLinks = [
  {
    icon: Github,
    href: profile.github,
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: profile.linkedin,
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: `mailto:${profile.email}`,
    label: "Email",
  },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:min-h-screen lg:pb-28 lg:pt-40"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl"
        >
          <p className="section-kicker">Jacob Sebastian Cyril / {profile.role}</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.95] text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
            Software Developer Building Clean, Scalable Web Experiences.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
            I build practical web and backend systems with a focus on clear
            architecture, reliable data flows, and interfaces that stay usable
            as products grow.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3" aria-label="Social links">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex h-11 w-11 items-center justify-center border border-[var(--border)] text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative min-h-[360px] lg:min-h-[520px]"
          aria-hidden="true"
        >
          <div className="hero-construct">
            <div className="hero-block hero-block-a" />
            <div className="hero-block hero-block-b" />
            <div className="hero-block hero-block-c" />
            <div className="hero-block hero-block-d" />
            <div className="hero-panel">
              <span>API</span>
              <span>DATA</span>
              <span>UI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
