import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import store from './component/Store.js'
import { Provider } from 'react-redux'
//pages
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Connect from './pages/Connect.jsx';
import Welcome from './pages/Welcome.jsx';
import Blogs from './pages/Blogs.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/home" element={<App/>} />
          <Route path="/connect" element={<Connect />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
