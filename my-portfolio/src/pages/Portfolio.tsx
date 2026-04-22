import { Navigate, useParams } from "react-router-dom"
import { portfolioPath } from "../utils/portfolioPath";
import { portfolioData } from "../data/portfolioData";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import StatsBar from "../components/home/StatsBar";
import AboutSection from "../components/home/AboutSection";
import FeaturedCards from "../components/home/FeaturedCards";
import ContactCTA from "../components/home/ContactCTA";
import Footer from "../components/layout/Footer";


function Portfolio() {

  const { path } = useParams<{ path : string }>();

  if (!path || !portfolioPath(path)) {
    return <Navigate to="/" replace />;
  }

  const content = portfolioData[path]
  // console.log(content)

  return (
    <div className={`site-shell mode-${path}`}>
      <Navbar />
      <main>
        <Hero mode={path} content={content?.section} />
        <StatsBar content={content} />
        <AboutSection />
        <FeaturedCards content={content} />
        <ContactCTA content={content?.section} />
      </main>
      <Footer />
    </div>
  )
}

export default Portfolio;