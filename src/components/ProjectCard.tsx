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
          {project.linkLabel} <span aria-hidden="true">↗</span>
        </a>
      </div>
      <ProjectMedia project={project} />
    </article>
  );
}
