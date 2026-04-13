import { useState } from "react";
import { LuClock, LuMail, LuMapPin } from "react-icons/lu";
import EmailModal from "../common/EmailModal";
import type { PortfolioSection } from "../../types/portfolioData";

type ContactCTAProps = {
  content: PortfolioSection;
};

export default function ContactCTA({ content }: ContactCTAProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="section-label">{content.secondaryCta.eyebrow}</p>
            <h2>{content.secondaryCta.headline}</h2>
            <p className="contact-text">{content.secondaryCta.sub}</p>

            <div className="contact-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setOpen(true)}
              >
                {content.secondaryCta.primary}
              </button>

              <a href="https://www.linkedin.com/in/njogumichael" className="btn btn-secondary">
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

      <EmailModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}