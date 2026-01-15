export function accentForSlug(slug: string) {
  switch (slug) {
    case "medical-office-management":
      return {
        ring: "ring-emerald-200/20",
        glow: "bg-emerald-400/10",
        text: "text-emerald-200",
      };
    case "azure-ai-student-support":
      return {
        ring: "ring-sky-200/20",
        glow: "bg-sky-400/10",
        text: "text-sky-200",
      };
    case "freelancehub":
      return {
        ring: "ring-violet-200/20",
        glow: "bg-violet-400/10",
        text: "text-violet-200",
      };
    default:
      return {
        ring: "ring-white/10",
        glow: "bg-accent/10",
        text: "text-foreground/90",
      };
  }
}
