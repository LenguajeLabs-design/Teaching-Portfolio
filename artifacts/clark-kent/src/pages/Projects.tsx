import PageHero from "@/components/PageHero";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Systems built for students, families, and teachers"
        description="I use AI-assisted development to prototype practical tools that solve real problems in teaching, planning, communication, and multilingual learner support."
      />

      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col rounded-2xl border border-[var(--color-line)] bg-white p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="whitespace-nowrap text-xs font-medium text-[var(--color-ink-soft)]">
                    {project.status}
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-semibold text-[var(--color-ink)]">
                  {project.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {project.summary}
                </p>

                <div className="mt-6 space-y-4 border-t border-[var(--color-line)] pt-6 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-600)]">
                      Problem
                    </p>
                    <p className="mt-1.5 leading-relaxed text-[var(--color-ink-soft)]">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-600)]">
                      Solution
                    </p>
                    <p className="mt-1.5 leading-relaxed text-[var(--color-ink-soft)]">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-600)]">
                      Impact
                    </p>
                    <p className="mt-1.5 leading-relaxed text-[var(--color-ink-soft)]">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--color-line)] pt-5 text-xs text-[var(--color-ink-soft)]">
                  <span>
                    <span className="font-semibold text-[var(--color-ink)]">Role: </span>
                    {project.role}
                  </span>
                </div>
                <div className="mt-2 text-xs text-[var(--color-ink-soft)]">
                  <span className="font-semibold text-[var(--color-ink)]">Tools: </span>
                  {project.tools}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
