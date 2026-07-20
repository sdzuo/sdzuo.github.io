//src/pages/Home.tsx
import "../style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
library.add(fab, fas);

const RESUME_URL =
  "https://docs.google.com/document/d/1o0O9I6fcGqpV5mmxDO4cmy5v5ys82YHzJC4-Px4eJlk/edit?usp=sharing";

const skills = [
  { name: ".NET", icon: "code" },
  { name: "React", icon: "react", brand: true },
  { name: "Angular", icon: "angular", brand: true },
  { name: "SQL Server", icon: "database" },
  { name: "Docker", icon: "docker", brand: true },
  { name: "Mathematics", icon: "square-root-variable" },
  { name: "Teaching", icon: "chalkboard-user" },
];

const contacts = [
  {
    label: "GitHub",
    value: "sdzuo",
    href: "https://github.com/sdzuo",
    icon: ["fab", "github-alt"] as [string, string],
  },
  {
    label: "LinkedIn",
    value: "shamil-al",
    href: "https://www.linkedin.com/in/shamil-al/",
    icon: ["fab", "linkedin"] as [string, string],
  },
  {
    label: "Resume",
    value: "View / Download",
    href: RESUME_URL,
    icon: "graduation-cap",
  },
  {
    label: "Email",
    value: "sdzuojp@gmail.com",
    href: "mailto:sdzuojp@gmail.com",
    icon: "envelope",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <span className="status-pill">
            <span className="dot" aria-hidden="true" />
            Open to new opportunities
          </span>
          <h1>
            Shamil <span className="accent">Auwal</span>
          </h1>
          <p className="hero__role">.NET &amp; Full-Stack Software Engineer</p>
          <p className="hero__lead">
            Self-taught end-to-end developer with a passion for building and shipping web
            applications from the ground up — from intuitive interfaces to robust,
            secure backend services.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="btn btn--primary">
              <FontAwesomeIcon icon="folder-open" /> View Projects
            </Link>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              <FontAwesomeIcon icon="graduation-cap" /> Resume
            </a>
            <div className="social-row">
              <a
                className="icon-btn"
                href="https://github.com/sdzuo"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={["fab", "github-alt"]} />
              </a>
              <a
                className="icon-btn"
                href="https://www.linkedin.com/in/shamil-al/"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
              <a
                className="icon-btn"
                href="mailto:sdzuojp@gmail.com"
                aria-label="Email"
              >
                <FontAwesomeIcon icon="envelope" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Toolkit</p>
            <h2>Skills &amp; Technologies</h2>
            <p>The languages, frameworks, and tools I reach for to bring ideas to life.</p>
          </div>
          <ul className="skills-grid">
            {skills.map((skill) => (
              <li key={skill.name} className="skill-chip">
                <FontAwesomeIcon
                  className="fa-icon"
                  icon={
                    (skill.brand
                      ? ["fab", skill.icon]
                      : skill.icon) as IconProp
                  }
                />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Background</p>
            <h2>About Me</h2>
          </div>
          <div className="about-card">
            <p>
              I&apos;m a <strong>self-taught end-to-end developer</strong> with a passion for
              building and deploying web applications from the ground up. From designing
              intuitive user interfaces to managing backend servers and ensuring robust
              security, I enjoy owning the full lifecycle of a product.
            </p>
            <br />
            <p>
              My approach combines <strong>creativity with technical expertise</strong>,
              allowing me to bring ideas to life efficiently and precisely — whether that
              means architecting a .NET API, wiring up a React front end, or containerizing
              a deployment with Docker.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Get in touch</p>
            <h2>Contact</h2>
            <p>Let&apos;s build something together. Reach me through any of these.</p>
          </div>
          <div className="contact-grid">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="contact-card"
              >
                <span className="contact-card__icon">
                  <FontAwesomeIcon icon={c.icon as IconProp} />
                </span>
                <span>
                  <span className="contact-card__label">{c.label}</span>
                  <br />
                  <span className="contact-card__value">{c.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
