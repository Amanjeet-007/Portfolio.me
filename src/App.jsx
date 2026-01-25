import React, { Suspense, lazy, useRef } from 'react';
import gsap from 'gsap/gsap-core.js';
import { createBrowserRouter } from 'react-router';
import { useGSAP } from '@gsap/react';


import './App.css';

// Layout
import RootLayout from './RootLayout.jsx';

// Standard Imports (Load immediately)
import Welcome from './pages/Welcome.jsx';
import Home from './pages/Home.jsx'; // Usually Home is better standard imported to load fast

// Lazy Imports (Load on demand)
const Projects = lazy(() => import('./pages/Projects.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Connect = lazy(() => import('./pages/Connect.jsx'));
const Blogs = lazy(() => import('./pages/Blogs.jsx'));
const PyJs = lazy(() => import('./pages/Blogs/PyJs.jsx'));
const System = lazy(() => import('./pages/Blogs/System.jsx'));

const Loading = () => {
  gsap.registerPlugin(useGSAP);

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });

    // 1. Blinking Cursor Effect
    gsap.to(".cursor", {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power2.inOut"
    });

    // 2. Loading Bar Animation
    gsap.to(barRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    })

    // 3. Text Scramble / Change
    const texts = ["LOADING...", "COMPILING...", "FETCHING DATA...", "RENDERING..."];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      if (textRef.current) {
        textRef.current.innerText = texts[index];
      }
    }, 2000);

    return () => clearInterval(interval);

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen w-full bg-[#0f2040] flex flex-col items-center justify-center font-mono z-[9999]">

      <div className="w-[300px]">
        {/* Terminal Header */}
        <div className="flex justify-between items-center mb-2 text-xs text-gray-500">
          <span>TERMINAL</span>
          <span>v1.0.4</span>
        </div>

        {/* Text Area */}
        <div className="flex items-center text-xl font-bold text-green-600 mb-4">
          <span className="mr-2">{">"}</span>
          <span ref={textRef}>LOADING...</span>
          <span className="cursor w-3 h-6 bg-green-600 ml-2 inline-block"></span>
        </div>

        {/* Progress Bar Container */}
        <div className="h-2 w-full bg-gray-800 rounded overflow-hidden">
          {/* Moving Bar */}
          <div ref={barRef} className="h-full w-0 bg-gradient-to-r from-green-600 to-green-400"></div>
        </div>

        <p className="text-gray-600 text-xs mt-2 text-right">System status: Online</p>
      </div>
    </div>
  );
};

// This wraps every lazy component in Suspense automatically
const LazyPage = (Component) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // {
      //   index: true, // Replaces path: "/" for the default child
      //   element: <Welcome />,
      // },
      { 
        index:true,
        element: <Home />,
      },
      {
        path: "about",
        element: LazyPage(About), // <--- Uses the helper wrapper
      },
      {
        path: "projects",
        element: LazyPage(Projects),
      },
      {
        path: "connect",
        element: LazyPage(Connect),
      },
      {
        path: "blogs",
        children: [
          {
            index: true,
            element: LazyPage(Blogs),
          },
          {
            path: "python&JavaScript",
            element: LazyPage(PyJs),
          },
          {
            path: "Systemdesign",
            element: LazyPage(System),
          },
        ]
      },
    ]
  }
]);

export default router; 