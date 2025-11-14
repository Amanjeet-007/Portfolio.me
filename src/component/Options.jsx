import { useEffect, useState } from "react"
import { NavLink } from "react-router";
import '../styles/Nav.css'
import gsap from 'gsap';
import { motion } from "motion/react";

export default function Options({show}){

    const [screen , setScreen] = useState(window.innerWidth)
    
    const options = [
        ["Home", "https://cdn-icons-png.flaticon.com/128/10307/10307931.png", "/home"],
        ["About", "https://cdn-icons-png.flaticon.com/128/13984/13984272.png", '/about'],
        ["Projects", "https://cdn-icons-png.flaticon.com/128/9672/9672290.png", "/projects"],
        ["Blogs", "https://cdn-icons-png.flaticon.com/128/4136/4136043.png", '/blogs'],
        
    ]
    
    function hoverHandler(e) {
        const paragraph = e.currentTarget.querySelector("p");
        const icon = e.currentTarget.querySelector("span img")
        gsap.to(e.currentTarget, {
            scale: 1.2,
        })
        gsap.to(paragraph, {
            rotationY: 45,
            opacity: 0,
        })
        gsap.to(icon, {
            rotationY: -180,
            opacity: 1
        })
    }

    function exitHandler(e) {
        const paragraph = e.currentTarget.querySelector("p");
        const icon = e.currentTarget.querySelector("span img")
        gsap.to(e.currentTarget, {
            scale: 1,
            duration: .5
        }
        )
        gsap.to(paragraph, {
            rotationY: 0,
            opacity: 1,
        })
        gsap.to(icon, {
            rotationY: -45,
            opacity: 0
        })
    }
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

        //screen size
        if(screen != window.innerWidth){
            setScreen(window.innerWidth)     
        }
        // cleanup
        return () => {
            logo.removeEventListener("mouseenter", handleEnter);
            logo.removeEventListener("mouseleave", handleExist)
        };
    }, [])
    if(screen<1000){
            options.push(["Connect", "https://cdn-icons-png.flaticon.com/128/10308/10308279.png", '/connect'])
        }
    return(
        <>
    <motion.div
    initial={(screen<1000)?{opacity:0,x:20}:{opacity:1}}
    animate={(screen<1000) && show ?{opacity:1,x:-70}:screen>1000?{opacity:1}:{opacity:0}}
    id="options">
                {options.map((el, i) => {
                    return (
                        <NavLink to={el[2]} key={i}>
                            <div onMouseEnter={hoverHandler}
                                onMouseLeave={exitHandler}
                                className="option" >
                                <p>{el[0]}</p>
                                <span>
                                    <img src={el[1]} alt="" />
                                </span>
                            </div>
                        </NavLink>
                    )
                })}
            </motion.div>
        </>
    )
}