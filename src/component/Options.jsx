import { useEffect, useState } from "react"
import { NavLink } from "react-router"; // (Make sure this import is correct for your version)
import '../styles/Nav.css'
import gsap from 'gsap';
import { motion } from "motion/react";

export default function Options({ show, closeMenu }) {

    const [screen, setScreen] = useState(window.innerWidth)

    const options = [
        ["Home", "https://cdn-icons-png.flaticon.com/128/10307/10307931.png", "/home"],
        ["About", "https://cdn-icons-png.flaticon.com/128/13984/13984272.png", '/about'],
        ["Projects", "https://cdn-icons-png.flaticon.com/128/9672/9672290.png", "/projects"],
        ["Blogs", "https://cdn-icons-png.flaticon.com/128/4136/4136043.png", '/blogs'],
    ]

    function hoverHandler(e) {
        const paragraph = e.currentTarget.querySelector("p");
        const icon = e.currentTarget.querySelector("span img")
        gsap.to(e.currentTarget, { scale: 1.2 })
        gsap.to(paragraph, { rotationY: 45, opacity: 0 })
        gsap.to(icon, { rotationY: -180, opacity: 1 })
    }

    function exitHandler(e) {
        const paragraph = e.currentTarget.querySelector("p");
        const icon = e.currentTarget.querySelector("span img")
        gsap.to(e.currentTarget, { scale: 1, duration: .5 })
        gsap.to(paragraph, { rotationY: 0, opacity: 1 })
        gsap.to(icon, { rotationY: -45, opacity: 0 })
    }

    useEffect((e) => {
        const logo = document.querySelector("#logo") 
    }, [])

    if (screen < 1000) {
        options.push(["Connect", "https://cdn-icons-png.flaticon.com/128/10308/10308279.png", '/connect'])
    }

    return (
        <>
            <motion.div
                initial={(screen < 1000) ? { opacity: 0, x: 20 } : { opacity: 1 }}
                animate={(screen < 1000) && show ? { opacity: 1, x: -70 } : screen > 1000 ? { opacity: 1 } : { opacity: 0 }}
                id="options">
                {options.map((el, i) => {
                    return (
                        <NavLink 
                            to={el[2]} 
                            key={i} 
                            onClick={closeMenu}
                        >
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