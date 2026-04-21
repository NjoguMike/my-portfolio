import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/variables.css'
import './styles/global.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/cards.css'
import './styles/sections.css'
import './styles/about.css'
import './styles/modals.css'
import './styles/landingPage.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);