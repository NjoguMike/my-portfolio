import { LuClock, LuMail, LuMapPin } from "react-icons/lu";

export default function ContactCTA({ mode, content }) {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="section-label">{content.secondaryCta.eyebrow}</p>
            <h2>{content.secondaryCta.headline}</h2>
            <p className="contact-text">{content.secondaryCta.sub}</p>

            <div className="contact-actions">
              <a href="mailto:mikeynjogu@gmail.com" className="btn btn-primary">
                {content.secondaryCta.cta}
              </a>

              <a href="#" className="btn btn-secondary">
                {content.secondaryCta.secondary}
              </a>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-info-item">
              <span className="contact-icon">
                <LuMail />
              </span>
              <div>
                <p className="contact-info-label">Email</p>
                <p className="contact-info-value">mikeynjogu@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-icon">
                <LuMapPin />
              </span>
              <div>
                <p className="contact-info-label">Location</p>
                <p className="contact-info-value">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-icon">
                <LuClock />
              </span>
              <div>
                <p className="contact-info-label">Availability</p>
                <p className="contact-info-value">Mon–Fri, 9am – 6pm EAT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}