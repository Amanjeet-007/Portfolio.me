import Navbar from "../component/Navbar"
import { useState } from "react";
export default function About(){
    const [face,setFace] = useState("☺️")

    let faces = ["☺️","🫡","😁","😊","😲"];
   
    function onebyone(){ 
        let i = 0 
       setInterval(()=>{
       if(faces[i] == face){
            setFace(faces[i++])
       }
       },2000) 
    }
    onebyone()
    return(
        <>
        <header className='w-[100%] flex justify-center  '>
                <Navbar />
        </header>
        <div className="hero flex items-center justify-center flex-col">
             <h2>Welcome</h2>
             
            <h2>{face}</h2> 
        </div>
       
        </>
    )
}