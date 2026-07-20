import type { projects } from "../data/portfolio";
import { ProjectMedia } from "./ProjectMedia";

type Project = (typeof projects)[number];

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={`project-card ${index % 2 === 1 ? "project-card--reverse" : ""}`}
    >
      <div className="project-copy">
        <p className="eyebrow">Selected work / 0{index + 1}</p>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <a
          className="text-link"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          {project.linkLabel}
          <svg
            aria-hidden="true"
            className="text-link__icon"
            focusable="false"
            viewBox="0 0 16 16"
          >
            <path d="M5 11 11 5M6 5h5v5" />
          </svg>
        </a>
      </div>
      <ProjectMedia project={project} />
    </article>
  );
}
