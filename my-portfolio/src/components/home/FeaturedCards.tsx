import type { PortfolioSection } from "../../types/portfolioData";

type FeaturedCardsProps = {
  content?: PortfolioSection;
};

export default function FeaturedCards({ content }: FeaturedCardsProps) {
  return (
    <section className="featured-section" id="work">
      <div className="container">
        <div className="section-intro">
          <p className="section-label">Selected Highlights</p>
          <h2>{content?.label ? `${content.label} Portfolio` : "Featured Portfolio"}</h2>
        </div>

        <div className="card-grid">
          {content?.highlights?.map((item, index) => (
            <article className="feature-card" key={`${item.title}-${index}`}>
              <img src={item.image} alt={item.title} />

              <div className="feature-card-body">
                <div className="card-category">
                  <h3>{item.title}</h3>
                  <span className="category-badge">{item.category || "Tech"}</span>
                </div>

                <div className="card-content">
                  {item.subtitle && <h4>{item.subtitle}</h4>}
                  <p>{item.description}</p>
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    View Project
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}