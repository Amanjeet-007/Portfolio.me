import { useState } from "react"
import { NavLink } from "react-router";
import { motion } from 'motion/react'
import { useSelector, useDispatch } from 'react-redux'
import { home, project,about,connect } from "./icon.js";
import '../App.css'

export default function Navbar() {
    const [show, setShow] = useState(false)

    const icon = useSelector((state)=>state.icon.value)
    const dispatch = useDispatch()

    return (
        <>

            <nav className="bg-black h-14 absolute w-[80%]  mt-8 flex items-center  p-4 rounded justify-between cursor-pointer">
                <motion.div className="name h-min w-[80px] z-99 " whileHover={{rotateY:180}} transition={{duration:.4}} drag="x" dragConstraints={{ top:0, left: -5, right: 100, bottom: 0 }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKW9eqX73c3jGMIM2JZEmFL9_VFCB84mdCgw&s" alt="A" className="rounded-[50%]"/>
                </motion.div>

                {/* menu div */}
                <div className="w-full flex justify-center absolute top-20 left-0 z-50">

                    <div className="menu h-min w-[50%] bg-white/10 backdrop-blur-md border border-black/45 shadow-lg rounded-lg flex items-center justify-around p-2" style={{ visibility: (show ? "visible" : "hidden"), scale: (show ? "1" : "0") }} >
                        <ul className="flex  flex-wrap items-center justify-center ">
                            <NavLink to="/">
                                <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl" onClick={()=>dispatch(home())}>
                                    Home
                                </li>
                            </NavLink>
                            <NavLink to='/projects' >
                                <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl" onClick={()=>dispatch(project())}>Projects</li>
                            </NavLink>
                            <NavLink to="/connect">
                                <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl" onClick={()=>dispatch(connect())}>Connect</li>
                            </NavLink>
                            <NavLink to="/about" >
                                <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl" onClick={()=>dispatch(about())}>About</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>

                <motion.div
                    className="icon h-[2.5rem] mx-6 min-w-[30px] flex rounded-[30%] overflow-hidden cursor-pointer z-40 "
                    onClick={() => { (show ? setShow(false) : setShow(true)) }}
                    whileHover={{scale:1.1}}
                    >
                    <img src={icon} alt="image" />
                    
                </motion.div>

            </nav>


        </>
    )
}