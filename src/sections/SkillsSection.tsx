import { SkillGroup } from "../components/SkillGroup";
import { skillGroups } from "../data/portfolio";

export function SkillsSection() {
  return (
    <section
      className="section skills-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Technical foundations</p>
          <h2 id="skills-title">
            Tools I use
            <br />
            <em>to learn and ship.</em>
          </h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}
