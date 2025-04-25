import { useEffect, useState } from 'react';        // React Hook
import Data from './assets/db.js'                   // Data (date wala design)
import Navbar from './component/Navbar'             // Navbar
import './App.css'                                  // Stylesheet
import { motion } from 'motion/react'               // Animnation 



function App() {
  
  const [year, setYear] = useState(new Date().getFullYear())
  const [data, setData] = useState([])
  //data show according to year
  useEffect(() => {
    setData(Data[year] || Data.NA);
  }, [year])

   
  return (
    <>
    <header className='w-[100%] flex justify-center  '>
    <Navbar />
  </header>
    <main>
      <div className="hero flex justify-center items-center h-[80vh] w-[100vw]">
        {/* Resume */}
        <a href="https://drive.google.com/file/d/1LTA155Rd2tWSzZll4qX9LIuaFWZPqY6j/view" target='blank'>
            <motion.div className="resume absolute top-[47%] right-60 p-[15px] bg-gray-400 text-center cursor-pointer text-black border-black- border-1 rounded-2xl"
            whileHover={{color:'white',backgroundColor:'gray',scale:1.1,rotateX:20}}
            >
          <img src="https://img.icons8.com/?size=160&id=115648&format=png" className='h-[60px] w-[60px] ' alt="" />
            Resume
        </motion.div>
        </a>
        {/* name */}
        <div className="layer_one relative -z-1 h-min w-[100vw] flex items-center justify-center flex-col">
            <p className='absolute top-[32%] left-[15%] text-4xl z-99'>I'm</p>
            <h1 className='text-[10vw]'>A<span className='text-purple-950'>man</span><span className='text-orange-700'>jeet</span></h1>

           
        </div>
      </div>
      <footer className='h-10 w-40 absolute bottom-1 left-1/2 rounded-full translate-[-50%] bg-black flex items-center justify-center text-green-700'>
              Terminal
              </footer>
      </main>
      </>
  )
}

export default App
