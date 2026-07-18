import { motion } from "framer-motion";
import {
  Brain,
  Layers,
  type LucideIcon,
} from "lucide-react";

import { FaJava, FaReact } from "react-icons/fa";
import {
  SiPython,
  SiSupabase,
  SiAndroid,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

const SKILLS: {
  icon: LucideIcon | IconType;
  label: string;
}[] = [
  { icon: SiPython, label: "Python" },
  { icon: Brain, label: "AI / Machine Learning" },
  { icon: FaJava, label: "Java" },
  { icon: FaReact, label: "React" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiSupabase, label: "Supabase" },
  { icon: SiAndroid, label: "Android Development" },
  { icon: Layers, label: "Full-Stack Development" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-cream py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-8">
          <h2 className="font-display text-[clamp(2.25rem,6vw,3.5rem)] uppercase leading-none text-ink sm:text-5xl lg:text-7xl">
            What I Work With
          </h2>

          <div className="hidden h-px flex-1 bg-ink/15 sm:block" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
              className="group flex min-h-[160px] flex-col gap-4 rounded-xl border border-ink/10 bg-cream p-5 transition-all duration-300 ease-exhale hover:-translate-y-1 hover:border-signal hover:shadow-[0_16px_32px_rgba(17,17,17,0.08)] sm:gap-6 sm:p-6"
            >
              <s.icon className="h-8 w-8 text-ink transition-all duration-300 ease-exhale group-hover:-translate-y-1 group-hover:text-signal" />

              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/80">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}