import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="site-aurora border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-600)]">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
