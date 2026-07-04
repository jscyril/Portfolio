import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/jscyril",
    href: profile.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "jacob-sebastian-cyril",
    href: profile.linkedin,
    icon: Linkedin,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-shell border-t border-[var(--border)]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35 }}
        className="mx-auto max-w-7xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 lg:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <p className="section-kicker">05 / Contact</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-[var(--text-primary)] sm:text-5xl">
              Let&apos;s build something clean, reliable, and useful.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
              I&apos;m open to software development opportunities, technical
              collaborations, and project conversations.
            </p>
          </div>

          <div className="grid gap-3">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border border-[var(--border)] p-4 transition-colors duration-200 hover:border-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center border border-[var(--border)] text-[var(--accent)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-mono text-xs uppercase text-[var(--text-soft)]">
                    {label}
                  </span>
                  <span className="mt-1 block break-all text-sm text-[var(--text-primary)]">
                    {value}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--accent)]" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
