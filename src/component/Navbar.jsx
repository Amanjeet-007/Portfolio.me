import { useState } from "react"
import { NavLink } from "react-router";
import { motion } from 'motion/react'
import { useSelector, useDispatch } from 'react-redux'
import { home, project, about, connect } from "./icon.js";
import '../App.css'

export default function Navbar() {
    const [show, setShow] = useState(false)
    const icon = useSelector((state) => state.icon.value)
    const dispatch = useDispatch()

    // all icons
    const icons = [
        `https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/Home-icon.png`, `https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Light_bulb.png`,
        "https://cdn0.iconfinder.com/data/icons/virtual-world-2/64/communication_connection_message_connect_chat-1024.png",
        "https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/19-512.png"]

    return (
        <>

            <nav className="bg-[rgb(33, 159, 222)] h-14 absolute w-[80%]  mt-8 flex items-center  p-4 rounded justify-between">
                <motion.div className="name h-min w-[30px] z-99 cursor-move " whileHover={{ rotateY: 20 }} transition={{ duration: .4 }} drag="x" dragConstraints={{ top: 0, left: -5, right: 100, bottom: 0 }}>
                    <img src="https://i.pinimg.com/736x/49/74/45/49744598b1f1ee6b1650b19b64dda5a8.jpg" alt="A" className="rounded-[20%]" />
                </motion.div>


                {/* menu div */}
                <div className="w-full flex justify-center absolute top-20 left-0 z-50">

                    <div className="menu h-min bg-white/10 backdrop-blur-md border border-black/45 shadow-lg rounded-lg" style={{ visibility: (show ? "visible" : "hidden"), scale: (show ? "1" : "0") }} >
                        <ul className=" w-full flex  flex-wrap items-center justify-around ">
                            <NavLink to="/home">
                                <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl" onClick={() => dispatch(home())}>
                                    Home
                                </li>
                            </NavLink>
                            <NavLink to='/projects' >
                                <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl" onClick={() => dispatch(project())}>Projects</li>
                            </NavLink>
                            <NavLink to="/connect">
                                <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl" onClick={() => dispatch(connect())}>Connect</li>
                            </NavLink>
                            <NavLink to="/about" >
                                <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl" onClick={() => dispatch(about())}>About</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>

                {/* for mobile  --start */}
                <NavLink to="/home">
                    <img src={icons[0]} alt="home" className="mobile" />
                </NavLink>
                <NavLink to="/projects">
                    <img src={icons[1]} alt="project" className="mobile" />
                </NavLink>
                <NavLink to="/connect">
                    <img src={icons[2]} alt="connect" className="mobile" />
                </NavLink>
                <NavLink to="/about">
                    <img src={icons[3]} alt="about" className="mobile" />
                </NavLink>
                {/* for mobile ---end */}

                <motion.div
                    className="icon h-[2.5rem] mx-6 min-w-[30px] flex rounded-[30%] overflow-hidden cursor-pointer z-40 "
                    onClick={() => { (show ? setShow(false) : setShow(true)) }}
                    whileHover={{ scale: 1.1 }}
                >
                    <img src={icon} alt="image" className="pc" />
                </motion.div>

            </nav>


        </>
    )
}