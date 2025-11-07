import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import Navbar from "../component/Navbar";

gsap.registerPlugin(useGSAP);

export default function Projects() {

  const ProjectList = [
    {
      name: "E-Commerce Platform",
      disc: "A full-featured online store with a custom CMS ",
      link: "http//:",
      img: "",
      stack: ["HTML", "CSS", "JS"],
      source: "Haskfjl"
    },
    {
      name: "Data Visualization Daskboard",
      disc: "interactive harts and graphs for real time analitycs",
      link: "http//:",
      img: "",
      stack: ["HTML", "CSS", "JS"],
      source: "Haskfjl"
    },
    {
      name: "Social Media App",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      img: "",
      stack: ["HTML", "CSS", "JS"],
      source: "Haskfjl"
    },
  ]


  return (
    <>
      <header className="w-[100%] h-min flex justify-center">
        <Navbar />
      </header>
      <main>
        <div className="All  h-20 w-full flex items-center justify-around flex-nowrap overflow-scroll fixed top-[125px] z-50 ">
          {["All", "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "GraphQL", "D3.js", "Python", "Firebase"].map((el, i) => {
            return (
              <div className="tech py-1 px-7 rounded-4xl border-2 border-white text-white min-w-[100px] flex items-center justify-center mx-4 cursor-pointer " key={i}>{el}</div>
            )
          })}

        </div>

        <section className="boxes-container flex justify-around items-center w-full flex-wrap h-min mt-25">
          {ProjectList.map((el, i) => {
            return (
              <div className="bg-cyan-950 p-4 card h-[450px] w-[350px] text-white rounded-2xl m-5 overflow-hidden cursor-pointer relative" key={i} onClick={(e) => toggleTimeline(e)}>
                {/* link */}
                <div className="link absolute h-14 w-14 bg-blue-800 rounded-bl-2xl top-0 right-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24" fill="white"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                </div>
                <img src="" className='h-58 w-full rounded-2xl' alt="" />
                <a href="#" className='absolute top-[50%] left-[50%] translate-x-[-50%] w-40 flex items-center justify-center h-10 bg-amber-600 rounded-xl text-white font-bold'>{"<>"} Source</a>
                <p className='text-2xl font-bold mt-6 mb-2'>{el.name}</p>
                <p className='text-[17px]'>{el.disc}</p>
              </div>

            )
          })
          }
        </section>
      </main>
    </>
  );
}