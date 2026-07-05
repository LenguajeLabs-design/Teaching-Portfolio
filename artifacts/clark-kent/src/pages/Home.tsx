import { Link } from "wouter";
import {
  ArrowRight,
  GraduationCap,
  Layers,
  MessageCircleHeart,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/projects";
import { paletteFor, paletteForTag } from "@/lib/palette";
import headshot from "@/assets/headshot.jpeg";

const featureCards = [
  {
    title: "EAL Teaching",
    description:
      "15+ years supporting multilingual learners across international school contexts.",
    icon: GraduationCap,
  },
  {
    title: "WIDA-Informed Systems",
    description:
      "Tools, frameworks, family guides, planners, and language support routines.",
    icon: Layers,
  },
  {
    title: "AI + Education",
    description:
      "Practical apps and workflows built to support teachers, students, and families.",
    icon: Sparkles,
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] bg-gradient-to-b from-[var(--color-brand-50)] via-[var(--color-paper)] to-[var(--color-paper)]">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-24 sm:flex-row sm:items-center sm:justify-between sm:py-28">
          <div className="flex-1">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-600)]">
              <Sparkles className="h-3.5 w-3.5" />
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
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-600)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/teaching"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand-300)]"
              >
                <GraduationCap className="h-4 w-4 text-[var(--color-brand-400)]" />
                Teaching Philosophy
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand-700)]"
              >
                <MessageCircleHeart className="h-4 w-4" />
                Contact Me
              </Link>
            </div>
          </div>
          <img
            src={headshot}
            alt="Federico Orozco"
            className="h-44 w-44 flex-shrink-0 rounded-full border-4 border-[var(--color-surface)] object-cover shadow-lg sm:h-56 sm:w-56"
          />
        </div>
      </section>

      <section className="bg-[var(--color-paper-alt)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {featureCards.map((card, i) => {
              const colors = paletteFor(i);
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`rounded-2xl border ${colors.border} bg-[var(--color-surface)] p-8 shadow-sm`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg}`}
                  >
                    <Icon className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[var(--color-ink)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {card.description}
                  </p>
                </div>
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
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.slice(0, 4).map((project, i) => {
              const colors = paletteFor(i);
              return (
                <div
                  key={project.slug}
                  className={`rounded-2xl border-t-4 ${colors.barBorder} border border-[var(--color-line)] bg-[var(--color-surface)] p-7 transition-shadow hover:shadow-md`}
                >
                  <div className="flex flex-wrap gap-2">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-gradient-to-br from-[var(--color-brand-800)] to-[var(--color-brand-900)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <Sparkles className="mx-auto h-8 w-8 text-[var(--color-amber-200)]" />
          <p className="mt-5 text-2xl font-medium leading-relaxed text-white sm:text-3xl">
            My current work sits at the intersection of EAL instruction,
            teacher collaboration, family communication, writing development,
            and responsible AI integration in education.
          </p>
        </div>
      </section>
    </>
  );
}
