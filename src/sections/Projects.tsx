import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// src/sections/Projects.tsx -> src/assets is one level up
import project1Img1 from "../assets/project 1 image (1).webp";
import project1Img2 from "../assets/project 1 image (2).webp";
import project1Img3 from "../assets/project 1 image (3).webp";
import project1Img4 from "../assets/project 1 image (4).webp";
import project1Img5 from "../assets/project 1 image (5).webp";
import project2Img1 from "../assets/project 2 -img 1.webp";
import project2Img2 from "../assets/project 2 -img 2.webp";
import project2Img3 from "../assets/project 2 -img 3.webp";
import project2Img4 from "../assets/project 2 -img 4.webp";
import project2Img5 from "../assets/project 2 -img 5.webp";
import project2Img6 from "../assets/project 2 -img 6.webp";
import project2Img7 from "../assets/project 2 -img 7.webp";
import project2Img8 from "../assets/project 2 -img 8.webp";
import project2Img9 from "../assets/project 2 -img 9.webp";
import project3Img1 from "../assets/project 3-1.webp";
import project3Img2 from "../assets/project 3-2.webp";
import project3Img3 from "../assets/project 3-3.webp";
import project3Img4 from "../assets/project 3-4.webp";
import project3Img5 from "../assets/project 3-5.webp";
import project3Img6 from "../assets/project 3-6.webp";

const PROJECTS = [
  {
    category: "React / Supabase / Gemini API",
    accent: "from-signal/80 to-signal/20",
    name: "[HNI SOALANA WALLET TRACKER]",
    description:
      "Solana HNI Tracker is an advanced crypto intelligence platform designed to help investors make smarter decisions. It combines real-time blockchain analytics, AI-driven market insights, whale wallet tracking, and copy trading into a single intuitive dashboard, allowing users to monitor profitable wallets, evaluate market trends, and replicate successful trading strategies with ease.",
    images: [project1Img1, project1Img2, project1Img3, project1Img4, project1Img5],
  },
  {
    category: "React.js / supabase / Python ",
    accent: "from-ink/80 to-ink/20",
    name: "[Assignment manager with ai evaluation]",
    description: "Designed and developed IntelliGrade Hub, a full-stack educational platform that streamlines assignment management through Artificial Intelligence. The application supports handwritten and digital submissions, performs OCR-based text extraction, evaluates answers using AI with semantic comparison against model answers, generates detailed feedback and scores, and provides teachers with a human-in-the-loop review system. Built with scalable cloud architecture, the platform improves grading efficiency, consistency, and transparency while offering comprehensive analytics for both students and educator.",
    images: [
      project2Img1,
      project2Img2,
      project2Img3,
      project2Img4,
      project2Img5,
      project2Img6,
      project2Img7,
      project2Img8,
      project2Img9,
    ],
  },
  {
    category: "React / Python / Supabase ",
    accent: "from-signal/60 to-ink/30",
    name: "[ IVF Predict Health]",
    description: "IVF Predict Health is a full-stack AI-powered clinical decision support platform designed to assist fertility specialists in evaluating IVF treatment risks. The application enables clinics to manage patient records, analyze medical and genetic data, generate AI-assisted risk assessments, and produce comprehensive clinical reports. It provides an intuitive dashboard with patient analytics, automated report generation, and centralized clinic management to support more informed treatment decisions.",
    images: [
      project3Img1,
      project3Img2,
      project3Img3,
      project3Img4,
      project3Img5,
      project3Img6,
    ],
  },
];

function BrowserMockupPlaceholder({ accent }: { accent: string }) {
  return (
    <div className="dot-grid-dark relative flex aspect-[16/10] flex-col items-center justify-center gap-4 p-8">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />
      <div className="h-10 w-10 rotate-45 bg-signal/80" />
      <span className="text-xs font-bold uppercase tracking-[0.28em] text-ink/40">
        [Project preview]
      </span>
      <div className="flex w-full max-w-xs flex-col gap-2">
        <div className="h-2.5 w-3/4 rounded-full bg-ink/10" />
        <div className="h-2.5 w-1/2 rounded-full bg-ink/10" />
      </div>
    </div>
  );
}

function ProjectCarousel({
  images,
  accent,
}: {
  images: string[];
  accent: string;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const hasImages = images.length > 0;

  const goTo = (newIndex: number) => {
    if (!hasImages) return;
    const wrapped = (newIndex + images.length) % images.length;
    setDirection(newIndex > index ? 1 : -1);
    setIndex(wrapped);
  };

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      goTo(index + 1);
    } else if (info.offset.x > swipeThreshold) {
      goTo(index - 1);
    }
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <div
      className="group/carousel relative overflow-hidden rounded-lg border border-ink/10 bg-paper shadow-[0_24px_48px_rgba(17,17,17,0.12)] transition-transform duration-500 ease-exhale group-hover:scale-[1.03]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* chrome bar */}
      <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="ml-3 h-5 flex-1 rounded-full bg-ink/5" />
      </div>

      <div className="relative aspect-[16/10] overflow-hidden">
        {!hasImages ? (
          <BrowserMockupPlaceholder accent={accent} />
        ) : (
          <>
            <div className={`absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r ${accent}`} />

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt={`Project screenshot ${index + 1}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 h-full w-full cursor-grab object-cover active:cursor-grabbing"
              />
            </AnimatePresence>

            {/* prev / next arrows — visible on hover */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => goTo(index - 1)}
                  className="absolute left-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-paper/80 text-ink opacity-0 shadow-md backdrop-blur transition-opacity duration-300 ease-exhale group-hover/carousel:opacity-100 hover:bg-paper"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => goTo(index + 1)}
                  className="absolute right-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-paper/80 text-ink opacity-0 shadow-md backdrop-blur transition-opacity duration-300 ease-exhale group-hover/carousel:opacity-100 hover:bg-paper"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* dot indicators */}
                <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to image ${i + 1}`}
                      onClick={() => goTo(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ease-exhale ${
                        i === index ? "w-5 bg-signal" : "w-1.5 bg-paper/70 hover:bg-paper"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-cream pb-20 pt-4 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <h2 className="text-center font-display text-[clamp(2.25rem,6vw,3.5rem)] uppercase leading-none text-ink sm:text-5xl lg:text-7xl">
          Featured Projects
        </h2>

        <div className="mt-12 flex flex-col gap-8 sm:mt-16 sm:gap-10">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 * i }}
              className="group grid items-center gap-6 rounded-2xl border border-ink/10 bg-cream p-4 transition-all duration-300 ease-exhale hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(17,17,17,0.10)] sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12"
            >
              <ProjectCarousel images={p.images} accent={p.accent} />
              <div>
                <span className="inline-block rounded-full bg-signal px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-paper">
                  {p.category}
                </span>
                <h3 className="mt-5 font-display text-[clamp(1.6rem,4vw,2.6rem)] uppercase leading-tight text-ink">
                  {p.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/60 sm:text-[15px] lg:text-base">{p.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}