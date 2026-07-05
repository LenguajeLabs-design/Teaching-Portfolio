import { Link } from "wouter";
import { motion } from "framer-motion";
import { featuredProjects } from "@/data/projects";
import { paletteFor, paletteForTag } from "@/lib/palette";
import brushSignature from "@/assets/fo-brush-signature-black.png";
import headshot from "@/assets/headshot.jpeg";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";

const featureCards = [
  {
    title: "EAL Teaching",
    description:
      "15+ years supporting multilingual learners across international school contexts.",
  },
  {
    title: "WIDA-Informed Systems",
    description:
      "Tools, frameworks, family guides, planners, and language support routines.",
  },
  {
    title: "AI + Education",
    description:
      "Practical apps and workflows built to support teachers, students, and families.",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Years in EAL classrooms" },
  { value: 4, suffix: "", label: "Systems designed & built" },
  { value: 2, suffix: "", label: "Countries taught in" },
  { value: 100, suffix: "%", label: "Student-centered design" },
];

export default function Home() {
  return (
    <>
      <section className="site-aurora border-b border-[var(--color-line)]">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-24 sm:flex-row sm:items-center sm:justify-between sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-600)]">
              Multilingual Learning · EAL Systems · AI-Assisted Education
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-6xl">
              Federico Orozco
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-soft)] sm:text-xl">
              I design practical, student-centered systems that help
              multilingual learners grow, help families understand the
              language-learning journey, and help teachers make language
              support visible, usable, and sustainable.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="button-primary-glow inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:brightness-110"
                >
                  View My Work
                  <span aria-hidden>→</span>
                </motion.span>
              </Link>
              <Link href="/teaching">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[rgba(92,157,255,0.18)] bg-[rgba(17,28,50,0.86)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand-300)]"
                >
                  Teaching Philosophy
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand-700)]"
                >
                  Contact Me
                </motion.span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="glass-card w-full max-w-md flex-shrink-0 rounded-[2rem] border border-[rgba(92,157,255,0.16)] bg-[linear-gradient(180deg,rgba(11,19,36,0.98),rgba(6,10,20,0.98))] p-6 shadow-[0_24px_80px_-36px_rgba(0,0,0,0.7)] sm:p-8"
          >
            <div className="flex flex-col items-center gap-5">
              <img
                src={headshot}
                alt="Federico Orozco"
                className="h-28 w-28 rounded-full border-4 border-[rgba(255,255,255,0.08)] object-cover shadow-lg sm:h-32 sm:w-32"
              />
              <div className="w-full rounded-[1.5rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(0,0,0,0.22)] p-4 sm:p-5">
                <img
                  src={brushSignature}
                  alt="Federico Orozco brush signature logo"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper-alt)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {featureCards.map((card, i) => {
              const colors = paletteFor(i);
              return (
                <Reveal key={card.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`glass-card h-full rounded-2xl border ${colors.border} p-8`}
                  >
                    <span className={`text-sm font-semibold ${colors.text}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-[var(--color-ink)]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                      {card.description}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-600)]">
                Featured Projects
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
                From teacher to system designer
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand-700)] hover:underline"
            >
              See all projects
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project, i) => {
              const colors = paletteFor(i);
              return (
                <Reveal key={project.slug} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 12px 30px -12px rgba(0,0,0,0.35)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`glass-card h-full rounded-2xl border-t-4 ${colors.barBorder} border border-[var(--color-line)] p-7`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[rgba(255,255,255,0.04)] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                          {project.logoUrl ? (
                            <img
                              src={project.logoUrl}
                              alt={`${project.name} logo`}
                              className="h-full w-full object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <span className="text-sm font-semibold text-[var(--color-ink)]">
                              {project.name.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-ink-soft)]">
                            Featured Tool
                          </p>
                          <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
                            {project.status}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => {
                        const tagColors = paletteForTag(tag);
                        return (
                          <span
                            key={tag}
                            className={`tag-pill ${tagColors.bg} ${tagColors.text} ${tagColors.border}`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[var(--color-ink)]">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                      {project.summary}
                    </p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${colors.text} hover:opacity-80`}
                    >
                      Visit site
                      <span aria-hidden>↗</span>
                    </a>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-[linear-gradient(135deg,var(--color-brand-900),var(--color-paper-alt),var(--color-accent-100))]">
        <Reveal className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-2xl font-medium leading-relaxed text-white sm:text-3xl">
            My current work sits at the intersection of EAL instruction,
            teacher collaboration, family communication, writing development,
            and responsible AI integration in education.
          </p>
        </Reveal>
      </section>
    </>
  );
}
