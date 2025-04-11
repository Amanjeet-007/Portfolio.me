import { useEffect ,useState } from 'react';
import Data from './assets/db.js'
import Navbar from './component/Navbar'
import './App.css'
import RandomShapeDiv from './component/Sky.jsx'


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
      <div className="  hero flex justify-center items-center h-full w-full md:h-full md:m-0 ">
       
        <div className="left  w-1/2 flex md:mx-0 mx-35 h-[85vh] pt-40">

        </div>
        
        <img src="https://i.pinimg.com/736x/5f/25/85/5f2585303f8531910db2a8777e20421d.jpg" className='absolute bottom-0 left-0 translate-[0%,-50%] w-[28rem] rounded-4xl -z-10 md:left-[30%] ' alt="" />
        <div className="right w-1/2 h-[85vh] md:mx-0 flex flex-col pt-40 items-center justify-center relative">

        </div>

      </div>





    </>
  )
}

export default App
