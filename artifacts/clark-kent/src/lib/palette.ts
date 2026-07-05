export interface PaletteColor {
  bg: string;
  border: string;
  text: string;
  icon: string;
  iconBg: string;
  bar: string;
  barBorder: string;
  barBorderLeft: string;
}

export const palette: PaletteColor[] = [
  {
    bg: "bg-[var(--color-brand-50)]",
    border: "border-[var(--color-brand-100)]",
    text: "text-[var(--color-brand-700)]",
    icon: "text-[var(--color-brand-400)]",
    iconBg: "bg-[var(--color-brand-100)]",
    bar: "bg-[var(--color-brand-500)]",
    barBorder: "border-t-[var(--color-brand-500)]",
    barBorderLeft: "border-l-[var(--color-brand-500)]",
  },
  {
    bg: "bg-[var(--color-amber-50)]",
    border: "border-[var(--color-amber-100)]",
    text: "text-[var(--color-amber-700)]",
    icon: "text-[var(--color-amber-500)]",
    iconBg: "bg-[var(--color-amber-100)]",
    bar: "bg-[var(--color-amber-400)]",
    barBorder: "border-t-[var(--color-amber-400)]",
    barBorderLeft: "border-l-[var(--color-amber-400)]",
  },
  {
    bg: "bg-[var(--color-accent-50)]",
    border: "border-[var(--color-accent-100)]",
    text: "text-[var(--color-accent-600)]",
    icon: "text-[var(--color-accent-500)]",
    iconBg: "bg-[var(--color-accent-100)]",
    bar: "bg-[var(--color-accent-400)]",
    barBorder: "border-t-[var(--color-accent-400)]",
    barBorderLeft: "border-l-[var(--color-accent-400)]",
  },
  {
    bg: "bg-[var(--color-rose-50)]",
    border: "border-[var(--color-rose-100)]",
    text: "text-[var(--color-rose-700)]",
    icon: "text-[var(--color-rose-500)]",
    iconBg: "bg-[var(--color-rose-100)]",
    bar: "bg-[var(--color-rose-400)]",
    barBorder: "border-t-[var(--color-rose-400)]",
    barBorderLeft: "border-l-[var(--color-rose-400)]",
  },
  {
    bg: "bg-[var(--color-indigo-50)]",
    border: "border-[var(--color-indigo-100)]",
    text: "text-[var(--color-indigo-700)]",
    icon: "text-[var(--color-indigo-500)]",
    iconBg: "bg-[var(--color-indigo-100)]",
    bar: "bg-[var(--color-indigo-400)]",
    barBorder: "border-t-[var(--color-indigo-400)]",
    barBorderLeft: "border-l-[var(--color-indigo-400)]",
  },
];

export function paletteFor(index: number): PaletteColor {
  return palette[index % palette.length];
}

const tagColorMap: Record<string, number> = {
  WIDA: 0,
  "Family Communication": 3,
  "EAL Systems": 4,
  "Teacher Tools": 1,
  "Classroom Systems": 2,
  "AI Tools": 4,
  Planning: 1,
  Literacy: 3,
  "Language Objectives": 0,
  "Grades 4\u20135": 2,
};

export function paletteForTag(tag: string): PaletteColor {
  return paletteFor(tagColorMap[tag] ?? 0);
}
