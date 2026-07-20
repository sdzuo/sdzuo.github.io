type SkillIconProps = {
  skill: string;
};

const brandMarks: Record<string, string> = {
  ".NET": ".N",
  Angular: "A",
  React: "R",
  "SQL Server": "SQL",
  "Azure DevOps": "AZ",
  Postman: "P",
  Bruno: "B",
  Docker: "D",
  Nginx: "N",
  Cloudflare: "CF",
  Nextcloud: "NC",
  "Raspberry Pi": "RP",
  "Pi-hole": "PI",
  Tailscale: "TS",
  WireGuard: "WG",
};

function SkillIcon({ skill }: SkillIconProps) {
  const mark = brandMarks[skill];

  if (mark) {
    return (
      <svg
        className="skill-icon skill-icon--mark"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="2.5" y="2.5" width="19" height="19" rx="4" />
        <text x="12" y="15" textAnchor="middle">
          {mark}
        </text>
      </svg>
    );
  }

  const paths: Record<string, React.ReactNode> = {
    "AI-assisted and agentic coding": (
      <>
        <path d="M7 8.5 4.5 12 7 15.5M17 8.5l2.5 3.5-2.5 3.5M10 18l4-12" />
        <circle cx="12" cy="12" r="8.5" />
      </>
    ),
    Linux: (
      <>
        <path d="M8 19h8M9 16.5c.4-2.4.8-4.3 1.3-5.7a2 2 0 0 1 3.4 0c.5 1.4.9 3.3 1.3 5.7" />
        <circle cx="10.5" cy="8" r="1" />
        <circle cx="13.5" cy="8" r="1" />
        <path d="M10.5 5.5h3" />
      </>
    ),
    Networking: (
      <>
        <circle cx="6" cy="12" r="2.3" />
        <circle cx="18" cy="6" r="2.3" />
        <circle cx="18" cy="18" r="2.3" />
        <path d="m8 11 7.8-4M8 13l7.8 4" />
      </>
    ),
    "Domain management": (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5S14.1 18.2 12 20.5C9.9 18.2 8.8 15.4 8.8 12S9.9 5.8 12 3.5Z" />
      </>
    ),
    "Local DNS": (
      <>
        <path d="M5 5.5h14v5H5zM5 13.5h14v5H5z" />
        <path d="M8 8h.01M8 16h.01M11 8h5M11 16h5" />
      </>
    ),
    Mathematics: (
      <>
        <path d="M7 5.5h10M7 18.5h10M8.5 8.5l7 7M15.5 8.5l-7 7" />
      </>
    ),
    Teaching: (
      <>
        <path d="M4 6.5h16v10H4zM8 20h8M12 16.5V20M8 10h8M8 13h5" />
      </>
    ),
  };

  return (
    <svg
      className="skill-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {paths[skill] ?? <path d="M5 12h14M12 5v14" />}
    </svg>
  );
}

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
          <li key={skill} className="skill-tag">
            <SkillIcon skill={skill} />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
