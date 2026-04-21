import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import LandingPageCards from "../components/landing_page/LandingPageCards"
import LandingPageHero from "../components/landing_page/LandingPageHero"
import { gatewayData } from "../data/portfolioData";


function LandingPage() {
  return (
    <main className="landing-page">
      <header className="header">
        <div className="logo">Njogu Michael</div>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaSquareXTwitter size={16}/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={16}/>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={16}/>
          </a>
        </div>
      </header>
      <LandingPageHero content={gatewayData.hero} />

      <section className="cards-section">
        <div className="cards-grid">
          {gatewayData.cards.map((card) => (
            <LandingPageCards key={card.id} content={card} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default LandingPage