export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  role?: string;
  stack?: string[];
  links?: {
    live?: string;
    repo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "medical-office-management",
    title: "Medical Office Management",
    subtitle:
      "Clinic workflows, scheduling, and patient records with a dashboard-first UX.",
    year: "2025",
    tags: ["Dashboard", "Next.js", "TypeScript", "UI/UX"],
    role: "Full-stack project, frontend-led UX",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    links: {},
  },
  {
    slug: "azure-ai-student-support",
    title: "Azure AI Student Support",
    subtitle:
      "AI student support navigator with a chat-first experience and guided flows.",
    year: "2026",
    tags: ["AI UX", "Azure", "Next.js", "Motion"],
    role: "Frontend and interaction design, AI UX",
    stack: ["Next.js", "TypeScript", "Azure", "Framer Motion"],
    links: {},
  },
  {
    slug: "freelancehub",
    title: "FreelanceHub",
    subtitle:
      "Freelance marketplace experience with strong discovery, profiles, and conversion UX.",
    year: "2025",
    tags: ["Marketplace", "Filters", "UI Motion", "Design"],
    role: "Frontend architecture and UI motion",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    links: {},
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
