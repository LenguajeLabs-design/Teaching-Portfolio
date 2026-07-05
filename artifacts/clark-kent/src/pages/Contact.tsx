import PageHero from "@/components/PageHero";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's connect"
        description="Available for collaboration around EAL systems, multilingual learner support, AI-assisted teacher tools, and international school professional learning."
      />

      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-alt)] p-10">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-600)]">
                  Email
                </p>
                <a
                  href="mailto:hello@freddieorozco.com"
                  className="mt-1.5 block text-lg font-medium text-[var(--color-ink)] hover:text-[var(--color-brand-700)]"
                >
                  hello@freddieorozco.com
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-600)]">
                  LinkedIn
                </p>
                <a
                  href="#"
                  className="mt-1.5 block text-lg font-medium text-[var(--color-ink)] hover:text-[var(--color-brand-700)]"
                >
                  linkedin.com/in/freddieorozco
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-600)]">
                  GitHub
                </p>
                <a
                  href="#"
                  className="mt-1.5 block text-lg font-medium text-[var(--color-ink)] hover:text-[var(--color-brand-700)]"
                >
                  github.com/freddieorozco
                </a>
              </div>
            </div>

            <p className="mt-8 border-t border-[var(--color-line)] pt-6 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              Available for collaboration around EAL systems, multilingual
              learner support, AI-assisted teacher tools, and international
              school professional learning.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
