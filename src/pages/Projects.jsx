import { p } from "motion/react-client"
import Navbar from "../component/Navbar"
import {motion}  from 'motion/react'
export default function Projects() {
    const Type = ["MERN Stack","Programming Based","Data Science","AI Powered"]
    return (
        <>
            <header className='w-[100%] flex justify-center  '>
                <Navbar />
            </header>
            <main className="px-[10%] py-[4%]">
                <div className="project w-[98%]">
                    {Type.map((el)=>{
                      return (<motion.div
                        whileHover={{
                            scale:1.2
                        }}
                         className="card"><p>{el}</p></motion.div>)
                    })}
                </div>
            </main>
        </>
    )
}