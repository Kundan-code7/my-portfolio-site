import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

function LogoMark() {
  return (
    <span className="relative inline-block h-6 w-6">
      <span className="absolute inset-0 rotate-45 bg-signal" />
      <span className="absolute inset-[7px] rounded-full bg-ink" />
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-10">
        <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <LogoMark />
          <span className="text-base font-bold tracking-tight sm:text-lg">Kundan</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link text-xs font-semibold uppercase tracking-[0.14em] text-ink/80 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#"
            className="hidden rounded-full bg-ink px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors duration-300 ease-exhale hover:bg-signal sm:inline-flex sm:px-6 sm:text-xs"
          >
            Download CV
          </a>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-cream/80 p-0 text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink/10 bg-cream lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-1 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink/80"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
