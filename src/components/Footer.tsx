import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
    {
        icon: <Github className="w-5 h-5" />,
        href: "https://github.com/jscyril",
        label: "GitHub",
    },
    {
        icon: <Linkedin className="w-5 h-5" />,
        href: "https://www.linkedin.com/in/jacob-sebastian-cyril/",
        label: "LinkedIn",
    },
    {
        icon: <Mail className="w-5 h-5" />,
        href: "mailto:jacobsebcyril@gmail.com",
        label: "Email",
    },
];

const Footer = () => {
    return (
        <footer className="relative py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center gap-6 mb-8"
                >
                    {socialLinks.map((social) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[var(--bg-secondary)] text-[var(--text-tertiary)] hover:text-[var(--accent-secondary)] hover:bg-[var(--bg-tertiary)] transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={social.label}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <p className="text-[var(--text-tertiary)] text-sm font-mono">
                        © {new Date().getFullYear()} Jacob Sebastian Cyril
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
