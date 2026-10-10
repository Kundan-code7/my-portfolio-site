import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hackImg1 from "../assets/Hackaton 1-1.jpeg";
import hackImg2 from "../assets/Hackaton 1-2.png";
import hackImg3 from "../assets/Hackaton 1-3.png";

const hackCertImg = "/certificates/hackaton  certificate img.jpg";

const HACKATHONS = [
  {
    badge: "Ideation '26",
    accent: "from-signal/60 to-ink/30",
    title: "City Pollution — Hyperlocal Monitoring & Mitigation",
    organizer: "IETE Students' Forum · SIES GST",
    team: "Lil cliché — Team 18",
    description:
      "Participated in Ideation '26 with Team Lil cliché (Team 18), working on hyperlocal city-pollution monitoring and mitigation. We proposed a micro-IoT sensor grid on street-light poles for live pollution heatmaps, TiO₂ photocatalytic coatings on urban surfaces to help break down NOx using sunlight, and a Data → Action → Measurement feedback loop with an uncoated control stretch for real-world validation. Real-street photocatalytic results typically achieve 14–21% NOx reduction—a meaningful contribution, though not a standalone solution.",
    teammates: [
      { name: "Aayush Soni", href: "https://www.linkedin.com/in/aayush-soni-248282399/" },
      { name: "Chinmay Rahate", href: "https://www.linkedin.com/in/chinmay-m-rahate/" },
      { name: "Viraj Yadav" },
    ],
    // certificate is index 0 (first slide), then event photos
    images: [hackCertImg, hackImg1, hackImg2, hackImg3],
  },
];

function HackGallery({ images, accent }: { images: string[]; accent: string }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (next: number) => {
    const wrapped = (next + images.length) % images.length;
    setDirection(next > index ? 1 : -1);
    setIndex(wrapped);
  };

  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) goTo(index + 1);
    else if (info.offset.x > 50) goTo(index - 1);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <div
      className="group/gallery relative overflow-hidden rounded-lg border border-ink/10 bg-ink/[0.03] shadow-[0_24px_48px_rgba(17,17,17,0.10)] transition-transform duration-500 ease-exhale group-hover:scale-[1.02]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${accent}`} />

      {/* Fixed-height area — object-contain keeps every image's natural ratio */}
      <div className="relative flex h-[236px] w-full items-center justify-center sm:h-[284px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Hackathon photo ${index + 1}`}
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
            className="max-h-full max-w-full cursor-grab rounded object-contain active:cursor-grabbing"
            style={{ padding: "10px" }}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => goTo(index - 1)}
              className="absolute left-2 top-1/2 z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-paper/80 text-ink opacity-0 shadow-md backdrop-blur transition-opacity duration-300 ease-exhale group-hover/gallery:opacity-100 hover:bg-paper"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => goTo(index + 1)}
              className="absolute right-2 top-1/2 z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-paper/80 text-ink opacity-0 shadow-md backdrop-blur transition-opacity duration-300 ease-exhale group-hover/gallery:opacity-100 hover:bg-paper"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
            <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to photo ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ease-exhale ${i === index ? "w-4 bg-signal" : "w-1.5 bg-ink/20 hover:bg-ink/40"
                    }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Hackathons() {
  return (
    <section id="hackathons" className="bg-cream pb-20 pt-4 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <h2 className="text-center font-display text-[clamp(2.25rem,6vw,3.5rem)] uppercase leading-none text-ink sm:text-5xl lg:text-7xl">
          Hackathons &amp; Events
        </h2>

        <div className="mt-12 flex flex-col gap-8 sm:mt-16 sm:gap-10">
          {HACKATHONS.map((h, i) => (
            <motion.article
              key={h.badge}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 * i }}
              className="group grid items-center gap-6 rounded-2xl border border-ink/10 bg-cream p-4 transition-all duration-300 ease-exhale hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(17,17,17,0.10)] sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12"
            >
              <HackGallery images={h.images} accent={h.accent} />

              <div>
                {/* Badge */}
                <span className="inline-block w-fit rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-signal">
                  {h.badge}
                </span>

                {/* Title */}
                <h3 className="mt-4 font-display text-[clamp(1.4rem,3.5vw,2.2rem)] uppercase leading-tight text-ink">
                  [{h.title}]
                </h3>

                {/* Meta */}
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/35">
                  {h.organizer} &nbsp;·&nbsp; {h.team}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-ink/60 sm:text-[15px]">
                  {h.description}
                </p>

                {/* Teammates */}
                <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink/30">Team —</span>
                  {h.teammates.map((t, ti) => (
                    <span key={t.name} className="flex items-center gap-x-1.5">
                      {t.href ? (
                        <a
                          href={t.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] font-semibold text-ink/50 underline-offset-2 transition-colors duration-200 hover:text-signal hover:underline"
                        >
                          {t.name}
                        </a>
                      ) : (
                        <span className="text-[12px] font-semibold text-ink/50">{t.name}</span>
                      )}
                      {ti < h.teammates.length - 1 && (
                        <span className="text-ink/20">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
