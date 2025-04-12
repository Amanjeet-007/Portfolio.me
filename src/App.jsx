import { useEffect ,useState } from 'react';
import Data from './assets/db.js'
import Navbar from './component/Navbar'
import './App.css'
import RandomShapeDiv from './component/Sky.jsx'
import {motion} from 'motion/react'


function Info(){
  return( 
  <div className="info w-full h-min gap-2 items-center justify-center
  ">
    <div className='m-4 flex items-center'><div className="mr-2 min-h-[15px] min-w-[15px] rounded-full bg-green-500"></div> compeleted Project/Task</div>
    <div className='m-4 flex items-center' ><div className="mr-2 min-h-[15px] min-w-[15px] rounded-full bg-yellow-500"></div> upcoming Project/Task</div>
    <div className='m-4 flex items-center' ><div className="mr-2 min-h-[15px] min-w-[15px] rounded-full bg-blue-500"></div>other</div>
  </div>)
}
//cloud
function Cloud(){


  //position
  let top = Math.floor(Math.random()*80)
  let left = Math.floor(Math.random()*80)

  return(
    <div className="absolute top-4 -z-10" style={{top:`${top}vh`,left:`${left}vw`}}>
       <RandomShapeDiv size={50} duration={100} />
    </div>
   
  )
}


function App() {
  const [year,setYear] = useState(new Date().getFullYear())
  const [data,setData] = useState([])

  
 //data show according to year
  useEffect(()=>{
    setData(Data[year] || Data.NA);
  },[year])

  return (
    <>
      <header className='w-[100%] flex justify-center  '>
        <Navbar />
      </header>
      <div className="  hero flex justify-center items-center h-[100vh] w-[100vw]  pt-25 ">
        <img src="https://i.pinimg.com/736x/5f/25/85/5f2585303f8531910db2a8777e20421d.jpg" className=' w-[28rem] rounded-4xl -z-10 border-t-gray-700 border-t-1' alt="" />
        <div className="social h-10 w-full absolute bottom-1.5 flex justify-center items-center">
        <div className="left flex">
          <motion.img whileHover={{scale:1.2}} src="https://img.icons8.com/?size=160&id=118557&format=png" alt="github" />
          <motion.img whileHover={{scale:1.2}} src="https://img.icons8.com/?size=160&id=64154&format=png" alt="linkedin" />
          <motion.img whileHover={{scale:1.2}} src="https://img.icons8.com/?size=160&id=TSZw5VixabhS&format=png" alt="instagram" />
          <motion.img whileHover={{scale:1.2}} src="https://img.icons8.com/?size=160&id=108636&format=png" alt="whatsapp" />
          <motion.img whileHover={{scale:1.2}} src="https://img.icons8.com/?size=160&id=112164&format=png" alt="telegram" />
        </div>
        </div>
      </div>





    </>
  )
}

export default App
