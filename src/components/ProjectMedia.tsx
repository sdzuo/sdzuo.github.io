import type { projects } from "../data/portfolio";

type Project = (typeof projects)[number];

export function ProjectMedia({ project }: { project: Project }) {
  if (project.media.type === "video")
    return (
      <div className="project-media video-frame">
        <video
          controls
          preload="metadata"
          aria-label="URLgoat project demonstration video"
        >
          <source src={project.media.src} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
    );
  return (
    <a
      className="project-media image-frame"
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label="Visit Spicy Bengal"
    >
      <img
        src={project.media.src}
        alt="Screenshot of the Spicy Bengal recipe website"
        loading="lazy"
        decoding="async"
      />
    </a>
  );
}
