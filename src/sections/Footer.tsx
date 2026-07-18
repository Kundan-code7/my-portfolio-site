const LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream py-8 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 sm:flex-row sm:gap-6 sm:px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="relative inline-block h-5 w-5">
            <span className="absolute inset-0 rotate-45 bg-signal" />
            <span className="absolute inset-[6px] rounded-full bg-ink" />
          </span>
          <span className="text-sm text-ink/70">© 2026 Kundan.</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-mouse transition-colors hover:text-signal sm:text-xs"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
