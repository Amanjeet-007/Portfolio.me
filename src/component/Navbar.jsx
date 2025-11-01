import { useEffect, useRef, useState } from 'react';
import '../styles/Nav.css'
import gsap from 'gsap';
import Options from './Options';
import { NavLink } from 'react-router';
import { motion } from 'motion/react';

export default function Navbar() {
    const [click, setClick] = useState(false)

    // menu animation 
    const childVariant = {
        FLInitial: { //first and last element initial style
            rotate: 0
        },
        CInitial: { //canter div initial style
            scale: 1,
            opacity: 1
        },
        fAnimate: { //first div animation
            rotate: 45,
            position:"absolute"
        },
        cAnimate: { // central div animation
            scale: 0,
            opacity: 0
        },
        lAnimate: { //last div animation
            rotate: -45
        },
      
    }

    useEffect((e) => {
        const Old = document.querySelectorAll(".neo")
        const New = document.querySelectorAll(".new")
        const logo = document.querySelector("#logo")
        const tl = gsap.timeline()
        gsap.set(Old, {
            y: 25
        })
        // logo Enter
        const handleEnter = () => {
            tl.to(Old, {
                y: -5,
                opacity: 0,
                stagger: 0.09,
            })
            tl.to(New, {
                y: -35,
                opacity: 1,
                stagger: 0.09,
            })
        }
        // logo Exit
        const handleExist = () => {
            tl.to(New, {
                y: 5,
                opacity: 0,
                stagger: 0.09,
            })
            tl.to(Old, {
                y: 25,
                opacity: 1,
                stagger: 0.09,
            })
        }


        logo.addEventListener("mouseenter", handleEnter)
        logo.addEventListener("mouseleave", handleExist)
        // cleanup
        return () => {
            logo.removeEventListener("mouseenter", handleEnter);
            logo.removeEventListener("mouseleave", handleExist)
        };
    }, [])

    return (
        <nav>
            <div id="logo">
                <p>
                    <span className='neo'>N</span>
                    <span className='neo'>e</span>
                    <span className='neo'>o</span>
                </p>
                <p>
                    <span className='new'>N</span>
                    <span className='new'>e</span>
                    <span className='new'>w</span>
                </p>
            </div>
            <Options show={click} />
            <NavLink to={"/connect"}>
                <button className='connectBtn cursor-pointer'>Connect</button>
            </NavLink>
        {/* menu */}
            <div
                onClick={() => { setClick(!click) }}
                className="menu h-[35px] w-[35px] flex items-center justify-around flex-col origin-center">
                <motion.div className="h-[5px] w-[40px] bg-amber-50"
                    animate={click ? "fAnimate" : "FLInitial"} variants={childVariant}
                ></motion.div>
                <motion.div className="h-[5px] w-[40px] bg-amber-50"
                    animate={click ? "cAnimate" : "CInitial"} variants={childVariant}
                ></motion.div>
                <motion.div className="h-[5px] w-[40px] bg-amber-50"
                    animate={click ? "lAnimate" : "FLInitial"} variants={childVariant}
                ></motion.div>
            </div>
        </nav>
    )
}