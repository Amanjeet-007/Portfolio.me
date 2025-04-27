import { useEffect, useState } from 'react';        // React Hook
import Data from './assets/db.js'                   // Data (date wala design)
import Navbar from './component/Navbar'             // Navbar
import './App.css'                                  // Stylesheet
import { motion  } from 'motion/react'              // Animnation 



function App() {
  const categories = ["Frontend","Backend","Programming","Data Science","Tools"]
  const [year, setYear] = useState(new Date().getFullYear())
  const [data, setData] = useState([])
  const [category,setCategory] = useState(0)

  const skills = [
    ["https://www.svgrepo.com/show/353884/html-5.svg",
      "https://www.svgrepo.com/show/353623/css-3.svg",
      "https://www.svgrepo.com/show/452045/js.svg",
      "https://www.svgrepo.com/show/373574/ejs.svg",
      "https://www.svgrepo.com/show/303500/react-1-logo.svg",
    ],   
    ["https://www.svgrepo.com/show/373931/node2.svg",
      "https://www.svgrepo.com/show/330398/express.svg",
      "https://www.svgrepo.com/show/331488/mongodb.svg"

    ],
    [ "https://www.svgrepo.com/show/373528/cpp3.svg",
      "https://www.svgrepo.com/show/374016/python.svg",
      "https://www.svgrepo.com/show/373705/js-official.svg"
    ],["https://www.svgrepo.com/show/374016/python.svg",],
      ["https://www.svgrepo.com/show/452210/git.svg",
      "https://www.svgrepo.com/show/439171/github.svg",
      "https://www.svgrepo.com/show/354202/postman-icon.svg"]]

  function right(){
    setCategory(el=>{
      if(el<categories.length-1){
       return (el+1)
      }else{
       return (el = 0)
      }
    })
  }
  function left(){
    setCategory(el=>{
      if(el>0){
       return (el-1)
      }else{
       return (el = categories.length-1)
      }
    })
  }
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
      <div className="skills absolute top-[25%] flex justify-around w-full h-[20%] flex-wrap">
         {skills[category].map((el)=>{
          return(
            (el?<motion.img src={el} className='h-14 min-w-20 m-20' /> :"")   
        )
         })}
        </div>
        {/* Resume */}
        <a href="https://drive.google.com/file/d/1LTA155Rd2tWSzZll4qX9LIuaFWZPqY6j/view" target='blank'>
            <motion.div className="resume absolute top-[47%] right-60 p-[15px] bg-gray-400 text-center cursor-pointer text-black border-black- border-1 rounded-2xl"
            whileHover={{color:'white',backgroundColor:'gray',scale:1.1,rotateX:20}}
            >
          <img src="https://img.icons8.com/?size=160&id=115648&format=png" className='h-[60px] w-[60px] ' alt="" />
            Resume
        </motion.div>
        </a>
        <motion.div className="para absolute h-20 w-70 flex items-center translate-[-50%] justify-center bottom-[8%] left-1/2 cursor-pointer z-0"
        whileHover={{scale:1.1}}
        
        >
          <motion.img src="https://www.svgrepo.com/show/469170/left-sign.svg"  whileHover={{scale:1.1}} alt="left" onClick={left} />
          <h1 >
          {categories[category]}
          </h1>
            <motion.img src="https://www.svgrepo.com/show/469170/left-sign.svg" whileHover={{scale:1.1}} alt="right" onClick={right} />
        </motion.div>
        {/* name */}
        <div className="layer_one relative -z-1 h-min w-[100vw] flex items-center flex-col bg-amber-400">
            <p className='im absolute top-2 left-[33%] text-4xl z-99'>I'm</p>
            <h1 className='text-[10vw]'>A<span className='text-purple-950'>man</span><span className='text-orange-700'>jeet</span></h1>

           
        </div>
       
      </div>
      <motion.footer className='h-10 w-40 absolute bottom-0 left-1/2 translate-[-50%] bg-black flex items-center justify-center text-green-700 cursor-pointer'
      initial={{borderRadius:"10px"}}
      whileHover={{scale:1.2,borderRadius:1,}}
      >
        <div className="red"></div>
        <div className="yellow"></div>
        <div className="green"></div>
              Terminal
              </motion.footer>
      </main>
      </>
  )
}

export default App
