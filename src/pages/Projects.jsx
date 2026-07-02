import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

gsap.registerPlugin(useGSAP);

const ProjectList = [
  {
    rank: 1,
    name: "E-Commerce Platform",
    disc: "A full-featured online store with a custom CMS ",
    link: "https://neoecommerce.vercel.app/",
    special: "Full stack",
    img: "https://i.postimg.cc/xThKsDVH/neo.webp",
    stack: ["React", "Node.js", "GraphQL"],
    source: "https://github.com/Amanjeet-007/Ecommerce",
    type:"Full-Stack"
  },
  // {
  //   rank: 1,
  //   name: "Data Visualization Daskboard",
  //   disc: "interactive harts and graphs for real time analitycs",
  //   link: "http//:",
  //   img: "https://img.freepik.com/free-vector/business-dashboard-element-set_23-2148359612.jpg?semt=ais_hybrid&w=740&q=80",
  //   stack: ["D3.js", "React", "Python"],
  //   source: "https://github.com/Amanjeet-007",
  //   type:"Full-Stack"
  // },
  {
    rank: 1,
    name: "Social Media App",
    disc: "A mobile fisrt social media web application",
    link: "http//:",
    img: "https://www.winklix.com/blog/wp-content/uploads/2017/10/instant-messaging-900x500.png",
    stack: ["React", "Firebase", "Node.js"],
    source: "https://github.com/Amanjeet-007",
    type:"Full-Stack"
  },
  {
    rank: 2,
    name: "Deadpool Motion Website",
    disc: "A mobile fisrt social media web application",
    link: "https://amanjeet-007.github.io/Deadpool/",
    special: "Frontend",
    img: "https://i.postimg.cc/J4pPQdpZ/Screenshot-(1663).png",
    stack: ["React", "Firebase", "Node.js"],
    source: "https://github.com/Amanjeet-007",
    type:"Frontend"
  },
  {
    rank: 2,
    name: "Limca Animated Website",
    disc: "A mobile fisrt social media web application",
    link: "http//:",
    img: "",
    stack: ["React", "Firebase", "Node.js"],
    source: "https://github.com/Amanjeet-007",
    type:"Frontend"
  },
  {
    rank: 2,
    name: "Code Conveter",
    disc: "A mobile fisrt social media web application",
    link: "https://github.com/Amanjeet-007/AI-coding",
    img: "https://i.postimg.cc/L6zBC42y/Screenshot-(1665).png",
    stack: ["React", "Gem-Api", "Node.js"],
    source: "https://github.com/Amanjeet-007/AI-coding",
    type:"Full-Stack"
  },
  {
    rank: 2,
    name: "Background Remover",
    disc: "A mobile fisrt social media web application",
    link: "http//:",
    img: "",
    stack: ["React", "Firebase", "Node.js"],
    source: "https://github.com/Amanjeet-007",
    type:"Full-Stack"
  },
  {
    rank: 2,
    name: "Authentication (Scrach)",
    disc: "A mobile fisrt social media web application",
    link: "http//:",
    img: "",
    stack: ["Express", "JWT", "Cookie"],
    source: "https://github.com/Amanjeet-007",
    type:"Backend"
  },
  {
    rank: 3,
    name: "Snake Game",
    disc: "A mobile fisrt social media web application",
    link: "https://amanjeet-007.github.io/Snake-Game/",
    img: "",
    stack: ["React", "Firebase", "Node.js"],
    source: "https://github.com/Amanjeet-007/Snake-Game",
    type:"Frontend"
  },
  {
    rank: 3,
    name: "Tic-Tac-Toe",
    disc: "A mobile fisrt social media web application",
    link: "http//:",
    img: "",
    stack: ["React", "Firebase", "Node.js"],
    source: "https://github.com/Amanjeet-007",
    type:"Frontend"
  },
];

export { ProjectList };

