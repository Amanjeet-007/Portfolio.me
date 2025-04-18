import { useEffect, useState } from 'react';
import Data from './assets/db.js'
import Navbar from './component/Navbar'
import './App.css'

import { motion } from 'motion/react'



function App() {
  const [year, setYear] = useState(new Date().getFullYear())
  const [data, setData] = useState([])


  //data show according to year
  useEffect(() => {
    setData(Data[year] || Data.NA);
  }, [year])

  return (
    <main>
      <header className='w-[100%] flex justify-center  '>
        <Navbar />
      </header>
      <div className="  hero flex justify-center items-center h-[100vh] w-[100vw]  pt-25 ">
        {/* Resume */}
        <a href="https://drive.google.com/file/d/1LTA155Rd2tWSzZll4qX9LIuaFWZPqY6j/view" target='blank'>
            <motion.div className="resume absolute bottom-6 right-6 p-[15px] bg-gray-400 text-center cursor-pointer text-black border-black- border-1 rounded-2xl"
            whileHover={{color:'white',backgroundColor:'gray',scale:1.1,rotateX:20}}
            >
          <img src="https://img.icons8.com/?size=160&id=115648&format=png" className='h-[60px] w-[60px] ' alt="" />
            Resume
        </motion.div>
        </a>
      


        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='pic h-full -z-10 w-[100%]' alt="earth" />
        <div className="social h-[500px] w-40 absolute bottom-10 left-2 flex justify-center items-center">
          <div className="left flex flex-col">

            <a href="https://github.com/Amanjeet-007">
            <motion.img whileHover={{scale:1.2,y:-10}} src="https://img.icons8.com/?size=160&id=118557&format=png" alt="github" />
            </a>
            {/* linkedIn */}
            <a href="https://www.linkedin.com/in/amanjeet-kumar-374b0928a">
            <motion.img whileHover={{scale:1.2,y:-10}} src="https://img.icons8.com/?size=160&id=64154&format=png" alt="linkedin" />
            </a>  
            <a href=""><motion.img whileHover={{scale:1.2,y:-10}} src="https://img.icons8.com/?size=160&id=TSZw5VixabhS&format=png" alt="instagram" /></a>          
            <a href="https://wa.me/918882137478?text=Hello"><motion.img whileHover={{scale:1.2,y:-10}} src="https://img.icons8.com/?size=160&id=108636&format=png" alt="whatsapp"/></a>   
            <a href="https://t.me/Rikkysinghrajput"><motion.img whileHover={{scale:1.2,y:-10}} src="https://img.icons8.com/?size=160&id=112164&format=png" alt="telegram" /></a> 
            </div>
        </div>
      </div>




      </main>
  
  )
}

export default App
