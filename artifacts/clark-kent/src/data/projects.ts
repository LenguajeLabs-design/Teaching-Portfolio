export interface Project {
  slug: string;
  name: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  tools: string;
  impact: string;
  tags: string[];
  status: string;
}

export const projects: Project[] = [
  {
    slug: "family-guide",
    name: "Multilingual Learner Family Guide",
    summary:
      "A family-facing tool that explains WIDA levels, language growth, and practical ways to support multilingual learners at home.",
    problem:
      "Families often receive language assessment information without enough explanation. WIDA levels can feel technical, confusing, or disconnected from what students actually need at home and in school.",
    solution:
      "I designed a clear, accessible guide that explains language development in family-friendly language, with level explanations, support tips, and multilingual access so families can better understand their child's EAL journey.",
    role: "I designed the concept, wrote the content, structured the user experience, and built the prototype using AI-assisted development tools.",
    tools: "Replit, GitHub, AI-assisted coding tools, WIDA-informed planning resources",
    impact:
      "Makes language development more transparent for families and creates a stronger bridge between school support and home understanding.",
    tags: ["WIDA", "Family Communication"],
    status: "Live prototype",
  },
  {
    slug: "ealdesk",
    name: "EALDesk",
    summary:
      "A professional hub for EAL tools, planning systems, and multilingual learner support.",
    problem:
      "EAL resources, planning templates, and student support systems tend to live scattered across drives, binders, and inboxes, making them hard for teachers to find and reuse.",
    solution:
      "A central, organized hub that brings together planning tools, family resources, and classroom systems in one place teachers can actually use day to day.",
    role: "Concept design, information architecture, content, and prototype build.",
    tools: "Replit, GitHub, AI-assisted development",
    impact:
      "Reduces the time EAL and homeroom teachers spend hunting for support materials, and creates a foundation for school-wide adoption.",
    tags: ["EAL Systems", "Teacher Tools"],
    status: "In development",
  },
  {
    slug: "classroom-compass",
    name: "Classroom Compass",
    summary:
      "A teacher support tool that connects student concerns to practical support strategies.",
    problem:
      "When a classroom teacher notices a student struggling, it isn't always clear which language, learning, or behavioral support strategy fits the concern.",
    solution:
      "A guided tool that takes a teacher's observation and surfaces practical, classroom-ready strategies matched to that concern.",
    role: "Concept, workflow design, and AI-assisted prototype build.",
    tools: "Replit, AI-assisted development",
    impact:
      "Helps classroom teachers act quickly and confidently, with potential for school-wide use as a shared support reference.",
    tags: ["Classroom Systems", "AI Tools"],
    status: "Prototype",
  },
  {
    slug: "wida-planning-tools",
    name: "WIDA Planning Tools",
    summary:
      "Teacher-facing planning templates and support tools for aligning language goals, scaffolds, and student outcomes.",
    problem:
      "Translating WIDA Can Do descriptors into daily lesson-level language objectives and scaffolds takes significant planning time.",
    solution:
      "A set of reusable planning templates that connect WIDA levels directly to language objectives, scaffolds, and student-friendly goals.",
    role: "Designed the planning framework and built the templates from years of classroom use.",
    tools: "WIDA Can Do Descriptors, planning frameworks, AI-assisted drafting",
    impact:
      "Saves planning time and keeps language objectives consistent and visible across units.",
    tags: ["WIDA", "Planning"],
    status: "In active use",
  },
];
