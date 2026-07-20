import { links } from "../data/portfolio";

type ContactIconProps = {
  className?: string;
};

function GitHubIcon({ className }: ContactIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.03 1.54 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.91.68 1.83v2.8c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: ContactIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M6.5 8.3H3.2V21h3.3V8.3ZM4.85 3C3.8 3 3 3.78 3 4.8s.8 1.8 1.82 1.8h.03c1.06 0 1.83-.78 1.83-1.8C6.66 3.78 5.9 3 4.85 3ZM21 13.72c0-3.83-2.04-5.61-4.76-5.61-2.2 0-3.18 1.2-3.73 2.06V8.3H9.2c.04 1.24 0 12.7 0 12.7h3.31v-7.1c0-.38.03-.75.14-1.02.24-.75.8-1.53 1.75-1.53 1.24 0 1.73.94 1.73 2.32V21h3.31v-7.28c0-3.9-2.08-5.72-4.86-5.72Z"
      />
    </svg>
  );
}

function ResumeIcon({ className }: ContactIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M7 3.5h7l3 3V20.5H7zM14 3.5v3h3M10 11h4M10 14.5h4M10 18h2.5"
      />
    </svg>
  );
}

function EmailIcon({ className }: ContactIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M4 6.5h16v11H4zM4.5 7l7.5 6 7.5-6"
      />
    </svg>
  );
}

const contacts = [
  ["GitHub", links.github, GitHubIcon],
  ["LinkedIn", links.linkedin, LinkedInIcon],
  ["Résumé", links.resume, ResumeIcon],
  ["Email", links.email, EmailIcon],
] as const;

export function ContactSection() {
  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">
            Let’s build
            <br />
            <em>together.</em>
          </h2>
        </div>
        <div>
          <p className="lede">
            Have a project, an idea, or a problem worth working through? I’d be
            glad to connect.
          </p>
          <ul className="contact-list">
            {contacts.map(([label, href, Icon]) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="contact-link-label">
                    <Icon className="contact-link-icon" />
                    {label}
                  </span>
                  <span className="contact-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
