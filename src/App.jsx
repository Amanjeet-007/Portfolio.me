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


  const ai = new GoogleGenAI(
    { apiKey:import.meta.env.VITE_GEMINI_API });

  async function Response(text) {
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      systemInstruction:`
 I will provide you with all my personal and professional information below. Based on this data, if someone asks a question about me (e.g., who I am, what I do, my skills, education, social links, resume, etc.), respond only using the information I have given you. Do not make assumptions or add extra details from outside sources. If you don’t find an answer in my provided data, respond with: “I’m not sure based on the info I have.

Name: Amanjeet Kumar 
age:21
Profession: Full-Stack Developer  
Skills: React, Node.js, MongoDB, Express.js, JavaScript, C, C++, Python  
Resume: [Resume Link]  
LinkedIn: [Profile URL]  
GitHub: [Repo URL]  
Portfolio: [Portfolio URL]  
About Me: I am passionate about creating impactful web applications
      `,
      contents: text,
    });
    
    const answer = result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
    console.log(answer);
    return answer;
    }

  function handleInput(e){
    const text = e.target.value
    setQuestion(text);
  }

   async function handleSubmit(e){
    e.preventDefault()
      console.log(question)
      const answer = await Response(question);
      console.log(answer)
      
      setQuestion("")

    }

   
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
            <motion.div className="resume absolute bottom-6 right-6 p-[15px] bg-gray-400 text-center cursor-pointer text-black border-black- border-1 rounded-2xl"
            whileHover={{color:'white',backgroundColor:'gray',scale:1.1,rotateX:20}}
            >
          <img src="https://img.icons8.com/?size=160&id=115648&format=png" className='h-[60px] w-[60px] ' alt="" />
            Resume
        </motion.div>
        </a>
        {/* know about me */} 
        <form onSubmit={handleSubmit} className='absolute top-80 w-1/4 flex flex-col min-h-20'>
  <input
    type="text"
    name="search"
    id="search"
    className='border-2 border-dashed border-blue-600 w-full rounded-full min-h-14 text-2xl'
    placeholder='Smart Search'
    onChange={handleInput}
    value={question}
  />
  <button type="submit" className='z-10 cursor-pointer'>Know</button>
</form>


      </div>




      </main>
  
  )
}

export default App
