import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/portfolio";

export function ProjectsSection() {
  return (
    <section
      className="section projects-section"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">
            Projects with
            <br />
            <em>the whole system in view.</em>
          </h2>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
