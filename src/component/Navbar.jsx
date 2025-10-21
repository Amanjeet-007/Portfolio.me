import { useEffect, useRef } from 'react';

import '../styles/Nav.css'
import gsap from 'gsap';
import Options from './Options';
import { NavLink } from 'react-router';

export default function Navbar() {
    useEffect((e) => {
        const Old = document.querySelectorAll(".neo")
        const New = document.querySelectorAll(".new")
        const logo = document.querySelector("#logo")
        const tl = gsap.timeline()
        gsap.set(Old, {
            y: 20
        })
        // logo Enter
        const handleEnter = () => {
            tl.to(Old, {
                y: -5,
                opacity: 0,
                stagger: 0.09,
            })
            tl.to(New, {
                y: -25,
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
                    {/* {["Neo"].map(el=>{return( <span className='neo'>{el}</span>)})} */}
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
            <Options/>
            <NavLink to={"/connect"}>
            <button className='cursor-pointer'>Connect</button>
            </NavLink>
        </nav>
    )
}