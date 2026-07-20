export function AboutSection() {
  return (
    <section
      className="section about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container section-grid">
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-title">
            End to end,
            <br />
            <em>by design.</em>
          </h2>
        </div>
        <div className="prose">
          <p>
            I’m a full-stack developer who enjoys following an idea through
            every layer of the work. That means shaping an interface, building
            the backend, and understanding the environment where it runs.
          </p>
          <p>
            Outside application development, I learn by operating a home server:
            self-hosted sites and Nextcloud, Linux, Nginx, Docker, networking,
            Cloudflare access controls, local DNS, and remote access with
            Tailscale and a custom WireGuard container.
          </p>
        </div>
      </div>
    </section>
  );
}
