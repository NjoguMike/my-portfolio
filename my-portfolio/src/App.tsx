import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function TechPortfolio(){
  return <div>Tech Portfolio</div>
}

function WellnessPortfolio(){
  return <div>Wellness Portfolio</div>
}

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tech" element={<TechPortfolio />} />
        <Route path="/wellness" element={<WellnessPortfolio />} />
      </Routes>
    </BrowserRouter>
  )
}