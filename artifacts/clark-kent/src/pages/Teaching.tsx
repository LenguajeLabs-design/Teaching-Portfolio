import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { paletteFor, paletteForTag } from "@/lib/palette";

const sections = [
  {
    title: "WIDA-Aligned Instruction",
    tags: ["WIDA", "Language Objectives"],
    description:
      "I use WIDA levels, Can Do descriptors, language functions, and student-friendly language goals to make language growth visible and actionable for every learner.",
    artifacts: [
      "WIDA level explainer",
      "Language ladder",
      "Can Do one-pager",
      "\u201cWhy am I in EAL?\u201d student/family explanation",
      "Phase 1 language support materials",
    ],
  },
  {
    title: "Reading and Writing Support",
    tags: ["Literacy", "Grades 4\u20135"],
    description:
      "My work spans Grade 4 and Grade 5 EAL, Writer's Workshop adaptations, UFLI phonics intervention, book clubs, and scaffolded reading routines built on sentence frames, mentor texts, and oral rehearsal before writing.",
    artifacts: [
      "Grade 4 Phase 1 EAL writing unit",
      "Dragon Masters book club lesson",
      "Before and after writing samples (names removed)",
      "Reading routine visuals",
      "Student reflection tools",
    ],
  },
  {
    title: "Family Communication",
    tags: ["Family Communication"],
    description:
      "Families deserve clear, human explanations of language development. This is where I focus a lot of energy — turning technical assessment data into something families can act on.",
    artifacts: [
      "Monthly word banks for families",
      "Parent WIDA explainer",
      "Home language support tips",
      "Parent PD materials",
      "Translated / bilingual support documents",
    ],
  },
  {
    title: "Classroom Systems and Scaffolds",
    tags: ["Classroom Systems"],
    description:
      "Good scaffolding does not water down thinking — it opens the door to participation. I build reusable routines and supports that classroom teachers and EAL teachers can share.",
    artifacts: [
      "Sentence frame libraries",
      "Language support routines",
      "Co-teaching planning templates",
      "Visual scaffolds for content classes",
    ],
  },
];

const beliefs = [
  "Multilingual learners are not \u201cbehind.\u201d They are building language, identity, confidence, and academic access at the same time.",
  "EAL support should connect students, families, classroom teachers, and school systems.",
  "Home languages are assets, not obstacles.",
  "Good scaffolding does not water down thinking. It opens the door to participation.",
  "AI should reduce teacher friction, not replace teacher judgment.",
  "Families deserve clear explanations of what language development looks like.",
];

export default function Teaching() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="Teaching Philosophy"
        title="Language support should be visible, practical, and human"
        description="Across 15+ years in international schools, my practice has centered on one idea: language growth should be clear to students, families, and teachers alike — not hidden behind jargon or left to chance."
      />

      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
            What I believe
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {beliefs.map((belief, i) => {
              const colors = paletteFor(i);
              return (
                <Reveal key={belief} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`h-full rounded-2xl border ${colors.border} ${colors.bg} p-6 text-sm leading-relaxed text-[var(--color-ink-soft)]`}
                  >
                    {belief}
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-[var(--color-paper-alt)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
            Classroom Practice
          </h2>
          <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
            Tap a section to explore what it includes.
          </p>
          <div className="mt-8 space-y-4">
            {sections.map((section, i) => {
              const colors = paletteFor(i);
              const isOpen = openIndex === i;
              return (
                <Reveal key={section.title} delay={i * 0.05}>
                  <div
                    className={`overflow-hidden rounded-2xl border-l-4 ${colors.barBorderLeft} border border-[var(--color-line)] bg-[var(--color-surface)]`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-start justify-between gap-4 p-8 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2">
                          {section.tags.map((tag) => {
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
                          {section.title}
                        </h3>
                      </div>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={`mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-lg font-semibold ${colors.iconBg} ${colors.text}`}
                        aria-hidden
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="px-8"
                        >
                          <div className="border-t border-[var(--color-line)] pb-8 pt-5">
                            <p className="max-w-3xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
                              {section.description}
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                              {section.artifacts.map((artifact) => (
                                <span
                                  key={artifact}
                                  className="rounded-lg bg-[var(--color-paper-alt)] px-3 py-1.5 text-xs font-medium text-[var(--color-ink-soft)]"
                                >
                                  {artifact}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