export default function Projects() {
  const [FilteredProjects, setFilteredProjects] = useState(ProjectList);
  // Track active filter state (Defaults to "All")
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  const toggleTimeline = (e) => {
    console.log("Card clicked", e);
  };

  const filters = [
    {
      name: "All",
      apply: () => {
        setActiveFilter("All");
        setFilteredProjects(ProjectList);
      },
    },
    {
      name: "Frontend",
      apply: () => {
        setActiveFilter("Frontend");
        const filtered = ProjectList.filter((el) => el.type === "Frontend");
        setFilteredProjects(filtered);
      },
    },
    {
      name: "Backend",
      apply: () => {
        setActiveFilter("Backend");
        const filtered = ProjectList.filter((el) => el.type === "Backend");
        setFilteredProjects(filtered);
      },
    },
    {
      name: "Full Stack",
      apply: () => {
        setActiveFilter("Full Stack");
        const filtered = ProjectList.filter((el) => el.type === "Full-Stack");
        setFilteredProjects(filtered);
      },
    },
  ];

  return (
    <>
      <main>
        <div className="All h-20 w-full flex items-center justify-around flex-nowrap overflow-scroll fixed top-[125px] z-50 ">
          {filters.map((el, i) => {
            // Check if the current button matches the active filter state
            const isActive = activeFilter === el.name;
            return (
              <div
                // Dynamic styling changes bg opacity and border based on active state
                className={`tech py-1 px-7 rounded-4xl border-2 text-white min-w-[120px] text-center mx-4 cursor-pointer transition-all duration-200 ${
                  isActive 
                    ? "bg-[#DA0037] border-[#DA0037]" 
                    : "bg-[#151021] border-white hover:bg-[#1f1832]"
                }`}
                key={i}
                onClick={el.apply}
              >
                {i == 0 ? `${el.name} ${ProjectList.length}` : el.name}
              </div>
            );
          })}
        </div>
        <section className="boxes-container flex justify-around items-center mt-26 w-full flex-wrap h-min ">
          {FilteredProjects.map((el, i) => {
            return (
              <motion.div
                className="p-4 card h-[400px] w-[350px] text-white rounded-2xl m-5 overflow-hidden cursor-pointer relative"
                whileHover={{ scale: 1.03 }}
                key={i}
                onClick={(e) => toggleTimeline(e)}
              >
                <a href={el.link} target="_black">
                  <div className="link absolute h-14 w-14 bg-blue-800 rounded-bl-2xl top-0 right-0 flex items-center justify-center z-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                    </svg>
                  </div>
                </a>
                <motion.div
                className="h-45 w-full rounded-2xl mt-4 img  "
                whileHover={{ scale: 0.9 }}
                style={{backgroundImage:`url(${el.img})`,backgroundOrigin:"center",backgroundPosition:"center"}}
                >

                </motion.div>
                {/* <motion.img
                  src={el.img}
                  whileHover={{ scale: 0.9 }}
                  className="h-45 w-full rounded-2xl mt-4"
                  alt=""
                /> */}
                <motion.a
                  href={el.source}
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-[44%] left-[50%] translate-x-[-50%] w-40 flex items-center justify-center h-10 bg-[#DA0037] rounded-xl text-white font-bold"
                  target="_black"
                >
                  {"<>"} Source
                </motion.a>
                <p className=" text-2xl font-bold mt-10 mb-2 text-[#ffffff] ">
                  {el.name}
                </p>
                <p className=" text-[17px] font-semibold text-[#dcdcdc]">
                  {el.disc}
                </p>
                <div className="flex bottom-0 absolute ">
                  {el.stack.map((stackItem, j) => {
                    return (
                      <p
                        key={j}
                        className=" bg-[#DA0037] font-bold m-4 mt-2 ml-0 pt-1 pb-1 pl-4 pr-4 border-1 rounded-2xl border-white"
                      >
                        {stackItem}
                      </p>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </section>
      </main>
    </>
  );
}