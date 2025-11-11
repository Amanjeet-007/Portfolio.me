import Navbar from './component/Navbar'             // Navbar
import Footer from './component/Footer'             // Footer
import './App.css'                                  // Stylesheet
import Home from './pages/Home'
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import { Routes, Route } from 'react-router'

//pages
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Connect from './pages/Connect.jsx';
import Welcome from './pages/Welcome.jsx';
import Blogs from './pages/Blogs.jsx';

// blogs
import PyJs from './pages/Blogs/PyJs.jsx';
import System from './pages/Blogs/System.jsx';


function App() {
  return (
    <>
      <main data-scroll-container>
        <Navbar />
         <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
            {/* blogs */}
            <Route path="/blogs/python&JavaScript" element={<PyJs/>}/>
            <Route path="/blogs/Systemdesign" element={<System/>}/>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer/>
      </main>
    </>
  )
}

export default App
