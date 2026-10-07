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
import project4Img1 from "../assets/project 4-1.png";
import project4Img2 from "../assets/project 4-2.png";
import project4Img3 from "../assets/project 4-3.png";

type ProjectLink = { label: string; href: string; primary?: boolean };

const PROJECTS: {
  category: string;
  accent: string;
  name: string;
  description: string;
  images: string[];
  links?: ProjectLink[];
  isPortrait?: boolean;
}[] = [
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
  {
    category: "Kotlin · Android · CameraX · Foreground Service · MP4 · Microphone · Notifications · Gradle",
    accent: "from-signal/70 to-ink/40",
    name: "[CatEye]",
    description:
      "CatEye is an Android background video recorder built with Kotlin and CameraX, designed to provide reliable video recording even when the device screen is locked or turned off. The app uses Android foreground services for continuous recording, supports video with microphone audio, and provides a simple gallery and playback experience.",
    images: [project4Img1, project4Img2, project4Img3],
    isPortrait: true,
    links: [
      {
        label: "Download / View Release",
        href: "https://github.com/Kundan-code7/Cateye/releases/tag/v1.0.0",
        primary: true,
      },
      {
        label: "Watch Demo",
        href: "https://lnkd.in/p/dtiUCzpp",
        primary: false,
      },
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
  isPortrait = false,
}: {
  images: string[];
  accent: string;
  isPortrait?: boolean;
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

      <div
        className={`relative overflow-hidden ${
          isPortrait
            ? "flex items-center justify-center bg-ink/5 py-6"
            : "aspect-[16/10]"
        }`}
      >
        {!hasImages ? (
          <BrowserMockupPlaceholder accent={accent} />
        ) : (
          <>
            <div className={`absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r ${accent}`} />

            {isPortrait ? (
              /* Portrait mode: natural phone-screenshot presentation */
              <div className="relative flex w-full items-center justify-center px-6 sm:px-10">
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
                    className="max-h-[420px] w-auto cursor-grab rounded-2xl object-contain shadow-[0_8px_32px_rgba(17,17,17,0.18)] active:cursor-grabbing sm:max-h-[480px]"
                  />
                </AnimatePresence>
              </div>
            ) : (
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
            )}

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
              <ProjectCarousel images={p.images} accent={p.accent} isPortrait={p.isPortrait} />
              <div>
                <span className="inline-block rounded-full bg-signal px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-paper">
                  {p.category}
                </span>
                <h3 className="mt-5 font-display text-[clamp(1.6rem,4vw,2.6rem)] uppercase leading-tight text-ink">
                  {p.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/60 sm:text-[15px] lg:text-base">{p.description}</p>

                {p.links && p.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.links.map((link) =>
                      link.primary ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-paper transition-all duration-300 ease-exhale hover:-translate-y-0.5 hover:bg-signal/90 hover:shadow-[0_8px_24px_rgba(17,17,17,0.18)]"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-cream px-5 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-ink transition-all duration-300 ease-exhale hover:-translate-y-0.5 hover:border-ink/40 hover:shadow-[0_8px_24px_rgba(17,17,17,0.10)]"
                        >
                          {link.label}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}