import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-paper-alt)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-lg font-semibold text-[var(--color-ink)]">
              <span className="brand-badge flex h-7 w-7 items-center justify-center rounded-lg text-[0.65rem] font-bold text-white">
                FO
              </span>
              Federico Orozco
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--color-ink-soft)]">
              EAL Educator, Multilingual Learning Designer, and AI Integration
              Specialist. Building practical systems for students, families,
              and schools.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
                Explore
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/teaching" className="text-[var(--color-ink-soft)] hover:text-[var(--color-brand-700)]">
                    Teaching
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-[var(--color-ink-soft)] hover:text-[var(--color-brand-700)]">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[var(--color-ink-soft)] hover:text-[var(--color-brand-700)]">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
                Connect
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-[var(--color-ink-soft)] hover:text-[var(--color-brand-700)]">
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/federico-orozco-687b5431/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-ink-soft)] hover:text-[var(--color-brand-700)]"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/LenguajeLabs-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-ink-soft)] hover:text-[var(--color-brand-700)]"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://lenguajelabs-design.github.io/lenguaje-labs-site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-ink-soft)] hover:text-[var(--color-brand-700)]"
                  >
                    Lenguaje Labs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-ink-soft)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Federico Orozco. All rights reserved.</p>
          <p>Designed for multilingual learners, families, and teachers.</p>
        </div>
      </div>
    </footer>
  );
}
