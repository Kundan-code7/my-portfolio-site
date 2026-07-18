import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mouse } from "lucide-react";
import heroImg from "@/assets/first img.webp";

function ScrollBadge() {
  return (
    <div className="relative flex h-28 w-28 items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="animate-spin-slow absolute inset-0 h-full w-full"
      >
        <defs>
          <path
            id="badge-circle"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text className="fill-ink text-[9.5px] font-semibold uppercase tracking-[0.1em]">
          <textPath
            href="#badge-circle"
            textLength="236"
            lengthAdjust="spacing"
          >
            scroll down • scroll down •
          </textPath>
        </text>
      </svg>

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-signal">
        <Mouse className="h-6 w-6 text-paper" strokeWidth={1.8} />
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const typeY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-cream px-4 pb-24 pt-[72px] sm:px-6 sm:pb-28 lg:px-10"
    >
      <motion.div
        style={{ y: typeY }}
        className="relative z-10 flex w-full max-w-4xl flex-col items-center px-2 text-center lg:pr-[13vw]"
      >
        <h1 className="font-display uppercase leading-[0.92] tracking-tight">
          <span className="block text-[clamp(2.6rem,10vw,10.5rem)] text-ink">
            Computer Science
          </span>

          <span className="text-outline block text-[clamp(2.6rem,10vw,10.5rem)]">
            Student & AI
          </span>
        </h1>

        <p className="mt-5 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-ink sm:mt-6 sm:text-base">
          <span className="text-signal">Aspiring Engineer</span>
        </p>
      </motion.div>

      <div className="absolute bottom-[10%] right-[-4%] z-20 h-[clamp(180px,38vw,340px)] w-[clamp(140px,34vw,280px)] rotate-[18deg] bg-signal sm:right-[3%] sm:bottom-[14%]" />

      <motion.img
        src={heroImg}
        alt="Kundan"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.15,
        }}
        className="absolute bottom-0 right-[0%] z-30 h-[clamp(280px,72vh,620px)] w-auto max-w-[min(85vw,460px)] object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.28)] sm:right-[2%]"
      />

      <motion.a
        href="#about"
        style={{ y: badgeY }}
        className="absolute bottom-4 left-1/2 z-40 -translate-x-1/2 sm:bottom-8"
      >
        <ScrollBadge />
      </motion.a>
    </section>
  );
}