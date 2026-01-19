import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { useEffect } from 'react';
import { motion } from 'motion/react';


gsap.registerPlugin(useGSAP);

  const ProjectList = [
    {
      rank:1,
      name: "E-Commerce Platform",
      disc: "A full-featured online store with a custom CMS ",
      link: "https://neoecommerce.netlify.app/",
      special:"Full stack",
      img: "https://img.freepik.com/free-vector/landing-page-template-second-hand-fashion-store_52683-109215.jpg?semt=ais_hybrid&w=740&q=80",
      stack: ["React", "Node.js", "GraphQL"],
      source: "https://github.com/Amanjeet-007"
    },
    {
      rank:1,
      name: "Data Visualization Daskboard",
      disc: "interactive harts and graphs for real time analitycs",
      link: "http//:",
      img: "https://img.freepik.com/free-vector/business-dashboard-element-set_23-2148359612.jpg?semt=ais_hybrid&w=740&q=80",
      stack: ["D3.js", "React", "Python"],
      source: "https://github.com/Amanjeet-007"
    },
    {
      rank:1,
      name: "Social Media App",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      img: "https://www.winklix.com/blog/wp-content/uploads/2017/10/instant-messaging-900x500.png",
      stack: ["React", "Firebase", "Node.js"],
      source: "https://github.com/Amanjeet-007"
    },
    {
      rank:2,
      name: "Deadpool Animated Website",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      special:"Frontend",
      img: "https://i.pinimg.com/736x/c3/76/86/c3768686be0c6d96e940e95e83e399c7.jpg",
      stack: ["React", "Firebase", "Node.js"],
      source: "https://github.com/Amanjeet-007"
    },
    {
      rank:2,
      name: "Limca Animated Website",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      img: "",
      stack: ["React", "Firebase", "Node.js"],
      source: "https://github.com/Amanjeet-007"
    },
    {
      rank:2,
      name: "Code Conveter",
      disc: "A mobile fisrt social media web application",
      link: "https://github.com/Amanjeet-007/AI-coding",
      img: "",
      stack: ["React", "Gemini Api", "Node.js"],
      source: "https://github.com/Amanjeet-007"
    },
    {
      rank:2,
      name: "Background Remover",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      img: "",
      stack: ["React", "Firebase", "Node.js"],
      source: "https://github.com/Amanjeet-007"
    },
    {
      rank:2,
      name: "Authentication (Scrach)",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      img: "",
      stack: ["Express", "JWT", "Cookie"],
      source: "https://github.com/Amanjeet-007"
    },
     {
      rank:3,
      name: "Snake Game",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      img: "",
      stack: ["React", "Firebase", "Node.js"],
      source: "https://github.com/Amanjeet-007"
    },
    {
      rank:3,
      name: "Tic-Tac-Toe",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      img: "",
      stack: ["React", "Firebase", "Node.js"],
      source: "https://github.com/Amanjeet-007"
    },

  ]

export {ProjectList}

export default function Projects() {
  
  // 1. Fix for Locomotive Scroll + Lazy Loading
  // When this page loads, the height changes. We must tell Locomotive to update.
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, []);

  // 2. Define the function (it was missing in your snippet)
  const toggleTimeline = (e) => {
    console.log("Card clicked", e);
    // Add your GSAP logic here
  };

  const FilteredProjects = ProjectList

  const filters = [
    {
      name:"All",
      apply:()=>{
        ProjectList.filter((el)=>el)
      }
    },
    {
      name:"Frontend",
      apply:()=>{
        FilteredProjects.filter((el)=>{
          if(el.special == "Frontend"){
            console.log("Fone")
            return el
          }
        })
      }
    },
    {
      name:"Backend",
      apply:()=>{
        ProjectList.filter((el)=>{
          if(el.special == "Backend"){
            
            return el
          }
        })
      }
    },
    {
      name:"Full Stack",
      apply:()=>{
        ProjectList.filter((el)=>{
          if(el.special == "Full Stack"){
            return el
          }
        })
      }
    }
  ]

  return (
    <>
      
        <header className="w-[100%] h-min flex justify-center">
        </header>

        <main>

          <div className="All h-20 w-full flex items-center justify-around flex-nowrap overflow-scroll fixed top-[125px] z-50 ">
            {filters.map((el, i) => {
              return (
                <div className="tech py-1 px-7 rounded-4xl border-2 border-white text-white min-w-[120px] text-center mx-4 cursor-pointer " key={i} onClick={el.apply}>
                  {(i == 0 ? `${el.name} ${ProjectList.length}` : el.name)}
                </div>
              )
            })}
          </div>

          <section className="boxes-container flex justify-around items-center w-full flex-wrap h-min ">
            {FilteredProjects.map((el, i) => {
              return (
                <motion.div className="p-4 card h-[500px] w-[350px] text-white rounded-2xl m-5 overflow-hidden cursor-pointer relative" whileHover={{ scale: 1.03 }} key={i} onClick={(e) => toggleTimeline(e)}>
                  <a href={el.link} target='_black'>
                    <div className="link absolute h-14 w-14 bg-blue-800 rounded-bl-2xl top-0 right-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24" fill="white"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                    </div>
                  </a>
                  <motion.img src={el.img} whileHover={{ scale: .9 }} className='h-58 w-full rounded-2xl mt-4' alt="" />
                  <motion.a href={el.source}  whileHover={{ scale: 1.1 }} className='absolute top-[50%] left-[50%] translate-x-[-50%] w-40 flex items-center justify-center h-10 bg-[#DA0037] rounded-xl text-white font-bold' target='_black'>{"<>"} Source</motion.a>
                  <p className=' tb text-2xl font-bold mt-12 mb-2 text-[#151021] '>{el.name}</p>
                  <p className=' tb text-[17px] font-semibold text-[#151021]'>{el.disc}</p>
                  <div className="flex bottom-0 absolute ">
                    {el.stack.map((stackItem, j) => {
                      return (
                        <p key={j} className=' bg-[#DA0037] font-bold m-4 mt-2 ml-0 pt-1 pb-1 pl-4 pr-4 border-1 rounded-2xl border-white'>{stackItem}</p>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </section>

        </main>
    </>
  );
}