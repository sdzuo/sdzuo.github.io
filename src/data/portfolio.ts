import spicyBengalImage from "../assets/Spicybengal.png";
import urlGoatVideo from "../assets/URLgoat-demo.mp4";

export const links = {
  github: "https://github.com/sdzuo",
  linkedin: "https://www.linkedin.com/in/shamil-al/",
  resume:
    "https://docs.google.com/document/d/1o0O9I6fcGqpV5mmxDO4cmy5v5ys82YHzJC4-Px4eJlk/edit?usp=sharing",
  email: "mailto:sdzuojp@gmail.com",
  urlGoat: "https://github.com/sdzuo/goaturl",
  spicyBengal: "https://spicybengal.com",
} as const;

export const projects = [
  {
    name: "URLgoat",
    summary: "A URL shortener built as a full-stack web application.",
    technologies: [".NET", "Angular", "SQL Server", "Docker"],
    href: links.urlGoat,
    linkLabel: "View URLgoat on GitHub",
    media: { type: "video" as const, src: urlGoatVideo },
  },
  {
    name: "Spicy Bengal",
    summary:
      "A full-stack recipe website and practical learning ground for building toward a startup.",
    technologies: ["Penpot", "React", ".NET", "SQL Server", "Docker", "Nginx"],
    href: links.spicyBengal,
    linkLabel: "Visit Spicy Bengal",
    media: { type: "image" as const, src: spicyBengalImage },
  },
] as const;

export const skillGroups = [
  {
    title: "Application development",
    skills: [".NET", "Angular", "React", "SQL Server"],
  },
  {
    title: "Workflow",
    skills: [
      "Azure DevOps",
      "Postman",
      "Bruno",
      "AI-assisted and agentic coding",
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      "Linux",
      "Docker",
      "Nginx",
      "Networking",
      "Cloudflare",
      "Domain management",
    ],
  },
  {
    title: "Home lab",
    skills: [
      "Nextcloud",
      "Raspberry Pi",
      "Pi-hole",
      "Local DNS",
      "Tailscale",
      "WireGuard",
    ],
  },
  { title: "Foundations", skills: ["Mathematics", "Teaching"] },
] as const;
