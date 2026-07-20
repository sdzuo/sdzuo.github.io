import { links } from "../data/portfolio";

const contacts = [
  ["GitHub", links.github],
  ["LinkedIn", links.linkedin],
  ["Résumé", links.resume],
  ["Email", links.email],
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
            <em>something useful.</em>
          </h2>
        </div>
        <div>
          <p className="lede">
            Have a project, an idea, or a problem worth working through? I’d be
            glad to connect.
          </p>
          <ul className="contact-list">
            {contacts.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {label}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
