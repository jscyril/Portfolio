import { profile } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 font-mono text-xs uppercase text-[var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React, TypeScript, and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
