import { Link } from "react-router-dom";
import type { CardsContent  } from "../../types/portfolioData"

type CardsProps = {
  content : CardsContent;
}

function LandingPageCards({ content }: CardsProps) {
  return (
    <article className="landing-card" style={{backgroundImage : `url(${content.card_image})`}}>
      <div className="card-overlay"></div>
      <div className="card-body">
        <div className="card-text">{content.subtitle}</div>
        <h2 className="card-title">{content.title}</h2>
        <p>{content.description}</p>
      </div>
      <Link to={content.route ?? "/"} className="card-cta">
      {content.primaryCta}
      </Link>
    </article>
  )
}

export default LandingPageCards