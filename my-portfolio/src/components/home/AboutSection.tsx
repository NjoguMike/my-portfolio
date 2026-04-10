import { LuCircleCheck } from "react-icons/lu";
import card_hero from '../../assets/images/card_hero.png'

export default function AboutSection({ mode }) {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="section-label">About Me</p>
          <h2>Engineer, Creator & Wellness Expert</h2>

          <div className="about-text-group">
            <p>
              I operate at the intersection of two disciplines most people treat as separate — precision software engineering and evidence-based human performance.
            </p>

            <p>
              Whether I am building software or designing wellness experiences, my focus stays the same: creating thoughtful solutions that solve real problems and help individuals and organisations perform at their optimal capacity.
            </p>
          </div>

          <div className="about-badges">
            <span className="badge">Software Engineer</span>
            <span className="badge">Creator</span>
            <span className="badge">Wellness Expert</span>
            <span className="badge">Corporate Wellness</span>
          </div>

          <div className="about-actions">
            <a href="#work" className="btn btn-primary">View My Work</a>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-image-card">
            <img
              src={card_hero}
              alt="Professional portrait in a warm workspace"
            />
          </div>

          <div className="about-visual-decor about-visual-decor-1">
            <span className="about-visual-icon">
              <LuCircleCheck />
            </span>

            <span className="about-visual-text">
              <h4>Dual Expertise</h4>
              <h5>Tech + Wellness</h5>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}