import { Mail, Linkedin, Github, Globe, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import { paletteFor } from "@/lib/palette";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "forozc1@gmail.com",
    href: "mailto:forozc1@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/federico-orozco-687b5431",
    href: "https://www.linkedin.com/in/federico-orozco-687b5431/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/LenguajeLabs-design",
    href: "https://github.com/LenguajeLabs-design",
  },
  {
    icon: Globe,
    label: "Lenguaje Labs",
    value: "lenguajelabs-design.github.io/lenguaje-labs-site",
    href: "https://lenguajelabs-design.github.io/lenguaje-labs-site/",
  },
];

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
          <div className="glass-card rounded-2xl border border-[var(--color-line)] p-10">
            <div className="space-y-5">
              {contactMethods.map((method, i) => {
                const colors = paletteFor(i);
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    className={`flex items-center gap-4 rounded-xl border ${colors.border} ${colors.bg} p-4 transition-colors hover:brightness-95`}
                  >
                    <span
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${colors.iconBg}`}
                    >
                      <Icon className={`h-5 w-5 ${colors.icon}`} />
                    </span>
                    <span>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
                        {method.label}
                      </p>
                      <p className="text-base font-medium text-[var(--color-ink)]">
                        {method.value}
                      </p>
                    </span>
                  </a>
                );
              })}
            </div>

            <p className="mt-8 flex items-start gap-2.5 border-t border-[var(--color-line)] pt-6 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-brand-500)]" />
              <span>
                Available for collaboration around EAL systems, multilingual
                learner support, AI-assisted teacher tools, and international
                school professional learning.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
