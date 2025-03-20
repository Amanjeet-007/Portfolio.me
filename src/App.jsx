import { useEffect ,useState } from 'react';
import Data from './assets/db.js'
import Navbar from './component/Navbar'
import './App.css'


function Info(){
  return( 
  <div className="info w-full h-min flex gap-3">
    <div className='m-4 flex items-center'><div className="mr-2 h-4 w-4 rounded-full bg-green-500"></div> compeleted Project/Task</div>
    <div className='m-4 flex items-center' ><div className="mr-2 h-4 w-4 rounded-full bg-yellow-500"></div> upcoming Project/Task</div>
    <div className='m-4 flex items-center' ><div className="mr-2 h-4 w-4 rounded-full bg-blue-500"></div>other</div>
  </div>)
}

function App() {
  const [year,setYear] = useState(new Date().getFullYear())
  const [data,setData] = useState([])
  useEffect(()=>{
    if(year < 2022 || year > 2025){
     setData(Data["NA"])
    }
    setData(Data[year])
  },[year])

  return (
    <>
      <marquee behavior="" direction="left" className="text-white absolute top-0.5">
        <ul className='flex'>
          <li className='mx-10 tracking-widest'>  Hello World || Currently : learning Ecommerce & React Native because mobile Devlopmentreally fasinating me 😁. Planing AI & ML after deep understanding of py. </li>
        </ul>
      </marquee>
      <header className='w-[100%] flex justify-center  '>
        <Navbar />
      </header>
      <div className="  hero flex justify-center items-center h-full w-full ">
       
        <div className="left  w-1/2 flex items-center justify-center h-[85vh]">
        <div className="year text-8xl flex flex-col items-end relative m-10">
            <div className="dbtn" onClick={()=>{setYear(year-1)}}></div>
            {year}
            <div className="dbtn rotate-180" onClick={()=>{setYear(year+1)}} ></div>
        </div>
        </div>
        <div className="right w-1/2 h-[85vh] flex p-10 flex-col">
        <Info/>
      
        {data.map(el=>{
          return(
            <div className="task h-min p-4 w-[100%] rounded-3xl m-2 text-black"
            style={{backgroundColor:(el.status?"green":"rgb(177, 177, 0)")}}
            key={el.id}
            >
              {el.name}
            </div>
          ) 
        })}
        </div>

      </div>





    </>
  )
}

export default App
