export interface Project {
  slug: string;
  name: string;
  url: string;
  logoUrl?: string;
  featured?: boolean;
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
    slug: "lenguaje-labs",
    name: "Lenguaje Labs",
    url: "https://lenguajelabs-design.github.io/lenguaje-labs-site/",
    logoUrl: "https://lenguajelabs-design.github.io/lenguaje-labs-site/favicon.png",
    featured: true,
    summary:
      "The main Lenguaje Labs site bringing together AI-powered tools and systems for educators, multilingual learners, and families.",
    problem:
      "My work spans multiple audiences and products, but without a clear umbrella site it is harder to show how those tools connect into one larger vision.",
    solution:
      "I built a central home for the Lenguaje Labs ecosystem that introduces the mission, frames the product family, and gives educators and families a clearer path into each tool.",
    role: "I shaped the product vision, content structure, visual direction, and front-end build.",
    tools: "GitHub Pages, Replit, AI-assisted development, content design",
    impact:
      "Creates a stronger public-facing identity for the whole ecosystem and makes it easier to understand how the tools fit together.",
    tags: ["EAL Systems", "Teacher Tools"],
    status: "Live site",
  },
  {
    slug: "ealdesk-elementary",
    name: "EALDesk Elementary",
    url: "https://lenguajelabs-design.github.io/EALDesk-Elementary/",
    logoUrl: "https://lenguajelabs-design.github.io/EALDesk-Elementary/favicon.svg?v=lenguaje-labs",
    featured: true,
    summary:
      "An elementary EAL teacher support hub with WIDA-aligned scaffolds, unit supports, language routines, and multilingual learner guidance.",
    problem:
      "Elementary teachers need practical EAL support, but strong scaffolds, routines, and planning tools are often scattered across folders, notes, and disconnected documents.",
    solution:
      "I built a focused teacher hub that gathers reading and writing scaffolds, unit supports, routines, and multilingual learner guidance into one organized place.",
    role: "I designed the structure, shaped the instructional content, and built the product experience.",
    tools: "GitHub Pages, Replit, WIDA-informed planning, AI-assisted development",
    impact:
      "Helps teachers move faster from planning to instruction while keeping multilingual learner support visible and usable.",
    tags: ["EAL Systems", "Teacher Tools"],
    status: "Live site",
  },
  {
    slug: "multilingual-learner-family-guide",
    name: "Multilingual Learner Family Guide",
    url: "https://lenguajelabs-design.github.io/Multilingual-Learner-Family-Guide/",
    logoUrl: "https://lenguajelabs-design.github.io/Multilingual-Learner-Family-Guide/favicon.png",
    featured: true,
    summary:
      "A family-facing WIDA guide that explains proficiency levels and practical home support ideas in English, Spanish, Chinese, and Korean.",
    problem:
      "Families often receive language assessment information without enough explanation. WIDA levels can feel technical, confusing, or disconnected from what support looks like at home.",
    solution:
      "I designed a multilingual, family-friendly guide that explains language development clearly and offers practical ways families can support growth across proficiency levels.",
    role: "I designed the concept, wrote the content, structured the experience, and built the site.",
    tools: "GitHub Pages, AI-assisted coding tools, multilingual content design, WIDA-informed planning resources",
    impact:
      "Makes language development more transparent for families and strengthens the bridge between home and school support.",
    tags: ["WIDA", "Family Communication"],
    status: "Live site",
  },
  {
    slug: "linguaflow",
    name: "LinguaFlow",
    url: "https://hangul-flow.replit.app/",
    logoUrl: "https://hangul-flow.replit.app/hangul-flow-icon.png",
    featured: true,
    summary:
      "An AI-powered multilingual reading practice app that generates leveled passages, supports clickable vocabulary and romanization when needed, and helps learners save and review new words across Korean, Chinese, and Spanish.",
    problem:
      "Learners need reading practice that is level-appropriate, language-specific, and interactive, but most tools either feel too static or do not support meaningful vocabulary review.",
    solution:
      "I built a reading practice app that generates tailored passages, supports on-demand word help, and gives learners a lightweight system for saving and revisiting new vocabulary.",
    role: "I designed the product concept, reading workflow, and learner experience, then built the prototype.",
    tools: "Replit, AI-assisted development, text generation workflows, learner-facing UX design",
    impact:
      "Supports more personalized reading practice and gives multilingual learners a more active way to build vocabulary over time.",
    tags: ["AI Tools", "Literacy"],
    status: "Live prototype",
  },
  {
    slug: "li-li-chinese",
    name: "Li Li Chinese",
    url: "https://speak-chinese-now.replit.app/",
    logoUrl: "https://speak-chinese-now.replit.app/lili-logo.png",
    summary:
      "A Chinese speaking practice app where learners capture words, view pinyin and meaning, hear feedback, and build a saved practice bank.",
    problem:
      "Students learning Chinese often need frequent speaking repetition and feedback, but classroom time and existing tools do not always make that easy to sustain.",
    solution:
      "I created a speaking practice tool that lets learners collect useful words, hear support, and return to saved vocabulary for repeated oral practice.",
    role: "I designed the practice flow, learner supports, and prototype experience.",
    tools: "Replit, speech-enabled workflows, AI-assisted development, learner-centered interaction design",
    impact:
      "Makes Chinese speaking practice more repeatable, more independent, and easier to continue beyond a single lesson.",
    tags: ["Teacher Tools", "Literacy"],
    status: "Live prototype",
  },
  {
    slug: "scaffold",
    name: "Scaffold",
    url: "https://scaffold.replit.app/",
    logoUrl: "https://scaffold.replit.app/icon-512.png",
    summary:
      "An AI-powered lesson planning assistant for multilingual learner classrooms that turns rough notes into teachable plans with objectives, supports, and sentence frames.",
    problem:
      "Lesson planning for multilingual learners takes time because teachers must translate good intentions into concrete objectives, scaffolds, and language supports.",
    solution:
      "I built a planning assistant that helps teachers move from rough ideas to clearer, more teachable lesson plans with multilingual learner supports built in.",
    role: "I designed the planning workflow, instructional logic, and prototype build.",
    tools: "Replit, AI-assisted development, lesson-planning workflows, EAL-informed instructional design",
    impact:
      "Reduces planning friction and helps teachers produce stronger first drafts for multilingual learner instruction.",
    tags: ["Teacher Tools", "Planning"],
    status: "Live prototype",
  },
  {
    slug: "student-support-compass",
    name: "Student Support Compass",
    url: "https://compass-lenguajelab.replit.app/",
    logoUrl: "https://compass-lenguajelab.replit.app/favicon.svg",
    summary:
      "A strategy finder for student support needs, including attention, executive functioning, behavior, social skills, sensory needs, EAL overlap, and support-plan building.",
    problem:
      "When a student is struggling, teachers may notice the concern quickly but still need help identifying which supports are most relevant and practical.",
    solution:
      "I designed a support-finding tool that connects common student needs to practical strategies and helps organize thinking around next steps.",
    role: "I created the concept, support categories, user flow, and prototype experience.",
    tools: "Replit, AI-assisted development, support-planning workflows, educator-centered UX design",
    impact:
      "Helps teachers respond with more confidence and gives support planning a clearer structure.",
    tags: ["Classroom Systems", "AI Tools"],
    status: "Live prototype",
  },
  {
    slug: "teaching-portfolio",
    name: "Teaching Portfolio",
    url: "https://lenguajelabs-design.github.io/Teaching-Portfolio/",
    summary:
      "A public-facing portfolio that brings together my teaching background, design thinking, and growing ecosystem of educator and learner tools.",
    problem:
      "As the work expanded across teaching, systems design, and AI-powered products, I needed a clearer way to present the full story in one place.",
    solution:
      "I built a teaching portfolio site that connects my classroom experience to the tools, systems, and product thinking that now shape my work.",
    role: "I wrote the narrative, structured the site, directed the design, and built the front-end.",
    tools: "GitHub Pages, React, Vite, AI-assisted development, portfolio storytelling",
    impact:
      "Gives the project ecosystem a clearer public home and makes the transition from teacher to builder visible.",
    tags: ["Teacher Tools", "Planning"],
    status: "Live site",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
