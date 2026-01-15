import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/app/content/projects";
import MedicalOfficeCaseStudy from "@/components/case-studies/MedicalOfficeCaseStudy";
import AzureStudentSupportCaseStudy from "@/components/case-studies/AzureStudentSupportCaseStudy";
import FreelanceHubCaseStudy from "@/components/case-studies/FreelanceHubCaseStudy";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function WorkSlugPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  if (slug === "medical-office-management")
    return <MedicalOfficeCaseStudy project={project} />;
  if (slug === "azure-ai-student-support")
    return <AzureStudentSupportCaseStudy project={project} />;
  if (slug === "freelancehub")
    return <FreelanceHubCaseStudy project={project} />;

  return notFound();
}
