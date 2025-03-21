import Navbar from "../component/Navbar"
import { useState } from "react";
export default function About(){
    const [face,setFace] = useState("☺️")

    return(
        <>
        <header className='w-[100%] flex justify-center  '>
                <Navbar />
        </header>
        <div className="hero flex items-center justify-center flex-col">
             <h2>Welcome</h2>
              
        </div>
       
        </>
    )
}