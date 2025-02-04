"use client";
import { increaseProjectVisits } from "@/app/actions/increase-project-visits";
import { ProjectData } from "@/app/server/get-profile-data";
import Link from "next/link";
import { formatUrl } from "@/app/lib/utils";
import { useParams } from "next/navigation";

export default function ProjectCard({
  project,
  isOwner,
  img,
}: {
  project?: ProjectData; 
  isOwner?: boolean;
  img?: string;
}) {
  if (!project) {
    return (
      <div className="w-[340px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
        <div className="size-24 rounded-md overflow-hidden flex-shrink-0 bg-gray-700 animate-pulse" />
        <div className="flex flex-col gap-2 flex-1">
          <div className="h-4 bg-gray-700 rounded w-1/3 animate-pulse" />
          <div className="h-6 bg-gray-700 rounded w-2/3 animate-pulse" />
          <div className="h-12 bg-gray-700 rounded w-full animate-pulse" />
        </div>
      </div>
    );
  }

  const projectUrl = project.projectUrl ?? "";
  const formattedUrl = formatUrl(projectUrl);
  const { profileId } = useParams();

  async function handleClick() {
    if (!profileId || !project?.id || isOwner) {
      return;
    }
    await increaseProjectVisits(profileId as string, project.id);
  }

  return (
    <Link href={formattedUrl} target="_blank" onClick={handleClick}>
      <div className="w-[340px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
        <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
          <img src={img} alt="Projeto" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          {isOwner && (
            <span className="uppercase text-xs font-bold text-accent-green">
              {project.totalVisits || 0} cliques
            </span>
          )}
          <div className="flex flex-col">
            <span className="text-white font-bold">{project.projectName}</span>
            <span className="text-content-body text-sm">
              {project.projectDescription}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
