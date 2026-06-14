import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ProjectSpecSheet from "@/components/ProjectSpecSheet";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getProjectDescription,
} from "@/data/projects";
import { projectGraph } from "@/lib/jsonLd";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const description = getProjectDescription(project);
  const path = `/projects/${project.slug}`;

  return {
    title: project.title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      title: project.title,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <JsonLd data={projectGraph(project)} />
      <ProjectSpecSheet project={project} />
    </>
  );
}
