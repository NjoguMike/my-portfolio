type HighlightItem = {
  title: string;
  image: string;
  category?: string;
  subtitle?: string;
  description: string;
  link: string;
};

type FeaturedContent = {
  label?: string;
  highlights?: HighlightItem[];
};

type FeaturedCardsProps = {
  content?: FeaturedContent;
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
          {content?.highlights?.map((item: HighlightItem, index: number) => (
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

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}