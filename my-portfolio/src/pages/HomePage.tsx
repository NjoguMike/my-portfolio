import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import FeaturedCards from '../components/home/FeaturedCards'
import AboutSection from '../components/home/AboutSection'
import ContactCTA from '../components/home/ContactCTA'
import Footer from '../components/layout/Footer'
import { portfolioData } from '../data/portfolioData'

export default function HomePage() {
  const [mode, setMode] = useState('tech')
  const content = portfolioData[mode]

  return (
    <div className={`site-shell mode-${mode}`}>
      <Navbar mode={mode} setMode={setMode} />
      <main>
        <Hero mode={mode} setMode={setMode} content={content} />
        <AboutSection mode={mode} />
        <FeaturedCards content={content} />
        <ContactCTA mode={mode} content={content} />
      </main>
      <Footer />
    </div>
  )
}