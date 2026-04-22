import hero_background from '../../assets/images/hero_background.png';

export default function Hero({ mode, content }: { mode: string; content: any }) {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${hero_background})` }}
    >
      <div className="hero-overlay">
        <div className="container hero-grid">

          <div className="hero-copy">
            <p className="hero-eyebrow">{content.eyebrow}</p>
            <h1>{content.heading}</h1>
            <p className="hero-text">{content.text}</p>

            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                {content.primaryCta}
              </a>
              {mode === "tech" ?
                <a href="/Njogu_Michael_Resume.pdf" download className="btn btn-secondary">
                  {content.secondaryCta.cta}
                </a> :
                <a href="#gallery" className="btn btn-secondary">
                  {content.secondaryCta.cta}
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}