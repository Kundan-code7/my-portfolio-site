import { motion } from "framer-motion";
import aboutImg from "@/assets/2nd img .webp";

function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 24" fill="none" className={className}>
      <path
        d="M2 18 C 14 4, 26 22, 38 10 S 62 4, 78 14"
        stroke="#F5711B"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-ink py-20 text-paper sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col justify-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-signal">
            Hello
          </span>

          <h2 className="mt-4 font-display text-[clamp(2.5rem,7vw,4.5rem)] uppercase leading-none sm:text-6xl lg:text-7xl">
            I'm Kundan
          </h2>

          <p className="mt-8 max-w-lg text-sm leading-relaxed text-paper/70 sm:text-[15px] lg:text-base">
            Hi, I'm a Computer Science student who genuinely loves building
            things. My work lives at the intersection of Android development,
            AI/ML, React, and Supabase, and I enjoy learning new technologies
            quickly. Give me something unfamiliar, and I'll dive in until I
            understand it.

            <br />
            <br />

            What really makes me different is that I didn't start with code I
            started with a camera. Filmmaking, video editing, and color grading
            taught me to pay attention to detail, composition, and user
            experience long before I wrote my first line of code. That creative
            mindset now influences every application and product I build.

            <br />
            <br />

            I believe the best technology doesn't just work it feels intuitive,
            looks great, and creates an experience people enjoy. That's the
            standard I aim for in every project I build.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#projects"
              className="w-full rounded-full bg-signal px-7 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-500 sm:w-auto"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="w-full rounded-full border border-white/20 px-7 py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.15,
          }}
          className="relative flex items-center justify-center px-2 sm:px-0"
        >
          <div className="dot-grid absolute right-0 top-0 hidden h-2/3 w-2/3 sm:block" />

          <Squiggle className="absolute left-[8%] top-[18%] z-30 hidden w-20 -rotate-12 sm:block" />

          <Squiggle className="absolute bottom-[24%] right-[4%] z-30 hidden w-16 rotate-6 sm:block" />

          <div className="relative z-20 w-full max-w-[470px] overflow-hidden rounded-[24px] bg-[#181818] shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:rounded-[32px]">
            <img
              src={aboutImg}
              alt="Kundan"
              loading="lazy"
              className="h-auto w-full max-h-[620px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}