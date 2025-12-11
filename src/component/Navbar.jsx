import { useEffect, useState } from 'react';
import '../styles/Nav.css'
import gsap from 'gsap';
import Options from './Options';
import { NavLink } from 'react-router';
import { motion } from 'motion/react';

export default function Navbar() {
    const [click, setClick] = useState(false)

    const closeMenu = () => setClick(false);

    const childVariant = {
        FLInitial: {
            rotate: 0
        },
        CInitial: { 
            scale: 1,
            opacity: 1
        },
        fAnimate: { 
            rotate: 45,
            position: "absolute"
        },
        cAnimate: { 
            scale: 0,
            opacity: 0
        },
        lAnimate: { 
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

            <Options show={click} closeMenu={closeMenu} />

            <NavLink to={"/connect"} onClick={closeMenu}>
                <button className='connectBtn cursor-pointer'>Connect</button>
            </NavLink>

            <div
                onClick={() => { setClick(!click) }}
                className="menu h-[35px] w-[35px] flex items-center justify-around flex-col origin-center">
                <motion.div onClick={() => { setClick(!click) }} className="h-[5px] w-[40px] bg-amber-50"
                    animate={click ? "fAnimate" : "FLInitial"} variants={childVariant}
                ></motion.div>
                <motion.div onClick={() => { setClick(!click) }} className="h-[5px] w-[40px] bg-amber-50"
                    animate={click ? "cAnimate" : "CInitial"} variants={childVariant}
                ></motion.div>
                <motion.div onClick={() => { setClick(!click) }} className="h-[5px] w-[40px] bg-amber-50"
                    animate={click ? "lAnimate" : "FLInitial"} variants={childVariant}
                ></motion.div>
            </div>
        </nav>
    )
}