
export default function FeaturedCards({ content } : { content : any }) {

  // console.log(content)

  return (
    <section className="featured-section" id="work">
      <div className="container">
        <div className="section-intro">
          <p className="section-label">Selected Highlights</p>
          <h2>{content?.section?.label}</h2>
        </div>

        <div className="card-grid">
          {content?.highlights?.map(( item : any, index: number) => (
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
                  href={item.link || "#"}
                  target={item.link ? "_blank" : undefined}
                  rel={item.link ? "noopener noreferrer" : undefined}
                  className={`card-link ${!item.link ? "disabled" : ""}`}
                  onClick={(e) => {
                    if (!item.link) e.preventDefault();
                  }}
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