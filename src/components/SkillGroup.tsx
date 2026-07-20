export function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: readonly string[];
}) {
  const id = `skill-${title.replace(/ /g, "-").toLowerCase()}`;

  return (
    <section className="skill-group" aria-labelledby={id}>
      <h3 id={id}>{title}</h3>
      <ul className="tag-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
