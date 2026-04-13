import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import FeaturedCards from "../components/home/FeaturedCards";
import AboutSection from "../components/home/AboutSection";
import ContactCTA from "../components/home/ContactCTA";
import Footer from "../components/layout/Footer";
import { portfolioData } from "../data/portfolioData";
import StatsBar from "../components/home/StatsBar";

type Mode = "tech" | "wellness";

export default function HomePage() {
  const [mode, setMode] = useState<Mode>("tech");
  const content = portfolioData[mode];

  return (
    <div className={`site-shell mode-${mode}`}>
      <Navbar />
      <main>
        <Hero mode={mode} setMode={setMode} content={content} />
        <StatsBar content={content} />
        <AboutSection />
        <FeaturedCards content={content} />
        <ContactCTA content={content} />
      </main>
      <Footer />
    </div>
  );
}