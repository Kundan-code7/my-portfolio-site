import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Briefcase, Award, ChevronDown, ChevronUp } from "lucide-react";

interface Internship {
  id: string;
  title: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  preview: string;
  pdf: string;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  preview: string;
  pdf: string;
}

// Always visible
const INTERNSHIPS: Internship[] = [
  {
    id: "internship-kundan",
    title: "Software Development Internship",
    company: "Professional Organization",
    role: "Software Developer Intern",
    duration: "2024",
    description:
      "Hands-on professional experience building real-world software applications. Gained practical exposure to industry workflows, collaborative development, and applied computer science in a production environment.",
    preview: "/certificates/internship.webp",
    pdf: "/certificates/Kundan Internship certificate.pdf",
  },
];

// Java + Linux: always visible in default view
const DEFAULT_CERTS: Certificate[] = [
  {
    id: "java",
    title: "Java Programming",
    issuer: "Oracle / NPTEL / Coursera",
    year: "2024",
    category: "Programming",
    preview: "/certificates/java-certificate.webp",
    pdf: "/certificates/java certifcate.png",
  },
  {
    id: "linux",
    title: "Linux Administration",
    issuer: "Linux Foundation / Red Hat",
    year: "2024",
    category: "Systems & DevOps",
    preview: "/certificates/linux-certificate.webp",
    pdf: "/certificates/Linux certificate.pdf",
  },
];

// Hidden until "Show All" -- ordered by portfolio relevance
const EXTRA_CERTS: Certificate[] = [
  {
    id: "genai",
    title: "What Is Generative AI",
    issuer: "LinkedIn Learning",
    year: "2024",
    category: "AI / Machine Learning",
    preview: "/certificates/genai-certificate.webp",
    pdf: "/certificates/CertificateOfCompletion_What Is Generative AI.pdf",
  },
  {
    id: "genai-2",
    title: "Generative AI - Advanced",
    issuer: "LinkedIn Learning",
    year: "2024",
    category: "AI / Machine Learning",
    preview: "/certificates/genai-certificate-2.webp",
    pdf: "/certificates/CertificateOfCompletion_What Is Generative AI (1).pdf",
  },
  {
    id: "foundation-engineering",
    title: "Foundation Engineering",
    issuer: "Coursera / edX",
    year: "2024",
    category: "Computer Science",
    preview: "/certificates/foundation-engineering.webp",
    pdf: "/certificates/Foundation engineering.pdf",
  },
  {
    id: "genai-game-dev",
    title: "Generative AI: Revolutionizing Game Development",
    issuer: "Game Development Institute",
    year: "2024",
    category: "AI / Game Development",
    preview: "/certificates/genai-game-dev.webp",
    pdf: "/certificates/Generative AI Mastery Revolutionizing Game Development.pdf",
  },
  {
    id: "game-design",
    title: "A Complete Guide to Game Design",
    issuer: "Game Design Academy",
    year: "2024",
    category: "Game Development",
    preview: "/certificates/game-design.webp",
    pdf: "/certificates/A Complete Guide to Game Design.pdf",
  },
  {
    id: "game-programming",
    title: "From Code to Creation: Mastering Game Programming",
    issuer: "Game Programming Institute",
    year: "2024",
    category: "Game Development",
    preview: "/certificates/game-programming.webp",
    pdf: "/certificates/From Code to Creation Mastering Game Programming.pdf",
  },
  {
    id: "cryptoguard",
    title: "CryptoGuard: Blockchain in Game Development",
    issuer: "Blockchain Gaming Academy",
    year: "2024",
    category: "Blockchain",
    preview: "/certificates/cryptoguard.webp",
    pdf: "/certificates/CryptoGuard Securing the Future of Game Development with Blockchain.pdf",
  },
  {
    id: "esport",
    title: "The What and How of Esport",
    issuer: "Esports Institute",
    year: "2024",
    category: "Esports",
    preview: "/certificates/esport.webp",
    pdf: "/certificates/The What and How of Esport.pdf",
  },
];

// Sub-components

