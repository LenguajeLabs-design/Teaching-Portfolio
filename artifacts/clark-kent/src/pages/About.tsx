import PageHero from "@/components/PageHero";

const learning = [
  "WIDA Writing Workshop at UW Madison",
  "WIDA Virtual Institute",
  "Harvard GSE — UDL and differentiation",
  "PYP training",
  "MLRC symposium",
  "Parent professional development sessions",
  "Staff PD on supporting EAL students",
];

const leadership = [
  "Supporting new EAL team members",
  "Building shared systems",
  "Improving family communication",
  "Translating WIDA into usable tools",
  "AI implementation for teachers",
  "School-wide support systems",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="My teaching journey"
        description="Over 15 years supporting multilingual learners across Korea, China, and international school contexts — with a focus on PYP, WIDA, and upper elementary students."
      />

      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-4xl px-6 py-16 space-y-14">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              My Teaching Journey
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)]">
              I've spent more than 15 years teaching multilingual learners in
              international school settings, including classrooms in Korea
              and China. My work centers on the PYP framework and WIDA
              standards, with a particular focus on upper elementary students
              building the language and confidence they need to fully
              participate in academic life.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              What I Care About
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)]">
              Language access, family communication, student confidence,
              teacher clarity, writing development, and practical systems
              that make good ideas usable every day — not just on paper.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              Where My Work Is Going
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)]">
              AI-supported teacher tools, multilingual learner planning
              systems, family-facing supports, and leadership in educational
              technology. My current work sits at the intersection of EAL
              instruction, teacher collaboration, family communication, and
              responsible AI integration in schools.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-[var(--color-paper-alt)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
            Leadership and Professional Growth
          </h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-line)] bg-white p-8">
              <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                Professional Learning
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-ink-soft)]">
                {learning.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-brand-500)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--color-line)] bg-white p-8">
              <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                Leadership Themes
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-ink-soft)]">
                {leadership.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent-500)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
