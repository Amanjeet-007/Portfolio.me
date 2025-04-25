import { useEffect, useState } from 'react';        // React Hook
import Data from './assets/db.js'                   // Data (date wala design)
import Navbar from './component/Navbar'             // Navbar
import { GoogleGenAI } from "@google/genai";        // Gemini 
import './App.css'                                  // Stylesheet
import { motion } from 'motion/react'               // Animnation 



function App() {
  
  const [year, setYear] = useState(new Date().getFullYear())
  const [data, setData] = useState([])
  //data show according to year
  useEffect(() => {
    setData(Data[year] || Data.NA);
  }, [year])

  const [question,setQuestion] = useState("")


  // const ai = new GoogleGenAI(
  //   { apiKey:import.meta.env.VITE_GEMINI_API });

  // async function Response(text) {
  //   const result = await ai.models.generateContent({
  //     model: "gemini-2.0-flash",
  //     systemInstruction:`
  //     hello i'm Amanjeet. i'm 21 years old if someone ask for name or age then response on my details

  //     `,
  //     contents: text,
  //   });
    
  //   const answer = result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
  //   console.log(answer);
  //   return answer;
  //   }

  // function handleInput(e){
  //   const text = e.target.value
  //   setQuestion(text);
  // }

  //  async function handleSubmit(e){
  //   e.preventDefault()
  //     console.log(question)
  //     const answer = await Response(question);
  //     console.log(answer)
      
  //     setQuestion("")

  //   }

   
  return (
    <main>
      <header className='w-[100%] flex justify-center  '>
        <Navbar />
      </header>
      <div className="  hero flex justify-center items-center h-[100vh] w-[100vw]  pt-25 ">
        {/* <div className="right w-1/3 h-full flex justify-center">
          <p className='greet '>Hello I'm  <br />Amanjeet Kumar</p>
        </div>
        <div className="left w-2/3 flex items-center">
        </div> */}
      
        {/* Resume */}
        <a href="https://drive.google.com/file/d/1LTA155Rd2tWSzZll4qX9LIuaFWZPqY6j/view" target='blank'>
            <motion.div className="resume absolute bottom-24 left-80 p-[15px] bg-gray-400 text-center cursor-pointer text-black border-black- border-1 rounded-2xl"
            whileHover={{color:'white',backgroundColor:'gray',scale:1.1,rotateX:20}}
            >
          <img src="https://img.icons8.com/?size=160&id=115648&format=png" className='h-[60px] w-[60px] ' alt="" />
            Resume
        </motion.div>
        </a>
        {/* know about me */} 
        {/* <form onSubmit={handleSubmit} className='ai absolute bottom-20 w-[20rem] flex flex-col min-h-20'>
  <input
    type="text"
    name="search"
    id="search"
    className='border-2 border-dashed w-full rounded-full min-h-14 text-1xl'
    placeholder='Smart Search'
    onChange={handleInput}
    value={question}
  />
  <button type="submit" className='z-10 cursor-pointer'>Know</button>
        </form> */}
      </div>
      </main>
  
  )
}

export default App
