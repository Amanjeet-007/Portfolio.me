
import { useState, useRef, useEffect } from "react"
import { NavLink } from "react-router";
import '../App.css'
import gsap from "gsap/src";
import Ball from './Ball.jsx'
// import { useGSAP } from "@gsap/react";
export default function Navbar() {
    const [show, setShow] = useState(false)

    const boxRef = useRef(null); // Reference for the box element

    const icon = () => {
        gsap.to(boxRef.current, { rotate: 360, duration: .4, ease: "power2.out" }).then(() => {
            gsap.set(boxRef.current, { clearProps: "all" }); // Reset all styles
        });
    }


    return (
        <>
        
            <nav className="bg-[#C9182B] h-16  w-[90%] mt-8 flex items-center p-4 rounded justify-between relative">
                {/* <Ball/> */}

                {/* icon */}
                <div className="icon h-min w-min" onClick={() => { icon(); (show ? setShow(false) : setShow(true)) }} ref={boxRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 cursor-pointer" >
                        <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                </div>

                {/* menu div */}
                <div className="w-full flex justify-center absolute top-20 left-0 z-50">

                    <div className="menu h-min w-[50%] bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-lg flex items-center justify-around p-2" style={{visibility: (show ? "visible" : "hidden"), scale: (show ? "1" : "0") }} >
                        <ul className="flex  flex-wrap items-center justify-center ">
                            <NavLink to="/">
                                <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl">
                                    Home
                                </li>
                            </NavLink>
                            <NavLink to='/projects'>
                                <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl">Projects</li>
                            </NavLink>
                            <NavLink to="/connect">
                                <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl">Connect</li>
                            </NavLink>
                            <NavLink to="/about">
                                <li className="flex justify-center mx-2 my-1 py-1 px-8 tracking-widest cursor-pointer rounded-2xl">About</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>

                <div className="name mx-10 text-4xl align-middle ">Amanjeet</div>

            </nav>


        </>
    )
}