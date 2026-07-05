import { Link } from "wouter";
import { projects } from "@/data/projects";

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

export default function Home() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-600)]">
            Multilingual Learning · EAL Systems · AI-Assisted Education
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-6xl">
            Freddie Orozco
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
              className="rounded-full bg-[var(--color-brand-600)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-700)]"
            >
              View My Work
            </Link>
            <Link
              href="/teaching"
              className="rounded-full border border-[var(--color-line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand-300)]"
            >
              Teaching Philosophy
            </Link>
            <Link
              href="/contact"
              className="rounded-full px-6 py-3 text-sm font-semibold text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand-700)]"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper-alt)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-[var(--color-line)] bg-white p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {card.description}
                </p>
              </div>
            ))}
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
              className="text-sm font-semibold text-[var(--color-brand-700)] hover:underline"
            >
              See all projects →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <div
                key={project.slug}
                className="rounded-2xl border border-[var(--color-line)] bg-white p-7 transition-shadow hover:shadow-md"
              >
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--color-ink)]">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {project.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-[var(--color-brand-800)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-2xl font-medium leading-relaxed text-white sm:text-3xl">
            My current work sits at the intersection of EAL instruction,
            teacher collaboration, family communication, writing development,
            and responsible AI integration in education.
          </p>
        </div>
      </section>
    </>
  );
}