function CertPreview({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-ink/5">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink/5">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-signal border-t-transparent" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover object-top transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

function InternshipCard({ item, index }: { item: Internship; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="group grid items-start gap-0 overflow-hidden rounded-2xl border border-ink/10 bg-cream shadow-xs transition-all duration-300 ease-exhale hover:-translate-y-1 hover:border-signal/40 hover:shadow-[0_20px_48px_rgba(17,17,17,0.10)] lg:grid-cols-[1.15fr_1fr]"
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-signal/80 to-signal/20" />
        <CertPreview src={item.preview} alt={`${item.title} preview`} />
      </div>
      <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-signal px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-paper">
            <Briefcase className="h-3 w-3" />
            Internship
          </span>
          <h3 className="mt-5 font-display text-[clamp(1.3rem,3vw,1.9rem)] uppercase leading-tight text-ink">
            {item.title}
          </h3>
          <p className="mt-1.5 text-sm font-semibold uppercase tracking-[0.1em] text-signal">
            {item.company}
          </p>
          <p className="mt-0.5 text-xs uppercase tracking-[0.1em] text-ink/50">
            {item.role} &middot; {item.duration}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ink/60 sm:text-[15px]">
            {item.description}
          </p>
        </div>
        <a
          href={item.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-paper transition-all duration-300 ease-exhale hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(245,113,27,0.35)] sm:w-auto"
        >
          View Certificate
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  );
}

function CertCard({
  item,
  index,
  animated = true,
}: {
  item: Certificate;
  index: number;
  animated?: boolean;
}) {
  return (
    <motion.article
      initial={animated ? { opacity: 0, y: 32 } : false}
      whileInView={animated ? { opacity: 1, y: 0 } : undefined}
      animate={!animated ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-cream shadow-xs transition-all duration-300 ease-exhale hover:-translate-y-1 hover:border-signal/40 hover:shadow-[0_16px_36px_rgba(17,17,17,0.10)]"
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 z-10 h-0.5 bg-gradient-to-r from-signal/70 to-signal/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <CertPreview src={item.preview} alt={`${item.title} preview`} />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-5 p-5">
        <div>
          <span className="inline-block rounded-full bg-ink/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/60">
            {item.category}
          </span>
          <h3 className="mt-3 text-sm font-semibold leading-snug text-ink sm:text-[15px]">
            {item.title}
          </h3>
          <p className="mt-1 text-xs text-ink/50">{item.issuer}</p>
          <p className="mt-0.5 text-[11px] text-ink/40">{item.year}</p>
        </div>
        <a
          href={item.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/80 transition-all duration-300 ease-exhale hover:border-signal hover:bg-signal hover:text-paper"
        >
          View Certificate
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </motion.article>
  );
}

function SectionLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-signal text-paper">
        {icon}
      </span>
      <span className="text-xs font-bold uppercase tracking-[0.28em] text-signal">
        {label}
      </span>
    </div>
  );
}

// Main section
export default function Certificates() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="certificates" className="bg-cream py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-8"
        >
          <h2 className="font-display text-[clamp(2.25rem,6vw,3.5rem)] uppercase leading-none text-ink sm:text-5xl lg:text-7xl">
            Internships &amp; Certificates
          </h2>
          <div className="hidden h-px flex-1 bg-ink/15 sm:block" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/60 sm:text-[15px]"
        >
          Professional experience and verified credentials spanning AI, software
          development, systems, and beyond.
        </motion.p>

        {/* Internships */}
        <div className="mt-14 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel
              icon={<Briefcase className="h-4 w-4" />}
              label="Internships"
            />
          </motion.div>
          <div className="mt-8 flex flex-col gap-6">
            {INTERNSHIPS.map((item, i) => (
              <InternshipCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Certificates — Java + Linux always shown, rest behind toggle */}
        <div className="mt-20 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel
              icon={<Award className="h-4 w-4" />}
              label="Featured Certificates"
            />
          </motion.div>

          {/* Default visible: Java + Linux */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DEFAULT_CERTS.map((item, i) => (
              <CertCard key={item.id} item={item} index={i} animated />
            ))}
          </div>

          {/* Extra certs — smooth height + staggered fade-in */}
          <AnimatePresence initial={false}>
            {showAll && (
              <motion.div
                key="extra-certs"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {EXTRA_CERTS.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                        delay: i * 0.06,
                      }}
                    >
                      <CertCard item={item} index={i} animated={false} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <div className="mt-10 flex justify-center">
            <motion.button
              onClick={() => setShowAll((v) => !v)}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ink/70 transition-all duration-300 ease-exhale hover:border-signal hover:text-signal"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show All {EXTRA_CERTS.length} Certificates
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}
