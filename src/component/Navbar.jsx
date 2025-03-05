
import { useState } from "react"
import '../App.css'
export default function Navbar() {
    const [show,setShow] = useState(false)
    
    return (
        <>
            <nav className="bg-amber-500 h-16  w-[90%] mt-8 flex items-center p-5 rounded justify-between">
                <div className="icon h-min w-min" on onClick={()=>{(show?setShow(false):setShow(true))}} style={{rotate:(show?"90deg":"0deg"),transition:".5s"}}>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 cursor-pointer" >
                    <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"  />
                </svg>
                </div>
               
                <div className="menu h-min w-min bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-lg p-6 absolute top-26 left-[33%] flex items-center " style={{visibility:(show?"visible":"hidden"),scale:(show?"1":"0")}} >
                <ul className="text-white flex ">
                    <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl">Home</li>
                    <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl">Projects</li>
                    <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl">Connect</li>
                    <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl">About</li>
                </ul>
                </div>
                <div className="name mx-10 text-4xl align-middle">Amanjeet</div>
                
            </nav>


        </>
    )
}