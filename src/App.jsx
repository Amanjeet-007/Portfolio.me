import Navbar from './component/Navbar'             // Navbar
import Footer from './component/Footer'             // Footer
import './App.css'                                  // Stylesheet
import Home from './pages/Home'
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import { createBrowserRouter } from 'react-router'; 
import { Routes, Route } from 'react-router'

//pages
import RootLayout from './RootLayout.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Connect from './pages/Connect.jsx';
import Welcome from './pages/Welcome.jsx';
import Blogs from './pages/Blogs.jsx';

// blogs
import PyJs from './pages/Blogs/PyJs.jsx';
import System from './pages/Blogs/System.jsx';

const App = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {
        path: "/",      // Homepage (Welcome)
        element: <Welcome />, 
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/connect",
        element: <Connect />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      // Blog sub-pages
      {
        path: "/blogs/python&JavaScript",
        element: <PyJs />,
      },
      {
        path: "/blogs/Systemdesign",
        element: <System />,
      },
      {
        path:"/projects",
        element:<Projects />
      },

    ]
  }
])

export default App
