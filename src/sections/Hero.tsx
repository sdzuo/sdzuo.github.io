export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Full-stack .NET developer</p>
          <h1 id="hero-title">
            Shamil
            <br />
            <em>Auwal</em>
          </h1>
        </div>
        <div className="hero-intro">
          <p className="lede">
            I build web applications and the infrastructure behind them—learning
            end to end, from interface and API to deployment and security.
          </p>
          <div className="action-row">
            <a className="button button--primary" href="#work">
              View selected work
            </a>
            <a className="button button--secondary" href="#contact">
              Get in touch
            </a>
          </div>
          <p className="hero-stack">
            .NET <span>·</span> Angular <span>·</span> React <span>·</span> SQL
            Server
          </p>
        </div>
      </div>
    </section>
  );
}
