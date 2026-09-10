"use client";

import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

interface Project {
  name: string;
  tools: string[];
  role: string;
  description: string;
  code?: string;
  demo?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasDemo = Boolean(project.demo);
  const hasCode = Boolean(project.code);

  return (
    <article className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_0_30px_0_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-violet-500/40">
      {project.image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-[#0d1224]">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 42rem"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-accent">
              {project.role}
            </p>
            <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
              {project.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {hasDemo && (
              <Link
                href={project.demo!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <FiExternalLink size={14} />
                Live site
              </Link>
            )}
            {hasCode && (
              <Link
                href={project.code!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <BsGithub size={14} />
                GitHub
              </Link>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-line bg-background px-2.5 py-1 text-xs text-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
