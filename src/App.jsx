import { useEffect ,useState } from 'react';
import Data from './assets/db.js'
import Navbar from './component/Navbar'
import './App.css'


function App() {
  const [year,setYear] = useState(new Date().getFullYear())
  const [data,setData] = useState("")
  // useEffect(()=>{
  //   console.log("Hii")
  //     setData(Data.year.name)
  //     console.log(data)
  // },[])

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
        <div className="right w-1/2 h-[85vh] flex">
          {/* {data} */}
        </div>

      </div>





    </>
  )
}

export default App
