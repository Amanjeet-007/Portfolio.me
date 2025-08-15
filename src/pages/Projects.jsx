import { useState, useRef, useEffect } from "react"; // useState is still needed if you use other local states, but not for the hover state managed by Framer Motion here.
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import Navbar from "../component/Navbar";

gsap.registerPlugin(useGSAP);

export default function Projects() {
  const container = useRef();
  const tl = useRef();
  const demo = useRef()
  const [one,setOne] = useState(demo.current)
  // const Type = ["MERN Stack", "Programming Based", "Data Science", "AI Powered"];
  const toggleTimeline = (e)=>{
    setOne(e.target)
    // console.log(one)
    tl.current.reversed(!tl.current.reversed())
  }
  useGSAP(
    ()=>{
      const cards = gsap.utils.toArray('.card');
      tl.current = gsap.timeline()
      .to(cards[0]==one?cards[0]:cards[1],{ x: 200, rotation: 360 })
      .to(cards[1], { x: -120, rotation: -360 }, '<')
      .to(cards[2],{ y: -166 })
      .reverse();
    },
    {scope:container}
  )

  return (
    <>
      <header className="w-[100%] h-min flex justify-center">
        <Navbar />
      </header>
      <main>
        <section className="boxes-container flex justify-around" ref={container} >
        <div className="card bg-blue-800" ref={demo}  onClick={(e)=>toggleTimeline(e)}>Box 1</div>
        <div className="card gradient-blue"  onClick={(e)=>toggleTimeline(e)}>Box 2</div>
        <div className="card gradient-blue"  onClick={(e)=>toggleTimeline(e)}>Box 3</div>
      </section>

      </main>
    </>
  );
}

{/* <div className="project w-[30%] h-full flex-wrap">
              <div
                ref={one}
                className="card justify-around text-xl font-semibold flex flex-rows"
                onClick={(e)=>center(e)}>
                  MERN Stack
                  <div className="right"></div>
              </div>
        </div> */}