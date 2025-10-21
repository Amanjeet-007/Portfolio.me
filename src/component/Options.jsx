import { useEffect } from "react"
import { NavLink } from "react-router";
import '../styles/Nav.css'
import gsap from 'gsap';

export default function Options(){
    const options = [
        ["Home", "https://cdn-icons-png.flaticon.com/128/10307/10307931.png", "/home"],
        ["About", "https://cdn-icons-png.flaticon.com/128/13984/13984272.png", '/about'],
        ["Skills", "https://cdn-icons-png.flaticon.com/128/13984/13984272.png", '/Skill'],
        ["Projects", "https://cdn-icons-png.flaticon.com/128/9672/9672290.png", "/projects"],
        ["Blogs", "https://cdn-icons-png.flaticon.com/128/4136/4136043.png", '/blogs'],
        // ["Connect", "https://cdn-icons-png.flaticon.com/128/10308/10308279.png", '/connect']
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
        // cleanup
        return () => {
            logo.removeEventListener("mouseenter", handleEnter);
            logo.removeEventListener("mouseleave", handleExist)
        };
    }, [])
    return(
        <>
    <div id="options">
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
            </div>
        </>
    )
}