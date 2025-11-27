import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

  const ProjectList = [
    {
      rank:1,
      name: "E-Commerce Platform",
      disc: "A full-featured online store with a custom CMS ",
      link: "http//:",
      img: "https://img.freepik.com/free-vector/landing-page-template-second-hand-fashion-store_52683-109215.jpg?semt=ais_hybrid&w=740&q=80",
      stack: ["React", "Node.js", "GraphQL"],
      source: "Haskfjl"
    },
    {
      rank:1,
      name: "Data Visualization Daskboard",
      disc: "interactive harts and graphs for real time analitycs",
      link: "http//:",
      img: "https://img.freepik.com/free-vector/business-dashboard-element-set_23-2148359612.jpg?semt=ais_hybrid&w=740&q=80",
      stack: ["D3.js", "React", "Python"],
      source: "Haskfjl"
    },
    {
      rank:1,
      name: "Social Media App",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      img: "https://www.winklix.com/blog/wp-content/uploads/2017/10/instant-messaging-900x500.png",
      stack: ["React", "Firebase", "Node.js"],
      source: "Haskfjl"
    },
    {
      rank:2,
      name: "Deadpool Animated Website",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      img: "https://i.pinimg.com/736x/c3/76/86/c3768686be0c6d96e940e95e83e399c7.jpg",
      stack: ["React", "Firebase", "Node.js"],
      source: "Haskfjl"
    },
    {
      rank:2,
      name: "Limca Animated Website",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      img: "",
      stack: ["React", "Firebase", "Node.js"],
      source: "Haskfjl"
    },
    {
      rank:2,
      name: "Code Conveter",
      disc: "A mobile fisrt social media web application",
      link: "https://github.com/Amanjeet-007/AI-coding",
      img: "",
      stack: ["React", "Gemini Api", "Node.js"],
      source: "Haskfjl"
    },
    {
      rank:2,
      name: "Background Remover",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      img: "",
      stack: ["React", "Firebase", "Node.js"],
      source: "Haskfjl"
    },
    {
      rank:2,
      name: "Authentication (Scrach)",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      img: "",
      stack: ["Express", "JWT", "Cookie"],
      source: "Haskfjl"
    },
     {
      rank:3,
      name: "Snake Game",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      img: "",
      stack: ["React", "Firebase", "Node.js"],
      source: "Haskfjl"
    },
    {
      rank:3,
      name: "Tic-Tac-Toe",
      disc: "A mobile fisrt social media web application",
      link: "http//:",
      img: "",
      stack: ["React", "Firebase", "Node.js"],
      source: "Haskfjl"
    },

  ]
export {ProjectList}

export default function Projects() {


//["All", "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "GraphQL", "D3.js", "Python", "Firebase"]

  return (
    <>
      <header className="w-[100%] h-min flex justify-center">
      </header>
      <main>
        <div className="All h-20 w-full flex items-center justify-around flex-nowrap overflow-scroll fixed top-[125px] z-50 ">
          {["All","Frontend","Backend","Full Stack"].map((el, i) => {
            return (
              <div className="tech py-1 px-7 rounded-4xl border-2 border-white text-white min-w-[100px] flex items-center justify-center mx-4 cursor-pointer " key={i}>
                {(i==0?`${el} ${ProjectList.length}`:el)}
                </div>
            )
          })}

        </div>

        <section className="boxes-container flex justify-around items-center w-full flex-wrap h-min ">
          {ProjectList.map((el, i) => {
            return (
              <div className="bg-cyan-950 p-4 card h-[450px] w-[350px] text-white rounded-2xl m-5 overflow-hidden cursor-pointer relative" key={i} onClick={(e) => toggleTimeline(e)}>
                {/* link */}
                <a href="https://github.com/Amanjeet-007/AI-coding">
                <div className="link absolute h-14 w-14 bg-blue-800 rounded-bl-2xl top-0 right-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24" fill="white"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                </div></a>
                <img src={el.img} className='h-58 w-full rounded-2xl' alt="" />
                <a href="https://github.com/Amanjeet-007/AI-coding" className='absolute top-[50%] left-[50%] translate-x-[-50%] w-40 flex items-center justify-center h-10 bg-amber-600 rounded-xl text-white font-bold'>{"<>"} Source</a>
                <p className='text-2xl font-bold mt-6 mb-2'>{el.name}</p>
                <p className='text-[17px]'>{el.disc}</p>
                <div className="flex bottom-0 absolute ">
                  {el.stack.map((el,i)=>{
                    return(
                      <p key={i} className=' bg-amber-700 font-bold m-4 mt-2 ml-0 pt-1 pb-1 pl-4 pr-4 border-1 rounded-2xl border-white'>{el}</p>
                    ) 
                  })}
                </div>
                
              </div>

            )
          })
          }
        </section>
      </main>
    </>
  );
}