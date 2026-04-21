import type { LandingHero } from "../../types/portfolioData"

type LandingHeroContent = {
  content : LandingHero;
};

function LandingPageHero({ content } : LandingHeroContent) {
  return (
    <section className="hero-section">
      <div className="hero-body">
        <p className="hero-eyebrow">{content.eyebrow}</p>
        <h1 className="hero-title">{content.heading}</h1>
        <p className="hero-subtitle">{content.subheading}</p>
      </div>
    </section>
  )
}

export default LandingPageHero;