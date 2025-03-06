import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'

//pages
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Connect from './pages/Connect.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
